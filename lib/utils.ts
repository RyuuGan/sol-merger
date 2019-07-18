import { FileAnalyzerImportsResult } from './fileAnalyzer';

export class Utils {
  static isRelative(file: string) {
    return file.startsWith('.');
  }

  static isAllImport(parentImport?: FileAnalyzerImportsResult) {
    return (
      !parentImport ||
      (parentImport !== null &&
        parentImport.globalRenameImport === null &&
        parentImport.namedImports === null)
    );
  }

  static isRenameGlobalImport(parentImport?: FileAnalyzerImportsResult) {
    return parentImport && parentImport.globalRenameImport !== null;
  }

}
