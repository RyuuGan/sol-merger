import fs from 'fs-extra';
import stripComments from 'strip-json-comments';
import { RegistredImport } from './merger';

export class FileAnalyzer {
  filename: string;
  /**
   * Builds the function body depending on the export
   */
  static buildExportBody(
    analyzedFile: FileAnalyzerResult,
    e: FileAnalyzerExportsResult,
    newName: string,
    globalRenames: RegistredImport[],
  ): string {
    let is = e.is;
    if (is) {
      globalRenames.forEach((i) => {
        is = is.replace(
          `${i.globalRename}.${i.name}`,
          `${i.globalRename}$${i.name}`,
        );
      });
      analyzedFile.imports.forEach((i) => {
        if (i.namedImports) {
          i.namedImports.forEach((ni) => {
            if (ni.as) {
              is = is.replace(ni.name, ni.as);
            }
          });
        }
      });
    }
    return `${e.type} ${newName || e.name} ${is}${e.body}`;
  }
  /**
   * Filename to read to get contract data
   */
  constructor(filename: string) {
    this.filename = filename;
  }

  /**
   * Returns imports and exports of the processing file
   */
  async analyze(): Promise<FileAnalyzerResult> {
    await fs.stat(this.filename);
    let contents = await fs.readFile(this.filename, { encoding: 'utf-8' });
    contents = stripComments(contents, { whitespace: false });
    const imports = this.analyzeImports(contents);
    const exports = this.analyzeExports(contents);
    return {
      filename: this.filename,
      contents,
      imports,
      exports,
    };
  }

  /**
   * Analyzes all the imports of the file
   */
  analyzeImports(contents: string): FileAnalyzerImportsResult[] {
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
   */
  analyzeImport(importStatement: string): FileAnalyzerImportsResult {
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
   */
  analyzeExports(contents: string): FileAnalyzerExportsResult[] {
    const exportRegex = /(contract|library|interface)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*([\s\S]*?)\{/g;
    const isRegex = /^is\s*[a-zA-Z_$][a-zA-Z_$0-9]*(.[a-zA-Z_$][a-zA-Z_$0-9]*)?(\([\s\S]*?\))?(,\s*?[a-zA-Z_$][a-zA-Z_$0-9]*(.[a-zA-Z_$][a-zA-Z_$0-9]*)?(\([\s\S]*?\))?)*\s*$/;
    const results = [];
    let group: RegExpExecArray;
    while ((group = exportRegex.exec(contents))) {
      const [, type, name, is] = group;
      // Checking that `is` clause is correct
      if (is.trim() && !isRegex.test(is.trim())) {
        continue;
      }
      const body = this.findBodyEnd(
        contents,
        group.index + group[0].length - 1,
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
   * @param contents file contents
   * @param start start of the body, start must be pointing to "{"
   * @returns body of the export
   */
  findBodyEnd(contents: string, start: number): string {
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

      if (contents[idx] === "'") {
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
        'Export is not correct. Has more opening brackets then closing.',
      );
    }
    return contents.substring(start, idx);
  }
}

export interface FileAnalyzerResult {
  filename: string;
  contents: string;
  imports: FileAnalyzerImportsResult[];
  exports: FileAnalyzerExportsResult[];
}

export interface FileAnalyzerImportsResult {
  file: string;
  globalRenameImport: string | null;
  namedImports: FileAnalyzerNamedImportResult[] | null;
}

export interface FileAnalyzerNamedImportResult {
  name: string;
  as: string;
}

export interface FileAnalyzerExportsResult {
  type: 'contract' | 'library' | 'interface';
  name: string;
  is: string;
  body: string;
}
