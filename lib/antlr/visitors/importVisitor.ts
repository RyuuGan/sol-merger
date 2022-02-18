import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SolidityLexer } from '../generated/SolidityLexer';
import { SolidityParserListener } from '../generated/SolidityParserListener';
import {
  IdentifierContext,
  ImportAliasesContext,
  ImportDirectiveContext,
  SolidityParser,
  SourceUnitContext,
  SymbolAliasesContext,
} from '../generated/SolidityParser';
import {
  ImportVisitResult,
  ImportVisitNamedImport,
  VisitCallback,
} from './types';

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
    const listener: SolidityParserListener = new ImportDefinitionVisitor(
      onVisit,
    );
    ParseTreeWalker.DEFAULT.walk(listener, this.#antlrTree);
  }
}

class ImportDefinitionVisitor implements SolidityParserListener {
  #onVisit: VisitCallback<ImportVisitResult>;

  constructor(onVisit: VisitCallback<ImportVisitResult>) {
    this.#onVisit = onVisit;
  }
  enterImportDirective(ctx: ImportDirectiveContext) {
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

  private getFilename(ctx: ImportDirectiveContext): string {
    const filename = ctx.path()?.text;
    if (!filename) {
      throw new Error('Unable to fid path of the import');
    }
    return filename.substring(1).substring(0, filename.length - 2);
  }

  private getGlobalRename(ctx: ImportDirectiveContext): string | null {
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
    ctx: ImportDirectiveContext,
  ): ImportVisitNamedImport[] | null {
    const importAliases = ctx.symbolAliases()?.importAliases();

    if (!importAliases) {
      return null;
    }

    const result: ImportVisitNamedImport[] = [];
    importAliases.forEach((ia) => {
      const [i, rename] = ia.identifier();
      result.push({
        name: i.text,
        as: rename?.text ?? null,
      });
    });
    return result;
  }
}
