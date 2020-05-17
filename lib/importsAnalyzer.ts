import parser from 'solidity-parser-antlr';
import { Utils } from './utils';
import { SolidityImportVisitor } from './antlr/visitors/importVisitor';
import { ImportVisitResult } from './antlr/visitors/types';

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

    const importDirectives: ImportVisitResult[] = [];
    const visitor = new SolidityImportVisitor(this.contents);
    visitor.visit((i) => {
      importDirectives.push(i);
    });

    if (!ast) {
      return [];
    }

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
  private analyzeImport(importVisitResult: ImportVisitResult): ImportsAnalyzerResult {
    return {
      file: importVisitResult.filename,
      globalRenameImport: importVisitResult.globalRename,
      importStatement: this.contents.substring(
        importVisitResult.start,
        importVisitResult.end + 1,
      ),
      namedImports: importVisitResult.namedImports,
    };
  }
}
