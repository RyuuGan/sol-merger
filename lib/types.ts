import { ExportsAnalyzerResult } from './exportsAnalyzer';

export enum ExportType {
  contract = 'contract',
  library = 'library',
  interface = 'interface',
  struct = 'struct',
  enum = 'enum',
  comment = 'comment',
  error = 'error',
  constant = 'constant',
  function = 'function',
}

export type ContractLikeExportType = Exclude<
  ExportType,
  ExportType.constant | ExportType.function
>;

export interface ExportPluginProcessor {
  name: string;
  processExport(
    e: Readonly<ExportsAnalyzerResult>,
  ): ExportsAnalyzerResult | null;
}

export type ExportPluginCtor<
  T extends ExportPluginProcessor = ExportPluginProcessor,
> = new () => T;

export interface ExportPluginModule {
  ExportPlugin: ExportPluginCtor;
}
