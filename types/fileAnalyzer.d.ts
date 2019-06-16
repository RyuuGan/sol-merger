declare class FileAnalyzer {
  constructor(filename: string) {}

  analyze(): Promise<FileAnalyzerResult>;

  analyzeImports(contents: string): FileAnalyzerImportsResult[];
  analyzeImport(importStatement: string): FileAnalyzerImportsResult;

  analyzeExports(contents: string): FileAnalyzerExportsResult[];
  findBodyEnd(contents: string, start: number): string;
}

interface FileAnalyzerResult {
  imports: FileAnalyzerImportsResult[];
  exports: FileAnalyzerExportsResult[];
}

interface FileAnalyzerImportsResult {
  file: string;
  globalRenameImport: string | null;
  namedImports: Array<{
    name: string;
    as: string;
  }> | null;
}

interface FileAnalyzerExportsResult {
  type: 'contract' | 'library' | 'interface';
  name: string;
  is: string;
  body: string;
}
