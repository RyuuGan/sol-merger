import { ImportsAnalyzerResult } from './importsAnalyzer';

export class Utils {
  static isRelative(file: string) {
    return file.startsWith('.');
  }
}
