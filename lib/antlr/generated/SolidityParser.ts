// Generated from Solidity.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SolidityListener } from "./SolidityListener";
import { SolidityVisitor } from "./SolidityVisitor";


export class SolidityParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly T__86 = 87;
	public static readonly T__87 = 88;
	public static readonly T__88 = 89;
	public static readonly T__89 = 90;
	public static readonly T__90 = 91;
	public static readonly T__91 = 92;
	public static readonly Int = 93;
	public static readonly Uint = 94;
	public static readonly Byte = 95;
	public static readonly Fixed = 96;
	public static readonly Ufixed = 97;
	public static readonly BooleanLiteral = 98;
	public static readonly DecimalNumber = 99;
	public static readonly HexNumber = 100;
	public static readonly NumberUnit = 101;
	public static readonly HexLiteralFragment = 102;
	public static readonly ReservedKeyword = 103;
	public static readonly AnonymousKeyword = 104;
	public static readonly BreakKeyword = 105;
	public static readonly ConstantKeyword = 106;
	public static readonly ImmutableKeyword = 107;
	public static readonly ContinueKeyword = 108;
	public static readonly LeaveKeyword = 109;
	public static readonly ExternalKeyword = 110;
	public static readonly IndexedKeyword = 111;
	public static readonly InternalKeyword = 112;
	public static readonly PayableKeyword = 113;
	public static readonly PrivateKeyword = 114;
	public static readonly PublicKeyword = 115;
	public static readonly VirtualKeyword = 116;
	public static readonly PureKeyword = 117;
	public static readonly TypeKeyword = 118;
	public static readonly ViewKeyword = 119;
	public static readonly ConstructorKeyword = 120;
	public static readonly FallbackKeyword = 121;
	public static readonly ReceiveKeyword = 122;
	public static readonly Identifier = 123;
	public static readonly StringLiteralFragment = 124;
	public static readonly VersionLiteral = 125;
	public static readonly WS = 126;
	public static readonly COMMENT = 127;
	public static readonly LINE_COMMENT = 128;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_pragmaName = 2;
	public static readonly RULE_pragmaValue = 3;
	public static readonly RULE_version = 4;
	public static readonly RULE_versionConstraint = 5;
	public static readonly RULE_versionOperator = 6;
	public static readonly RULE_importDirective = 7;
	public static readonly RULE_importDeclaration = 8;
	public static readonly RULE_contractDefinition = 9;
	public static readonly RULE_inheritanceSpecifier = 10;
	public static readonly RULE_contractPart = 11;
	public static readonly RULE_stateVariableDeclaration = 12;
	public static readonly RULE_overrideSpecifier = 13;
	public static readonly RULE_usingForDeclaration = 14;
	public static readonly RULE_structDefinition = 15;
	public static readonly RULE_modifierDefinition = 16;
	public static readonly RULE_functionDefinition = 17;
	public static readonly RULE_functionDescriptor = 18;
	public static readonly RULE_returnParameters = 19;
	public static readonly RULE_modifierList = 20;
	public static readonly RULE_modifierInvocation = 21;
	public static readonly RULE_eventDefinition = 22;
	public static readonly RULE_enumDefinition = 23;
	public static readonly RULE_enumValue = 24;
	public static readonly RULE_parameterList = 25;
	public static readonly RULE_parameter = 26;
	public static readonly RULE_eventParameterList = 27;
	public static readonly RULE_eventParameter = 28;
	public static readonly RULE_variableDeclaration = 29;
	public static readonly RULE_typeName = 30;
	public static readonly RULE_userDefinedTypeName = 31;
	public static readonly RULE_mapping = 32;
	public static readonly RULE_functionTypeName = 33;
	public static readonly RULE_storageLocation = 34;
	public static readonly RULE_stateMutability = 35;
	public static readonly RULE_block = 36;
	public static readonly RULE_statement = 37;
	public static readonly RULE_expressionStatement = 38;
	public static readonly RULE_ifStatement = 39;
	public static readonly RULE_tryStatement = 40;
	public static readonly RULE_catchClause = 41;
	public static readonly RULE_whileStatement = 42;
	public static readonly RULE_forStatement = 43;
	public static readonly RULE_simpleStatement = 44;
	public static readonly RULE_inlineAssemblyStatement = 45;
	public static readonly RULE_doWhileStatement = 46;
	public static readonly RULE_continueStatement = 47;
	public static readonly RULE_breakStatement = 48;
	public static readonly RULE_returnStatement = 49;
	public static readonly RULE_throwStatement = 50;
	public static readonly RULE_emitStatement = 51;
	public static readonly RULE_variableDeclarationStatement = 52;
	public static readonly RULE_variableDeclarationList = 53;
	public static readonly RULE_identifierList = 54;
	public static readonly RULE_elementaryTypeName = 55;
	public static readonly RULE_expression = 56;
	public static readonly RULE_primaryExpression = 57;
	public static readonly RULE_expressionList = 58;
	public static readonly RULE_nameValueList = 59;
	public static readonly RULE_nameValue = 60;
	public static readonly RULE_functionCallArguments = 61;
	public static readonly RULE_functionCall = 62;
	public static readonly RULE_tupleExpression = 63;
	public static readonly RULE_typeNameExpression = 64;
	public static readonly RULE_assemblyItem = 65;
	public static readonly RULE_assemblyBlock = 66;
	public static readonly RULE_assemblyExpression = 67;
	public static readonly RULE_assemblyCall = 68;
	public static readonly RULE_assemblyLocalDefinition = 69;
	public static readonly RULE_assemblyAssignment = 70;
	public static readonly RULE_assemblyIdentifierList = 71;
	public static readonly RULE_assemblyStackAssignment = 72;
	public static readonly RULE_labelDefinition = 73;
	public static readonly RULE_assemblySwitch = 74;
	public static readonly RULE_assemblyCase = 75;
	public static readonly RULE_assemblyFunctionDefinition = 76;
	public static readonly RULE_assemblyFunctionReturns = 77;
	public static readonly RULE_assemblyFor = 78;
	public static readonly RULE_assemblyIf = 79;
	public static readonly RULE_assemblyLiteral = 80;
	public static readonly RULE_assemblyTypedVariableList = 81;
	public static readonly RULE_assemblyType = 82;
	public static readonly RULE_subAssembly = 83;
	public static readonly RULE_numberLiteral = 84;
	public static readonly RULE_identifier = 85;
	public static readonly RULE_hexLiteral = 86;
	public static readonly RULE_stringLiteral = 87;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "pragmaName", "pragmaValue", "version",
		"versionConstraint", "versionOperator", "importDirective", "importDeclaration",
		"contractDefinition", "inheritanceSpecifier", "contractPart", "stateVariableDeclaration",
		"overrideSpecifier", "usingForDeclaration", "structDefinition", "modifierDefinition",
		"functionDefinition", "functionDescriptor", "returnParameters", "modifierList",
		"modifierInvocation", "eventDefinition", "enumDefinition", "enumValue",
		"parameterList", "parameter", "eventParameterList", "eventParameter",
		"variableDeclaration", "typeName", "userDefinedTypeName", "mapping", "functionTypeName",
		"storageLocation", "stateMutability", "block", "statement", "expressionStatement",
		"ifStatement", "tryStatement", "catchClause", "whileStatement", "forStatement",
		"simpleStatement", "inlineAssemblyStatement", "doWhileStatement", "continueStatement",
		"breakStatement", "returnStatement", "throwStatement", "emitStatement",
		"variableDeclarationStatement", "variableDeclarationList", "identifierList",
		"elementaryTypeName", "expression", "primaryExpression", "expressionList",
		"nameValueList", "nameValue", "functionCallArguments", "functionCall",
		"tupleExpression", "typeNameExpression", "assemblyItem", "assemblyBlock",
		"assemblyExpression", "assemblyCall", "assemblyLocalDefinition", "assemblyAssignment",
		"assemblyIdentifierList", "assemblyStackAssignment", "labelDefinition",
		"assemblySwitch", "assemblyCase", "assemblyFunctionDefinition", "assemblyFunctionReturns",
		"assemblyFor", "assemblyIf", "assemblyLiteral", "assemblyTypedVariableList",
		"assemblyType", "subAssembly", "numberLiteral", "identifier", "hexLiteral",
		"stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'pragma'", "';'", "'^'", "'~'", "'>='", "'>'", "'<'", "'<='",
		"'='", "'import'", "'as'", "'*'", "'from'", "'{'", "','", "'}'", "'abstract'",
		"'contract'", "'interface'", "'library'", "'is'", "'('", "')'", "'override'",
		"'using'", "'for'", "'struct'", "'modifier'", "'function'", "'returns'",
		"'event'", "'enum'", "'['", "']'", "'.'", "'mapping'", "'=>'", "'memory'",
		"'storage'", "'calldata'", "'if'", "'else'", "'try'", "'catch'", "'while'",
		"'assembly'", "'do'", "'return'", "'throw'", "'emit'", "'var'", "'address'",
		"'bool'", "'string'", "'byte'", "'++'", "'--'", "'new'", "':'", "'+'",
		"'-'", "'after'", "'delete'", "'!'", "'**'", "'/'", "'%'", "'<<'", "'>>'",
		"'&'", "'|'", "'=='", "'!='", "'&&'", "'||'", "'?'", "'|='", "'^='", "'&='",
		"'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", "'%='", "'let'", "':='",
		"'=:'", "'switch'", "'case'", "'default'", undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, "'anonymous'", "'break'", "'constant'", "'immutable'", "'continue'",
		"'leave'", "'external'", "'indexed'", "'internal'", "'payable'", "'private'",
		"'public'", "'virtual'", "'pure'", "'type'", "'view'", "'constructor'",
		"'fallback'", "'receive'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "Int", "Uint", "Byte", "Fixed", "Ufixed", "BooleanLiteral",
		"DecimalNumber", "HexNumber", "NumberUnit", "HexLiteralFragment", "ReservedKeyword",
		"AnonymousKeyword", "BreakKeyword", "ConstantKeyword", "ImmutableKeyword",
		"ContinueKeyword", "LeaveKeyword", "ExternalKeyword", "IndexedKeyword",
		"InternalKeyword", "PayableKeyword", "PrivateKeyword", "PublicKeyword",
		"VirtualKeyword", "PureKeyword", "TypeKeyword", "ViewKeyword", "ConstructorKeyword",
		"FallbackKeyword", "ReceiveKeyword", "Identifier", "StringLiteralFragment",
		"VersionLiteral", "WS", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Solidity.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (SolidityParser.T__0 - 1)) | (1 << (SolidityParser.T__9 - 1)) | (1 << (SolidityParser.T__16 - 1)) | (1 << (SolidityParser.T__17 - 1)) | (1 << (SolidityParser.T__18 - 1)) | (1 << (SolidityParser.T__19 - 1)) | (1 << (SolidityParser.T__26 - 1)) | (1 << (SolidityParser.T__31 - 1)))) !== 0)) {
				{
				this.state = 181;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__0:
					{
					this.state = 176;
					this.pragmaDirective();
					}
					break;
				case SolidityParser.T__9:
					{
					this.state = 177;
					this.importDirective();
					}
					break;
				case SolidityParser.T__26:
					{
					this.state = 178;
					this.structDefinition();
					}
					break;
				case SolidityParser.T__31:
					{
					this.state = 179;
					this.enumDefinition();
					}
					break;
				case SolidityParser.T__16:
				case SolidityParser.T__17:
				case SolidityParser.T__18:
				case SolidityParser.T__19:
					{
					this.state = 180;
					this.contractDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this.match(SolidityParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaDirective(): PragmaDirectiveContext {
		let _localctx: PragmaDirectiveContext = new PragmaDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SolidityParser.RULE_pragmaDirective);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(SolidityParser.T__0);
			this.state = 189;
			this.pragmaName();
			this.state = 190;
			this.pragmaValue();
			this.state = 191;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaName(): PragmaNameContext {
		let _localctx: PragmaNameContext = new PragmaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SolidityParser.RULE_pragmaName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pragmaValue(): PragmaValueContext {
		let _localctx: PragmaValueContext = new PragmaValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_pragmaValue);
		try {
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 195;
				this.version();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 196;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_version);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.versionConstraint();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0) || _la === SolidityParser.VersionLiteral) {
				{
				this.state = 200;
				this.versionConstraint();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionConstraint(): VersionConstraintContext {
		let _localctx: VersionConstraintContext = new VersionConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_versionConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0)) {
				{
				this.state = 203;
				this.versionOperator();
				}
			}

			this.state = 206;
			this.match(SolidityParser.VersionLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public versionOperator(): VersionOperatorContext {
		let _localctx: VersionOperatorContext = new VersionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SolidityParser.RULE_versionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__2) | (1 << SolidityParser.T__3) | (1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7) | (1 << SolidityParser.T__8))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.match(SolidityParser.T__9);
				this.state = 211;
				this.match(SolidityParser.StringLiteralFragment);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__10) {
					{
					this.state = 212;
					this.match(SolidityParser.T__10);
					this.state = 213;
					this.identifier();
					}
				}

				this.state = 216;
				this.match(SolidityParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.match(SolidityParser.T__9);
				this.state = 220;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__11:
					{
					this.state = 218;
					this.match(SolidityParser.T__11);
					}
					break;
				case SolidityParser.T__12:
				case SolidityParser.T__39:
				case SolidityParser.T__51:
				case SolidityParser.Identifier:
					{
					this.state = 219;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__10) {
					{
					this.state = 222;
					this.match(SolidityParser.T__10);
					this.state = 223;
					this.identifier();
					}
				}

				this.state = 226;
				this.match(SolidityParser.T__12);
				this.state = 227;
				this.match(SolidityParser.StringLiteralFragment);
				this.state = 228;
				this.match(SolidityParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 229;
				this.match(SolidityParser.T__9);
				this.state = 230;
				this.match(SolidityParser.T__13);
				this.state = 231;
				this.importDeclaration();
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 232;
					this.match(SolidityParser.T__14);
					this.state = 233;
					this.importDeclaration();
					}
					}
					this.state = 238;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 239;
				this.match(SolidityParser.T__15);
				this.state = 240;
				this.match(SolidityParser.T__12);
				this.state = 241;
				this.match(SolidityParser.StringLiteralFragment);
				this.state = 242;
				this.match(SolidityParser.T__1);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.identifier();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__10) {
				{
				this.state = 247;
				this.match(SolidityParser.T__10);
				this.state = 248;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractDefinition(): ContractDefinitionContext {
		let _localctx: ContractDefinitionContext = new ContractDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__16) {
				{
				this.state = 251;
				this.match(SolidityParser.T__16);
				}
			}

			this.state = 254;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__17) | (1 << SolidityParser.T__18) | (1 << SolidityParser.T__19))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 255;
			this.identifier();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__20) {
				{
				this.state = 256;
				this.match(SolidityParser.T__20);
				this.state = 257;
				this.inheritanceSpecifier();
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 258;
					this.match(SolidityParser.T__14);
					this.state = 259;
					this.inheritanceSpecifier();
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 267;
			this.match(SolidityParser.T__13);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__24) | (1 << SolidityParser.T__26) | (1 << SolidityParser.T__27) | (1 << SolidityParser.T__28) | (1 << SolidityParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (SolidityParser.T__31 - 32)) | (1 << (SolidityParser.T__35 - 32)) | (1 << (SolidityParser.T__39 - 32)) | (1 << (SolidityParser.T__50 - 32)) | (1 << (SolidityParser.T__51 - 32)) | (1 << (SolidityParser.T__52 - 32)) | (1 << (SolidityParser.T__53 - 32)) | (1 << (SolidityParser.T__54 - 32)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.ConstructorKeyword - 93)) | (1 << (SolidityParser.FallbackKeyword - 93)) | (1 << (SolidityParser.ReceiveKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
				{
				{
				this.state = 268;
				this.contractPart();
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 274;
			this.match(SolidityParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.userDefinedTypeName();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 277;
				this.match(SolidityParser.T__21);
				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
					{
					this.state = 278;
					this.expressionList();
					}
				}

				this.state = 281;
				this.match(SolidityParser.T__22);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contractPart(): ContractPartContext {
		let _localctx: ContractPartContext = new ContractPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_contractPart);
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 284;
				this.stateVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this.usingForDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 286;
				this.structDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 287;
				this.modifierDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 288;
				this.functionDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 289;
				this.eventDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 290;
				this.enumDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateVariableDeclaration(): StateVariableDeclarationContext {
		let _localctx: StateVariableDeclarationContext = new StateVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.typeName(0);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__23 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SolidityParser.ConstantKeyword - 106)) | (1 << (SolidityParser.ImmutableKeyword - 106)) | (1 << (SolidityParser.InternalKeyword - 106)) | (1 << (SolidityParser.PrivateKeyword - 106)) | (1 << (SolidityParser.PublicKeyword - 106)))) !== 0)) {
				{
				this.state = 300;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.PublicKeyword:
					{
					this.state = 294;
					this.match(SolidityParser.PublicKeyword);
					}
					break;
				case SolidityParser.InternalKeyword:
					{
					this.state = 295;
					this.match(SolidityParser.InternalKeyword);
					}
					break;
				case SolidityParser.PrivateKeyword:
					{
					this.state = 296;
					this.match(SolidityParser.PrivateKeyword);
					}
					break;
				case SolidityParser.ConstantKeyword:
					{
					this.state = 297;
					this.match(SolidityParser.ConstantKeyword);
					}
					break;
				case SolidityParser.ImmutableKeyword:
					{
					this.state = 298;
					this.match(SolidityParser.ImmutableKeyword);
					}
					break;
				case SolidityParser.T__23:
					{
					this.state = 299;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
			this.identifier();
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__8) {
				{
				this.state = 306;
				this.match(SolidityParser.T__8);
				this.state = 307;
				this.expression(0);
				}
			}

			this.state = 310;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSpecifier(): OverrideSpecifierContext {
		let _localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(SolidityParser.T__23);
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 313;
				this.match(SolidityParser.T__21);
				this.state = 314;
				this.userDefinedTypeName();
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 315;
					this.match(SolidityParser.T__14);
					this.state = 316;
					this.userDefinedTypeName();
					}
					}
					this.state = 321;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 322;
				this.match(SolidityParser.T__22);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingForDeclaration(): UsingForDeclarationContext {
		let _localctx: UsingForDeclarationContext = new UsingForDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_usingForDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(SolidityParser.T__24);
			this.state = 327;
			this.identifier();
			this.state = 328;
			this.match(SolidityParser.T__25);
			this.state = 331;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__11:
				{
				this.state = 329;
				this.match(SolidityParser.T__11);
				}
				break;
			case SolidityParser.T__12:
			case SolidityParser.T__28:
			case SolidityParser.T__35:
			case SolidityParser.T__39:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.Identifier:
				{
				this.state = 330;
				this.typeName(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 333;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SolidityParser.RULE_structDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(SolidityParser.T__26);
			this.state = 336;
			this.identifier();
			this.state = 337;
			this.match(SolidityParser.T__13);
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
				{
				this.state = 338;
				this.variableDeclaration();
				this.state = 339;
				this.match(SolidityParser.T__1);
				this.state = 345;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
					{
					{
					this.state = 340;
					this.variableDeclaration();
					this.state = 341;
					this.match(SolidityParser.T__1);
					}
					}
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 350;
			this.match(SolidityParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_modifierDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(SolidityParser.T__27);
			this.state = 353;
			this.identifier();
			this.state = 355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 354;
				this.parameterList();
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__23 || _la === SolidityParser.VirtualKeyword) {
				{
				this.state = 359;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.VirtualKeyword:
					{
					this.state = 357;
					this.match(SolidityParser.VirtualKeyword);
					}
					break;
				case SolidityParser.T__23:
					{
					this.state = 358;
					this.overrideSpecifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 366;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 364;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__13:
				{
				this.state = 365;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.functionDescriptor();
			this.state = 369;
			this.parameterList();
			this.state = 370;
			this.modifierList();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__29) {
				{
				this.state = 371;
				this.returnParameters();
				}
			}

			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__1:
				{
				this.state = 374;
				this.match(SolidityParser.T__1);
				}
				break;
			case SolidityParser.T__13:
				{
				this.state = 375;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDescriptor(): FunctionDescriptorContext {
		let _localctx: FunctionDescriptorContext = new FunctionDescriptorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_functionDescriptor);
		try {
			this.state = 387;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 378;
				this.match(SolidityParser.T__28);
				this.state = 382;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case SolidityParser.T__12:
				case SolidityParser.T__39:
				case SolidityParser.T__51:
				case SolidityParser.Identifier:
					{
					this.state = 379;
					this.identifier();
					}
					break;
				case SolidityParser.ReceiveKeyword:
					{
					this.state = 380;
					this.match(SolidityParser.ReceiveKeyword);
					}
					break;
				case SolidityParser.FallbackKeyword:
					{
					this.state = 381;
					this.match(SolidityParser.FallbackKeyword);
					}
					break;
				case SolidityParser.T__21:
					break;
				default:
					break;
				}
				}
				break;
			case SolidityParser.ConstructorKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
				this.match(SolidityParser.ConstructorKeyword);
				}
				break;
			case SolidityParser.FallbackKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 385;
				this.match(SolidityParser.FallbackKeyword);
				}
				break;
			case SolidityParser.ReceiveKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 386;
				this.match(SolidityParser.ReceiveKeyword);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnParameters(): ReturnParametersContext {
		let _localctx: ReturnParametersContext = new ReturnParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_returnParameters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(SolidityParser.T__29);
			this.state = 390;
			this.parameterList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierList(): ModifierListContext {
		let _localctx: ModifierListContext = new ModifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SolidityParser.RULE_modifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 400;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case SolidityParser.T__12:
					case SolidityParser.T__39:
					case SolidityParser.T__51:
					case SolidityParser.Identifier:
						{
						this.state = 392;
						this.modifierInvocation();
						}
						break;
					case SolidityParser.ConstantKeyword:
					case SolidityParser.PayableKeyword:
					case SolidityParser.PureKeyword:
					case SolidityParser.ViewKeyword:
						{
						this.state = 393;
						this.stateMutability();
						}
						break;
					case SolidityParser.ExternalKeyword:
						{
						this.state = 394;
						this.match(SolidityParser.ExternalKeyword);
						}
						break;
					case SolidityParser.PublicKeyword:
						{
						this.state = 395;
						this.match(SolidityParser.PublicKeyword);
						}
						break;
					case SolidityParser.InternalKeyword:
						{
						this.state = 396;
						this.match(SolidityParser.InternalKeyword);
						}
						break;
					case SolidityParser.PrivateKeyword:
						{
						this.state = 397;
						this.match(SolidityParser.PrivateKeyword);
						}
						break;
					case SolidityParser.VirtualKeyword:
						{
						this.state = 398;
						this.match(SolidityParser.VirtualKeyword);
						}
						break;
					case SolidityParser.T__23:
						{
						this.state = 399;
						this.overrideSpecifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifierInvocation(): ModifierInvocationContext {
		let _localctx: ModifierInvocationContext = new ModifierInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_modifierInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.identifier();
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				this.match(SolidityParser.T__21);
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
					{
					this.state = 407;
					this.expressionList();
					}
				}

				this.state = 410;
				this.match(SolidityParser.T__22);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(SolidityParser.T__30);
			this.state = 414;
			this.identifier();
			this.state = 415;
			this.eventParameterList();
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AnonymousKeyword) {
				{
				this.state = 416;
				this.match(SolidityParser.AnonymousKeyword);
				}
			}

			this.state = 419;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDefinition(): EnumDefinitionContext {
		let _localctx: EnumDefinitionContext = new EnumDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this.match(SolidityParser.T__31);
			this.state = 422;
			this.identifier();
			this.state = 423;
			this.match(SolidityParser.T__13);
			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 424;
				this.enumValue();
				}
			}

			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 427;
				this.match(SolidityParser.T__14);
				this.state = 428;
				this.enumValue();
				}
				}
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 434;
			this.match(SolidityParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(SolidityParser.T__21);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
				{
				this.state = 439;
				this.parameter();
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 440;
					this.match(SolidityParser.T__14);
					this.state = 441;
					this.parameter();
					}
					}
					this.state = 446;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 449;
			this.match(SolidityParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.typeName(0);
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 452;
				this.storageLocation();
				}
				break;
			}
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 455;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameterList(): EventParameterListContext {
		let _localctx: EventParameterListContext = new EventParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_eventParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(SolidityParser.T__21);
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
				{
				this.state = 459;
				this.eventParameter();
				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 460;
					this.match(SolidityParser.T__14);
					this.state = 461;
					this.eventParameter();
					}
					}
					this.state = 466;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 469;
			this.match(SolidityParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventParameter(): EventParameterContext {
		let _localctx: EventParameterContext = new EventParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.typeName(0);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.IndexedKeyword) {
				{
				this.state = 472;
				this.match(SolidityParser.IndexedKeyword);
				}
			}

			this.state = 476;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 475;
				this.identifier();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.typeName(0);
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 479;
				this.storageLocation();
				}
				break;
			}
			this.state = 482;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typeName(): TypeNameContext;
	public typeName(_p: number): TypeNameContext;
	// @RuleVersion(0)
	public typeName(_p?: number): TypeNameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, _parentState);
		let _prevctx: TypeNameContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, SolidityParser.RULE_typeName, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 485;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 486;
				this.userDefinedTypeName();
				}
				break;

			case 3:
				{
				this.state = 487;
				this.mapping();
				}
				break;

			case 4:
				{
				this.state = 488;
				this.functionTypeName();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 499;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeNameContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_typeName);
					this.state = 491;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 492;
					this.match(SolidityParser.T__32);
					this.state = 494;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
						{
						this.state = 493;
						this.expression(0);
						}
					}

					this.state = 496;
					this.match(SolidityParser.T__33);
					}
					}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		let _localctx: UserDefinedTypeNameContext = new UserDefinedTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SolidityParser.RULE_userDefinedTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.identifier();
			this.state = 507;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 503;
					this.match(SolidityParser.T__34);
					this.state = 504;
					this.identifier();
					}
					}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SolidityParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(SolidityParser.T__35);
			this.state = 511;
			this.match(SolidityParser.T__21);
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				{
				this.state = 512;
				this.elementaryTypeName();
				}
				break;

			case 2:
				{
				this.state = 513;
				this.userDefinedTypeName();
				}
				break;
			}
			this.state = 516;
			this.match(SolidityParser.T__36);
			this.state = 517;
			this.typeName(0);
			this.state = 518;
			this.match(SolidityParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_functionTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(SolidityParser.T__28);
			this.state = 521;
			this.parameterList();
			this.state = 522;
			this.modifierList();
			this.state = 524;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				{
				this.state = 523;
				this.returnParameters();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storageLocation(): StorageLocationContext {
		let _localctx: StorageLocationContext = new StorageLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_storageLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			_la = this._input.LA(1);
			if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (SolidityParser.T__37 - 38)) | (1 << (SolidityParser.T__38 - 38)) | (1 << (SolidityParser.T__39 - 38)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stateMutability(): StateMutabilityContext {
		let _localctx: StateMutabilityContext = new StateMutabilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			_la = this._input.LA(1);
			if (!(((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & ((1 << (SolidityParser.ConstantKeyword - 106)) | (1 << (SolidityParser.PayableKeyword - 106)) | (1 << (SolidityParser.PureKeyword - 106)) | (1 << (SolidityParser.ViewKeyword - 106)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(SolidityParser.T__13);
			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__21) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__35 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__40 - 33)) | (1 << (SolidityParser.T__42 - 33)) | (1 << (SolidityParser.T__44 - 33)) | (1 << (SolidityParser.T__45 - 33)) | (1 << (SolidityParser.T__46 - 33)) | (1 << (SolidityParser.T__47 - 33)) | (1 << (SolidityParser.T__48 - 33)) | (1 << (SolidityParser.T__49 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.BreakKeyword - 93)) | (1 << (SolidityParser.ContinueKeyword - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
				{
				{
				this.state = 531;
				this.statement();
				}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 537;
			this.match(SolidityParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_statement);
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__40:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.ifStatement();
				}
				break;
			case SolidityParser.T__42:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.tryStatement();
				}
				break;
			case SolidityParser.T__44:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 541;
				this.whileStatement();
				}
				break;
			case SolidityParser.T__25:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 542;
				this.forStatement();
				}
				break;
			case SolidityParser.T__13:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 543;
				this.block();
				}
				break;
			case SolidityParser.T__45:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 544;
				this.inlineAssemblyStatement();
				}
				break;
			case SolidityParser.T__46:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 545;
				this.doWhileStatement();
				}
				break;
			case SolidityParser.ContinueKeyword:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 546;
				this.continueStatement();
				}
				break;
			case SolidityParser.BreakKeyword:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 547;
				this.breakStatement();
				}
				break;
			case SolidityParser.T__47:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 548;
				this.returnStatement();
				}
				break;
			case SolidityParser.T__48:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 549;
				this.throwStatement();
				}
				break;
			case SolidityParser.T__49:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 550;
				this.emitStatement();
				}
				break;
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__21:
			case SolidityParser.T__28:
			case SolidityParser.T__32:
			case SolidityParser.T__35:
			case SolidityParser.T__39:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 551;
				this.simpleStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.expression(0);
			this.state = 555;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.match(SolidityParser.T__40);
			this.state = 558;
			this.match(SolidityParser.T__21);
			this.state = 559;
			this.expression(0);
			this.state = 560;
			this.match(SolidityParser.T__22);
			this.state = 561;
			this.statement();
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 562;
				this.match(SolidityParser.T__41);
				this.state = 563;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(SolidityParser.T__42);
			this.state = 567;
			this.expression(0);
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__29) {
				{
				this.state = 568;
				this.returnParameters();
				}
			}

			this.state = 571;
			this.block();
			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 572;
				this.catchClause();
				}
				}
				this.state = 575;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.T__43);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(SolidityParser.T__43);
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__21 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
					{
					this.state = 578;
					this.identifier();
					}
				}

				this.state = 581;
				this.parameterList();
				}
			}

			this.state = 584;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 586;
			this.match(SolidityParser.T__44);
			this.state = 587;
			this.match(SolidityParser.T__21);
			this.state = 588;
			this.expression(0);
			this.state = 589;
			this.match(SolidityParser.T__22);
			this.state = 590;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SolidityParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			this.match(SolidityParser.T__25);
			this.state = 593;
			this.match(SolidityParser.T__21);
			this.state = 596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__21:
			case SolidityParser.T__28:
			case SolidityParser.T__32:
			case SolidityParser.T__35:
			case SolidityParser.T__39:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 594;
				this.simpleStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 595;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 600;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__21:
			case SolidityParser.T__32:
			case SolidityParser.T__39:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 598;
				this.expressionStatement();
				}
				break;
			case SolidityParser.T__1:
				{
				this.state = 599;
				this.match(SolidityParser.T__1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
				{
				this.state = 602;
				this.expression(0);
				}
			}

			this.state = 605;
			this.match(SolidityParser.T__22);
			this.state = 606;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_simpleStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 608;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				{
				this.state = 609;
				this.expressionStatement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inlineAssemblyStatement(): InlineAssemblyStatementContext {
		let _localctx: InlineAssemblyStatementContext = new InlineAssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_inlineAssemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.match(SolidityParser.T__45);
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.StringLiteralFragment) {
				{
				this.state = 613;
				this.match(SolidityParser.StringLiteralFragment);
				}
			}

			this.state = 616;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(SolidityParser.T__46);
			this.state = 619;
			this.statement();
			this.state = 620;
			this.match(SolidityParser.T__44);
			this.state = 621;
			this.match(SolidityParser.T__21);
			this.state = 622;
			this.expression(0);
			this.state = 623;
			this.match(SolidityParser.T__22);
			this.state = 624;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(SolidityParser.ContinueKeyword);
			this.state = 627;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(SolidityParser.BreakKeyword);
			this.state = 630;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this.match(SolidityParser.T__47);
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
				{
				this.state = 633;
				this.expression(0);
				}
			}

			this.state = 636;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(SolidityParser.T__48);
			this.state = 639;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emitStatement(): EmitStatementContext {
		let _localctx: EmitStatementContext = new EmitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 641;
			this.match(SolidityParser.T__49);
			this.state = 642;
			this.functionCall();
			this.state = 643;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 645;
				this.match(SolidityParser.T__50);
				this.state = 646;
				this.identifierList();
				}
				break;

			case 2:
				{
				this.state = 647;
				this.variableDeclaration();
				}
				break;

			case 3:
				{
				this.state = 648;
				this.match(SolidityParser.T__21);
				this.state = 649;
				this.variableDeclarationList();
				this.state = 650;
				this.match(SolidityParser.T__22);
				}
				break;
			}
			this.state = 656;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__8) {
				{
				this.state = 654;
				this.match(SolidityParser.T__8);
				this.state = 655;
				this.expression(0);
				}
			}

			this.state = 658;
			this.match(SolidityParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
				{
				this.state = 660;
				this.variableDeclaration();
				}
			}

			this.state = 669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 663;
				this.match(SolidityParser.T__14);
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || _la === SolidityParser.T__28 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (SolidityParser.T__35 - 36)) | (1 << (SolidityParser.T__39 - 36)) | (1 << (SolidityParser.T__50 - 36)) | (1 << (SolidityParser.T__51 - 36)) | (1 << (SolidityParser.T__52 - 36)) | (1 << (SolidityParser.T__53 - 36)) | (1 << (SolidityParser.T__54 - 36)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.Identifier - 93)))) !== 0)) {
					{
					this.state = 664;
					this.variableDeclaration();
					}
				}

				}
				}
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_identifierList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.match(SolidityParser.T__21);
			this.state = 679;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
						{
						this.state = 673;
						this.identifier();
						}
					}

					this.state = 676;
					this.match(SolidityParser.T__14);
					}
					}
				}
				this.state = 681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			}
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 682;
				this.identifier();
				}
			}

			this.state = 685;
			this.match(SolidityParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementaryTypeName(): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_elementaryTypeName);
		try {
			this.state = 700;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__51:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 687;
				this.match(SolidityParser.T__51);
				this.state = 689;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
				case 1:
					{
					this.state = 688;
					this.match(SolidityParser.PayableKeyword);
					}
					break;
				}
				}
				break;
			case SolidityParser.T__52:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 691;
				this.match(SolidityParser.T__52);
				}
				break;
			case SolidityParser.T__53:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 692;
				this.match(SolidityParser.T__53);
				}
				break;
			case SolidityParser.T__50:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 693;
				this.match(SolidityParser.T__50);
				}
				break;
			case SolidityParser.Int:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 694;
				this.match(SolidityParser.Int);
				}
				break;
			case SolidityParser.Uint:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 695;
				this.match(SolidityParser.Uint);
				}
				break;
			case SolidityParser.T__54:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 696;
				this.match(SolidityParser.T__54);
				}
				break;
			case SolidityParser.Byte:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 697;
				this.match(SolidityParser.Byte);
				}
				break;
			case SolidityParser.Fixed:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 698;
				this.match(SolidityParser.Fixed);
				}
				break;
			case SolidityParser.Ufixed:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 699;
				this.match(SolidityParser.Ufixed);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 112;
		this.enterRecursionRule(_localctx, 112, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 703;
				this.match(SolidityParser.T__57);
				this.state = 704;
				this.typeName(0);
				}
				break;

			case 2:
				{
				this.state = 705;
				this.match(SolidityParser.PayableKeyword);
				this.state = 706;
				this.match(SolidityParser.T__21);
				this.state = 707;
				this.expression(0);
				this.state = 708;
				this.match(SolidityParser.T__22);
				}
				break;

			case 3:
				{
				this.state = 710;
				this.match(SolidityParser.T__21);
				this.state = 711;
				this.expression(0);
				this.state = 712;
				this.match(SolidityParser.T__22);
				}
				break;

			case 4:
				{
				this.state = 714;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 715;
				this.expression(19);
				}
				break;

			case 5:
				{
				this.state = 716;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__59 || _la === SolidityParser.T__60)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 717;
				this.expression(18);
				}
				break;

			case 6:
				{
				this.state = 718;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.T__61 || _la === SolidityParser.T__62)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 719;
				this.expression(17);
				}
				break;

			case 7:
				{
				this.state = 720;
				this.match(SolidityParser.T__63);
				this.state = 721;
				this.expression(16);
				}
				break;

			case 8:
				{
				this.state = 722;
				this.match(SolidityParser.T__3);
				this.state = 723;
				this.expression(15);
				}
				break;

			case 9:
				{
				this.state = 724;
				this.primaryExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 802;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 800;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 727;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 728;
						this.match(SolidityParser.T__64);
						this.state = 729;
						this.expression(15);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 730;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 731;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__11 || _la === SolidityParser.T__65 || _la === SolidityParser.T__66)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 732;
						this.expression(14);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 733;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 734;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__59 || _la === SolidityParser.T__60)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 735;
						this.expression(13);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 736;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 737;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__67 || _la === SolidityParser.T__68)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 738;
						this.expression(12);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 739;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 740;
						this.match(SolidityParser.T__69);
						this.state = 741;
						this.expression(11);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 742;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 743;
						this.match(SolidityParser.T__2);
						this.state = 744;
						this.expression(10);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 745;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 746;
						this.match(SolidityParser.T__70);
						this.state = 747;
						this.expression(9);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 748;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 749;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__4) | (1 << SolidityParser.T__5) | (1 << SolidityParser.T__6) | (1 << SolidityParser.T__7))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 750;
						this.expression(8);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 751;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 752;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__71 || _la === SolidityParser.T__72)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 753;
						this.expression(7);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 754;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 755;
						this.match(SolidityParser.T__73);
						this.state = 756;
						this.expression(6);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 757;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 758;
						this.match(SolidityParser.T__74);
						this.state = 759;
						this.expression(5);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 760;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 761;
						this.match(SolidityParser.T__75);
						this.state = 762;
						this.expression(0);
						this.state = 763;
						this.match(SolidityParser.T__58);
						this.state = 764;
						this.expression(4);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 766;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 767;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__8 || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (SolidityParser.T__76 - 77)) | (1 << (SolidityParser.T__77 - 77)) | (1 << (SolidityParser.T__78 - 77)) | (1 << (SolidityParser.T__79 - 77)) | (1 << (SolidityParser.T__80 - 77)) | (1 << (SolidityParser.T__81 - 77)) | (1 << (SolidityParser.T__82 - 77)) | (1 << (SolidityParser.T__83 - 77)) | (1 << (SolidityParser.T__84 - 77)) | (1 << (SolidityParser.T__85 - 77)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 768;
						this.expression(3);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 769;
						if (!(this.precpred(this._ctx, 28))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 28)");
						}
						this.state = 770;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.T__55 || _la === SolidityParser.T__56)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 771;
						if (!(this.precpred(this._ctx, 26))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 26)");
						}
						this.state = 772;
						this.match(SolidityParser.T__32);
						this.state = 774;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
							{
							this.state = 773;
							this.expression(0);
							}
						}

						this.state = 776;
						this.match(SolidityParser.T__33);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 777;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 778;
						this.match(SolidityParser.T__32);
						this.state = 780;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
							{
							this.state = 779;
							this.expression(0);
							}
						}

						this.state = 782;
						this.match(SolidityParser.T__58);
						this.state = 784;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
							{
							this.state = 783;
							this.expression(0);
							}
						}

						this.state = 786;
						this.match(SolidityParser.T__33);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 787;
						if (!(this.precpred(this._ctx, 24))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 24)");
						}
						this.state = 788;
						this.match(SolidityParser.T__34);
						this.state = 789;
						this.identifier();
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 790;
						if (!(this.precpred(this._ctx, 23))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 23)");
						}
						this.state = 791;
						this.match(SolidityParser.T__13);
						this.state = 792;
						this.nameValueList();
						this.state = 793;
						this.match(SolidityParser.T__15);
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 795;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 796;
						this.match(SolidityParser.T__21);
						this.state = 797;
						this.functionCallArguments();
						this.state = 798;
						this.match(SolidityParser.T__22);
						}
						break;
					}
					}
				}
				this.state = 804;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_primaryExpression);
		try {
			this.state = 821;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 805;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.numberLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 807;
				this.hexLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 808;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 809;
				this.identifier();
				this.state = 812;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
				case 1:
					{
					this.state = 810;
					this.match(SolidityParser.T__32);
					this.state = 811;
					this.match(SolidityParser.T__33);
					}
					break;
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 814;
				this.match(SolidityParser.TypeKeyword);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 815;
				this.tupleExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 816;
				this.typeNameExpression();
				this.state = 819;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
				case 1:
					{
					this.state = 817;
					this.match(SolidityParser.T__32);
					this.state = 818;
					this.match(SolidityParser.T__33);
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 823;
			this.expression(0);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 824;
				this.match(SolidityParser.T__14);
				this.state = 825;
				this.expression(0);
				}
				}
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValueList(): NameValueListContext {
		let _localctx: NameValueListContext = new NameValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_nameValueList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.nameValue();
			this.state = 836;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 832;
					this.match(SolidityParser.T__14);
					this.state = 833;
					this.nameValue();
					}
					}
				}
				this.state = 838;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__14) {
				{
				this.state = 839;
				this.match(SolidityParser.T__14);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameValue(): NameValueContext {
		let _localctx: NameValueContext = new NameValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_nameValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.identifier();
			this.state = 843;
			this.match(SolidityParser.T__58);
			this.state = 844;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCallArguments(): FunctionCallArgumentsContext {
		let _localctx: FunctionCallArgumentsContext = new FunctionCallArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_functionCallArguments);
		let _la: number;
		try {
			this.state = 854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__13:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 846;
				this.match(SolidityParser.T__13);
				this.state = 848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
					{
					this.state = 847;
					this.nameValueList();
					}
				}

				this.state = 850;
				this.match(SolidityParser.T__15);
				}
				break;
			case SolidityParser.T__3:
			case SolidityParser.T__12:
			case SolidityParser.T__21:
			case SolidityParser.T__22:
			case SolidityParser.T__32:
			case SolidityParser.T__39:
			case SolidityParser.T__50:
			case SolidityParser.T__51:
			case SolidityParser.T__52:
			case SolidityParser.T__53:
			case SolidityParser.T__54:
			case SolidityParser.T__55:
			case SolidityParser.T__56:
			case SolidityParser.T__57:
			case SolidityParser.T__59:
			case SolidityParser.T__60:
			case SolidityParser.T__61:
			case SolidityParser.T__62:
			case SolidityParser.T__63:
			case SolidityParser.Int:
			case SolidityParser.Uint:
			case SolidityParser.Byte:
			case SolidityParser.Fixed:
			case SolidityParser.Ufixed:
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.PayableKeyword:
			case SolidityParser.TypeKeyword:
			case SolidityParser.Identifier:
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
					{
					this.state = 851;
					this.expressionList();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SolidityParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.expression(0);
			this.state = 857;
			this.match(SolidityParser.T__21);
			this.state = 858;
			this.functionCallArguments();
			this.state = 859;
			this.match(SolidityParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.state = 887;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 861;
				this.match(SolidityParser.T__21);
				{
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
					{
					this.state = 862;
					this.expression(0);
					}
				}

				this.state = 871;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 865;
					this.match(SolidityParser.T__14);
					this.state = 867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
						{
						this.state = 866;
						this.expression(0);
						}
					}

					}
					}
					this.state = 873;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 874;
				this.match(SolidityParser.T__22);
				}
				break;
			case SolidityParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 875;
				this.match(SolidityParser.T__32);
				this.state = 884;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__3) | (1 << SolidityParser.T__12) | (1 << SolidityParser.T__21))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SolidityParser.T__32 - 33)) | (1 << (SolidityParser.T__39 - 33)) | (1 << (SolidityParser.T__50 - 33)) | (1 << (SolidityParser.T__51 - 33)) | (1 << (SolidityParser.T__52 - 33)) | (1 << (SolidityParser.T__53 - 33)) | (1 << (SolidityParser.T__54 - 33)) | (1 << (SolidityParser.T__55 - 33)) | (1 << (SolidityParser.T__56 - 33)) | (1 << (SolidityParser.T__57 - 33)) | (1 << (SolidityParser.T__59 - 33)) | (1 << (SolidityParser.T__60 - 33)) | (1 << (SolidityParser.T__61 - 33)) | (1 << (SolidityParser.T__62 - 33)) | (1 << (SolidityParser.T__63 - 33)))) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & ((1 << (SolidityParser.Int - 93)) | (1 << (SolidityParser.Uint - 93)) | (1 << (SolidityParser.Byte - 93)) | (1 << (SolidityParser.Fixed - 93)) | (1 << (SolidityParser.Ufixed - 93)) | (1 << (SolidityParser.BooleanLiteral - 93)) | (1 << (SolidityParser.DecimalNumber - 93)) | (1 << (SolidityParser.HexNumber - 93)) | (1 << (SolidityParser.HexLiteralFragment - 93)) | (1 << (SolidityParser.PayableKeyword - 93)) | (1 << (SolidityParser.TypeKeyword - 93)) | (1 << (SolidityParser.Identifier - 93)) | (1 << (SolidityParser.StringLiteralFragment - 93)))) !== 0)) {
					{
					this.state = 876;
					this.expression(0);
					this.state = 881;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.T__14) {
						{
						{
						this.state = 877;
						this.match(SolidityParser.T__14);
						this.state = 878;
						this.expression(0);
						}
						}
						this.state = 883;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 886;
				this.match(SolidityParser.T__33);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNameExpression(): TypeNameExpressionContext {
		let _localctx: TypeNameExpressionContext = new TypeNameExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SolidityParser.RULE_typeNameExpression);
		try {
			this.state = 891;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 889;
				this.elementaryTypeName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 890;
				this.userDefinedTypeName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyItem(): AssemblyItemContext {
		let _localctx: AssemblyItemContext = new AssemblyItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_assemblyItem);
		try {
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 893;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 894;
				this.assemblyBlock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 895;
				this.assemblyExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 896;
				this.assemblyLocalDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 897;
				this.assemblyAssignment();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 898;
				this.assemblyStackAssignment();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 899;
				this.labelDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 900;
				this.assemblySwitch();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 901;
				this.assemblyFunctionDefinition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 902;
				this.assemblyFor();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 903;
				this.assemblyIf();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 904;
				this.match(SolidityParser.BreakKeyword);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 905;
				this.match(SolidityParser.ContinueKeyword);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 906;
				this.match(SolidityParser.LeaveKeyword);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 907;
				this.subAssembly();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 908;
				this.numberLiteral();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 909;
				this.stringLiteral();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 910;
				this.hexLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyBlock(): AssemblyBlockContext {
		let _localctx: AssemblyBlockContext = new AssemblyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_assemblyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 913;
			this.match(SolidityParser.T__13);
			this.state = 917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.T__12) | (1 << SolidityParser.T__13) | (1 << SolidityParser.T__25) | (1 << SolidityParser.T__28))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SolidityParser.T__39 - 40)) | (1 << (SolidityParser.T__40 - 40)) | (1 << (SolidityParser.T__45 - 40)) | (1 << (SolidityParser.T__47 - 40)) | (1 << (SolidityParser.T__51 - 40)) | (1 << (SolidityParser.T__54 - 40)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (SolidityParser.T__86 - 87)) | (1 << (SolidityParser.T__88 - 87)) | (1 << (SolidityParser.T__89 - 87)) | (1 << (SolidityParser.BooleanLiteral - 87)) | (1 << (SolidityParser.DecimalNumber - 87)) | (1 << (SolidityParser.HexNumber - 87)) | (1 << (SolidityParser.HexLiteralFragment - 87)) | (1 << (SolidityParser.BreakKeyword - 87)) | (1 << (SolidityParser.ContinueKeyword - 87)) | (1 << (SolidityParser.LeaveKeyword - 87)))) !== 0) || _la === SolidityParser.Identifier || _la === SolidityParser.StringLiteralFragment) {
				{
				{
				this.state = 914;
				this.assemblyItem();
				}
				}
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 920;
			this.match(SolidityParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyExpression(): AssemblyExpressionContext {
		let _localctx: AssemblyExpressionContext = new AssemblyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SolidityParser.RULE_assemblyExpression);
		try {
			this.state = 924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__12:
			case SolidityParser.T__39:
			case SolidityParser.T__47:
			case SolidityParser.T__51:
			case SolidityParser.T__54:
			case SolidityParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 922;
				this.assemblyCall();
				}
				break;
			case SolidityParser.BooleanLiteral:
			case SolidityParser.DecimalNumber:
			case SolidityParser.HexNumber:
			case SolidityParser.HexLiteralFragment:
			case SolidityParser.StringLiteralFragment:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 923;
				this.assemblyLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCall(): AssemblyCallContext {
		let _localctx: AssemblyCallContext = new AssemblyCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_assemblyCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 926;
				this.match(SolidityParser.T__47);
				}
				break;

			case 2:
				{
				this.state = 927;
				this.match(SolidityParser.T__51);
				}
				break;

			case 3:
				{
				this.state = 928;
				this.match(SolidityParser.T__54);
				}
				break;

			case 4:
				{
				this.state = 929;
				this.identifier();
				}
				break;
			}
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__21) {
				{
				this.state = 932;
				this.match(SolidityParser.T__21);
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__12 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (SolidityParser.T__39 - 40)) | (1 << (SolidityParser.T__47 - 40)) | (1 << (SolidityParser.T__51 - 40)) | (1 << (SolidityParser.T__54 - 40)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SolidityParser.BooleanLiteral - 98)) | (1 << (SolidityParser.DecimalNumber - 98)) | (1 << (SolidityParser.HexNumber - 98)) | (1 << (SolidityParser.HexLiteralFragment - 98)) | (1 << (SolidityParser.Identifier - 98)) | (1 << (SolidityParser.StringLiteralFragment - 98)))) !== 0)) {
					{
					this.state = 933;
					this.assemblyExpression();
					}
				}

				this.state = 940;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.T__14) {
					{
					{
					this.state = 936;
					this.match(SolidityParser.T__14);
					this.state = 937;
					this.assemblyExpression();
					}
					}
					this.state = 942;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 943;
				this.match(SolidityParser.T__22);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext {
		let _localctx: AssemblyLocalDefinitionContext = new AssemblyLocalDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_assemblyLocalDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 946;
			this.match(SolidityParser.T__86);
			this.state = 947;
			this.assemblyIdentifierList();
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__87) {
				{
				this.state = 948;
				this.match(SolidityParser.T__87);
				this.state = 949;
				this.assemblyExpression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyAssignment(): AssemblyAssignmentContext {
		let _localctx: AssemblyAssignmentContext = new AssemblyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SolidityParser.RULE_assemblyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.assemblyIdentifierList();
			this.state = 953;
			this.match(SolidityParser.T__87);
			this.state = 954;
			this.assemblyExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		let _localctx: AssemblyIdentifierListContext = new AssemblyIdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SolidityParser.RULE_assemblyIdentifierList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.identifier();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__14) {
				{
				{
				this.state = 957;
				this.match(SolidityParser.T__14);
				this.state = 958;
				this.identifier();
				}
				}
				this.state = 963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyStackAssignment(): AssemblyStackAssignmentContext {
		let _localctx: AssemblyStackAssignmentContext = new AssemblyStackAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SolidityParser.RULE_assemblyStackAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 964;
			this.match(SolidityParser.T__88);
			this.state = 965;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelDefinition(): LabelDefinitionContext {
		let _localctx: LabelDefinitionContext = new LabelDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SolidityParser.RULE_labelDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.identifier();
			this.state = 968;
			this.match(SolidityParser.T__58);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblySwitch(): AssemblySwitchContext {
		let _localctx: AssemblySwitchContext = new AssemblySwitchContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SolidityParser.RULE_assemblySwitch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(SolidityParser.T__89);
			this.state = 971;
			this.assemblyExpression();
			this.state = 975;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.T__90 || _la === SolidityParser.T__91) {
				{
				{
				this.state = 972;
				this.assemblyCase();
				}
				}
				this.state = 977;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyCase(): AssemblyCaseContext {
		let _localctx: AssemblyCaseContext = new AssemblyCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_assemblyCase);
		let _la: number;
		try {
			this.state = 987;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.T__90:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 978;
				this.match(SolidityParser.T__90);
				this.state = 979;
				this.assemblyLiteral();
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.T__58) {
					{
					this.state = 980;
					this.assemblyType();
					}
				}

				this.state = 983;
				this.assemblyBlock();
				}
				break;
			case SolidityParser.T__91:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 985;
				this.match(SolidityParser.T__91);
				this.state = 986;
				this.assemblyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext {
		let _localctx: AssemblyFunctionDefinitionContext = new AssemblyFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_assemblyFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(SolidityParser.T__28);
			this.state = 990;
			this.identifier();
			this.state = 991;
			this.match(SolidityParser.T__21);
			this.state = 993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier) {
				{
				this.state = 992;
				this.assemblyTypedVariableList();
				}
			}

			this.state = 995;
			this.match(SolidityParser.T__22);
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__60) {
				{
				this.state = 996;
				this.assemblyFunctionReturns();
				}
			}

			this.state = 999;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext {
		let _localctx: AssemblyFunctionReturnsContext = new AssemblyFunctionReturnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_assemblyFunctionReturns);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1001;
			this.match(SolidityParser.T__60);
			this.state = 1002;
			this.match(SolidityParser.T__5);
			this.state = 1003;
			this.assemblyTypedVariableList();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyFor(): AssemblyForContext {
		let _localctx: AssemblyForContext = new AssemblyForContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_assemblyFor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1005;
			this.match(SolidityParser.T__25);
			this.state = 1006;
			this.assemblyBlock();
			this.state = 1007;
			this.assemblyExpression();
			this.state = 1008;
			this.assemblyBlock();
			this.state = 1009;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyIf(): AssemblyIfContext {
		let _localctx: AssemblyIfContext = new AssemblyIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_assemblyIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1011;
			this.match(SolidityParser.T__40);
			this.state = 1012;
			this.assemblyExpression();
			this.state = 1013;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyLiteral(): AssemblyLiteralContext {
		let _localctx: AssemblyLiteralContext = new AssemblyLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_assemblyLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.StringLiteralFragment:
				{
				this.state = 1015;
				this.stringLiteral();
				}
				break;
			case SolidityParser.DecimalNumber:
				{
				this.state = 1016;
				this.match(SolidityParser.DecimalNumber);
				}
				break;
			case SolidityParser.HexNumber:
				{
				this.state = 1017;
				this.match(SolidityParser.HexNumber);
				}
				break;
			case SolidityParser.HexLiteralFragment:
				{
				this.state = 1018;
				this.hexLiteral();
				}
				break;
			case SolidityParser.BooleanLiteral:
				{
				this.state = 1019;
				this.match(SolidityParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1022;
				this.assemblyType();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyTypedVariableList(): AssemblyTypedVariableListContext {
		let _localctx: AssemblyTypedVariableListContext = new AssemblyTypedVariableListContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_assemblyTypedVariableList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.identifier();
			this.state = 1027;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__58) {
				{
				this.state = 1026;
				this.assemblyType();
				}
			}

			this.state = 1031;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.T__14) {
				{
				this.state = 1029;
				this.match(SolidityParser.T__14);
				this.state = 1030;
				this.assemblyTypedVariableList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblyType(): AssemblyTypeContext {
		let _localctx: AssemblyTypeContext = new AssemblyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_assemblyType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(SolidityParser.T__58);
			this.state = 1034;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subAssembly(): SubAssemblyContext {
		let _localctx: SubAssemblyContext = new SubAssemblyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_subAssembly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1036;
			this.match(SolidityParser.T__45);
			this.state = 1037;
			this.identifier();
			this.state = 1038;
			this.assemblyBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.DecimalNumber || _la === SolidityParser.HexNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				this.state = 1041;
				this.match(SolidityParser.NumberUnit);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.T__12 || _la === SolidityParser.T__39 || _la === SolidityParser.T__51 || _la === SolidityParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hexLiteral(): HexLiteralContext {
		let _localctx: HexLiteralContext = new HexLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SolidityParser.RULE_hexLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1047;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1046;
					this.match(SolidityParser.HexLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1049;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 120, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SolidityParser.RULE_stringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1052;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1051;
					this.match(SolidityParser.StringLiteralFragment);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 30:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 56:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 14);

		case 2:
			return this.precpred(this._ctx, 13);

		case 3:
			return this.precpred(this._ctx, 12);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 4);

		case 12:
			return this.precpred(this._ctx, 3);

		case 13:
			return this.precpred(this._ctx, 2);

		case 14:
			return this.precpred(this._ctx, 28);

		case 15:
			return this.precpred(this._ctx, 26);

		case 16:
			return this.precpred(this._ctx, 25);

		case 17:
			return this.precpred(this._ctx, 24);

		case 18:
			return this.precpred(this._ctx, 23);

		case 19:
			return this.precpred(this._ctx, 22);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x82\u0423\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02\xB8\n\x02" +
		"\f\x02\x0E\x02\xBB\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\xC8\n\x05\x03\x06\x03" +
		"\x06\x05\x06\xCC\n\x06\x03\x07\x05\x07\xCF\n\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x05\t\xD9\n\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\xDF\n\t\x03\t\x03\t\x05\t\xE3\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\xED\n\t\f\t\x0E\t\xF0\v\t\x03\t\x03\t\x03\t\x03\t" +
		"\x03\t\x05\t\xF7\n\t\x03\n\x03\n\x03\n\x05\n\xFC\n\n\x03\v\x05\v\xFF\n" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0107\n\v\f\v\x0E\v\u010A" +
		"\v\v\x05\v\u010C\n\v\x03\v\x03\v\x07\v\u0110\n\v\f\v\x0E\v\u0113\v\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x05\f\u011A\n\f\x03\f\x05\f\u011D\n\f\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u0126\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u012F\n\x0E\f\x0E\x0E\x0E" +
		"\u0132\v\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0137\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0140\n\x0F\f\x0F\x0E" +
		"\x0F\u0143\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0147\n\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x05\x10\u014E\n\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u015A\n\x11\f" +
		"\x11\x0E\x11\u015D\v\x11\x05\x11\u015F\n\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u0166\n\x12\x03\x12\x03\x12\x07\x12\u016A\n\x12\f" +
		"\x12\x0E\x12\u016D\v\x12\x03\x12\x03\x12\x05\x12\u0171\n\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u0177\n\x13\x03\x13\x03\x13\x05\x13\u017B" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0181\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u0186\n\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0193\n\x16\f" +
		"\x16\x0E\x16\u0196\v\x16\x03\x17\x03\x17\x03\x17\x05\x17\u019B\n\x17\x03" +
		"\x17\x05\x17\u019E\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A4" +
		"\n\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01AC\n" +
		"\x19\x03\x19\x03\x19\x07\x19\u01B0\n\x19\f\x19\x0E\x19\u01B3\v\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u01BD" +
		"\n\x1B\f\x1B\x0E\x1B\u01C0\v\x1B\x05\x1B\u01C2\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x05\x1C\u01C8\n\x1C\x03\x1C\x05\x1C\u01CB\n\x1C\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x07\x1D\u01D1\n\x1D\f\x1D\x0E\x1D\u01D4\v\x1D\x05" +
		"\x1D\u01D6\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u01DC\n\x1E\x03" +
		"\x1E\x05\x1E\u01DF\n\x1E\x03\x1F\x03\x1F\x05\x1F\u01E3\n\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x05 \u01EC\n \x03 \x03 \x03 \x05 \u01F1" +
		"\n \x03 \x07 \u01F4\n \f \x0E \u01F7\v \x03!\x03!\x03!\x07!\u01FC\n!\f" +
		"!\x0E!\u01FF\v!\x03\"\x03\"\x03\"\x03\"\x05\"\u0205\n\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03#\x03#\x03#\x03#\x05#\u020F\n#\x03$\x03$\x03%\x03%\x03&\x03" +
		"&\x07&\u0217\n&\f&\x0E&\u021A\v&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u022B\n\'\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0237\n)\x03*\x03" +
		"*\x03*\x05*\u023C\n*\x03*\x03*\x06*\u0240\n*\r*\x0E*\u0241\x03+\x03+\x05" +
		"+\u0246\n+\x03+\x05+\u0249\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x03-\x03-\x03-\x03-\x05-\u0257\n-\x03-\x03-\x05-\u025B\n-\x03-\x05-\u025E" +
		"\n-\x03-\x03-\x03-\x03.\x03.\x05.\u0265\n.\x03/\x03/\x05/\u0269\n/\x03" +
		"/\x03/\x030\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x032\x03" +
		"2\x032\x033\x033\x053\u027D\n3\x033\x033\x034\x034\x034\x035\x035\x03" +
		"5\x035\x036\x036\x036\x036\x036\x036\x036\x056\u028F\n6\x036\x036\x05" +
		"6\u0293\n6\x036\x036\x037\x057\u0298\n7\x037\x037\x057\u029C\n7\x077\u029E" +
		"\n7\f7\x0E7\u02A1\v7\x038\x038\x058\u02A5\n8\x038\x078\u02A8\n8\f8\x0E" +
		"8\u02AB\v8\x038\x058\u02AE\n8\x038\x038\x039\x039\x059\u02B4\n9\x039\x03" +
		"9\x039\x039\x039\x039\x039\x039\x039\x059\u02BF\n9\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x05:\u02D8\n:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05" +
		":\u0309\n:\x03:\x03:\x03:\x03:\x05:\u030F\n:\x03:\x03:\x05:\u0313\n:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x07" +
		":\u0323\n:\f:\x0E:\u0326\v:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u032F" +
		"\n;\x03;\x03;\x03;\x03;\x03;\x05;\u0336\n;\x05;\u0338\n;\x03<\x03<\x03" +
		"<\x07<\u033D\n<\f<\x0E<\u0340\v<\x03=\x03=\x03=\x07=\u0345\n=\f=\x0E=" +
		"\u0348\v=\x03=\x05=\u034B\n=\x03>\x03>\x03>\x03>\x03?\x03?\x05?\u0353" +
		"\n?\x03?\x03?\x05?\u0357\n?\x05?\u0359\n?\x03@\x03@\x03@\x03@\x03@\x03" +
		"A\x03A\x05A\u0362\nA\x03A\x03A\x05A\u0366\nA\x07A\u0368\nA\fA\x0EA\u036B" +
		"\vA\x03A\x03A\x03A\x03A\x03A\x07A\u0372\nA\fA\x0EA\u0375\vA\x05A\u0377" +
		"\nA\x03A\x05A\u037A\nA\x03B\x03B\x05B\u037E\nB\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05" +
		"C\u0392\nC\x03D\x03D\x07D\u0396\nD\fD\x0ED\u0399\vD\x03D\x03D\x03E\x03" +
		"E\x05E\u039F\nE\x03F\x03F\x03F\x03F\x05F\u03A5\nF\x03F\x03F\x05F\u03A9" +
		"\nF\x03F\x03F\x07F\u03AD\nF\fF\x0EF\u03B0\vF\x03F\x05F\u03B3\nF\x03G\x03" +
		"G\x03G\x03G\x05G\u03B9\nG\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x07I\u03C2" +
		"\nI\fI\x0EI\u03C5\vI\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x03L\x07" +
		"L\u03D0\nL\fL\x0EL\u03D3\vL\x03M\x03M\x03M\x05M\u03D8\nM\x03M\x03M\x03" +
		"M\x03M\x05M\u03DE\nM\x03N\x03N\x03N\x03N\x05N\u03E4\nN\x03N\x03N\x05N" +
		"\u03E8\nN\x03N\x03N\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03P" +
		"\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x05R\u03FF\nR\x03R\x05R" +
		"\u0402\nR\x03S\x03S\x05S\u0406\nS\x03S\x03S\x05S\u040A\nS\x03T\x03T\x03" +
		"T\x03U\x03U\x03U\x03U\x03V\x03V\x05V\u0415\nV\x03W\x03W\x03X\x06X\u041A" +
		"\nX\rX\x0EX\u041B\x03Y\x06Y\u041F\nY\rY\x0EY\u0420\x03Y\x02\x02\x04>r" +
		"Z\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02" +
		"~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02" +
		"\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02" +
		"\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\x02\x10" +
		"\x03\x02\x05\v\x03\x02\x14\x16\x03\x02(*\x06\x02llsswwyy\x03\x02:;\x03" +
		"\x02>?\x03\x02@A\x04\x02\x0E\x0EDE\x03\x02FG\x03\x02\x07\n\x03\x02JK\x04" +
		"\x02\v\vOX\x03\x02ef\x06\x02\x0F\x0F**66}}\x02\u04A4\x02\xB9\x03\x02\x02" +
		"\x02\x04\xBE\x03\x02\x02\x02\x06\xC3\x03\x02\x02\x02\b\xC7\x03\x02\x02" +
		"\x02\n\xC9\x03\x02\x02\x02\f\xCE\x03\x02\x02\x02\x0E\xD2\x03\x02\x02\x02" +
		"\x10\xF6\x03\x02\x02\x02\x12\xF8\x03\x02\x02\x02\x14\xFE\x03\x02\x02\x02" +
		"\x16\u0116\x03\x02\x02\x02\x18\u0125\x03\x02\x02\x02\x1A\u0127\x03\x02" +
		"\x02\x02\x1C\u013A\x03\x02\x02\x02\x1E\u0148\x03\x02\x02\x02 \u0151\x03" +
		"\x02\x02\x02\"\u0162\x03\x02\x02\x02$\u0172\x03\x02\x02\x02&\u0185\x03" +
		"\x02\x02\x02(\u0187\x03\x02\x02\x02*\u0194\x03\x02\x02\x02,\u0197\x03" +
		"\x02\x02\x02.\u019F\x03\x02\x02\x020\u01A7\x03\x02\x02\x022\u01B6\x03" +
		"\x02\x02\x024\u01B8\x03\x02\x02\x026\u01C5\x03\x02\x02\x028\u01CC\x03" +
		"\x02\x02\x02:\u01D9\x03\x02\x02\x02<\u01E0\x03\x02\x02\x02>\u01EB\x03" +
		"\x02\x02\x02@\u01F8\x03\x02\x02\x02B\u0200\x03\x02\x02\x02D\u020A\x03" +
		"\x02\x02\x02F\u0210\x03\x02\x02\x02H\u0212\x03\x02\x02\x02J\u0214\x03" +
		"\x02\x02\x02L\u022A\x03\x02\x02\x02N\u022C\x03\x02\x02\x02P\u022F\x03" +
		"\x02\x02\x02R\u0238\x03\x02\x02\x02T\u0243\x03\x02\x02\x02V\u024C\x03" +
		"\x02\x02\x02X\u0252\x03\x02\x02\x02Z\u0264\x03\x02\x02\x02\\\u0266\x03" +
		"\x02\x02\x02^\u026C\x03\x02\x02\x02`\u0274\x03\x02\x02\x02b\u0277\x03" +
		"\x02\x02\x02d\u027A\x03\x02\x02\x02f\u0280\x03\x02\x02\x02h\u0283\x03" +
		"\x02\x02\x02j\u028E\x03\x02\x02\x02l\u0297\x03\x02\x02\x02n\u02A2\x03" +
		"\x02\x02\x02p\u02BE\x03\x02\x02\x02r\u02D7\x03\x02\x02\x02t\u0337\x03" +
		"\x02\x02\x02v\u0339\x03\x02\x02\x02x\u0341\x03\x02\x02\x02z\u034C\x03" +
		"\x02\x02\x02|\u0358\x03\x02\x02\x02~\u035A\x03\x02\x02\x02\x80\u0379\x03" +
		"\x02\x02\x02\x82\u037D\x03\x02\x02\x02\x84\u0391\x03\x02\x02\x02\x86\u0393" +
		"\x03\x02\x02\x02\x88\u039E\x03\x02\x02\x02\x8A\u03A4\x03\x02\x02\x02\x8C" +
		"\u03B4\x03\x02\x02\x02\x8E\u03BA\x03\x02\x02\x02\x90\u03BE\x03\x02\x02" +
		"\x02\x92\u03C6\x03\x02\x02\x02\x94\u03C9\x03\x02\x02\x02\x96\u03CC\x03" +
		"\x02\x02\x02\x98\u03DD\x03\x02\x02\x02\x9A\u03DF\x03\x02\x02\x02\x9C\u03EB" +
		"\x03\x02\x02\x02\x9E\u03EF\x03\x02\x02\x02\xA0\u03F5\x03\x02\x02\x02\xA2" +
		"\u03FE\x03\x02\x02\x02\xA4\u0403\x03\x02\x02\x02\xA6\u040B\x03\x02\x02" +
		"\x02\xA8\u040E\x03\x02\x02\x02\xAA\u0412\x03\x02\x02\x02\xAC\u0416\x03" +
		"\x02\x02\x02\xAE\u0419\x03\x02\x02\x02\xB0\u041E\x03\x02\x02\x02\xB2\xB8" +
		"\x05\x04\x03\x02\xB3\xB8\x05\x10\t\x02\xB4\xB8\x05 \x11\x02\xB5\xB8\x05" +
		"0\x19\x02\xB6\xB8\x05\x14\v\x02\xB7\xB2\x03\x02\x02\x02\xB7\xB3\x03\x02" +
		"\x02\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB6\x03\x02" +
		"\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02" +
		"\x02\x02\xBA\xBC\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x07\x02" +
		"\x02\x03\xBD\x03\x03\x02\x02\x02\xBE\xBF\x07\x03\x02\x02\xBF\xC0\x05\x06" +
		"\x04\x02\xC0\xC1\x05\b\x05\x02\xC1\xC2\x07\x04\x02\x02\xC2\x05\x03\x02" +
		"\x02\x02\xC3\xC4\x05\xACW\x02\xC4\x07\x03\x02\x02\x02\xC5\xC8\x05\n\x06" +
		"\x02\xC6\xC8\x05r:\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02" +
		"\xC8\t\x03\x02\x02\x02\xC9\xCB\x05\f\x07\x02\xCA\xCC\x05\f\x07\x02\xCB" +
		"\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\v\x03\x02\x02\x02\xCD" +
		"\xCF\x05\x0E\b\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF" +
		"\xD0\x03\x02\x02\x02\xD0\xD1\x07\x7F\x02\x02\xD1\r\x03\x02\x02\x02\xD2" +
		"\xD3\t\x02\x02\x02\xD3\x0F\x03\x02\x02\x02\xD4\xD5\x07\f\x02\x02\xD5\xD8" +
		"\x07~\x02\x02\xD6\xD7\x07\r\x02\x02\xD7\xD9\x05\xACW\x02\xD8\xD6\x03\x02" +
		"\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xF7\x07\x04" +
		"\x02\x02\xDB\xDE\x07\f\x02\x02\xDC\xDF\x07\x0E\x02\x02\xDD\xDF\x05\xAC" +
		"W\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02" +
		"\x02\x02\xE0\xE1\x07\r\x02\x02\xE1\xE3\x05\xACW\x02\xE2\xE0\x03\x02\x02" +
		"\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x07\x0F\x02" +
		"\x02\xE5\xE6\x07~\x02\x02\xE6\xF7\x07\x04\x02\x02\xE7\xE8\x07\f\x02\x02" +
		"\xE8\xE9\x07\x10\x02\x02\xE9\xEE\x05\x12\n\x02\xEA\xEB\x07\x11\x02\x02" +
		"\xEB\xED\x05\x12\n\x02\xEC\xEA\x03\x02\x02\x02\xED\xF0\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02" +
		"\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x07\x12\x02\x02\xF2\xF3\x07\x0F\x02\x02" +
		"\xF3\xF4\x07~\x02\x02\xF4\xF5\x07\x04\x02\x02\xF5\xF7\x03\x02\x02\x02" +
		"\xF6\xD4\x03\x02\x02\x02\xF6\xDB\x03\x02\x02\x02\xF6\xE7\x03\x02\x02\x02" +
		"\xF7\x11\x03\x02\x02\x02\xF8\xFB\x05\xACW\x02\xF9\xFA\x07\r\x02\x02\xFA" +
		"\xFC\x05\xACW\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		"\x13\x03\x02\x02\x02\xFD\xFF\x07\x13\x02\x02\xFE\xFD\x03\x02\x02\x02\xFE" +
		"\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\t\x03\x02\x02" +
		"\u0101\u010B\x05\xACW\x02\u0102\u0103\x07\x17\x02\x02\u0103\u0108\x05" +
		"\x16\f\x02\u0104\u0105\x07\x11\x02\x02\u0105\u0107\x05\x16\f\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02" +
		"\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010C\x03\x02\x02\x02\u010A" +
		"\u0108\x03\x02\x02\x02\u010B\u0102\x03\x02\x02\x02\u010B\u010C\x03\x02" +
		"\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0111\x07\x10\x02\x02\u010E" +
		"\u0110\x05\x18\r\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02" +
		"\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114" +
		"\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u0115\x07\x12\x02\x02" +
		"\u0115\x15\x03\x02\x02\x02\u0116\u011C\x05@!\x02\u0117\u0119\x07\x18\x02" +
		"\x02\u0118\u011A\x05v<\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03" +
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011D\x07\x19\x02\x02\u011C" +
		"\u0117\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\x17\x03\x02\x02" +
		"\x02\u011E\u0126\x05\x1A\x0E\x02\u011F\u0126\x05\x1E\x10\x02\u0120\u0126" +
		"\x05 \x11\x02\u0121\u0126\x05\"\x12\x02\u0122\u0126\x05$\x13\x02\u0123" +
		"\u0126\x05.\x18\x02\u0124\u0126\x050\x19\x02\u0125\u011E\x03\x02\x02\x02" +
		"\u0125\u011F\x03\x02\x02\x02\u0125\u0120\x03\x02\x02\x02\u0125\u0121\x03" +
		"\x02\x02\x02\u0125\u0122\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125" +
		"\u0124\x03\x02\x02\x02\u0126\x19\x03\x02\x02\x02\u0127\u0130\x05> \x02" +
		"\u0128\u012F\x07u\x02\x02\u0129\u012F\x07r\x02\x02\u012A\u012F\x07t\x02" +
		"\x02\u012B\u012F\x07l\x02\x02\u012C\u012F\x07m\x02\x02\u012D\u012F\x05" +
		"\x1C\x0F\x02\u012E\u0128\x03\x02\x02\x02\u012E\u0129\x03\x02\x02\x02\u012E" +
		"\u012A\x03\x02\x02\x02\u012E\u012B\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012E\u012D\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02" +
		"\x02\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0136\x05\xACW\x02\u0134\u0135" +
		"\x07\v\x02\x02\u0135\u0137\x05r:\x02\u0136\u0134\x03\x02\x02\x02\u0136" +
		"\u0137\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x07\x04" +
		"\x02\x02\u0139\x1B\x03\x02\x02\x02\u013A\u0146\x07\x1A\x02\x02\u013B\u013C" +
		"\x07\x18\x02\x02\u013C\u0141\x05@!\x02\u013D\u013E\x07\x11\x02\x02\u013E" +
		"\u0140\x05@!\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02" +
		"\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0144\x03" +
		"\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0145\x07\x19\x02\x02\u0145" +
		"\u0147\x03\x02\x02\x02\u0146\u013B\x03\x02\x02\x02\u0146\u0147\x03\x02" +
		"\x02\x02\u0147\x1D\x03\x02\x02\x02\u0148\u0149\x07\x1B\x02\x02\u0149\u014A" +
		"\x05\xACW\x02\u014A\u014D\x07\x1C\x02\x02\u014B\u014E\x07\x0E\x02\x02" +
		"\u014C\u014E\x05> \x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C\x03\x02" +
		"\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x07\x04\x02\x02\u0150" +
		"\x1F\x03\x02\x02\x02\u0151\u0152\x07\x1D\x02\x02\u0152\u0153\x05\xACW" +
		"\x02\u0153\u015E\x07\x10\x02\x02\u0154\u0155\x05<\x1F\x02\u0155\u015B" +
		"\x07\x04\x02\x02\u0156\u0157\x05<\x1F\x02\u0157\u0158\x07\x04\x02\x02" +
		"\u0158\u015A\x03\x02\x02\x02\u0159\u0156\x03\x02\x02\x02\u015A\u015D\x03" +
		"\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C" +
		"\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0154\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0161\x07\x12\x02\x02\u0161!\x03\x02\x02\x02\u0162\u0163\x07\x1E\x02" +
		"\x02\u0163\u0165\x05\xACW\x02\u0164\u0166\x054\x1B\x02\u0165\u0164\x03" +
		"\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u016B\x03\x02\x02\x02\u0167" +
		"\u016A\x07v\x02\x02\u0168\u016A\x05\x1C\x0F\x02\u0169\u0167\x03\x02\x02" +
		"\x02\u0169\u0168\x03\x02\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u0169" +
		"\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u0170\x03\x02\x02\x02" +
		"\u016D\u016B\x03\x02\x02\x02\u016E\u0171\x07\x04\x02\x02\u016F\u0171\x05" +
		"J&\x02\u0170\u016E\x03\x02\x02\x02\u0170\u016F\x03\x02\x02\x02\u0171#" +
		"\x03\x02\x02\x02\u0172\u0173\x05&\x14\x02\u0173\u0174\x054\x1B\x02\u0174" +
		"\u0176\x05*\x16\x02\u0175\u0177\x05(\x15\x02\u0176\u0175\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u017B\x07" +
		"\x04\x02\x02\u0179\u017B\x05J&\x02\u017A\u0178\x03\x02\x02\x02\u017A\u0179" +
		"\x03\x02\x02\x02\u017B%\x03\x02\x02\x02\u017C\u0180\x07\x1F\x02\x02\u017D" +
		"\u0181\x05\xACW\x02\u017E\u0181\x07|\x02\x02\u017F\u0181\x07{\x02\x02" +
		"\u0180\u017D\x03\x02\x02\x02\u0180\u017E\x03\x02\x02\x02\u0180\u017F\x03" +
		"\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0186\x03\x02\x02\x02\u0182" +
		"\u0186\x07z\x02\x02\u0183\u0186\x07{\x02\x02\u0184\u0186\x07|\x02\x02" +
		"\u0185\u017C\x03\x02\x02\x02\u0185\u0182\x03\x02\x02\x02\u0185\u0183\x03" +
		"\x02\x02\x02\u0185\u0184\x03\x02\x02\x02\u0186\'\x03\x02\x02\x02\u0187" +
		"\u0188\x07 \x02\x02\u0188\u0189\x054\x1B\x02\u0189)\x03\x02\x02\x02\u018A" +
		"\u0193\x05,\x17\x02\u018B\u0193\x05H%\x02\u018C\u0193\x07p\x02\x02\u018D" +
		"\u0193\x07u\x02\x02\u018E\u0193\x07r\x02\x02\u018F\u0193\x07t\x02\x02" +
		"\u0190\u0193\x07v\x02\x02\u0191\u0193\x05\x1C\x0F\x02\u0192\u018A\x03" +
		"\x02\x02\x02\u0192\u018B\x03\x02\x02\x02\u0192\u018C\x03\x02\x02\x02\u0192" +
		"\u018D\x03\x02\x02\x02\u0192\u018E\x03\x02\x02\x02\u0192\u018F\x03\x02" +
		"\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0191\x03\x02\x02\x02\u0193" +
		"\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0195\x03\x02" +
		"\x02\x02\u0195+\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0197\u019D" +
		"\x05\xACW\x02\u0198\u019A\x07\x18\x02\x02\u0199\u019B\x05v<\x02\u019A" +
		"\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019C\x03\x02" +
		"\x02\x02\u019C\u019E\x07\x19\x02\x02\u019D\u0198\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E-\x03\x02\x02\x02\u019F\u01A0\x07!\x02\x02" +
		"\u01A0\u01A1\x05\xACW\x02\u01A1\u01A3\x058\x1D\x02\u01A2\u01A4\x07j\x02" +
		"\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A5" +
		"\x03\x02\x02\x02\u01A5\u01A6\x07\x04\x02\x02\u01A6/\x03\x02\x02\x02\u01A7" +
		"\u01A8\x07\"\x02\x02\u01A8\u01A9\x05\xACW\x02\u01A9\u01AB\x07\x10\x02" +
		"\x02\u01AA\u01AC\x052\x1A\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC" +
		"\x03\x02\x02\x02\u01AC\u01B1\x03\x02\x02\x02\u01AD\u01AE\x07\x11\x02\x02" +
		"\u01AE\u01B0\x052\x1A\x02\u01AF\u01AD\x03\x02\x02\x02\u01B0\u01B3\x03" +
		"\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B4\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B4\u01B5\x07\x12" +
		"\x02\x02\u01B51\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u01B6\u01B7\x05\xACW\x02\u01B73\x03\x02\x02\x02\u01B8\u01C1\x07" +
		"\x18\x02\x02\u01B9\u01BE\x056\x1C\x02\u01BA\u01BB\x07\x11\x02\x02\u01BB" +
		"\u01BD\x056\x1C\x02\u01BC\u01BA\x03\x02\x02\x02\u01BD\u01C0\x03\x02\x02" +
		"\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C2" +
		"\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01B9\x03\x02\x02\x02" +
		"\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x07" +
		"\x19\x02\x02\u01C45\x03\x02\x02\x02\u01C5\u01C7\x05> \x02\u01C6\u01C8" +
		"\x05F$\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8" +
		"\u01CA\x03\x02\x02\x02\u01C9\u01CB\x05\xACW\x02\u01CA\u01C9\x03\x02\x02" +
		"\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB7\x03\x02\x02\x02\u01CC\u01D5\x07" +
		"\x18\x02\x02\u01CD\u01D2\x05:\x1E\x02\u01CE\u01CF\x07\x11\x02\x02\u01CF" +
		"\u01D1\x05:\x1E\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D4\x03\x02\x02" +
		"\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D6" +
		"\x03\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D5\u01CD\x03\x02\x02\x02" +
		"\u01D5\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07" +
		"\x19\x02\x02\u01D89\x03\x02\x02\x02\u01D9\u01DB\x05> \x02\u01DA\u01DC" +
		"\x07q\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02" +
		"\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01DF\x05\xACW\x02\u01DE\u01DD\x03" +
		"\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF;\x03\x02\x02\x02\u01E0" +
		"\u01E2\x05> \x02\u01E1\u01E3\x05F$\x02\u01E2\u01E1\x03\x02\x02\x02\u01E2" +
		"\u01E3\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x05\xAC" +
		"W\x02\u01E5=\x03\x02\x02\x02\u01E6\u01E7\b \x01\x02\u01E7\u01EC\x05p9" +
		"\x02\u01E8\u01EC\x05@!\x02\u01E9\u01EC\x05B\"\x02\u01EA\u01EC\x05D#\x02" +
		"\u01EB\u01E6\x03\x02\x02\x02\u01EB\u01E8\x03\x02\x02\x02\u01EB\u01E9\x03" +
		"\x02\x02\x02\u01EB\u01EA\x03\x02\x02\x02\u01EC\u01F5\x03\x02\x02\x02\u01ED" +
		"\u01EE\f\x04\x02\x02\u01EE\u01F0\x07#\x02\x02\u01EF\u01F1\x05r:\x02\u01F0" +
		"\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02" +
		"\x02\x02\u01F2\u01F4\x07$\x02\x02\u01F3\u01ED\x03\x02\x02\x02\u01F4\u01F7" +
		"\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02" +
		"\u01F6?\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8\u01FD\x05\xAC" +
		"W\x02\u01F9\u01FA\x07%\x02\x02\u01FA\u01FC\x05\xACW\x02\u01FB\u01F9\x03" +
		"\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FEA\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02" +
		"\x02\u0200\u0201\x07&\x02\x02\u0201\u0204\x07\x18\x02\x02\u0202\u0205" +
		"\x05p9\x02\u0203\u0205\x05@!\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0203" +
		"\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x07\'\x02\x02" +
		"\u0207\u0208\x05> \x02\u0208\u0209\x07\x19\x02\x02\u0209C\x03\x02\x02" +
		"\x02\u020A\u020B\x07\x1F\x02\x02\u020B\u020C\x054\x1B\x02\u020C\u020E" +
		"\x05*\x16\x02\u020D\u020F\x05(\x15\x02\u020E\u020D\x03\x02\x02\x02\u020E" +
		"\u020F\x03\x02\x02\x02\u020FE\x03\x02\x02\x02\u0210\u0211\t\x04\x02\x02" +
		"\u0211G\x03\x02\x02\x02\u0212\u0213\t\x05\x02\x02\u0213I\x03\x02\x02\x02" +
		"\u0214\u0218\x07\x10\x02\x02\u0215\u0217\x05L\'\x02\u0216\u0215\x03\x02" +
		"\x02\x02\u0217\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218" +
		"\u0219\x03\x02\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u0218\x03\x02" +
		"\x02\x02\u021B\u021C\x07\x12\x02\x02\u021CK\x03\x02\x02\x02\u021D\u022B" +
		"\x05P)\x02\u021E\u022B\x05R*\x02\u021F\u022B\x05V,\x02\u0220\u022B\x05" +
		"X-\x02\u0221\u022B\x05J&\x02\u0222\u022B\x05\\/\x02\u0223\u022B\x05^0" +
		"\x02\u0224\u022B\x05`1\x02\u0225\u022B\x05b2\x02\u0226\u022B\x05d3\x02" +
		"\u0227\u022B\x05f4\x02\u0228\u022B\x05h5\x02\u0229\u022B\x05Z.\x02\u022A" +
		"\u021D\x03\x02\x02\x02\u022A\u021E\x03\x02\x02\x02\u022A\u021F\x03\x02" +
		"\x02\x02\u022A\u0220\x03\x02\x02\x02\u022A\u0221\x03\x02\x02\x02\u022A" +
		"\u0222\x03\x02\x02\x02\u022A\u0223\x03\x02\x02\x02\u022A\u0224\x03\x02" +
		"\x02\x02\u022A\u0225\x03\x02\x02\x02\u022A\u0226\x03\x02\x02\x02\u022A" +
		"\u0227\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02" +
		"\x02\x02\u022BM\x03\x02\x02\x02\u022C\u022D\x05r:\x02\u022D\u022E\x07" +
		"\x04\x02\x02\u022EO\x03\x02\x02\x02\u022F\u0230\x07+\x02\x02\u0230\u0231" +
		"\x07\x18\x02\x02\u0231\u0232\x05r:\x02\u0232\u0233\x07\x19\x02\x02\u0233" +
		"\u0236\x05L\'\x02\u0234\u0235\x07,\x02\x02\u0235\u0237\x05L\'\x02\u0236" +
		"\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237Q\x03\x02\x02" +
		"\x02\u0238\u0239\x07-\x02\x02\u0239\u023B\x05r:\x02\u023A\u023C\x05(\x15" +
		"\x02\u023B\u023A\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02\u023C\u023D" +
		"\x03\x02\x02\x02\u023D\u023F\x05J&\x02\u023E\u0240\x05T+\x02\u023F\u023E" +
		"\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242S\x03\x02\x02\x02\u0243\u0248\x07.\x02" +
		"\x02\u0244\u0246\x05\xACW\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246" +
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0249\x054\x1B\x02" +
		"\u0248\u0245\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024A\x03" +
		"\x02\x02\x02\u024A\u024B\x05J&\x02\u024BU\x03\x02\x02\x02\u024C\u024D" +
		"\x07/\x02\x02\u024D\u024E\x07\x18\x02\x02\u024E\u024F\x05r:\x02\u024F" +
		"\u0250\x07\x19\x02\x02\u0250\u0251\x05L\'\x02\u0251W\x03\x02\x02\x02\u0252" +
		"\u0253\x07\x1C\x02\x02\u0253\u0256\x07\x18\x02\x02\u0254\u0257\x05Z.\x02" +
		"\u0255\u0257\x07\x04\x02\x02\u0256\u0254\x03\x02\x02\x02\u0256\u0255\x03" +
		"\x02\x02\x02\u0257\u025A\x03\x02\x02\x02\u0258\u025B\x05N(\x02\u0259\u025B" +
		"\x07\x04\x02\x02\u025A\u0258\x03\x02\x02\x02\u025A\u0259\x03\x02\x02\x02" +
		"\u025B\u025D\x03\x02\x02\x02\u025C\u025E\x05r:\x02\u025D\u025C\x03\x02" +
		"\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F" +
		"\u0260\x07\x19\x02\x02\u0260\u0261\x05L\'\x02\u0261Y\x03\x02\x02\x02\u0262" +
		"\u0265\x05j6\x02\u0263\u0265\x05N(\x02\u0264\u0262\x03\x02\x02\x02\u0264" +
		"\u0263\x03\x02\x02\x02\u0265[\x03\x02\x02\x02\u0266\u0268\x070\x02\x02" +
		"\u0267\u0269\x07~\x02\x02\u0268\u0267\x03\x02\x02\x02\u0268\u0269\x03" +
		"\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x05\x86D\x02\u026B" +
		"]\x03\x02\x02\x02\u026C\u026D\x071\x02\x02\u026D\u026E\x05L\'\x02\u026E" +
		"\u026F\x07/\x02\x02\u026F\u0270\x07\x18\x02\x02\u0270\u0271\x05r:\x02" +
		"\u0271\u0272\x07\x19\x02\x02\u0272\u0273\x07\x04\x02\x02\u0273_\x03\x02" +
		"\x02\x02\u0274\u0275\x07n\x02\x02\u0275\u0276\x07\x04\x02\x02\u0276a\x03" +
		"\x02\x02\x02\u0277\u0278\x07k\x02\x02\u0278\u0279\x07\x04\x02\x02\u0279" +
		"c\x03\x02\x02\x02\u027A\u027C\x072\x02\x02\u027B\u027D\x05r:\x02\u027C" +
		"\u027B\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02" +
		"\x02\x02\u027E\u027F\x07\x04\x02\x02\u027Fe\x03\x02\x02\x02\u0280\u0281" +
		"\x073\x02\x02\u0281\u0282\x07\x04\x02\x02\u0282g\x03\x02\x02\x02\u0283" +
		"\u0284\x074\x02\x02\u0284\u0285\x05~@\x02\u0285\u0286\x07\x04\x02\x02" +
		"\u0286i\x03\x02\x02\x02\u0287\u0288\x075\x02\x02\u0288\u028F\x05n8\x02" +
		"\u0289\u028F\x05<\x1F\x02\u028A\u028B\x07\x18\x02\x02\u028B\u028C\x05" +
		"l7\x02\u028C\u028D\x07\x19\x02\x02\u028D\u028F\x03\x02\x02\x02\u028E\u0287" +
		"\x03\x02\x02\x02\u028E\u0289\x03\x02\x02\x02\u028E\u028A\x03\x02\x02\x02" +
		"\u028F\u0292\x03\x02\x02\x02\u0290\u0291\x07\v\x02\x02\u0291\u0293\x05" +
		"r:\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0294" +
		"\x03\x02\x02\x02\u0294\u0295\x07\x04\x02\x02\u0295k\x03\x02\x02\x02\u0296" +
		"\u0298\x05<\x1F\x02\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02" +
		"\x02\u0298\u029F\x03\x02\x02\x02\u0299\u029B\x07\x11\x02\x02\u029A\u029C" +
		"\x05<\x1F\x02\u029B\u029A\x03\x02\x02\x02\u029B\u029C\x03\x02\x02\x02" +
		"\u029C\u029E\x03\x02\x02\x02\u029D\u0299\x03\x02\x02\x02\u029E\u02A1\x03" +
		"\x02\x02\x02\u029F\u029D\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0" +
		"m\x03\x02\x02\x02\u02A1\u029F\x03\x02\x02\x02\u02A2\u02A9\x07\x18\x02" +
		"\x02\u02A3\u02A5\x05\xACW\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5" +
		"\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A8\x07\x11\x02\x02" +
		"\u02A7\u02A4\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02\u02A9\u02A7\x03" +
		"\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA\u02AD\x03\x02\x02\x02\u02AB" +
		"\u02A9\x03\x02\x02\x02\u02AC\u02AE\x05\xACW\x02\u02AD\u02AC\x03\x02\x02" +
		"\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02\x02\x02\u02AF\u02B0" +
		"\x07\x19\x02\x02\u02B0o\x03\x02\x02\x02\u02B1\u02B3\x076\x02\x02\u02B2" +
		"\u02B4\x07s\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02" +
		"\x02\u02B4\u02BF\x03\x02\x02\x02\u02B5\u02BF\x077\x02\x02\u02B6\u02BF" +
		"\x078\x02\x02\u02B7\u02BF\x075\x02\x02\u02B8\u02BF\x07_\x02\x02\u02B9" +
		"\u02BF\x07`\x02\x02\u02BA\u02BF\x079\x02\x02\u02BB\u02BF\x07a\x02\x02" +
		"\u02BC\u02BF\x07b\x02\x02\u02BD\u02BF\x07c\x02\x02\u02BE\u02B1\x03\x02" +
		"\x02\x02\u02BE\u02B5\x03\x02\x02\x02\u02BE\u02B6\x03\x02\x02\x02\u02BE" +
		"\u02B7\x03\x02\x02\x02\u02BE\u02B8\x03\x02\x02\x02\u02BE\u02B9\x03\x02" +
		"\x02\x02\u02BE\u02BA\x03\x02\x02\x02\u02BE\u02BB\x03\x02\x02\x02\u02BE" +
		"\u02BC\x03\x02\x02\x02\u02BE\u02BD\x03\x02\x02\x02\u02BFq\x03\x02\x02" +
		"\x02\u02C0\u02C1\b:\x01\x02\u02C1\u02C2\x07<\x02\x02\u02C2\u02D8\x05>" +
		" \x02\u02C3\u02C4\x07s\x02\x02\u02C4\u02C5\x07\x18\x02\x02\u02C5\u02C6" +
		"\x05r:\x02\u02C6\u02C7\x07\x19\x02\x02\u02C7\u02D8\x03\x02\x02\x02\u02C8" +
		"\u02C9\x07\x18\x02\x02\u02C9\u02CA\x05r:\x02\u02CA\u02CB\x07\x19\x02\x02" +
		"\u02CB\u02D8\x03\x02\x02\x02\u02CC\u02CD\t\x06\x02\x02\u02CD\u02D8\x05" +
		"r:\x15\u02CE\u02CF\t\x07\x02\x02\u02CF\u02D8\x05r:\x14\u02D0\u02D1\t\b" +
		"\x02\x02\u02D1\u02D8\x05r:\x13\u02D2\u02D3\x07B\x02\x02\u02D3\u02D8\x05" +
		"r:\x12\u02D4\u02D5\x07\x06\x02\x02\u02D5\u02D8\x05r:\x11\u02D6\u02D8\x05" +
		"t;\x02\u02D7\u02C0\x03\x02\x02\x02\u02D7\u02C3\x03\x02\x02\x02\u02D7\u02C8" +
		"\x03\x02\x02\x02\u02D7\u02CC\x03\x02\x02\x02\u02D7\u02CE\x03\x02\x02\x02" +
		"\u02D7\u02D0\x03\x02\x02\x02\u02D7\u02D2\x03\x02\x02\x02\u02D7\u02D4\x03" +
		"\x02\x02\x02\u02D7\u02D6\x03\x02\x02\x02\u02D8\u0324\x03\x02\x02\x02\u02D9" +
		"\u02DA\f\x10\x02\x02\u02DA\u02DB\x07C\x02\x02\u02DB\u0323\x05r:\x11\u02DC" +
		"\u02DD\f\x0F\x02\x02\u02DD\u02DE\t\t\x02\x02\u02DE\u0323\x05r:\x10\u02DF" +
		"\u02E0\f\x0E\x02\x02\u02E0\u02E1\t\x07\x02\x02\u02E1\u0323\x05r:\x0F\u02E2" +
		"\u02E3\f\r\x02\x02\u02E3\u02E4\t\n\x02\x02\u02E4\u0323\x05r:\x0E\u02E5" +
		"\u02E6\f\f\x02\x02\u02E6\u02E7\x07H\x02\x02\u02E7\u0323\x05r:\r\u02E8" +
		"\u02E9\f\v\x02\x02\u02E9\u02EA\x07\x05\x02\x02\u02EA\u0323\x05r:\f\u02EB" +
		"\u02EC\f\n\x02\x02\u02EC\u02ED\x07I\x02\x02\u02ED\u0323\x05r:\v\u02EE" +
		"\u02EF\f\t\x02\x02\u02EF\u02F0\t\v\x02\x02\u02F0\u0323\x05r:\n\u02F1\u02F2" +
		"\f\b\x02\x02\u02F2\u02F3\t\f\x02\x02\u02F3\u0323\x05r:\t\u02F4\u02F5\f" +
		"\x07\x02\x02\u02F5\u02F6\x07L\x02\x02\u02F6\u0323\x05r:\b\u02F7\u02F8" +
		"\f\x06\x02\x02\u02F8\u02F9\x07M\x02\x02\u02F9\u0323\x05r:\x07\u02FA\u02FB" +
		"\f\x05\x02\x02\u02FB\u02FC\x07N\x02\x02\u02FC\u02FD\x05r:\x02\u02FD\u02FE" +
		"\x07=\x02\x02\u02FE\u02FF\x05r:\x06\u02FF\u0323\x03\x02\x02\x02\u0300" +
		"\u0301\f\x04\x02\x02\u0301\u0302\t\r\x02\x02\u0302\u0323\x05r:\x05\u0303" +
		"\u0304\f\x1E\x02\x02\u0304\u0323\t\x06\x02\x02\u0305\u0306\f\x1C\x02\x02" +
		"\u0306\u0308\x07#\x02\x02\u0307\u0309\x05r:\x02\u0308\u0307\x03\x02\x02" +
		"\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u0323" +
		"\x07$\x02\x02\u030B\u030C\f\x1B\x02\x02\u030C\u030E\x07#\x02\x02\u030D" +
		"\u030F\x05r:\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02" +
		"\u030F\u0310\x03\x02\x02\x02\u0310\u0312\x07=\x02\x02\u0311\u0313\x05" +
		"r:\x02\u0312\u0311\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314" +
		"\x03\x02\x02\x02\u0314\u0323\x07$\x02\x02\u0315\u0316\f\x1A\x02\x02\u0316" +
		"\u0317\x07%\x02\x02\u0317\u0323\x05\xACW\x02\u0318\u0319\f\x19\x02\x02" +
		"\u0319\u031A\x07\x10\x02\x02\u031A\u031B\x05x=\x02\u031B\u031C\x07\x12" +
		"\x02\x02\u031C\u0323\x03\x02\x02\x02\u031D\u031E\f\x18\x02\x02\u031E\u031F" +
		"\x07\x18\x02\x02\u031F\u0320\x05|?\x02\u0320\u0321\x07\x19\x02\x02\u0321" +
		"\u0323\x03\x02\x02\x02\u0322\u02D9\x03\x02\x02\x02\u0322\u02DC\x03\x02" +
		"\x02\x02\u0322\u02DF\x03\x02\x02\x02\u0322\u02E2\x03\x02\x02\x02\u0322" +
		"\u02E5\x03\x02\x02\x02\u0322\u02E8\x03\x02\x02\x02\u0322\u02EB\x03\x02" +
		"\x02\x02\u0322\u02EE\x03\x02\x02\x02\u0322\u02F1\x03\x02\x02\x02\u0322" +
		"\u02F4\x03\x02\x02\x02\u0322\u02F7\x03\x02\x02\x02\u0322\u02FA\x03\x02" +
		"\x02\x02\u0322\u0300\x03\x02\x02\x02\u0322\u0303\x03\x02\x02\x02\u0322" +
		"\u0305\x03\x02\x02\x02\u0322\u030B\x03\x02\x02\x02\u0322\u0315\x03\x02" +
		"\x02\x02\u0322\u0318\x03\x02\x02\x02\u0322\u031D\x03\x02\x02\x02\u0323" +
		"\u0326\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0324\u0325\x03\x02" +
		"\x02\x02\u0325s\x03\x02\x02\x02\u0326\u0324\x03\x02\x02\x02\u0327\u0338" +
		"\x07d\x02\x02\u0328\u0338\x05\xAAV\x02\u0329\u0338\x05\xAEX\x02\u032A" +
		"\u0338\x05\xB0Y\x02\u032B\u032E\x05\xACW\x02\u032C\u032D\x07#\x02\x02" +
		"\u032D\u032F\x07$\x02\x02\u032E\u032C\x03\x02\x02\x02\u032E\u032F\x03" +
		"\x02\x02\x02\u032F\u0338\x03\x02\x02\x02\u0330\u0338\x07x\x02\x02\u0331" +
		"\u0338\x05\x80A\x02\u0332\u0335\x05\x82B\x02\u0333\u0334\x07#\x02\x02" +
		"\u0334\u0336\x07$\x02\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0336\x03" +
		"\x02\x02\x02\u0336\u0338\x03\x02\x02\x02\u0337\u0327\x03\x02\x02\x02\u0337" +
		"\u0328\x03\x02\x02\x02\u0337\u0329\x03\x02\x02\x02\u0337\u032A\x03\x02" +
		"\x02\x02\u0337\u032B\x03\x02\x02\x02\u0337\u0330\x03\x02\x02\x02\u0337" +
		"\u0331\x03\x02\x02\x02\u0337\u0332\x03\x02\x02\x02\u0338u\x03\x02\x02" +
		"\x02\u0339\u033E\x05r:\x02\u033A\u033B\x07\x11\x02\x02\u033B\u033D\x05" +
		"r:\x02\u033C\u033A\x03\x02\x02\x02\u033D\u0340\x03\x02\x02\x02\u033E\u033C" +
		"\x03\x02\x02\x02\u033E\u033F\x03\x02\x02\x02\u033Fw\x03\x02\x02\x02\u0340" +
		"\u033E\x03\x02\x02\x02\u0341\u0346\x05z>\x02\u0342\u0343\x07\x11\x02\x02" +
		"\u0343\u0345\x05z>\x02\u0344\u0342\x03\x02\x02\x02\u0345\u0348\x03\x02" +
		"\x02\x02\u0346\u0344\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347" +
		"\u034A\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0349\u034B\x07\x11" +
		"\x02\x02\u034A\u0349\x03\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B" +
		"y\x03\x02\x02\x02\u034C\u034D\x05\xACW\x02\u034D\u034E\x07=\x02\x02\u034E" +
		"\u034F\x05r:\x02\u034F{\x03\x02\x02\x02\u0350\u0352\x07\x10\x02\x02\u0351" +
		"\u0353\x05x=\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02" +
		"\u0353\u0354\x03\x02\x02\x02\u0354\u0359\x07\x12\x02\x02\u0355\u0357\x05" +
		"v<\x02\u0356\u0355\x03\x02\x02\x02\u0356\u0357\x03\x02\x02\x02\u0357\u0359" +
		"\x03\x02\x02\x02\u0358\u0350\x03\x02\x02\x02\u0358\u0356\x03\x02\x02\x02" +
		"\u0359}\x03\x02\x02\x02\u035A\u035B\x05r:\x02\u035B\u035C\x07\x18\x02" +
		"\x02\u035C\u035D\x05|?\x02\u035D\u035E\x07\x19\x02\x02\u035E\x7F\x03\x02" +
		"\x02\x02\u035F\u0361\x07\x18\x02\x02\u0360\u0362\x05r:\x02\u0361\u0360" +
		"\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0369\x03\x02\x02\x02" +
		"\u0363\u0365\x07\x11\x02\x02\u0364\u0366\x05r:\x02\u0365\u0364\x03\x02" +
		"\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0368\x03\x02\x02\x02\u0367" +
		"\u0363\x03\x02\x02\x02\u0368\u036B\x03\x02\x02\x02\u0369\u0367\x03\x02" +
		"\x02\x02\u0369\u036A\x03\x02\x02\x02\u036A\u036C\x03\x02\x02\x02\u036B" +
		"\u0369\x03\x02\x02\x02\u036C\u037A\x07\x19\x02\x02\u036D\u0376\x07#\x02" +
		"\x02\u036E\u0373\x05r:\x02\u036F\u0370\x07\x11\x02\x02\u0370\u0372\x05" +
		"r:\x02\u0371\u036F\x03\x02\x02\x02\u0372\u0375\x03\x02\x02\x02\u0373\u0371" +
		"\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0377\x03\x02\x02\x02" +
		"\u0375\u0373\x03\x02\x02\x02\u0376\u036E\x03\x02\x02\x02\u0376\u0377\x03" +
		"\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x07$\x02\x02\u0379" +
		"\u035F\x03\x02\x02\x02\u0379\u036D\x03\x02\x02\x02\u037A\x81\x03\x02\x02" +
		"\x02\u037B\u037E\x05p9\x02\u037C\u037E\x05@!\x02\u037D\u037B\x03\x02\x02" +
		"\x02\u037D\u037C\x03\x02\x02\x02\u037E\x83\x03\x02\x02\x02\u037F\u0392" +
		"\x05\xACW\x02\u0380\u0392\x05\x86D\x02\u0381\u0392\x05\x88E\x02\u0382" +
		"\u0392\x05\x8CG\x02\u0383\u0392\x05\x8EH\x02\u0384\u0392\x05\x92J\x02" +
		"\u0385\u0392\x05\x94K\x02\u0386\u0392\x05\x96L\x02\u0387\u0392\x05\x9A" +
		"N\x02\u0388\u0392\x05\x9EP\x02\u0389\u0392\x05\xA0Q\x02\u038A\u0392\x07" +
		"k\x02\x02\u038B\u0392\x07n\x02\x02\u038C\u0392\x07o\x02\x02\u038D\u0392" +
		"\x05\xA8U\x02\u038E\u0392\x05\xAAV\x02\u038F\u0392\x05\xB0Y\x02\u0390" +
		"\u0392\x05\xAEX\x02\u0391\u037F\x03\x02\x02\x02\u0391\u0380\x03\x02\x02" +
		"\x02\u0391\u0381\x03\x02\x02\x02\u0391\u0382\x03\x02\x02\x02\u0391\u0383" +
		"\x03\x02\x02\x02\u0391\u0384\x03\x02\x02\x02\u0391\u0385\x03\x02\x02\x02" +
		"\u0391\u0386\x03\x02\x02\x02\u0391\u0387\x03\x02\x02\x02\u0391\u0388\x03" +
		"\x02\x02\x02\u0391\u0389\x03\x02\x02\x02\u0391\u038A\x03\x02\x02\x02\u0391" +
		"\u038B\x03\x02\x02\x02\u0391\u038C\x03\x02\x02\x02\u0391\u038D\x03\x02" +
		"\x02\x02\u0391\u038E\x03\x02\x02\x02\u0391\u038F\x03\x02\x02\x02\u0391" +
		"\u0390\x03\x02\x02\x02\u0392\x85\x03\x02\x02\x02\u0393\u0397\x07\x10\x02" +
		"\x02\u0394\u0396\x05\x84C\x02\u0395\u0394\x03\x02\x02\x02\u0396\u0399" +
		"\x03\x02\x02\x02\u0397\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02" +
		"\u0398\u039A\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u039A\u039B\x07" +
		"\x12\x02\x02\u039B\x87\x03\x02\x02\x02\u039C\u039F\x05\x8AF\x02\u039D" +
		"\u039F\x05\xA2R\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039D\x03\x02\x02" +
		"\x02\u039F\x89\x03\x02\x02\x02\u03A0\u03A5\x072\x02\x02\u03A1\u03A5\x07" +
		"6\x02\x02\u03A2\u03A5\x079\x02\x02\u03A3\u03A5\x05\xACW\x02\u03A4\u03A0" +
		"\x03\x02\x02\x02\u03A4\u03A1\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02" +
		"\u03A4\u03A3\x03\x02\x02\x02\u03A5\u03B2\x03\x02\x02\x02\u03A6\u03A8\x07" +
		"\x18\x02\x02\u03A7\u03A9\x05\x88E\x02\u03A8\u03A7\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9\u03AE\x03\x02\x02\x02\u03AA\u03AB\x07\x11" +
		"\x02\x02\u03AB\u03AD\x05\x88E\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\u03B0" +
		"\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02" +
		"\u03AF\u03B1\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B3\x07" +
		"\x19\x02\x02\u03B2\u03A6\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\x8B\x03\x02\x02\x02\u03B4\u03B5\x07Y\x02\x02\u03B5\u03B8\x05\x90I\x02" +
		"\u03B6\u03B7\x07Z\x02\x02\u03B7\u03B9\x05\x88E\x02\u03B8\u03B6\x03\x02" +
		"\x02\x02\u03B8\u03B9\x03\x02\x02\x02\u03B9\x8D\x03\x02\x02\x02\u03BA\u03BB" +
		"\x05\x90I\x02\u03BB\u03BC\x07Z\x02\x02\u03BC\u03BD\x05\x88E\x02\u03BD" +
		"\x8F\x03\x02\x02\x02\u03BE\u03C3\x05\xACW\x02\u03BF\u03C0\x07\x11\x02" +
		"\x02\u03C0\u03C2\x05\xACW\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C5" +
		"\x03\x02\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02" +
		"\u03C4\x91\x03\x02\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C6\u03C7\x07" +
		"[\x02\x02\u03C7\u03C8\x05\xACW\x02\u03C8\x93\x03\x02\x02\x02\u03C9\u03CA" +
		"\x05\xACW\x02\u03CA\u03CB\x07=\x02\x02\u03CB\x95\x03\x02\x02\x02\u03CC" +
		"\u03CD\x07\\\x02\x02\u03CD\u03D1\x05\x88E\x02\u03CE\u03D0\x05\x98M\x02" +
		"\u03CF\u03CE\x03\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03" +
		"\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2\x97\x03\x02\x02\x02\u03D3" +
		"\u03D1\x03\x02\x02\x02\u03D4\u03D5\x07]\x02\x02\u03D5\u03D7\x05\xA2R\x02" +
		"\u03D6\u03D8\x05\xA6T\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7\u03D8\x03" +
		"\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DA\x05\x86D\x02\u03DA" +
		"\u03DE\x03\x02\x02\x02\u03DB\u03DC\x07^\x02\x02\u03DC\u03DE\x05\x86D\x02" +
		"\u03DD\u03D4\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DE\x99\x03" +
		"\x02\x02\x02\u03DF\u03E0\x07\x1F\x02\x02\u03E0\u03E1\x05\xACW\x02\u03E1" +
		"\u03E3\x07\x18\x02\x02\u03E2\u03E4\x05\xA4S\x02\u03E3\u03E2\x03\x02\x02" +
		"\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E7" +
		"\x07\x19\x02\x02\u03E6\u03E8\x05\x9CO\x02\u03E7\u03E6\x03\x02\x02\x02" +
		"\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9\u03EA\x05" +
		"\x86D\x02\u03EA\x9B\x03\x02\x02\x02\u03EB\u03EC\x07?\x02\x02\u03EC\u03ED" +
		"\x07\b\x02\x02\u03ED\u03EE\x05\xA4S\x02\u03EE\x9D\x03\x02\x02\x02\u03EF" +
		"\u03F0\x07\x1C\x02\x02\u03F0\u03F1\x05\x86D\x02\u03F1\u03F2\x05\x88E\x02" +
		"\u03F2\u03F3\x05\x86D\x02\u03F3\u03F4\x05\x86D\x02\u03F4\x9F\x03\x02\x02" +
		"\x02\u03F5\u03F6\x07+\x02\x02\u03F6\u03F7\x05\x88E\x02\u03F7\u03F8\x05" +
		"\x86D\x02\u03F8\xA1\x03\x02\x02\x02\u03F9\u03FF\x05\xB0Y\x02\u03FA\u03FF" +
		"\x07e\x02\x02\u03FB\u03FF\x07f\x02\x02\u03FC\u03FF\x05\xAEX\x02\u03FD" +
		"\u03FF\x07d\x02\x02\u03FE\u03F9\x03\x02\x02\x02\u03FE\u03FA\x03\x02\x02" +
		"\x02\u03FE\u03FB\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FD" +
		"\x03\x02\x02\x02\u03FF\u0401\x03\x02\x02\x02\u0400\u0402\x05\xA6T\x02" +
		"\u0401\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\xA3\x03" +
		"\x02\x02\x02\u0403\u0405\x05\xACW\x02\u0404\u0406\x05\xA6T\x02\u0405\u0404" +
		"\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02" +
		"\u0407\u0408\x07\x11\x02\x02\u0408\u040A\x05\xA4S\x02\u0409\u0407\x03" +
		"\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\xA5\x03\x02\x02\x02\u040B" +
		"\u040C\x07=\x02\x02\u040C\u040D\x05\xACW\x02\u040D\xA7\x03\x02\x02\x02" +
		"\u040E\u040F\x070\x02\x02\u040F\u0410\x05\xACW\x02\u0410\u0411\x05\x86" +
		"D\x02\u0411\xA9\x03\x02\x02\x02\u0412\u0414\t\x0E\x02\x02\u0413\u0415" +
		"\x07g\x02\x02\u0414\u0413\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02" +
		"\u0415\xAB\x03\x02\x02\x02\u0416\u0417\t\x0F\x02\x02\u0417\xAD\x03\x02" +
		"\x02\x02\u0418\u041A\x07h\x02\x02\u0419\u0418\x03\x02\x02\x02\u041A\u041B" +
		"\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02" +
		"\u041C\xAF\x03\x02\x02\x02\u041D\u041F\x07~\x02\x02\u041E\u041D\x03\x02" +
		"\x02\x02\u041F\u0420\x03\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0420" +
		"\u0421\x03\x02\x02\x02\u0421\xB1\x03\x02\x02\x02|\xB7\xB9\xC7\xCB\xCE" +
		"\xD8\xDE\xE2\xEE\xF6\xFB\xFE\u0108\u010B\u0111\u0119\u011C\u0125\u012E" +
		"\u0130\u0136\u0141\u0146\u014D\u015B\u015E\u0165\u0169\u016B\u0170\u0176" +
		"\u017A\u0180\u0185\u0192\u0194\u019A\u019D\u01A3\u01AB\u01B1\u01BE\u01C1" +
		"\u01C7\u01CA\u01D2\u01D5\u01DB\u01DE\u01E2\u01EB\u01F0\u01F5\u01FD\u0204" +
		"\u020E\u0218\u022A\u0236\u023B\u0241\u0245\u0248\u0256\u025A\u025D\u0264" +
		"\u0268\u027C\u028E\u0292\u0297\u029B\u029F\u02A4\u02A9\u02AD\u02B3\u02BE" +
		"\u02D7\u0308\u030E\u0312\u0322\u0324\u032E\u0335\u0337\u033E\u0346\u034A" +
		"\u0352\u0356\u0358\u0361\u0365\u0369\u0373\u0376\u0379\u037D\u0391\u0397" +
		"\u039E\u03A4\u03A8\u03AE\u03B2\u03B8\u03C3\u03D1\u03D7\u03DD\u03E3\u03E7" +
		"\u03FE\u0401\u0405\u0409\u0414\u041B\u0420";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SolidityParser.__ATN) {
			SolidityParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SolidityParser._serializedATN));
		}

		return SolidityParser.__ATN;
	}

}

export class SourceUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(SolidityParser.EOF, 0); }
	public pragmaDirective(): PragmaDirectiveContext[];
	public pragmaDirective(i: number): PragmaDirectiveContext;
	public pragmaDirective(i?: number): PragmaDirectiveContext | PragmaDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PragmaDirectiveContext);
		} else {
			return this.getRuleContext(i, PragmaDirectiveContext);
		}
	}
	public importDirective(): ImportDirectiveContext[];
	public importDirective(i: number): ImportDirectiveContext;
	public importDirective(i?: number): ImportDirectiveContext | ImportDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDirectiveContext);
		} else {
			return this.getRuleContext(i, ImportDirectiveContext);
		}
	}
	public structDefinition(): StructDefinitionContext[];
	public structDefinition(i: number): StructDefinitionContext;
	public structDefinition(i?: number): StructDefinitionContext | StructDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructDefinitionContext);
		} else {
			return this.getRuleContext(i, StructDefinitionContext);
		}
	}
	public enumDefinition(): EnumDefinitionContext[];
	public enumDefinition(i: number): EnumDefinitionContext;
	public enumDefinition(i?: number): EnumDefinitionContext | EnumDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumDefinitionContext);
		} else {
			return this.getRuleContext(i, EnumDefinitionContext);
		}
	}
	public contractDefinition(): ContractDefinitionContext[];
	public contractDefinition(i: number): ContractDefinitionContext;
	public contractDefinition(i?: number): ContractDefinitionContext | ContractDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractDefinitionContext);
		} else {
			return this.getRuleContext(i, ContractDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public pragmaName(): PragmaNameContext {
		return this.getRuleContext(0, PragmaNameContext);
	}
	public pragmaValue(): PragmaValueContext {
		return this.getRuleContext(0, PragmaValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaName) {
			listener.enterPragmaName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaName) {
			listener.exitPragmaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaName) {
			return visitor.visitPragmaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaValueContext extends ParserRuleContext {
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPragmaValue) {
			listener.enterPragmaValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPragmaValue) {
			listener.exitPragmaValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPragmaValue) {
			return visitor.visitPragmaValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public versionConstraint(): VersionConstraintContext[];
	public versionConstraint(i: number): VersionConstraintContext;
	public versionConstraint(i?: number): VersionConstraintContext | VersionConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VersionConstraintContext);
		} else {
			return this.getRuleContext(i, VersionConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_version; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionConstraintContext extends ParserRuleContext {
	public VersionLiteral(): TerminalNode { return this.getToken(SolidityParser.VersionLiteral, 0); }
	public versionOperator(): VersionOperatorContext | undefined {
		return this.tryGetRuleContext(0, VersionOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionConstraint; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionConstraint) {
			listener.enterVersionConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionConstraint) {
			listener.exitVersionConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionConstraint) {
			return visitor.visitVersionConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_versionOperator; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVersionOperator) {
			listener.enterVersionOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVersionOperator) {
			listener.exitVersionOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVersionOperator) {
			return visitor.visitVersionOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode { return this.getToken(SolidityParser.StringLiteralFragment, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterImportDeclaration) {
			listener.enterImportDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitImportDeclaration) {
			listener.exitImportDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public contractPart(): ContractPartContext[];
	public contractPart(i: number): ContractPartContext;
	public contractPart(i?: number): ContractPartContext | ContractPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractPartContext);
		} else {
			return this.getRuleContext(i, ContractPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext {
		return this.getRuleContext(0, UserDefinedTypeNameContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractPartContext extends ParserRuleContext {
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public usingForDeclaration(): UsingForDeclarationContext | undefined {
		return this.tryGetRuleContext(0, UsingForDeclarationContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractPart; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContractPart) {
			listener.enterContractPart(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContractPart) {
			listener.exitContractPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContractPart) {
			return visitor.visitContractPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public ConstantKeyword(): TerminalNode[];
	public ConstantKeyword(i: number): TerminalNode;
	public ConstantKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ConstantKeyword);
		} else {
			return this.getToken(SolidityParser.ConstantKeyword, i);
		}
	}
	public ImmutableKeyword(): TerminalNode[];
	public ImmutableKeyword(i: number): TerminalNode;
	public ImmutableKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ImmutableKeyword);
		} else {
			return this.getToken(SolidityParser.ImmutableKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	public userDefinedTypeName(): UserDefinedTypeNameContext[];
	public userDefinedTypeName(i: number): UserDefinedTypeNameContext;
	public userDefinedTypeName(i?: number): UserDefinedTypeNameContext | UserDefinedTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedTypeNameContext);
		} else {
			return this.getRuleContext(i, UserDefinedTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_overrideSpecifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterOverrideSpecifier) {
			listener.enterOverrideSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitOverrideSpecifier) {
			listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingForDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingForDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUsingForDeclaration) {
			listener.enterUsingForDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUsingForDeclaration) {
			listener.exitUsingForDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUsingForDeclaration) {
			return visitor.visitUsingForDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public functionDescriptor(): FunctionDescriptorContext {
		return this.getRuleContext(0, FunctionDescriptorContext);
	}
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDescriptorContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ReceiveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ReceiveKeyword, 0); }
	public FallbackKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.FallbackKeyword, 0); }
	public ConstructorKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstructorKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDescriptor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionDescriptor) {
			listener.enterFunctionDescriptor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionDescriptor) {
			listener.exitFunctionDescriptor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionDescriptor) {
			return visitor.visitFunctionDescriptor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnParametersContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnParameters; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnParameters) {
			listener.enterReturnParameters(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnParameters) {
			listener.exitReturnParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnParameters) {
			return visitor.visitReturnParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierListContext extends ParserRuleContext {
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public stateMutability(): StateMutabilityContext[];
	public stateMutability(i: number): StateMutabilityContext;
	public stateMutability(i?: number): StateMutabilityContext | StateMutabilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateMutabilityContext);
		} else {
			return this.getRuleContext(i, StateMutabilityContext);
		}
	}
	public ExternalKeyword(): TerminalNode[];
	public ExternalKeyword(i: number): TerminalNode;
	public ExternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.ExternalKeyword);
		} else {
			return this.getToken(SolidityParser.ExternalKeyword, i);
		}
	}
	public PublicKeyword(): TerminalNode[];
	public PublicKeyword(i: number): TerminalNode;
	public PublicKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PublicKeyword);
		} else {
			return this.getToken(SolidityParser.PublicKeyword, i);
		}
	}
	public InternalKeyword(): TerminalNode[];
	public InternalKeyword(i: number): TerminalNode;
	public InternalKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.InternalKeyword);
		} else {
			return this.getToken(SolidityParser.InternalKeyword, i);
		}
	}
	public PrivateKeyword(): TerminalNode[];
	public PrivateKeyword(i: number): TerminalNode;
	public PrivateKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PrivateKeyword);
		} else {
			return this.getToken(SolidityParser.PrivateKeyword, i);
		}
	}
	public VirtualKeyword(): TerminalNode[];
	public VirtualKeyword(i: number): TerminalNode;
	public VirtualKeyword(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.VirtualKeyword);
		} else {
			return this.getToken(SolidityParser.VirtualKeyword, i);
		}
	}
	public overrideSpecifier(): OverrideSpecifierContext[];
	public overrideSpecifier(i: number): OverrideSpecifierContext;
	public overrideSpecifier(i?: number): OverrideSpecifierContext | OverrideSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSpecifierContext);
		} else {
			return this.getRuleContext(i, OverrideSpecifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierList) {
			listener.enterModifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierList) {
			listener.exitModifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierList) {
			return visitor.visitModifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eventParameterList(): EventParameterListContext {
		return this.getRuleContext(0, EventParameterListContext);
	}
	public AnonymousKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AnonymousKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterListContext extends ParserRuleContext {
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameterList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameterList) {
			listener.enterEventParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameterList) {
			listener.exitEventParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameterList) {
			return visitor.visitEventParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public IndexedKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.IndexedKeyword, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public storageLocation(): StorageLocationContext | undefined {
		return this.tryGetRuleContext(0, StorageLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	public mapping(): MappingContext | undefined {
		return this.tryGetRuleContext(0, MappingContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedTypeNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterUserDefinedTypeName) {
			listener.enterUserDefinedTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitUserDefinedTypeName) {
			listener.exitUserDefinedTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitUserDefinedTypeName) {
			return visitor.visitUserDefinedTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mapping; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitMapping) {
			return visitor.visitMapping(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public parameterList(): ParameterListContext {
		return this.getRuleContext(0, ParameterListContext);
	}
	public modifierList(): ModifierListContext {
		return this.getRuleContext(0, ModifierListContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StorageLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_storageLocation; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStorageLocation) {
			listener.enterStorageLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStorageLocation) {
			listener.exitStorageLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStorageLocation) {
			return visitor.visitStorageLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public PureKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PureKeyword, 0); }
	public ConstantKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ConstantKeyword, 0); }
	public ViewKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ViewKeyword, 0); }
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public inlineAssemblyStatement(): InlineAssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, InlineAssemblyStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public returnParameters(): ReturnParametersContext | undefined {
		return this.tryGetRuleContext(0, ReturnParametersContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAssemblyStatementContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public StringLiteralFragment(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.StringLiteralFragment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineAssemblyStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterInlineAssemblyStatement) {
			listener.enterInlineAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitInlineAssemblyStatement) {
			listener.exitInlineAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitInlineAssemblyStatement) {
			return visitor.visitInlineAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public ContinueKeyword(): TerminalNode { return this.getToken(SolidityParser.ContinueKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BreakKeyword(): TerminalNode { return this.getToken(SolidityParser.BreakKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext | undefined {
		return this.tryGetRuleContext(0, IdentifierListContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifierList) {
			return visitor.visitIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Int, 0); }
	public Uint(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Uint, 0); }
	public Byte(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Byte, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallArgumentsContext);
	}
	public PayableKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.PayableKeyword, 0); }
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public TypeKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.TypeKeyword, 0); }
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public typeNameExpression(): TypeNameExpressionContext | undefined {
		return this.tryGetRuleContext(0, TypeNameExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueListContext extends ParserRuleContext {
	public nameValue(): NameValueContext[];
	public nameValue(i: number): NameValueContext;
	public nameValue(i?: number): NameValueContext | NameValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameValueContext);
		} else {
			return this.getRuleContext(i, NameValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValueList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValueList) {
			listener.enterNameValueList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValueList) {
			listener.exitNameValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValueList) {
			return visitor.visitNameValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameValueContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_nameValue; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNameValue) {
			listener.enterNameValue(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNameValue) {
			listener.exitNameValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNameValue) {
			return visitor.visitNameValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallArgumentsContext extends ParserRuleContext {
	public nameValueList(): NameValueListContext | undefined {
		return this.tryGetRuleContext(0, NameValueListContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCallArguments; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCallArguments) {
			listener.enterFunctionCallArguments(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCallArguments) {
			listener.exitFunctionCallArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCallArguments) {
			return visitor.visitFunctionCallArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public functionCallArguments(): FunctionCallArgumentsContext {
		return this.getRuleContext(0, FunctionCallArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameExpressionContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public userDefinedTypeName(): UserDefinedTypeNameContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedTypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeNameExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterTypeNameExpression) {
			listener.enterTypeNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitTypeNameExpression) {
			listener.exitTypeNameExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitTypeNameExpression) {
			return visitor.visitTypeNameExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyItemContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext | undefined {
		return this.tryGetRuleContext(0, AssemblyBlockContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyLocalDefinition(): AssemblyLocalDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLocalDefinitionContext);
	}
	public assemblyAssignment(): AssemblyAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyAssignmentContext);
	}
	public assemblyStackAssignment(): AssemblyStackAssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStackAssignmentContext);
	}
	public labelDefinition(): LabelDefinitionContext | undefined {
		return this.tryGetRuleContext(0, LabelDefinitionContext);
	}
	public assemblySwitch(): AssemblySwitchContext | undefined {
		return this.tryGetRuleContext(0, AssemblySwitchContext);
	}
	public assemblyFunctionDefinition(): AssemblyFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionDefinitionContext);
	}
	public assemblyFor(): AssemblyForContext | undefined {
		return this.tryGetRuleContext(0, AssemblyForContext);
	}
	public assemblyIf(): AssemblyIfContext | undefined {
		return this.tryGetRuleContext(0, AssemblyIfContext);
	}
	public BreakKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BreakKeyword, 0); }
	public ContinueKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.ContinueKeyword, 0); }
	public LeaveKeyword(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LeaveKeyword, 0); }
	public subAssembly(): SubAssemblyContext | undefined {
		return this.tryGetRuleContext(0, SubAssemblyContext);
	}
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyItem; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyItem) {
			listener.enterAssemblyItem(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyItem) {
			listener.exitAssemblyItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyItem) {
			return visitor.visitAssemblyItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyBlockContext extends ParserRuleContext {
	public assemblyItem(): AssemblyItemContext[];
	public assemblyItem(i: number): AssemblyItemContext;
	public assemblyItem(i?: number): AssemblyItemContext | AssemblyItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyItemContext);
		} else {
			return this.getRuleContext(i, AssemblyItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyBlock; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyBlock) {
			listener.enterAssemblyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyBlock) {
			listener.exitAssemblyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyBlock) {
			return visitor.visitAssemblyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyExpressionContext extends ParserRuleContext {
	public assemblyCall(): AssemblyCallContext | undefined {
		return this.tryGetRuleContext(0, AssemblyCallContext);
	}
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyExpression; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyExpression) {
			listener.enterAssemblyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyExpression) {
			listener.exitAssemblyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyExpression) {
			return visitor.visitAssemblyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCallContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public assemblyExpression(): AssemblyExpressionContext[];
	public assemblyExpression(i: number): AssemblyExpressionContext;
	public assemblyExpression(i?: number): AssemblyExpressionContext | AssemblyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyExpressionContext);
		} else {
			return this.getRuleContext(i, AssemblyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCall; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCall) {
			listener.enterAssemblyCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCall) {
			listener.exitAssemblyCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCall) {
			return visitor.visitAssemblyCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLocalDefinitionContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		return this.getRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLocalDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLocalDefinition) {
			listener.enterAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLocalDefinition) {
			listener.exitAssemblyLocalDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLocalDefinition) {
			return visitor.visitAssemblyLocalDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyAssignmentContext extends ParserRuleContext {
	public assemblyIdentifierList(): AssemblyIdentifierListContext {
		return this.getRuleContext(0, AssemblyIdentifierListContext);
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyAssignment) {
			listener.enterAssemblyAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyAssignment) {
			listener.exitAssemblyAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyAssignment) {
			return visitor.visitAssemblyAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIdentifierListContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIdentifierList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIdentifierList) {
			listener.enterAssemblyIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIdentifierList) {
			listener.exitAssemblyIdentifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIdentifierList) {
			return visitor.visitAssemblyIdentifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStackAssignmentContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStackAssignment; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyStackAssignment) {
			listener.enterAssemblyStackAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyStackAssignment) {
			listener.exitAssemblyStackAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyStackAssignment) {
			return visitor.visitAssemblyStackAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_labelDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterLabelDefinition) {
			listener.enterLabelDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitLabelDefinition) {
			listener.exitLabelDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitLabelDefinition) {
			return visitor.visitLabelDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblySwitchContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyCase(): AssemblyCaseContext[];
	public assemblyCase(i: number): AssemblyCaseContext;
	public assemblyCase(i?: number): AssemblyCaseContext | AssemblyCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyCaseContext);
		} else {
			return this.getRuleContext(i, AssemblyCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblySwitch; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblySwitch) {
			listener.enterAssemblySwitch(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblySwitch) {
			listener.exitAssemblySwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblySwitch) {
			return visitor.visitAssemblySwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyCaseContext extends ParserRuleContext {
	public assemblyLiteral(): AssemblyLiteralContext | undefined {
		return this.tryGetRuleContext(0, AssemblyLiteralContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyType(): AssemblyTypeContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyCase; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyCase) {
			listener.enterAssemblyCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyCase) {
			listener.exitAssemblyCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyCase) {
			return visitor.visitAssemblyCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionDefinitionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	public assemblyTypedVariableList(): AssemblyTypedVariableListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypedVariableListContext);
	}
	public assemblyFunctionReturns(): AssemblyFunctionReturnsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFunctionReturnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionDefinition) {
			listener.enterAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionDefinition) {
			listener.exitAssemblyFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionDefinition) {
			return visitor.visitAssemblyFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFunctionReturnsContext extends ParserRuleContext {
	public assemblyTypedVariableList(): AssemblyTypedVariableListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypedVariableListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFunctionReturns; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFunctionReturns) {
			listener.enterAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFunctionReturns) {
			listener.exitAssemblyFunctionReturns(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFunctionReturns) {
			return visitor.visitAssemblyFunctionReturns(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyForContext extends ParserRuleContext {
	public assemblyBlock(): AssemblyBlockContext[];
	public assemblyBlock(i: number): AssemblyBlockContext;
	public assemblyBlock(i?: number): AssemblyBlockContext | AssemblyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblyBlockContext);
		} else {
			return this.getRuleContext(i, AssemblyBlockContext);
		}
	}
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFor; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyFor) {
			listener.enterAssemblyFor(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyFor) {
			listener.exitAssemblyFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyFor) {
			return visitor.visitAssemblyFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyIfContext extends ParserRuleContext {
	public assemblyExpression(): AssemblyExpressionContext {
		return this.getRuleContext(0, AssemblyExpressionContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyIf; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyIf) {
			listener.enterAssemblyIf(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyIf) {
			listener.exitAssemblyIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyIf) {
			return visitor.visitAssemblyIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyLiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public hexLiteral(): HexLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexLiteralContext);
	}
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BooleanLiteral, 0); }
	public assemblyType(): AssemblyTypeContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyLiteral) {
			listener.enterAssemblyLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyLiteral) {
			listener.exitAssemblyLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyLiteral) {
			return visitor.visitAssemblyLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyTypedVariableListContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyType(): AssemblyTypeContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypeContext);
	}
	public assemblyTypedVariableList(): AssemblyTypedVariableListContext | undefined {
		return this.tryGetRuleContext(0, AssemblyTypedVariableListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyTypedVariableList; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyTypedVariableList) {
			listener.enterAssemblyTypedVariableList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyTypedVariableList) {
			listener.exitAssemblyTypedVariableList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyTypedVariableList) {
			return visitor.visitAssemblyTypedVariableList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyTypeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyType; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterAssemblyType) {
			listener.enterAssemblyType(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitAssemblyType) {
			listener.exitAssemblyType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitAssemblyType) {
			return visitor.visitAssemblyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubAssemblyContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assemblyBlock(): AssemblyBlockContext {
		return this.getRuleContext(0, AssemblyBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_subAssembly; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterSubAssembly) {
			listener.enterSubAssembly(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitSubAssembly) {
			listener.exitSubAssembly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitSubAssembly) {
			return visitor.visitSubAssembly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralContext extends ParserRuleContext {
	public DecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.DecimalNumber, 0); }
	public HexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.HexNumber, 0); }
	public NumberUnit(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NumberUnit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_numberLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(SolidityParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexLiteralContext extends ParserRuleContext {
	public HexLiteralFragment(): TerminalNode[];
	public HexLiteralFragment(i: number): TerminalNode;
	public HexLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.HexLiteralFragment);
		} else {
			return this.getToken(SolidityParser.HexLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_hexLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterHexLiteral) {
			listener.enterHexLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitHexLiteral) {
			listener.exitHexLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitHexLiteral) {
			return visitor.visitHexLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteralFragment(): TerminalNode[];
	public StringLiteralFragment(i: number): TerminalNode;
	public StringLiteralFragment(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.StringLiteralFragment);
		} else {
			return this.getToken(SolidityParser.StringLiteralFragment, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SolidityListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


