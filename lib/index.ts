import { Merger } from './merger';
import { FileAnalyzer } from './fileAnalyzer';

const merge = async (file: string) => {
  const merger = new Merger();
  return merger.processFile(file, true);
}

export {
  Merger,
  FileAnalyzer,
  merge
}
