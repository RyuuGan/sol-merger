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
};
