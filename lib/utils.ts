import parser, { ASTNode } from 'solidity-parser-antlr';

export class Utils {
  static isRelative(file: string) {
    return file.startsWith('.');
  }

  static getAstNode(contents: string): ASTNode | null {
    try {
      return parser.parse(contents, { loc: true, range: true });
    } catch {
      return null;
    }
  }
}
