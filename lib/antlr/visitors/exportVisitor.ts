import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { SolidityLexer } from '../generated/SolidityLexer';
import { SolidityListener } from '../generated/SolidityListener';
import {
  ContractDefinitionContext,
  EnumDefinitionContext,
  InheritanceSpecifierContext,
  SolidityParser,
  SourceUnitContext,
  StructDefinitionContext,
} from '../generated/SolidityParser';
import { ExportType, ExportVisitResult, VisitCallback } from './types';

export class SolidityExportVisitor {
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

  visit(onVisit: VisitCallback<ExportVisitResult>) {
    const listener: SolidityListener = new ExportVisitor(onVisit);
    ParseTreeWalker.DEFAULT.walk(listener, this.#antlrTree);
  }
}

class ExportVisitor implements SolidityListener {
  #onVisit: VisitCallback<ExportVisitResult>;

  constructor(onVisit: VisitCallback<ExportVisitResult>) {
    this.#onVisit = onVisit;
  }

  enterContractDefinition(ctx: ContractDefinitionContext) {
    if (!ctx.stop) {
      return;
    }
    if (!ctx.children) {
      return;
    }
    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const abstract = ctx.children[0].text === 'abstract';
    const type = abstract
      ? (ctx.children[1].text as ExportType)
      : (ctx.children[0].text as ExportType);
    const name = ctx.identifier();

    const inheritance = ctx.getRuleContexts(InheritanceSpecifierContext);

    const bodyStart = inheritance.length
      ? inheritance[inheritance.length - 1].stop?.stopIndex
      : name.stop?.stopIndex;

    const isStart = inheritance.length ? name.stop?.stopIndex : null;
    const isEnd = inheritance.length
      ? inheritance[inheritance.length - 1].stop?.stopIndex
      : null;

    const is = isStart && isEnd ? { start: isStart + 1, end: isEnd + 1 } : null;

    if (!bodyStart) {
      return;
    }

    this.#onVisit({
      start,
      end,
      abstract,
      type,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: is,
      name: name.text,
    });
  }

  enterStructDefinition(ctx: StructDefinitionContext) {
    if (!(ctx.parent instanceof SourceUnitContext)) {
      return;
    }
    if (!ctx.stop) {
      return;
    }

    if (!ctx.children) {
      return;
    }

    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const name = ctx.identifier();
    if (!name.stop) {
      return;
    }

    const bodyStart = name.stop.stopIndex;

    this.#onVisit({
      start,
      end,
      abstract: false,
      type: 'struct',
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }

  enterEnumDefinition(ctx: EnumDefinitionContext) {
    if (!(ctx.parent instanceof SourceUnitContext)) {
      return;
    }

    if (!ctx.stop) {
      return;
    }

    if (!ctx.children) {
      return;
    }

    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const name = ctx.identifier();
    if (!name.stop) {
      return;
    }

    const bodyStart = name.stop.stopIndex;

    this.#onVisit({
      start,
      end,
      abstract: false,
      type: 'enum',
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }
}
