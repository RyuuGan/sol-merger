import Debug from 'debug';
import fs from 'fs-extra';
import parser from 'solidity-parser-antlr';
import stripComments from 'strip-json-comments';
import { RegistredImport } from './importRegistry';
import { ImportsAnalyzerResult, ImportsAnalyzer } from './importsAnalyzer';

const error = Debug('sol-merger:error');

export class FileAnalyzer {
  filename: string;
  removeComments: boolean;
  /**
   * Builds the function body depending on the export
   */
  static buildExportBody(
    analyzedFile: FileAnalyzerResult,
    e: FileAnalyzerExportsResult,
    newName: string,
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

    const exports = this.analyzeExports(contents);
    return {
      filename: this.filename,
      contents,
      imports,
      exports,
    };
  }

  /**
   * Analyzes all the exports of the file (Contract, Interface, Library)
   *
   * Single export statement to process. Basicly it analizes next things:
   *
   * 1. Get the type of the export
   * 2. Get the body of the export
   * 3. Get inheritance of the specifier
   *
   */
  analyzeExports(contents: string): FileAnalyzerExportsResult[] {
    try {
      const ast = parser.parse(contents, { loc: true, range: true });
      const results: FileAnalyzerExportsResult[] = [];
      const exportRegex = /(contract|library|interface)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*([\s\S]*?)\{/;
      parser.visit(ast, {
        ContractDefinition: (node) => {
          const contract = contents.substring(node.range[0], node.range[1] + 1);
          const group = exportRegex.exec(contract);
          const [match, _, __, is] = group;
          results.push({
            is: is,
            name: node.name,
            type: node.kind as any,
            body: contract.substring(match.length - 1),
          });
        },
      });
      return results;
    } catch (e) {
      if (e instanceof (parser as any).ParserError) {
        error(e.errors);
      }
      return [];
    }
  }
}

export interface FileAnalyzerResult {
  filename: string;
  contents: string;
  imports: ImportsAnalyzerResult[];
  exports: FileAnalyzerExportsResult[];
}

export interface FileAnalyzerExportsResult {
  type: 'contract' | 'library' | 'interface';
  name: string;
  is: string;
  body: string;
}
