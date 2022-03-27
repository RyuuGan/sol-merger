// Generated from SolidityParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IndexAccessContext } from "./SolidityParser";
import { IndexRangeAccessContext } from "./SolidityParser";
import { MemberAccessContext } from "./SolidityParser";
import { FunctionCallOptionsContext } from "./SolidityParser";
import { FunctionCallContext } from "./SolidityParser";
import { PayableConversionContext } from "./SolidityParser";
import { MetaTypeContext } from "./SolidityParser";
import { UnaryPrefixOperationContext } from "./SolidityParser";
import { UnarySuffixOperationContext } from "./SolidityParser";
import { ExpOperationContext } from "./SolidityParser";
import { MulDivModOperationContext } from "./SolidityParser";
import { AddSubOperationContext } from "./SolidityParser";
import { ShiftOperationContext } from "./SolidityParser";
import { BitAndOperationContext } from "./SolidityParser";
import { BitXorOperationContext } from "./SolidityParser";
import { BitOrOperationContext } from "./SolidityParser";
import { OrderComparisonContext } from "./SolidityParser";
import { EqualityComparisonContext } from "./SolidityParser";
import { AndOperationContext } from "./SolidityParser";
import { OrOperationContext } from "./SolidityParser";
import { ConditionalContext } from "./SolidityParser";
import { AssignmentContext } from "./SolidityParser";
import { NewExpressionContext } from "./SolidityParser";
import { TupleContext } from "./SolidityParser";
import { InlineArrayContext } from "./SolidityParser";
import { PrimaryExpressionContext } from "./SolidityParser";
import { SourceUnitContext } from "./SolidityParser";
import { PragmaDirectiveContext } from "./SolidityParser";
import { ImportDirectiveContext } from "./SolidityParser";
import { ImportAliasesContext } from "./SolidityParser";
import { PathContext } from "./SolidityParser";
import { SymbolAliasesContext } from "./SolidityParser";
import { ContractDefinitionContext } from "./SolidityParser";
import { InterfaceDefinitionContext } from "./SolidityParser";
import { LibraryDefinitionContext } from "./SolidityParser";
import { InheritanceSpecifierListContext } from "./SolidityParser";
import { InheritanceSpecifierContext } from "./SolidityParser";
import { ContractBodyElementContext } from "./SolidityParser";
import { NamedArgumentContext } from "./SolidityParser";
import { CallArgumentListContext } from "./SolidityParser";
import { IdentifierPathContext } from "./SolidityParser";
import { ModifierInvocationContext } from "./SolidityParser";
import { VisibilityContext } from "./SolidityParser";
import { ParameterListContext } from "./SolidityParser";
import { ParameterDeclarationContext } from "./SolidityParser";
import { ConstructorDefinitionContext } from "./SolidityParser";
import { StateMutabilityContext } from "./SolidityParser";
import { OverrideSpecifierContext } from "./SolidityParser";
import { FunctionDefinitionContext } from "./SolidityParser";
import { ModifierDefinitionContext } from "./SolidityParser";
import { FallbackFunctionDefinitionContext } from "./SolidityParser";
import { ReceiveFunctionDefinitionContext } from "./SolidityParser";
import { StructDefinitionContext } from "./SolidityParser";
import { StructMemberContext } from "./SolidityParser";
import { EnumDefinitionContext } from "./SolidityParser";
import { UserDefinedValueTypeDefinitionContext } from "./SolidityParser";
import { StateVariableDeclarationContext } from "./SolidityParser";
import { ConstantVariableDeclarationContext } from "./SolidityParser";
import { EventParameterContext } from "./SolidityParser";
import { EventDefinitionContext } from "./SolidityParser";
import { ErrorParameterContext } from "./SolidityParser";
import { ErrorDefinitionContext } from "./SolidityParser";
import { UsingDirectiveContext } from "./SolidityParser";
import { TypeNameContext } from "./SolidityParser";
import { ElementaryTypeNameContext } from "./SolidityParser";
import { FunctionTypeNameContext } from "./SolidityParser";
import { VariableDeclarationContext } from "./SolidityParser";
import { DataLocationContext } from "./SolidityParser";
import { ExpressionContext } from "./SolidityParser";
import { AssignOpContext } from "./SolidityParser";
import { TupleExpressionContext } from "./SolidityParser";
import { InlineArrayExpressionContext } from "./SolidityParser";
import { IdentifierContext } from "./SolidityParser";
import { LiteralContext } from "./SolidityParser";
import { BooleanLiteralContext } from "./SolidityParser";
import { StringLiteralContext } from "./SolidityParser";
import { HexStringLiteralContext } from "./SolidityParser";
import { UnicodeStringLiteralContext } from "./SolidityParser";
import { NumberLiteralContext } from "./SolidityParser";
import { BlockContext } from "./SolidityParser";
import { UncheckedBlockContext } from "./SolidityParser";
import { StatementContext } from "./SolidityParser";
import { SimpleStatementContext } from "./SolidityParser";
import { IfStatementContext } from "./SolidityParser";
import { ForStatementContext } from "./SolidityParser";
import { WhileStatementContext } from "./SolidityParser";
import { DoWhileStatementContext } from "./SolidityParser";
import { ContinueStatementContext } from "./SolidityParser";
import { BreakStatementContext } from "./SolidityParser";
import { TryStatementContext } from "./SolidityParser";
import { CatchClauseContext } from "./SolidityParser";
import { ReturnStatementContext } from "./SolidityParser";
import { EmitStatementContext } from "./SolidityParser";
import { RevertStatementContext } from "./SolidityParser";
import { AssemblyStatementContext } from "./SolidityParser";
import { AssemblyFlagsContext } from "./SolidityParser";
import { VariableDeclarationListContext } from "./SolidityParser";
import { VariableDeclarationTupleContext } from "./SolidityParser";
import { VariableDeclarationStatementContext } from "./SolidityParser";
import { ExpressionStatementContext } from "./SolidityParser";
import { MappingTypeContext } from "./SolidityParser";
import { MappingKeyTypeContext } from "./SolidityParser";
import { YulStatementContext } from "./SolidityParser";
import { YulBlockContext } from "./SolidityParser";
import { YulVariableDeclarationContext } from "./SolidityParser";
import { YulAssignmentContext } from "./SolidityParser";
import { YulIfStatementContext } from "./SolidityParser";
import { YulForStatementContext } from "./SolidityParser";
import { YulSwitchCaseContext } from "./SolidityParser";
import { YulSwitchStatementContext } from "./SolidityParser";
import { YulFunctionDefinitionContext } from "./SolidityParser";
import { YulPathContext } from "./SolidityParser";
import { YulFunctionCallContext } from "./SolidityParser";
import { YulBooleanContext } from "./SolidityParser";
import { YulLiteralContext } from "./SolidityParser";
import { YulExpressionContext } from "./SolidityParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SolidityParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SolidityParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `IndexAccess`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexAccess?: (ctx: IndexAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `IndexRangeAccess`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexRangeAccess?: (ctx: IndexRangeAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `MemberAccess`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccess?: (ctx: MemberAccessContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCallOptions`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallOptions?: (ctx: FunctionCallOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `PayableConversion`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPayableConversion?: (ctx: PayableConversionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MetaType`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetaType?: (ctx: MetaTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnaryPrefixOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryPrefixOperation?: (ctx: UnaryPrefixOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `UnarySuffixOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnarySuffixOperation?: (ctx: UnarySuffixOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExpOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpOperation?: (ctx: ExpOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `MulDivModOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulDivModOperation?: (ctx: MulDivModOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `AddSubOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddSubOperation?: (ctx: AddSubOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `ShiftOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOperation?: (ctx: ShiftOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitAndOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndOperation?: (ctx: BitAndOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitXorOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXorOperation?: (ctx: BitXorOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `BitOrOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrOperation?: (ctx: BitOrOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrderComparison`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderComparison?: (ctx: OrderComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityComparison`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityComparison?: (ctx: EqualityComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `AndOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndOperation?: (ctx: AndOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `OrOperation`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrOperation?: (ctx: OrOperationContext) => Result;

	/**
	 * Visit a parse tree produced by the `Conditional`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional?: (ctx: ConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `Assignment`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewExpression`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `Tuple`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;

	/**
	 * Visit a parse tree produced by the `InlineArray`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineArray?: (ctx: InlineArrayContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrimaryExpression`
	 * labeled alternative in `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.sourceUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceUnit?: (ctx: SourceUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.pragmaDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPragmaDirective?: (ctx: PragmaDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.importDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDirective?: (ctx: ImportDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.importAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAliases?: (ctx: ImportAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.symbolAliases`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolAliases?: (ctx: SymbolAliasesContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.contractDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractDefinition?: (ctx: ContractDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.interfaceDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDefinition?: (ctx: InterfaceDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.libraryDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryDefinition?: (ctx: LibraryDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.inheritanceSpecifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritanceSpecifierList?: (ctx: InheritanceSpecifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.inheritanceSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritanceSpecifier?: (ctx: InheritanceSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.contractBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractBodyElement?: (ctx: ContractBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.namedArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedArgument?: (ctx: NamedArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.callArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallArgumentList?: (ctx: CallArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.identifierPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPath?: (ctx: IdentifierPathContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.modifierInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifierInvocation?: (ctx: ModifierInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.parameterDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDeclaration?: (ctx: ParameterDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.constructorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDefinition?: (ctx: ConstructorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.stateMutability`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateMutability?: (ctx: StateMutabilityContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.overrideSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOverrideSpecifier?: (ctx: OverrideSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.modifierDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifierDefinition?: (ctx: ModifierDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.fallbackFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFallbackFunctionDefinition?: (ctx: FallbackFunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.receiveFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiveFunctionDefinition?: (ctx: ReceiveFunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.structDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDefinition?: (ctx: StructDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.enumDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDefinition?: (ctx: EnumDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.userDefinedValueTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedValueTypeDefinition?: (ctx: UserDefinedValueTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.stateVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStateVariableDeclaration?: (ctx: StateVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.constantVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantVariableDeclaration?: (ctx: ConstantVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.eventParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventParameter?: (ctx: EventParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.eventDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDefinition?: (ctx: EventDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.errorParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorParameter?: (ctx: ErrorParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.errorDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorDefinition?: (ctx: ErrorDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.usingDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingDirective?: (ctx: UsingDirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.elementaryTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementaryTypeName?: (ctx: ElementaryTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.functionTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeName?: (ctx: FunctionTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.dataLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataLocation?: (ctx: DataLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.assignOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignOp?: (ctx: AssignOpContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.tupleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.inlineArrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineArrayExpression?: (ctx: InlineArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.hexStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexStringLiteral?: (ctx: HexStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.unicodeStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnicodeStringLiteral?: (ctx: UnicodeStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.numberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.uncheckedBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUncheckedBlock?: (ctx: UncheckedBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.simpleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleStatement?: (ctx: SimpleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.doWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.emitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmitStatement?: (ctx: EmitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.revertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevertStatement?: (ctx: RevertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.assemblyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblyStatement?: (ctx: AssemblyStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.assemblyFlags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblyFlags?: (ctx: AssemblyFlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.variableDeclarationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationList?: (ctx: VariableDeclarationListContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.variableDeclarationTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationTuple?: (ctx: VariableDeclarationTupleContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.variableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationStatement?: (ctx: VariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.mappingType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMappingType?: (ctx: MappingTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.mappingKeyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMappingKeyType?: (ctx: MappingKeyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulStatement?: (ctx: YulStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulBlock?: (ctx: YulBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulVariableDeclaration?: (ctx: YulVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulAssignment?: (ctx: YulAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulIfStatement?: (ctx: YulIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulForStatement?: (ctx: YulForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulSwitchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulSwitchCase?: (ctx: YulSwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulSwitchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulSwitchStatement?: (ctx: YulSwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulFunctionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulFunctionDefinition?: (ctx: YulFunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulPath?: (ctx: YulPathContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulFunctionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulFunctionCall?: (ctx: YulFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulBoolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulBoolean?: (ctx: YulBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulLiteral?: (ctx: YulLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SolidityParser.yulExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYulExpression?: (ctx: YulExpressionContext) => Result;
}

