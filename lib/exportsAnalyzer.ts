import Debug from 'debug';
import parser from 'solidity-parser-antlr';

const error = Debug('sol-merger:error');

export interface ExportsAnalyzerResult {
  type: 'contract' | 'library' | 'interface';
  name: string;
  is: string;
  body: string;
}

export class ExportsAnalyzer {
  constructor(private contents: string) {}

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
  analyzeExports(): ExportsAnalyzerResult[] {
    try {
      const ast = parser.parse(this.contents, { loc: true, range: true });
      const results: ExportsAnalyzerResult[] = [];
      const exportRegex = /(contract|library|interface)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*([\s\S]*?)\{/;
      parser.visit(ast, {
        ContractDefinition: (node) => {
          const contract = this.contents.substring(
            node.range[0],
            node.range[1] + 1,
          );
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
