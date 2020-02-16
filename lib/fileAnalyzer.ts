import stripComments from 'strip-json-comments';
import { ExportsAnalyzer, ExportsAnalyzerResult } from './exportsAnalyzer';
import { RegistredImport } from './importRegistry';
import { ImportsAnalyzer, ImportsAnalyzerResult } from './importsAnalyzer';
import { ContractResolver } from './resolvers/resolver';

export class FileAnalyzer {
  filename: string;
  removeComments: boolean;

  private contractResolver: ContractResolver;

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
  constructor(
    contractResolver: ContractResolver,
    filename: string,
    removeComments: boolean = true,
  ) {
    this.filename = filename;
    this.removeComments = removeComments;

    this.contractResolver = contractResolver;
  }

  /**
   * Returns imports and exports of the processing file
   */
  async analyze(): Promise<FileAnalyzerResult> {
    let contents = await this.contractResolver.getContent(this.filename);
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
