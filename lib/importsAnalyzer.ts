import parser from 'solidity-parser-antlr';
import { Utils } from './utils';

export interface ImportsAnalyzerResult {
  importStatement: string;
  file: string;
  globalRenameImport: string | null;
  namedImports: ImportsAnalyzerNamedImportResult[] | null;
}

export interface ImportsAnalyzerNamedImportResult {
  name: string;
  as: string | null;
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

  static isRenameGlobalImport(
    parentImport?: ImportsAnalyzerResult,
  ): boolean | undefined {
    return parentImport && parentImport.globalRenameImport !== null;
  }

  constructor(private contents: string) {}

  /**
   * Analyzes all the imports of the file
   */
  analyzeImports(): ImportsAnalyzerResult[] {
    const imports: ImportsAnalyzerResult[] = [];
    const ast = Utils.getAstNode(this.contents);

    if (!ast) {
      return [];
    }

    const importDirectives: string[] = [];
    parser.visit(ast, {
      ImportDirective: (node) => {
        if (!node || !node.range) {
          return;
        }
        const importDirective = this.contents.substring(
          node.range[0],
          node.range[1] + 1,
        );

        importDirectives.push(importDirective);
      },
    });

    for (const importDirective of importDirectives) {
      const analyzedImport = this.analyzeImport(importDirective);
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
