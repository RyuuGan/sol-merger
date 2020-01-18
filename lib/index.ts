import { FileAnalyzer } from './fileAnalyzer';
import { Merger, SolMergerOptions } from './merger';

const merge = async (file: string, options: SolMergerOptions = {}) => {
  const merger = new Merger(options);
  return merger.processFile(file, true);
};

export { Merger, FileAnalyzer, merge, SolMergerOptions };
