import { CharStreams, CommonTokenStream, Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ContractLikeExportType, ExportType } from '../../types';
import { SolidityLexer } from '../generated/SolidityLexer';
import { SolidityParserListener } from '../generated/SolidityParserListener';
import {
  ConstantVariableDeclarationContext,
  ContractDefinitionContext,
  EnumDefinitionContext,
  ErrorDefinitionContext,
  FunctionDefinitionContext,
  InheritanceSpecifierListContext,
  InterfaceDefinitionContext,
  LibraryDefinitionContext,
  SolidityParser,
  SourceUnitContext,
  StructDefinitionContext,
  UserDefinedValueTypeDefinitionContext,
  UsingDirectiveContext,
} from '../generated/SolidityParser';
import { ExportVisitResult, VisitCallback } from './types';

const HIDDEN_CHANNEL = 1;

export class SolidityExportVisitor {
  #inputContent: string;
  #antlrTree: SourceUnitContext;
  #comments: Token[] = [];
  constructor(inputContent: string) {
    this.#inputContent = inputContent;

    const chars = CharStreams.fromString(this.#inputContent);
    const lexer = new SolidityLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SolidityParser(tokens);
    this.#antlrTree = parser.sourceUnit();

    this.#comments = tokens
      .getRange(0, tokens.size)
      .filter((t) => t.channel === HIDDEN_CHANNEL);
  }

  visit(onVisit: VisitCallback<ExportVisitResult>) {
    const listener: SolidityParserListener = new ExportVisitor(
      (visitResult) => {
        this.onVisit(visitResult, onVisit);
      },
    );
    ParseTreeWalker.DEFAULT.walk(listener, this.#antlrTree);
    this.flushComments(onVisit);
  }

  private onVisit(
    visitResult: ExportVisitResult,
    onVisit: VisitCallback<ExportVisitResult>,
  ) {
    if (!this.#comments.length) {
      return onVisit(visitResult);
    }
    this.emitCommentsBefore(visitResult, onVisit);
    onVisit(visitResult);
  }

  private emitCommentsBefore(
    visitResult: ExportVisitResult,
    onVisit: VisitCallback<ExportVisitResult>,
  ) {
    while (
      this.#comments.length &&
      this.#comments[0].startIndex < visitResult.start
    ) {
      const comment = this.#comments.shift();
      if (!comment) {
        continue;
      }
      onVisit(this.buildComment(comment));
    }
    while (
      this.#comments.length &&
      this.#comments[0].stopIndex < visitResult.end
    ) {
      this.#comments.shift();
    }
  }

  private flushComments(onVisit: VisitCallback<ExportVisitResult>) {
    if (!this.#comments.length) {
      return;
    }

    this.#comments.forEach((comment) => onVisit(this.buildComment(comment)));
  }

  private buildComment(comment: Token): ExportVisitResult {
    return {
      abstract: false,
      body: {
        start: comment.startIndex,
        end: comment.stopIndex,
      },
      start: comment.startIndex,
      end: comment.stopIndex,
      is: null,
      name: `Comment#${comment.startIndex}`,
      type: ExportType.comment,
    };
  }
}

class ExportVisitor implements SolidityParserListener {
  #onVisit: VisitCallback<ExportVisitResult>;

  constructor(onVisit: VisitCallback<ExportVisitResult>) {
    this.#onVisit = onVisit;
  }

  enterContractDefinition(ctx: ContractDefinitionContext): void {
    if (!ctx.stop) {
      return;
    }
    if (!ctx.children) {
      return;
    }
    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const abstract = ctx.Abstract() !== undefined;
    const name = ctx.identifier();

    const inheritance = ctx.getRuleContexts(InheritanceSpecifierListContext);

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
      type: ExportType.contract,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: is,
      name: name.text,
    });
  }

  enterStructDefinition(ctx: StructDefinitionContext): void {
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
    if (!name?.stop) {
      return;
    }

    const bodyStart = name.stop.stopIndex;

    this.#onVisit({
      start,
      end,
      abstract: false,
      type: ExportType.struct,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }

  enterEnumDefinition(ctx: EnumDefinitionContext): void {
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
    const names = ctx.identifier();
    const name = names[0];
    if (!name?.stop) {
      return;
    }

    const bodyStart = name.stop.stopIndex;

    this.#onVisit({
      start,
      end,
      abstract: false,
      type: ExportType.enum,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }

  enterLibraryDefinition(ctx: LibraryDefinitionContext): void {
    if (!ctx.stop) {
      return;
    }
    if (!ctx.children) {
      return;
    }
    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const type = ctx.children[0].text as ContractLikeExportType;
    const name = ctx.identifier();

    const bodyStart = name.stop?.stopIndex;

    if (!bodyStart) {
      return;
    }

    this.#onVisit({
      start,
      end,
      abstract: false,
      type,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }

  enterInterfaceDefinition(ctx: InterfaceDefinitionContext): void {
    if (!ctx.stop) {
      return;
    }
    if (!ctx.children) {
      return;
    }
    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const name = ctx.identifier();

    const inheritance = ctx.getRuleContexts(InheritanceSpecifierListContext);

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
      abstract: false,
      type: ExportType.interface,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: is,
      name: name.text,
    });
  }

  enterErrorDefinition(ctx: ErrorDefinitionContext): void {
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
    if (!name?.stop) {
      return;
    }

    const bodyStart = name.stop.stopIndex;

    this.#onVisit({
      start,
      end,
      abstract: false,
      type: ExportType.error,
      body: {
        start: bodyStart + 1,
        end,
      },
      is: null,
      name: name.text,
    });
  }

  enterConstantVariableDeclaration(
    ctx: ConstantVariableDeclarationContext,
  ): void {
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
    const typeName = ctx.typeName();

    if (!name.stop) {
      return;
    }

    this.#onVisit({
      type: ExportType.constant,
      body: {
        start: name.stop.stopIndex + 1,
        end: ctx.stop.stopIndex,
      },
      start,
      end,
      name: name.text,
      typeName: typeName.text,
    });
  }

  enterFunctionDefinition(ctx: FunctionDefinitionContext): void {
    if (!(ctx.parent instanceof SourceUnitContext)) {
      return;
    }

    if (!ctx.stop) {
      return;
    }

    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const name = ctx.identifier();

    if (!name?.stop) {
      return;
    }

    this.#onVisit({
      type: ExportType.function,
      start,
      end,
      name: name.text,
    });
  }

  enterUserDefinedValueTypeDefinition(
    ctx: UserDefinedValueTypeDefinitionContext,
  ): void {
    if (!(ctx.parent instanceof SourceUnitContext)) {
      return;
    }

    if (!ctx.stop) {
      return;
    }

    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const name = ctx.identifier();

    if (!name?.stop) {
      return;
    }

    this.#onVisit({
      type: ExportType.userDefinedValueType,
      start,
      end,
      name: name.text,
    });
  }

  enterUsingDirective(ctx: UsingDirectiveContext): void {
    if (!(ctx.parent instanceof SourceUnitContext)) {
      return;
    }

    if (!ctx.stop) {
      return;
    }

    const start = ctx.start.startIndex;
    const end = ctx.stop.stopIndex;
    const names = ctx.identifierPath();

    const name =
      names.map((n) => n.text).join(',') + `$${ExportType.usingDirective}`;

    this.#onVisit({
      type: ExportType.usingDirective,
      start,
      end,
      name,
    });
  }
}
