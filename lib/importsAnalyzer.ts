export interface ImportsAnalyzerResult {
  importStatement: string;
  file: string;
  globalRenameImport: string | null;
  namedImports: ImportsAnalyzerNamedImportResult[] | null;
}

export interface ImportsAnalyzerNamedImportResult {
  name: string;
  as: string;
}

export class ImportsAnalyzer {
  static isAllImport(parentImport?: ImportsAnalyzerResult) {
    return (
      !parentImport ||
      (parentImport !== null &&
        parentImport.globalRenameImport === null &&
        parentImport.namedImports === null)
    );
  }

  static isRenameGlobalImport(parentImport?: ImportsAnalyzerResult) {
    return parentImport && parentImport.globalRenameImport !== null;
  }

  constructor(private contents: string) {}

  /**
   * Analyzes all the imports of the file
   */
  analyzeImports(): ImportsAnalyzerResult[] {
    const imports = [];
    const importRegex = /import .+?;/g;
    let group: RegExpExecArray;
    while ((group = importRegex.exec(this.contents))) {
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
  analyzeImport(importStatement: string): ImportsAnalyzerResult {
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
      importStatement,
      globalRenameImport,
      namedImports,
    };
  }
}
