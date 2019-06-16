class FileAnalyzer {
  /**
   * Filename to read to get contract data
   * @param {string} filename
   */
  constructor(filename) {
    this.filename = filename;
  }

  /**
   * Returns imports and exports of the processing file
   */
  async analyze() {
    await fs.stat(file);
    let contents = await fs.readFile(file, { encoding: 'utf-8' });
    const imports = this.analyzeImports(contents);
    const exports = this.analyzeExports(contents);
    return {
      imports,
      exports,
    };
  }

  /**
   * Analyzes all the imports of the file
   * @param {string} contents
   */
  analyzeImports(contents) {
    const imports = [];
    const importRegex = /import .+?;/g;
    let group;
    while ((group = importRegex.exec(contents))) {
      const importStatement = group[0];
      const analyzedImport = this.analyzeImport(importStatement);
      imports.push(analyzedImport);
    }
    return imports;
  }

  /**
   * Single import statement to process. Basicly it analizes next things:
   *
   * 1. Rename of the global import if any
   * 2. Named imports if any
   * 3. Extract filename from import
   *
   * @param {string} importStatement
   */
  analyzeImport(importStatement) {
    const fileRegex = /['"](.+?)['"]/;
    const group = fileRegex.exec(importStatement);
    if (!group) {
      throw new Error('Unknown import statement');
    }
    const file = group[1];
    const globalRenameRegex = /.+\s+as\s+([a-zA-Z_$][a-zA-Z_$0-9]*);$|.+\*\s+as\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s+from.+;$/;
    const renameGroup = globalRenameRegex.exec(importStatement);
    const globalRenameImport =
      renameGroup && (renameGroup[1] || renameGroup[2]);

    const namedImportsRegex = /\{(.+)\}/;
    const namedImportsGroup = namedImportsRegex.exec(importStatement);

    const namedImports =
      namedImportsGroup &&
      namedImportsGroup[1].split(',').map((namedImport) => {
        if (namedImport.indexOf('as') !== -1) {
          const [name, as] = namedImport.trim().split(/\s+as\s+/);
          return {
            name,
            as,
          };
        }
        return {
          name: namedImport.trim(),
          as: null,
        };
      });

    return {
      file,
      globalRenameImport,
      namedImports,
    };
  }

  /**
   * Analyzes all the exports of the file (Contract, Interface, Library)
   *
   * Single export statement to process. Basicly it analizes next things:
   *
   * 1. Get the type of the export
   * 2. Get the body of the export
   * 3. Get inheritance of the specifier
   *
   * @param {string} contents
   */
  analyzeExports(contents) {
    const exportRegex = /(contract|library|interface)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*([\s\S]*?)\{/g;
    const results = [];
    let group;
    while ((group = exportRegex.exec(contents))) {
      const [, type, name, is] = group;
      const body = this.findBodyEnd(
        contents,
        group.index + group[0].length - 1
      );
      results.push({
        type,
        name,
        is,
        body,
      });
    }
    return results;
  }

  /**
   *
   * @param {string} contents file contents
   * @param {number} start start of the body, start must be pointing to "{"
   * @returns {string} body
   */
  findBodyEnd(contents, start) {
    let deep = 1;
    let idx = start + 1;
    let inString = false;
    let isSingleQuotedString = false;
    while (deep !== 0 && idx < contents.length) {
      if (contents[idx] === '}' && !inString) {
        deep -= 1;
      }
      if (contents[idx] === '{' && !inString) {
        deep += 1;
      }

      if (contents[idx] === '"') {
        if (
          (inString && contents[idx - 1] !== '\\' && !isSingleQuotedString) ||
          !inString
        ) {
          isSingleQuotedString = false;
          inString = !inString;
        }
      }

      if (contents[idx] === '\'') {
        if (
          (inString && contents[idx - 1] !== '\\' && isSingleQuotedString) ||
          !inString
        ) {
          isSingleQuotedString = true;
          inString = !inString;
        }
      }

      idx += 1;
    }
    if (deep !== 0) {
      throw new Error(
        'Export is not correct. Has more opening brackets then closing.'
      );
    }
    return contents.substring(start, idx);
  }
}

module.exports = FileAnalyzer;
