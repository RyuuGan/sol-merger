import { SolidityExportVisitor } from './antlr/visitors/exportVisitor';
import { SolidityImportVisitor } from './antlr/visitors/importVisitor';
import { ExportsAnalyzer, ExportsAnalyzerResult } from './exportsAnalyzer';
import { FileAnalyzer } from './fileAnalyzer';
import {
  ImportsAnalyzer,
  ImportsAnalyzerNamedImportResult,
  ImportsAnalyzerResult,
} from './importsAnalyzer';
import { Merger, SolMergerOptions } from './merger';

const merge = async (file: string, options: SolMergerOptions = {}) => {
  const merger = new Merger(options);
  return merger.processFile(file, true);
};

export * from './antlr/visitors/types';
export {
  Merger,
  FileAnalyzer,
  merge,
  SolMergerOptions,
  ExportsAnalyzer,
  ExportsAnalyzerResult,
  ImportsAnalyzer,
  ImportsAnalyzerResult,
  ImportsAnalyzerNamedImportResult,
  SolidityExportVisitor,
  SolidityImportVisitor,
};
