import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SolidityLexer } from '../generated/SolidityLexer';
import { SolidityListener } from '../generated/SolidityListener';
import {
  IdentifierContext,
  ImportDeclarationContext,
  SolidityParser,
  SourceUnitContext,
} from '../generated/SolidityParser';
import { ImportVisitResult, ImportVisitNamedImport, VisitCallback } from './types';

export class SolidityImportVisitor {
  #inputContent: string;
  #antlrTree: SourceUnitContext;
  constructor(inputContent: string) {
    this.#inputContent = inputContent;

    const chars = CharStreams.fromString(this.#inputContent);
    const lexer = new SolidityLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SolidityParser(tokens);
    this.#antlrTree = parser.sourceUnit();
  }

  visit(onVisit: VisitCallback<ImportVisitResult>) {
    const listener: SolidityListener = new ImportDefinitionVisitor(onVisit);
    ParseTreeWalker.DEFAULT.walk(listener, this.#antlrTree);
  }
}

class ImportDefinitionVisitor implements SolidityListener {
  #onVisit: VisitCallback<ImportVisitResult>;

  constructor(onVisit: VisitCallback<ImportVisitResult>) {
    this.#onVisit = onVisit;
  }
  enterImportDirective(ctx: ImportDeclarationContext) {
    if (!ctx.children) {
      return;
    }
    if (!ctx._stop) {
      return;
    }

    const filename = this.getFilename(ctx);
    const globalRename = this.getGlobalRename(ctx);
    const namedImports = this.getNamedImports(ctx);

    this.#onVisit({
      start: ctx._start.startIndex,
      end: ctx._stop.stopIndex,
      filename,
      globalRename,
      namedImports,
    });
  }

  private getFilename(ctx: ImportDeclarationContext): string {
    const filename = ctx.getToken(SolidityParser.StringLiteralFragment, 0);
    return filename.text.substring(1).substring(0, filename.text.length - 2);
  }

  private getGlobalRename(ctx: ImportDeclarationContext): string | null {
    if (!ctx.children?.length) {
      return null;
    }
    const last = ctx.children[ctx.children.length - 2];
    if (last && last instanceof IdentifierContext) {
      return last.text;
    }
    const second = ctx.children[1];
    const forth = ctx.children[3];

    if (second.text === '*' && forth && forth instanceof IdentifierContext) {
      return forth.text;
    }
    return null;
  }

  private getNamedImports(
    ctx: ImportDeclarationContext,
  ): ImportVisitNamedImport[] | null {
    const importDeclarations = ctx.getRuleContexts(ImportDeclarationContext);

    if (!importDeclarations.length) {
      return null;
    }
    const result: ImportVisitNamedImport[] = [];
    importDeclarations.forEach((importDeclaration) => {
      if (!importDeclaration.children) {
        return;
      }
      result.push({
        name: importDeclaration.children[0].text,
        as: importDeclaration.children[2]?.text || null,
      });
    });

    return result;
  }
}
