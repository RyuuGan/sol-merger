import fs from 'fs-extra';
import stripComments from 'strip-json-comments';
import { ExportsAnalyzer, ExportsAnalyzerResult } from './exportsAnalyzer';
import { RegistredImport } from './importRegistry';
import { ImportsAnalyzerResult, ImportsAnalyzer } from './importsAnalyzer';

export class FileAnalyzer {
  filename: string;
  removeComments: boolean;
  /**
   * Builds the function body depending on the export
   */
  static buildExportBody(
    analyzedFile: FileAnalyzerResult,
    e: ExportsAnalyzerResult,
    newName: string | null,
    globalRenames: RegistredImport[],
  ): string {
    let is = e.is;
    if (is) {
      globalRenames.forEach((i) => {
        is = is.replace(
          `${i.globalRename}.${i.name}`,
          `${i.globalRename}$${i.name}`,
        );
      });
      analyzedFile.imports.forEach((i) => {
        if (i.namedImports) {
          i.namedImports.forEach((ni) => {
            if (ni.as) {
              is = is.replace(ni.name, ni.as);
            }
          });
        }
      });
    }
    return `${e.type} ${newName || e.name} ${is}${e.body}`;
  }
  /**
   * Filename to read to get contract data
   */
  constructor(filename: string, removeComments: boolean = true) {
    this.filename = filename;
    this.removeComments = removeComments;
  }

  /**
   * Returns imports and exports of the processing file
   */
  async analyze(): Promise<FileAnalyzerResult> {
    await fs.stat(this.filename);
    let contents = await fs.readFile(this.filename, { encoding: 'utf-8' });
    if (this.removeComments) {
      contents = stripComments(contents, { whitespace: false });
    }
    const importsAnalyzer = new ImportsAnalyzer(contents);
    const imports = importsAnalyzer.analyzeImports();

    const exportsAnalyzer = new ExportsAnalyzer(contents);
    const exports = exportsAnalyzer.analyzeExports();
    return {
      filename: this.filename,
      contents,
      imports,
      exports,
    };
  }
}

export interface FileAnalyzerResult {
  filename: string;
  contents: string;
  imports: ImportsAnalyzerResult[];
  exports: ExportsAnalyzerResult[];
}
