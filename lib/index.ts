import { FileAnalyzer } from './fileAnalyzer';
import { Merger, SolMergerOptions } from './merger';
import {
  ImportsAnalyzer,
  ImportsAnalyzerResult,
  ImportsAnalyzerNamedImportResult,
} from './importsAnalyzer';

import { ExportsAnalyzer, ExportsAnalyzerResult } from './exportsAnalyzer';

const merge = async (file: string, options: SolMergerOptions = {}) => {
  const merger = new Merger(options);
  return merger.processFile(file, true);
};

export {
  Merger,
  FileAnalyzer,
  merge,
  SolMergerOptions,
  ImportsAnalyzer,
  ImportsAnalyzerResult,
  ImportsAnalyzerNamedImportResult,
};
