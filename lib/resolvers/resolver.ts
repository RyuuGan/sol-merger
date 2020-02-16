import { FileAnalyzerResult } from '../fileAnalyzer';
import { ImportsAnalyzerResult } from '../importsAnalyzer';

export interface ContractResolver {
  init(): Promise<void>;

  getContent(path: string): Promise<string>;

  getPath(
    analyzedFile: FileAnalyzerResult,
    analyzedImport: ImportsAnalyzerResult,
  ): string;
}

export type ContractResolverCtor = new () => ContractResolver;
