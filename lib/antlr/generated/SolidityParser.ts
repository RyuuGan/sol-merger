// Generated from SolidityParser.g4 by ANTLR 4.9.0-SNAPSHOT
// @ts-nocheck


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

import { SolidityParserListener } from "./SolidityParserListener";
import { SolidityParserVisitor } from "./SolidityParserVisitor";


export class SolidityParser extends Parser {
	public static readonly ReservedKeywords = 1;
	public static readonly Abstract = 2;
	public static readonly Address = 3;
	public static readonly Anonymous = 4;
	public static readonly As = 5;
	public static readonly Assembly = 6;
	public static readonly Bool = 7;
	public static readonly Break = 8;
	public static readonly Bytes = 9;
	public static readonly Calldata = 10;
	public static readonly Catch = 11;
	public static readonly Constant = 12;
	public static readonly Constructor = 13;
	public static readonly Continue = 14;
	public static readonly Contract = 15;
	public static readonly Delete = 16;
	public static readonly Do = 17;
	public static readonly Else = 18;
	public static readonly Emit = 19;
	public static readonly Enum = 20;
	public static readonly Error = 21;
	public static readonly Event = 22;
	public static readonly External = 23;
	public static readonly Fallback = 24;
	public static readonly False = 25;
	public static readonly Fixed = 26;
	public static readonly FixedBytes = 27;
	public static readonly For = 28;
	public static readonly From = 29;
	public static readonly Function = 30;
	public static readonly Global = 31;
	public static readonly Hex = 32;
	public static readonly If = 33;
	public static readonly Immutable = 34;
	public static readonly Import = 35;
	public static readonly Indexed = 36;
	public static readonly Interface = 37;
	public static readonly Internal = 38;
	public static readonly Is = 39;
	public static readonly Library = 40;
	public static readonly Mapping = 41;
	public static readonly Memory = 42;
	public static readonly Modifier = 43;
	public static readonly New = 44;
	public static readonly NumberUnit = 45;
	public static readonly Override = 46;
	public static readonly Payable = 47;
	public static readonly Pragma = 48;
	public static readonly Private = 49;
	public static readonly Public = 50;
	public static readonly Pure = 51;
	public static readonly Receive = 52;
	public static readonly Return = 53;
	public static readonly Returns = 54;
	public static readonly Revert = 55;
	public static readonly SignedIntegerType = 56;
	public static readonly Storage = 57;
	public static readonly String = 58;
	public static readonly Struct = 59;
	public static readonly True = 60;
	public static readonly Try = 61;
	public static readonly Type = 62;
	public static readonly Ufixed = 63;
	public static readonly Unchecked = 64;
	public static readonly UnsignedIntegerType = 65;
	public static readonly Using = 66;
	public static readonly View = 67;
	public static readonly Virtual = 68;
	public static readonly While = 69;
	public static readonly LParen = 70;
	public static readonly RParen = 71;
	public static readonly LBrack = 72;
	public static readonly RBrack = 73;
	public static readonly LBrace = 74;
	public static readonly RBrace = 75;
	public static readonly Colon = 76;
	public static readonly Semicolon = 77;
	public static readonly Period = 78;
	public static readonly Conditional = 79;
	public static readonly DoubleArrow = 80;
	public static readonly RightArrow = 81;
	public static readonly Assign = 82;
	public static readonly AssignBitOr = 83;
	public static readonly AssignBitXor = 84;
	public static readonly AssignBitAnd = 85;
	public static readonly AssignShl = 86;
	public static readonly AssignSar = 87;
	public static readonly AssignShr = 88;
	public static readonly AssignAdd = 89;
	public static readonly AssignSub = 90;
	public static readonly AssignMul = 91;
	public static readonly AssignDiv = 92;
	public static readonly AssignMod = 93;
	public static readonly Comma = 94;
	public static readonly Or = 95;
	public static readonly And = 96;
	public static readonly BitOr = 97;
	public static readonly BitXor = 98;
	public static readonly BitAnd = 99;
	public static readonly Shl = 100;
	public static readonly Sar = 101;
	public static readonly Shr = 102;
	public static readonly Add = 103;
	public static readonly Sub = 104;
	public static readonly Mul = 105;
	public static readonly Div = 106;
	public static readonly Mod = 107;
	public static readonly Exp = 108;
	public static readonly Equal = 109;
	public static readonly NotEqual = 110;
	public static readonly LessThan = 111;
	public static readonly GreaterThan = 112;
	public static readonly LessThanOrEqual = 113;
	public static readonly GreaterThanOrEqual = 114;
	public static readonly Not = 115;
	public static readonly BitNot = 116;
	public static readonly Inc = 117;
	public static readonly Dec = 118;
	public static readonly DoubleQuote = 119;
	public static readonly SingleQuote = 120;
	public static readonly NonEmptyStringLiteral = 121;
	public static readonly EmptyStringLiteral = 122;
	public static readonly UnicodeStringLiteral = 123;
	public static readonly HexString = 124;
	public static readonly HexNumber = 125;
	public static readonly DecimalNumber = 126;
	public static readonly Identifier = 127;
	public static readonly WS = 128;
	public static readonly COMMENT = 129;
	public static readonly LINE_COMMENT = 130;
	public static readonly AssemblyDialect = 131;
	public static readonly AssemblyLBrace = 132;
	public static readonly AssemblyFlagString = 133;
	public static readonly AssemblyBlockLParen = 134;
	public static readonly AssemblyBlockRParen = 135;
	public static readonly AssemblyBlockComma = 136;
	public static readonly AssemblyBlockWS = 137;
	public static readonly AssemblyBlockCOMMENT = 138;
	public static readonly AssemblyBlockLINE_COMMENT = 139;
	public static readonly YulBreak = 140;
	public static readonly YulCase = 141;
	public static readonly YulContinue = 142;
	public static readonly YulDefault = 143;
	public static readonly YulFalse = 144;
	public static readonly YulFor = 145;
	public static readonly YulFunction = 146;
	public static readonly YulIf = 147;
	public static readonly YulLeave = 148;
	public static readonly YulLet = 149;
	public static readonly YulSwitch = 150;
	public static readonly YulTrue = 151;
	public static readonly YulHex = 152;
	public static readonly YulEVMBuiltin = 153;
	public static readonly YulLBrace = 154;
	public static readonly YulRBrace = 155;
	public static readonly YulLParen = 156;
	public static readonly YulRParen = 157;
	public static readonly YulAssign = 158;
	public static readonly YulPeriod = 159;
	public static readonly YulComma = 160;
	public static readonly YulArrow = 161;
	public static readonly YulIdentifier = 162;
	public static readonly YulHexNumber = 163;
	public static readonly YulDecimalNumber = 164;
	public static readonly YulStringLiteral = 165;
	public static readonly YulHexStringLiteral = 166;
	public static readonly YulWS = 167;
	public static readonly YulCOMMENT = 168;
	public static readonly YulLINE_COMMENT = 169;
	public static readonly PragmaToken = 170;
	public static readonly PragmaSemicolon = 171;
	public static readonly PragmaWS = 172;
	public static readonly PragmaCOMMENT = 173;
	public static readonly PragmaLINE_COMMENT = 174;
	public static readonly RULE_sourceUnit = 0;
	public static readonly RULE_pragmaDirective = 1;
	public static readonly RULE_importDirective = 2;
	public static readonly RULE_importAliases = 3;
	public static readonly RULE_path = 4;
	public static readonly RULE_symbolAliases = 5;
	public static readonly RULE_contractDefinition = 6;
	public static readonly RULE_interfaceDefinition = 7;
	public static readonly RULE_libraryDefinition = 8;
	public static readonly RULE_inheritanceSpecifierList = 9;
	public static readonly RULE_inheritanceSpecifier = 10;
	public static readonly RULE_contractBodyElement = 11;
	public static readonly RULE_namedArgument = 12;
	public static readonly RULE_callArgumentList = 13;
	public static readonly RULE_identifierPath = 14;
	public static readonly RULE_modifierInvocation = 15;
	public static readonly RULE_visibility = 16;
	public static readonly RULE_parameterList = 17;
	public static readonly RULE_parameterDeclaration = 18;
	public static readonly RULE_constructorDefinition = 19;
	public static readonly RULE_stateMutability = 20;
	public static readonly RULE_overrideSpecifier = 21;
	public static readonly RULE_functionDefinition = 22;
	public static readonly RULE_modifierDefinition = 23;
	public static readonly RULE_fallbackFunctionDefinition = 24;
	public static readonly RULE_receiveFunctionDefinition = 25;
	public static readonly RULE_structDefinition = 26;
	public static readonly RULE_structMember = 27;
	public static readonly RULE_enumDefinition = 28;
	public static readonly RULE_userDefinedValueTypeDefinition = 29;
	public static readonly RULE_stateVariableDeclaration = 30;
	public static readonly RULE_constantVariableDeclaration = 31;
	public static readonly RULE_eventParameter = 32;
	public static readonly RULE_eventDefinition = 33;
	public static readonly RULE_errorParameter = 34;
	public static readonly RULE_errorDefinition = 35;
	public static readonly RULE_userDefinableOperator = 36;
	public static readonly RULE_usingDirective = 37;
	public static readonly RULE_typeName = 38;
	public static readonly RULE_elementaryTypeName = 39;
	public static readonly RULE_functionTypeName = 40;
	public static readonly RULE_variableDeclaration = 41;
	public static readonly RULE_dataLocation = 42;
	public static readonly RULE_expression = 43;
	public static readonly RULE_assignOp = 44;
	public static readonly RULE_tupleExpression = 45;
	public static readonly RULE_inlineArrayExpression = 46;
	public static readonly RULE_identifier = 47;
	public static readonly RULE_literal = 48;
	public static readonly RULE_booleanLiteral = 49;
	public static readonly RULE_stringLiteral = 50;
	public static readonly RULE_hexStringLiteral = 51;
	public static readonly RULE_unicodeStringLiteral = 52;
	public static readonly RULE_numberLiteral = 53;
	public static readonly RULE_block = 54;
	public static readonly RULE_uncheckedBlock = 55;
	public static readonly RULE_statement = 56;
	public static readonly RULE_simpleStatement = 57;
	public static readonly RULE_ifStatement = 58;
	public static readonly RULE_forStatement = 59;
	public static readonly RULE_whileStatement = 60;
	public static readonly RULE_doWhileStatement = 61;
	public static readonly RULE_continueStatement = 62;
	public static readonly RULE_breakStatement = 63;
	public static readonly RULE_tryStatement = 64;
	public static readonly RULE_catchClause = 65;
	public static readonly RULE_returnStatement = 66;
	public static readonly RULE_emitStatement = 67;
	public static readonly RULE_revertStatement = 68;
	public static readonly RULE_assemblyStatement = 69;
	public static readonly RULE_assemblyFlags = 70;
	public static readonly RULE_variableDeclarationList = 71;
	public static readonly RULE_variableDeclarationTuple = 72;
	public static readonly RULE_variableDeclarationStatement = 73;
	public static readonly RULE_expressionStatement = 74;
	public static readonly RULE_mappingType = 75;
	public static readonly RULE_mappingKeyType = 76;
	public static readonly RULE_yulStatement = 77;
	public static readonly RULE_yulBlock = 78;
	public static readonly RULE_yulVariableDeclaration = 79;
	public static readonly RULE_yulAssignment = 80;
	public static readonly RULE_yulIfStatement = 81;
	public static readonly RULE_yulForStatement = 82;
	public static readonly RULE_yulSwitchCase = 83;
	public static readonly RULE_yulSwitchStatement = 84;
	public static readonly RULE_yulFunctionDefinition = 85;
	public static readonly RULE_yulPath = 86;
	public static readonly RULE_yulFunctionCall = 87;
	public static readonly RULE_yulBoolean = 88;
	public static readonly RULE_yulLiteral = 89;
	public static readonly RULE_yulExpression = 90;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceUnit", "pragmaDirective", "importDirective", "importAliases", "path",
		"symbolAliases", "contractDefinition", "interfaceDefinition", "libraryDefinition",
		"inheritanceSpecifierList", "inheritanceSpecifier", "contractBodyElement",
		"namedArgument", "callArgumentList", "identifierPath", "modifierInvocation",
		"visibility", "parameterList", "parameterDeclaration", "constructorDefinition",
		"stateMutability", "overrideSpecifier", "functionDefinition", "modifierDefinition",
		"fallbackFunctionDefinition", "receiveFunctionDefinition", "structDefinition",
		"structMember", "enumDefinition", "userDefinedValueTypeDefinition", "stateVariableDeclaration",
		"constantVariableDeclaration", "eventParameter", "eventDefinition", "errorParameter",
		"errorDefinition", "userDefinableOperator", "usingDirective", "typeName",
		"elementaryTypeName", "functionTypeName", "variableDeclaration", "dataLocation",
		"expression", "assignOp", "tupleExpression", "inlineArrayExpression",
		"identifier", "literal", "booleanLiteral", "stringLiteral", "hexStringLiteral",
		"unicodeStringLiteral", "numberLiteral", "block", "uncheckedBlock", "statement",
		"simpleStatement", "ifStatement", "forStatement", "whileStatement", "doWhileStatement",
		"continueStatement", "breakStatement", "tryStatement", "catchClause",
		"returnStatement", "emitStatement", "revertStatement", "assemblyStatement",
		"assemblyFlags", "variableDeclarationList", "variableDeclarationTuple",
		"variableDeclarationStatement", "expressionStatement", "mappingType",
		"mappingKeyType", "yulStatement", "yulBlock", "yulVariableDeclaration",
		"yulAssignment", "yulIfStatement", "yulForStatement", "yulSwitchCase",
		"yulSwitchStatement", "yulFunctionDefinition", "yulPath", "yulFunctionCall",
		"yulBoolean", "yulLiteral", "yulExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'abstract'", "'address'", "'anonymous'", "'as'",
		"'assembly'", "'bool'", undefined, "'bytes'", "'calldata'", "'catch'",
		"'constant'", "'constructor'", undefined, "'contract'", "'delete'", "'do'",
		"'else'", "'emit'", "'enum'", "'error'", "'event'", "'external'", "'fallback'",
		undefined, undefined, undefined, undefined, "'from'", undefined, "'global'",
		undefined, undefined, "'immutable'", "'import'", "'indexed'", "'interface'",
		"'internal'", "'is'", "'library'", "'mapping'", "'memory'", "'modifier'",
		"'new'", undefined, "'override'", "'payable'", "'pragma'", "'private'",
		"'public'", "'pure'", "'receive'", "'return'", "'returns'", "'revert'",
		undefined, "'storage'", "'string'", "'struct'", undefined, "'try'", "'type'",
		undefined, "'unchecked'", undefined, "'using'", "'view'", "'virtual'",
		"'while'", undefined, undefined, "'['", "']'", undefined, undefined, "':'",
		undefined, undefined, "'?'", "'=>'", undefined, "'='", "'|='", "'^='",
		"'&='", "'<<='", "'>>='", "'>>>='", "'+='", "'-='", "'*='", "'/='", "'%='",
		undefined, "'||'", "'&&'", "'|'", "'^'", "'&'", "'<<'", "'>>'", "'>>>'",
		"'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'=='", "'!='", "'<'", "'>'",
		"'<='", "'>='", "'!'", "'~'", "'++'", "'--'", "'\"'", "'''", undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "'\"evmasm\"'", undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, "'case'",
		undefined, "'default'", undefined, undefined, undefined, undefined, "'leave'",
		"'let'", "'switch'", undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "':='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ReservedKeywords", "Abstract", "Address", "Anonymous", "As",
		"Assembly", "Bool", "Break", "Bytes", "Calldata", "Catch", "Constant",
		"Constructor", "Continue", "Contract", "Delete", "Do", "Else", "Emit",
		"Enum", "Error", "Event", "External", "Fallback", "False", "Fixed", "FixedBytes",
		"For", "From", "Function", "Global", "Hex", "If", "Immutable", "Import",
		"Indexed", "Interface", "Internal", "Is", "Library", "Mapping", "Memory",
		"Modifier", "New", "NumberUnit", "Override", "Payable", "Pragma", "Private",
		"Public", "Pure", "Receive", "Return", "Returns", "Revert", "SignedIntegerType",
		"Storage", "String", "Struct", "True", "Try", "Type", "Ufixed", "Unchecked",
		"UnsignedIntegerType", "Using", "View", "Virtual", "While", "LParen",
		"RParen", "LBrack", "RBrack", "LBrace", "RBrace", "Colon", "Semicolon",
		"Period", "Conditional", "DoubleArrow", "RightArrow", "Assign", "AssignBitOr",
		"AssignBitXor", "AssignBitAnd", "AssignShl", "AssignSar", "AssignShr",
		"AssignAdd", "AssignSub", "AssignMul", "AssignDiv", "AssignMod", "Comma",
		"Or", "And", "BitOr", "BitXor", "BitAnd", "Shl", "Sar", "Shr", "Add",
		"Sub", "Mul", "Div", "Mod", "Exp", "Equal", "NotEqual", "LessThan", "GreaterThan",
		"LessThanOrEqual", "GreaterThanOrEqual", "Not", "BitNot", "Inc", "Dec",
		"DoubleQuote", "SingleQuote", "NonEmptyStringLiteral", "EmptyStringLiteral",
		"UnicodeStringLiteral", "HexString", "HexNumber", "DecimalNumber", "Identifier",
		"WS", "COMMENT", "LINE_COMMENT", "AssemblyDialect", "AssemblyLBrace",
		"AssemblyFlagString", "AssemblyBlockLParen", "AssemblyBlockRParen", "AssemblyBlockComma",
		"AssemblyBlockWS", "AssemblyBlockCOMMENT", "AssemblyBlockLINE_COMMENT",
		"YulBreak", "YulCase", "YulContinue", "YulDefault", "YulFalse", "YulFor",
		"YulFunction", "YulIf", "YulLeave", "YulLet", "YulSwitch", "YulTrue",
		"YulHex", "YulEVMBuiltin", "YulLBrace", "YulRBrace", "YulLParen", "YulRParen",
		"YulAssign", "YulPeriod", "YulComma", "YulArrow", "YulIdentifier", "YulHexNumber",
		"YulDecimalNumber", "YulStringLiteral", "YulHexStringLiteral", "YulWS",
		"YulCOMMENT", "YulLINE_COMMENT", "PragmaToken", "PragmaSemicolon", "PragmaWS",
		"PragmaCOMMENT", "PragmaLINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SolidityParser._LITERAL_NAMES, SolidityParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SolidityParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SolidityParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SolidityParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SolidityParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SolidityParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceUnit(): SourceUnitContext {
		let _localctx: SourceUnitContext = new SourceUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SolidityParser.RULE_sourceUnit);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 194;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 182;
						this.pragmaDirective();
						}
						break;

					case 2:
						{
						this.state = 183;
						this.importDirective();
						}
						break;

					case 3:
						{
						this.state = 184;
						this.usingDirective();
						}
						break;

					case 4:
						{
						this.state = 185;
						this.contractDefinition();
						}
						break;

					case 5:
						{
						this.state = 186;
						this.interfaceDefinition();
						}
						break;

					case 6:
						{
						this.state = 187;
						this.libraryDefinition();
						}
						break;

					case 7:
						{
						this.state = 188;
						this.functionDefinition();
						}
						break;

					case 8:
						{
						this.state = 189;
						this.constantVariableDeclaration();
						}
						break;

					case 9:
						{
						this.state = 190;
						this.structDefinition();
						}
						break;

					case 10:
						{
						this.state = 191;
						this.enumDefinition();
						}
						break;

					case 11:
						{
						this.state = 192;
						this.userDefinedValueTypeDefinition();
						}
						break;

					case 12:
						{
						this.state = 193;
						this.errorDefinition();
						}
						break;
					}
					}
				}
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 199;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(SolidityParser.Pragma);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 202;
				this.match(SolidityParser.PragmaToken);
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SolidityParser.PragmaToken);
			this.state = 207;
			this.match(SolidityParser.PragmaSemicolon);
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
		this.enterRule(_localctx, 4, SolidityParser.RULE_importDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 209;
			this.match(SolidityParser.Import);
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.NonEmptyStringLiteral:
				{
				{
				this.state = 210;
				this.path();
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.As) {
					{
					this.state = 211;
					this.match(SolidityParser.As);
					this.state = 212;
					_localctx._unitAlias = this.identifier();
					}
				}

				}
				}
				break;
			case SolidityParser.LBrace:
				{
				{
				this.state = 215;
				this.symbolAliases();
				this.state = 216;
				this.match(SolidityParser.From);
				this.state = 217;
				this.path();
				}
				}
				break;
			case SolidityParser.Mul:
				{
				{
				this.state = 219;
				this.match(SolidityParser.Mul);
				this.state = 220;
				this.match(SolidityParser.As);
				this.state = 221;
				_localctx._unitAlias = this.identifier();
				this.state = 222;
				this.match(SolidityParser.From);
				this.state = 223;
				this.path();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 227;
			this.match(SolidityParser.Semicolon);
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
	public importAliases(): ImportAliasesContext {
		let _localctx: ImportAliasesContext = new ImportAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SolidityParser.RULE_importAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			_localctx._symbol = this.identifier();
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.As) {
				{
				this.state = 230;
				this.match(SolidityParser.As);
				this.state = 231;
				_localctx._alias = this.identifier();
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
	public path(): PathContext {
		let _localctx: PathContext = new PathContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SolidityParser.RULE_path);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(SolidityParser.NonEmptyStringLiteral);
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
	public symbolAliases(): SymbolAliasesContext {
		let _localctx: SymbolAliasesContext = new SymbolAliasesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SolidityParser.RULE_symbolAliases);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(SolidityParser.LBrace);
			this.state = 237;
			_localctx._importAliases = this.importAliases();
			_localctx._aliases.push(_localctx._importAliases);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 238;
				this.match(SolidityParser.Comma);
				this.state = 239;
				_localctx._importAliases = this.importAliases();
				_localctx._aliases.push(_localctx._importAliases);
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
			this.match(SolidityParser.RBrace);
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
		this.enterRule(_localctx, 12, SolidityParser.RULE_contractDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Abstract) {
				{
				this.state = 247;
				this.match(SolidityParser.Abstract);
				}
			}

			this.state = 250;
			this.match(SolidityParser.Contract);
			this.state = 251;
			_localctx._name = this.identifier();
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Is) {
				{
				this.state = 252;
				this.inheritanceSpecifierList();
				}
			}

			this.state = 255;
			this.match(SolidityParser.LBrace);
			this.state = 259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 256;
					this.contractBodyElement();
					}
					}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 262;
			this.match(SolidityParser.RBrace);
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
	public interfaceDefinition(): InterfaceDefinitionContext {
		let _localctx: InterfaceDefinitionContext = new InterfaceDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SolidityParser.RULE_interfaceDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(SolidityParser.Interface);
			this.state = 265;
			_localctx._name = this.identifier();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Is) {
				{
				this.state = 266;
				this.inheritanceSpecifierList();
				}
			}

			this.state = 269;
			this.match(SolidityParser.LBrace);
			this.state = 273;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 270;
					this.contractBodyElement();
					}
					}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 276;
			this.match(SolidityParser.RBrace);
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
	public libraryDefinition(): LibraryDefinitionContext {
		let _localctx: LibraryDefinitionContext = new LibraryDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SolidityParser.RULE_libraryDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(SolidityParser.Library);
			this.state = 279;
			_localctx._name = this.identifier();
			this.state = 280;
			this.match(SolidityParser.LBrace);
			this.state = 284;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 281;
					this.contractBodyElement();
					}
					}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			this.state = 287;
			this.match(SolidityParser.RBrace);
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
	public inheritanceSpecifierList(): InheritanceSpecifierListContext {
		let _localctx: InheritanceSpecifierListContext = new InheritanceSpecifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SolidityParser.RULE_inheritanceSpecifierList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(SolidityParser.Is);
			this.state = 290;
			_localctx._inheritanceSpecifier = this.inheritanceSpecifier();
			_localctx._inheritanceSpecifiers.push(_localctx._inheritanceSpecifier);
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 291;
					this.match(SolidityParser.Comma);
					this.state = 292;
					_localctx._inheritanceSpecifier = this.inheritanceSpecifier();
					_localctx._inheritanceSpecifiers.push(_localctx._inheritanceSpecifier);
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public inheritanceSpecifier(): InheritanceSpecifierContext {
		let _localctx: InheritanceSpecifierContext = new InheritanceSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SolidityParser.RULE_inheritanceSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			_localctx._name = this.identifierPath();
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.LParen) {
				{
				this.state = 299;
				_localctx._arguments = this.callArgumentList();
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
	public contractBodyElement(): ContractBodyElementContext {
		let _localctx: ContractBodyElementContext = new ContractBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SolidityParser.RULE_contractBodyElement);
		try {
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.constructorDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 303;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 304;
				this.modifierDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 305;
				this.fallbackFunctionDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 306;
				this.receiveFunctionDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 307;
				this.structDefinition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 308;
				this.enumDefinition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 309;
				this.userDefinedValueTypeDefinition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 310;
				this.stateVariableDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 311;
				this.eventDefinition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 312;
				this.errorDefinition();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 313;
				this.usingDirective();
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
	public namedArgument(): NamedArgumentContext {
		let _localctx: NamedArgumentContext = new NamedArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SolidityParser.RULE_namedArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			_localctx._name = this.identifier();
			this.state = 317;
			this.match(SolidityParser.Colon);
			this.state = 318;
			_localctx._value = this.expression(0);
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
	public callArgumentList(): CallArgumentListContext {
		let _localctx: CallArgumentListContext = new CallArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SolidityParser.RULE_callArgumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(SolidityParser.LParen);
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 321;
					this.expression(0);
					this.state = 326;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.Comma) {
						{
						{
						this.state = 322;
						this.match(SolidityParser.Comma);
						this.state = 323;
						this.expression(0);
						}
						}
						this.state = 328;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 331;
				this.match(SolidityParser.LBrace);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
					{
					this.state = 332;
					this.namedArgument();
					this.state = 337;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SolidityParser.Comma) {
						{
						{
						this.state = 333;
						this.match(SolidityParser.Comma);
						this.state = 334;
						this.namedArgument();
						}
						}
						this.state = 339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 342;
				this.match(SolidityParser.RBrace);
				}
				break;
			}
			this.state = 345;
			this.match(SolidityParser.RParen);
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
	public identifierPath(): IdentifierPathContext {
		let _localctx: IdentifierPathContext = new IdentifierPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SolidityParser.RULE_identifierPath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.identifier();
			this.state = 352;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 348;
					this.match(SolidityParser.Period);
					this.state = 349;
					this.identifier();
					}
					}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
		this.enterRule(_localctx, 30, SolidityParser.RULE_modifierInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.identifierPath();
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 356;
				this.callArgumentList();
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
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SolidityParser.RULE_visibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if (!(((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (SolidityParser.External - 23)) | (1 << (SolidityParser.Internal - 23)) | (1 << (SolidityParser.Private - 23)) | (1 << (SolidityParser.Public - 23)))) !== 0))) {
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SolidityParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			_localctx._parameterDeclaration = this.parameterDeclaration();
			_localctx._parameters.push(_localctx._parameterDeclaration);
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 362;
				this.match(SolidityParser.Comma);
				this.state = 363;
				_localctx._parameterDeclaration = this.parameterDeclaration();
				_localctx._parameters.push(_localctx._parameterDeclaration);
				}
				}
				this.state = 368;
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
	public parameterDeclaration(): ParameterDeclarationContext {
		let _localctx: ParameterDeclarationContext = new ParameterDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SolidityParser.RULE_parameterDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			_localctx._type = this.typeName(0);
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Calldata || _la === SolidityParser.Memory || _la === SolidityParser.Storage) {
				{
				this.state = 370;
				_localctx._location = this.dataLocation();
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
				{
				this.state = 373;
				_localctx._name = this.identifier();
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
	public constructorDefinition(): ConstructorDefinitionContext {
		let _localctx: ConstructorDefinitionContext = new ConstructorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SolidityParser.RULE_constructorDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(SolidityParser.Constructor);
			this.state = 377;
			this.match(SolidityParser.LParen);
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				_localctx._arguments = this.parameterList();
				}
				break;
			}
			this.state = 381;
			this.match(SolidityParser.RParen);
			this.state = 394;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 392;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
					case 1:
						{
						this.state = 382;
						this.modifierInvocation();
						}
						break;

					case 2:
						{
						this.state = 383;
						if (!(!_localctx.payableSet)) {
							throw this.createFailedPredicateException("!$payableSet");
						}
						this.state = 384;
						this.match(SolidityParser.Payable);
						_localctx.payableSet =  true;
						}
						break;

					case 3:
						{
						this.state = 386;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 387;
						this.match(SolidityParser.Internal);
						_localctx.visibilitySet =  true;
						}
						break;

					case 4:
						{
						this.state = 389;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 390;
						this.match(SolidityParser.Public);
						_localctx.visibilitySet =  true;
						}
						break;
					}
					}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 397;
			_localctx._body = this.block();
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
		this.enterRule(_localctx, 40, SolidityParser.RULE_stateMutability);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (SolidityParser.Payable - 47)) | (1 << (SolidityParser.Pure - 47)) | (1 << (SolidityParser.View - 47)))) !== 0))) {
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
	public overrideSpecifier(): OverrideSpecifierContext {
		let _localctx: OverrideSpecifierContext = new OverrideSpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SolidityParser.RULE_overrideSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(SolidityParser.Override);
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 402;
				this.match(SolidityParser.LParen);
				this.state = 403;
				_localctx._identifierPath = this.identifierPath();
				_localctx._overrides.push(_localctx._identifierPath);
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.Comma) {
					{
					{
					this.state = 404;
					this.match(SolidityParser.Comma);
					this.state = 405;
					_localctx._identifierPath = this.identifierPath();
					_localctx._overrides.push(_localctx._identifierPath);
					}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 411;
				this.match(SolidityParser.RParen);
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SolidityParser.RULE_functionDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(SolidityParser.Function);
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Error:
			case SolidityParser.From:
			case SolidityParser.Global:
			case SolidityParser.Revert:
			case SolidityParser.Identifier:
				{
				this.state = 416;
				this.identifier();
				}
				break;
			case SolidityParser.Fallback:
				{
				this.state = 417;
				this.match(SolidityParser.Fallback);
				}
				break;
			case SolidityParser.Receive:
				{
				this.state = 418;
				this.match(SolidityParser.Receive);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 421;
			this.match(SolidityParser.LParen);
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 422;
				_localctx._arguments = this.parameterList();
				}
				break;
			}
			this.state = 425;
			this.match(SolidityParser.RParen);
			this.state = 444;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 442;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
					case 1:
						{
						this.state = 426;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 427;
						this.visibility();
						_localctx.visibilitySet =  true;
						}
						break;

					case 2:
						{
						this.state = 430;
						if (!(!_localctx.mutabilitySet)) {
							throw this.createFailedPredicateException("!$mutabilitySet");
						}
						this.state = 431;
						this.stateMutability();
						_localctx.mutabilitySet =  true;
						}
						break;

					case 3:
						{
						this.state = 434;
						this.modifierInvocation();
						}
						break;

					case 4:
						{
						this.state = 435;
						if (!(!_localctx.virtualSet)) {
							throw this.createFailedPredicateException("!$virtualSet");
						}
						this.state = 436;
						this.match(SolidityParser.Virtual);
						_localctx.virtualSet =  true;
						}
						break;

					case 5:
						{
						this.state = 438;
						if (!(!_localctx.overrideSpecifierSet)) {
							throw this.createFailedPredicateException("!$overrideSpecifierSet");
						}
						this.state = 439;
						this.overrideSpecifier();
						_localctx.overrideSpecifierSet =  true;
						}
						break;
					}
					}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			}
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Returns) {
				{
				this.state = 447;
				this.match(SolidityParser.Returns);
				this.state = 448;
				this.match(SolidityParser.LParen);
				this.state = 449;
				_localctx._returnParameters = this.parameterList();
				this.state = 450;
				this.match(SolidityParser.RParen);
				}
			}

			this.state = 456;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Semicolon:
				{
				this.state = 454;
				this.match(SolidityParser.Semicolon);
				}
				break;
			case SolidityParser.LBrace:
				{
				this.state = 455;
				_localctx._body = this.block();
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
	public modifierDefinition(): ModifierDefinitionContext {
		let _localctx: ModifierDefinitionContext = new ModifierDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SolidityParser.RULE_modifierDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.match(SolidityParser.Modifier);
			this.state = 459;
			_localctx._name = this.identifier();
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 460;
				this.match(SolidityParser.LParen);
				this.state = 462;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 461;
					_localctx._arguments = this.parameterList();
					}
					break;
				}
				this.state = 464;
				this.match(SolidityParser.RParen);
				}
				break;
			}
			this.state = 476;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 474;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						this.state = 467;
						if (!(!_localctx.virtualSet)) {
							throw this.createFailedPredicateException("!$virtualSet");
						}
						this.state = 468;
						this.match(SolidityParser.Virtual);
						_localctx.virtualSet =  true;
						}
						break;

					case 2:
						{
						this.state = 470;
						if (!(!_localctx.overrideSpecifierSet)) {
							throw this.createFailedPredicateException("!$overrideSpecifierSet");
						}
						this.state = 471;
						this.overrideSpecifier();
						_localctx.overrideSpecifierSet =  true;
						}
						break;
					}
					}
				}
				this.state = 478;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Semicolon:
				{
				this.state = 479;
				this.match(SolidityParser.Semicolon);
				}
				break;
			case SolidityParser.LBrace:
				{
				this.state = 480;
				_localctx._body = this.block();
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
	public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext {
		let _localctx: FallbackFunctionDefinitionContext = new FallbackFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SolidityParser.RULE_fallbackFunctionDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			_localctx._kind = this.match(SolidityParser.Fallback);
			this.state = 484;
			this.match(SolidityParser.LParen);
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 485;
				this.parameterList();
				 _localctx.hasParameters =  true;
				}
				break;
			}
			this.state = 490;
			this.match(SolidityParser.RParen);
			this.state = 508;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 506;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						this.state = 491;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 492;
						this.match(SolidityParser.External);
						_localctx.visibilitySet =  true;
						}
						break;

					case 2:
						{
						this.state = 494;
						if (!(!_localctx.mutabilitySet)) {
							throw this.createFailedPredicateException("!$mutabilitySet");
						}
						this.state = 495;
						this.stateMutability();
						_localctx.mutabilitySet =  true;
						}
						break;

					case 3:
						{
						this.state = 498;
						this.modifierInvocation();
						}
						break;

					case 4:
						{
						this.state = 499;
						if (!(!_localctx.virtualSet)) {
							throw this.createFailedPredicateException("!$virtualSet");
						}
						this.state = 500;
						this.match(SolidityParser.Virtual);
						_localctx.virtualSet =  true;
						}
						break;

					case 5:
						{
						this.state = 502;
						if (!(!_localctx.overrideSpecifierSet)) {
							throw this.createFailedPredicateException("!$overrideSpecifierSet");
						}
						this.state = 503;
						this.overrideSpecifier();
						_localctx.overrideSpecifierSet =  true;
						}
						break;
					}
					}
				}
				this.state = 510;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			this.state = 518;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 511;
				if (!(_localctx.hasParameters)) {
					throw this.createFailedPredicateException("$hasParameters");
				}
				this.state = 512;
				this.match(SolidityParser.Returns);
				this.state = 513;
				this.match(SolidityParser.LParen);
				this.state = 514;
				_localctx._returnParameters = this.parameterList();
				this.state = 515;
				this.match(SolidityParser.RParen);
				}
				break;

			case 2:
				{
				this.state = 517;
				if (!(!_localctx.hasParameters)) {
					throw this.createFailedPredicateException("!$hasParameters");
				}
				}
				break;
			}
			this.state = 522;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Semicolon:
				{
				this.state = 520;
				this.match(SolidityParser.Semicolon);
				}
				break;
			case SolidityParser.LBrace:
				{
				this.state = 521;
				_localctx._body = this.block();
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
	public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext {
		let _localctx: ReceiveFunctionDefinitionContext = new ReceiveFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SolidityParser.RULE_receiveFunctionDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			_localctx._kind = this.match(SolidityParser.Receive);
			this.state = 525;
			this.match(SolidityParser.LParen);
			this.state = 526;
			this.match(SolidityParser.RParen);
			this.state = 543;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 541;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
					case 1:
						{
						this.state = 527;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 528;
						this.match(SolidityParser.External);
						_localctx.visibilitySet =  true;
						}
						break;

					case 2:
						{
						this.state = 530;
						if (!(!_localctx.mutabilitySet)) {
							throw this.createFailedPredicateException("!$mutabilitySet");
						}
						this.state = 531;
						this.match(SolidityParser.Payable);
						_localctx.mutabilitySet =  true;
						}
						break;

					case 3:
						{
						this.state = 533;
						this.modifierInvocation();
						}
						break;

					case 4:
						{
						this.state = 534;
						if (!(!_localctx.virtualSet)) {
							throw this.createFailedPredicateException("!$virtualSet");
						}
						this.state = 535;
						this.match(SolidityParser.Virtual);
						_localctx.virtualSet =  true;
						}
						break;

					case 5:
						{
						this.state = 537;
						if (!(!_localctx.overrideSpecifierSet)) {
							throw this.createFailedPredicateException("!$overrideSpecifierSet");
						}
						this.state = 538;
						this.overrideSpecifier();
						_localctx.overrideSpecifierSet =  true;
						}
						break;
					}
					}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 548;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Semicolon:
				{
				this.state = 546;
				this.match(SolidityParser.Semicolon);
				}
				break;
			case SolidityParser.LBrace:
				{
				this.state = 547;
				_localctx._body = this.block();
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
	public structDefinition(): StructDefinitionContext {
		let _localctx: StructDefinitionContext = new StructDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SolidityParser.RULE_structDefinition);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(SolidityParser.Struct);
			this.state = 551;
			_localctx._name = this.identifier();
			this.state = 552;
			this.match(SolidityParser.LBrace);
			this.state = 554;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 553;
					_localctx._members = this.structMember();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 556;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 558;
			this.match(SolidityParser.RBrace);
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
	public structMember(): StructMemberContext {
		let _localctx: StructMemberContext = new StructMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SolidityParser.RULE_structMember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_localctx._type = this.typeName(0);
			this.state = 561;
			_localctx._name = this.identifier();
			this.state = 562;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 56, SolidityParser.RULE_enumDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(SolidityParser.Enum);
			this.state = 565;
			_localctx._name = this.identifier();
			this.state = 566;
			this.match(SolidityParser.LBrace);
			this.state = 567;
			_localctx._identifier = this.identifier();
			_localctx._enumValues.push(_localctx._identifier);
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 568;
				this.match(SolidityParser.Comma);
				this.state = 569;
				_localctx._identifier = this.identifier();
				_localctx._enumValues.push(_localctx._identifier);
				}
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 575;
			this.match(SolidityParser.RBrace);
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
	public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext {
		let _localctx: UserDefinedValueTypeDefinitionContext = new UserDefinedValueTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SolidityParser.RULE_userDefinedValueTypeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(SolidityParser.Type);
			this.state = 578;
			_localctx._name = this.identifier();
			this.state = 579;
			this.match(SolidityParser.Is);
			this.state = 580;
			this.elementaryTypeName(true);
			this.state = 581;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 60, SolidityParser.RULE_stateVariableDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			_localctx._type = this.typeName(0);
			this.state = 605;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 603;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
					case 1:
						{
						this.state = 584;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 585;
						this.match(SolidityParser.Public);
						_localctx.visibilitySet =  true;
						}
						break;

					case 2:
						{
						this.state = 587;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 588;
						this.match(SolidityParser.Private);
						_localctx.visibilitySet =  true;
						}
						break;

					case 3:
						{
						this.state = 590;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 591;
						this.match(SolidityParser.Internal);
						_localctx.visibilitySet =  true;
						}
						break;

					case 4:
						{
						this.state = 593;
						if (!(!_localctx.constantnessSet)) {
							throw this.createFailedPredicateException("!$constantnessSet");
						}
						this.state = 594;
						this.match(SolidityParser.Constant);
						_localctx.constantnessSet =  true;
						}
						break;

					case 5:
						{
						this.state = 596;
						if (!(!_localctx.overrideSpecifierSet)) {
							throw this.createFailedPredicateException("!$overrideSpecifierSet");
						}
						this.state = 597;
						this.overrideSpecifier();
						_localctx.overrideSpecifierSet =  true;
						}
						break;

					case 6:
						{
						this.state = 600;
						if (!(!_localctx.constantnessSet)) {
							throw this.createFailedPredicateException("!$constantnessSet");
						}
						this.state = 601;
						this.match(SolidityParser.Immutable);
						_localctx.constantnessSet =  true;
						}
						break;
					}
					}
				}
				this.state = 607;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			}
			this.state = 608;
			_localctx._name = this.identifier();
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Assign) {
				{
				this.state = 609;
				this.match(SolidityParser.Assign);
				this.state = 610;
				_localctx._initialValue = this.expression(0);
				}
			}

			this.state = 613;
			this.match(SolidityParser.Semicolon);
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
	public constantVariableDeclaration(): ConstantVariableDeclarationContext {
		let _localctx: ConstantVariableDeclarationContext = new ConstantVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SolidityParser.RULE_constantVariableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			_localctx._type = this.typeName(0);
			this.state = 616;
			this.match(SolidityParser.Constant);
			this.state = 617;
			_localctx._name = this.identifier();
			this.state = 618;
			this.match(SolidityParser.Assign);
			this.state = 619;
			_localctx._initialValue = this.expression(0);
			this.state = 620;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 64, SolidityParser.RULE_eventParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			_localctx._type = this.typeName(0);
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Indexed) {
				{
				this.state = 623;
				this.match(SolidityParser.Indexed);
				}
			}

			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
				{
				this.state = 626;
				_localctx._name = this.identifier();
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
	public eventDefinition(): EventDefinitionContext {
		let _localctx: EventDefinitionContext = new EventDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SolidityParser.RULE_eventDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.match(SolidityParser.Event);
			this.state = 630;
			_localctx._name = this.identifier();
			this.state = 631;
			this.match(SolidityParser.LParen);
			this.state = 640;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 632;
				_localctx._eventParameter = this.eventParameter();
				_localctx._parameters.push(_localctx._eventParameter);
				this.state = 637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.Comma) {
					{
					{
					this.state = 633;
					this.match(SolidityParser.Comma);
					this.state = 634;
					_localctx._eventParameter = this.eventParameter();
					_localctx._parameters.push(_localctx._eventParameter);
					}
					}
					this.state = 639;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 642;
			this.match(SolidityParser.RParen);
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Anonymous) {
				{
				this.state = 643;
				this.match(SolidityParser.Anonymous);
				}
			}

			this.state = 646;
			this.match(SolidityParser.Semicolon);
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
	public errorParameter(): ErrorParameterContext {
		let _localctx: ErrorParameterContext = new ErrorParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SolidityParser.RULE_errorParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			_localctx._type = this.typeName(0);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
				{
				this.state = 649;
				_localctx._name = this.identifier();
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
	public errorDefinition(): ErrorDefinitionContext {
		let _localctx: ErrorDefinitionContext = new ErrorDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SolidityParser.RULE_errorDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 652;
			this.match(SolidityParser.Error);
			this.state = 653;
			_localctx._name = this.identifier();
			this.state = 654;
			this.match(SolidityParser.LParen);
			this.state = 663;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 655;
				_localctx._errorParameter = this.errorParameter();
				_localctx._parameters.push(_localctx._errorParameter);
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.Comma) {
					{
					{
					this.state = 656;
					this.match(SolidityParser.Comma);
					this.state = 657;
					_localctx._errorParameter = this.errorParameter();
					_localctx._parameters.push(_localctx._errorParameter);
					}
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 665;
			this.match(SolidityParser.RParen);
			this.state = 666;
			this.match(SolidityParser.Semicolon);
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
	public userDefinableOperator(): UserDefinableOperatorContext {
		let _localctx: UserDefinableOperatorContext = new UserDefinableOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SolidityParser.RULE_userDefinableOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (SolidityParser.BitOr - 97)) | (1 << (SolidityParser.BitXor - 97)) | (1 << (SolidityParser.BitAnd - 97)) | (1 << (SolidityParser.Add - 97)) | (1 << (SolidityParser.Sub - 97)) | (1 << (SolidityParser.Mul - 97)) | (1 << (SolidityParser.Div - 97)) | (1 << (SolidityParser.Mod - 97)) | (1 << (SolidityParser.Equal - 97)) | (1 << (SolidityParser.NotEqual - 97)) | (1 << (SolidityParser.LessThan - 97)) | (1 << (SolidityParser.GreaterThan - 97)) | (1 << (SolidityParser.LessThanOrEqual - 97)) | (1 << (SolidityParser.GreaterThanOrEqual - 97)) | (1 << (SolidityParser.BitNot - 97)))) !== 0))) {
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
	public usingDirective(): UsingDirectiveContext {
		let _localctx: UsingDirectiveContext = new UsingDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SolidityParser.RULE_usingDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.match(SolidityParser.Using);
			this.state = 691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.Error:
			case SolidityParser.From:
			case SolidityParser.Global:
			case SolidityParser.Revert:
			case SolidityParser.Identifier:
				{
				this.state = 671;
				this.identifierPath();
				}
				break;
			case SolidityParser.LBrace:
				{
				{
				this.state = 672;
				this.match(SolidityParser.LBrace);
				this.state = 673;
				this.identifierPath();
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.As) {
					{
					this.state = 674;
					this.match(SolidityParser.As);
					this.state = 675;
					this.userDefinableOperator();
					}
				}

				this.state = 686;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.Comma) {
					{
					{
					this.state = 678;
					this.match(SolidityParser.Comma);
					this.state = 679;
					this.identifierPath();
					this.state = 682;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SolidityParser.As) {
						{
						this.state = 680;
						this.match(SolidityParser.As);
						this.state = 681;
						this.userDefinableOperator();
						}
					}

					}
					}
					this.state = 688;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 689;
				this.match(SolidityParser.RBrace);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 693;
			this.match(SolidityParser.For);
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 694;
				this.match(SolidityParser.Mul);
				}
				break;

			case 2:
				{
				this.state = 695;
				this.typeName(0);
				}
				break;
			}
			this.state = 699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Global) {
				{
				this.state = 698;
				this.match(SolidityParser.Global);
				}
			}

			this.state = 701;
			this.match(SolidityParser.Semicolon);
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
		let _startState: number = 76;
		this.enterRecursionRule(_localctx, 76, SolidityParser.RULE_typeName, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 704;
				this.elementaryTypeName(true);
				}
				break;

			case 2:
				{
				this.state = 705;
				this.functionTypeName();
				}
				break;

			case 3:
				{
				this.state = 706;
				this.mappingType();
				}
				break;

			case 4:
				{
				this.state = 707;
				this.identifierPath();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
					this.state = 710;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 711;
					this.match(SolidityParser.LBrack);
					this.state = 713;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
					case 1:
						{
						this.state = 712;
						this.expression(0);
						}
						break;
					}
					this.state = 715;
					this.match(SolidityParser.RBrack);
					}
					}
				}
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 71, this._ctx);
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
	public elementaryTypeName(allowAddressPayable: boolean): ElementaryTypeNameContext {
		let _localctx: ElementaryTypeNameContext = new ElementaryTypeNameContext(this._ctx, this.state, allowAddressPayable);
		this.enterRule(_localctx, 78, SolidityParser.RULE_elementaryTypeName);
		try {
			this.state = 733;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 721;
				this.match(SolidityParser.Address);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 722;
				if (!(_localctx.allowAddressPayable)) {
					throw this.createFailedPredicateException("$allowAddressPayable");
				}
				this.state = 723;
				this.match(SolidityParser.Address);
				this.state = 724;
				this.match(SolidityParser.Payable);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 725;
				this.match(SolidityParser.Bool);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 726;
				this.match(SolidityParser.String);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 727;
				this.match(SolidityParser.Bytes);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 728;
				this.match(SolidityParser.SignedIntegerType);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 729;
				this.match(SolidityParser.UnsignedIntegerType);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 730;
				this.match(SolidityParser.FixedBytes);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 731;
				this.match(SolidityParser.Fixed);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 732;
				this.match(SolidityParser.Ufixed);
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
	public functionTypeName(): FunctionTypeNameContext {
		let _localctx: FunctionTypeNameContext = new FunctionTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SolidityParser.RULE_functionTypeName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(SolidityParser.Function);
			this.state = 736;
			this.match(SolidityParser.LParen);
			this.state = 738;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 737;
				_localctx._arguments = this.parameterList();
				}
				break;
			}
			this.state = 740;
			this.match(SolidityParser.RParen);
			this.state = 751;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 749;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
					case 1:
						{
						this.state = 741;
						if (!(!_localctx.visibilitySet)) {
							throw this.createFailedPredicateException("!$visibilitySet");
						}
						this.state = 742;
						this.visibility();
						_localctx.visibilitySet =  true;
						}
						break;

					case 2:
						{
						this.state = 745;
						if (!(!_localctx.mutabilitySet)) {
							throw this.createFailedPredicateException("!$mutabilitySet");
						}
						this.state = 746;
						this.stateMutability();
						_localctx.mutabilitySet =  true;
						}
						break;
					}
					}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			}
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 754;
				this.match(SolidityParser.Returns);
				this.state = 755;
				this.match(SolidityParser.LParen);
				this.state = 756;
				_localctx._returnParameters = this.parameterList();
				this.state = 757;
				this.match(SolidityParser.RParen);
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SolidityParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			_localctx._type = this.typeName(0);
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Calldata || _la === SolidityParser.Memory || _la === SolidityParser.Storage) {
				{
				this.state = 762;
				_localctx._location = this.dataLocation();
				}
			}

			this.state = 765;
			_localctx._name = this.identifier();
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
	public dataLocation(): DataLocationContext {
		let _localctx: DataLocationContext = new DataLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SolidityParser.RULE_dataLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.Calldata || _la === SolidityParser.Memory || _la === SolidityParser.Storage)) {
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
		let _startState: number = 86;
		this.enterRecursionRule(_localctx, 86, SolidityParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				_localctx = new PayableConversionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 770;
				this.match(SolidityParser.Payable);
				this.state = 771;
				this.callArgumentList();
				}
				break;

			case 2:
				{
				_localctx = new MetaTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 772;
				this.match(SolidityParser.Type);
				this.state = 773;
				this.match(SolidityParser.LParen);
				this.state = 774;
				this.typeName(0);
				this.state = 775;
				this.match(SolidityParser.RParen);
				}
				break;

			case 3:
				{
				_localctx = new UnaryPrefixOperationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 777;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.Delete || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (SolidityParser.Sub - 104)) | (1 << (SolidityParser.Not - 104)) | (1 << (SolidityParser.BitNot - 104)) | (1 << (SolidityParser.Inc - 104)) | (1 << (SolidityParser.Dec - 104)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 778;
				this.expression(19);
				}
				break;

			case 4:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 779;
				this.match(SolidityParser.New);
				this.state = 780;
				this.typeName(0);
				}
				break;

			case 5:
				{
				_localctx = new TupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 781;
				this.tupleExpression();
				}
				break;

			case 6:
				{
				_localctx = new InlineArrayContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 782;
				this.inlineArrayExpression();
				}
				break;

			case 7:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 786;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 783;
					this.identifier();
					}
					break;

				case 2:
					{
					this.state = 784;
					this.literal();
					}
					break;

				case 3:
					{
					this.state = 785;
					this.elementaryTypeName(false);
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 874;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 872;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 790;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 791;
						this.match(SolidityParser.Exp);
						this.state = 792;
						this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 793;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 794;
						_la = this._input.LA(1);
						if (!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & ((1 << (SolidityParser.Mul - 105)) | (1 << (SolidityParser.Div - 105)) | (1 << (SolidityParser.Mod - 105)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 795;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new AddSubOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 796;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 797;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.Add || _la === SolidityParser.Sub)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 798;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new ShiftOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 799;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 800;
						_la = this._input.LA(1);
						if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SolidityParser.Shl - 100)) | (1 << (SolidityParser.Sar - 100)) | (1 << (SolidityParser.Shr - 100)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 801;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new BitAndOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 802;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 803;
						this.match(SolidityParser.BitAnd);
						this.state = 804;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new BitXorOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 805;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 806;
						this.match(SolidityParser.BitXor);
						this.state = 807;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new BitOrOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 808;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 809;
						this.match(SolidityParser.BitOr);
						this.state = 810;
						this.expression(12);
						}
						break;

					case 8:
						{
						_localctx = new OrderComparisonContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 811;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 812;
						_la = this._input.LA(1);
						if (!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (SolidityParser.LessThan - 111)) | (1 << (SolidityParser.GreaterThan - 111)) | (1 << (SolidityParser.LessThanOrEqual - 111)) | (1 << (SolidityParser.GreaterThanOrEqual - 111)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 813;
						this.expression(11);
						}
						break;

					case 9:
						{
						_localctx = new EqualityComparisonContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 814;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 815;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.Equal || _la === SolidityParser.NotEqual)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 816;
						this.expression(10);
						}
						break;

					case 10:
						{
						_localctx = new AndOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 817;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 818;
						this.match(SolidityParser.And);
						this.state = 819;
						this.expression(9);
						}
						break;

					case 11:
						{
						_localctx = new OrOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 820;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 821;
						this.match(SolidityParser.Or);
						this.state = 822;
						this.expression(8);
						}
						break;

					case 12:
						{
						_localctx = new ConditionalContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 823;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 824;
						this.match(SolidityParser.Conditional);
						this.state = 825;
						this.expression(0);
						this.state = 826;
						this.match(SolidityParser.Colon);
						this.state = 827;
						this.expression(6);
						}
						break;

					case 13:
						{
						_localctx = new AssignmentContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 829;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 830;
						this.assignOp();
						this.state = 831;
						this.expression(5);
						}
						break;

					case 14:
						{
						_localctx = new IndexAccessContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 833;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 834;
						this.match(SolidityParser.LBrack);
						this.state = 836;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
						case 1:
							{
							this.state = 835;
							(_localctx as IndexAccessContext)._index = this.expression(0);
							}
							break;
						}
						this.state = 838;
						this.match(SolidityParser.RBrack);
						}
						break;

					case 15:
						{
						_localctx = new IndexRangeAccessContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 839;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 840;
						this.match(SolidityParser.LBrack);
						this.state = 842;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
						case 1:
							{
							this.state = 841;
							(_localctx as IndexRangeAccessContext)._start = this.expression(0);
							}
							break;
						}
						this.state = 844;
						this.match(SolidityParser.Colon);
						this.state = 846;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
						case 1:
							{
							this.state = 845;
							(_localctx as IndexRangeAccessContext)._end = this.expression(0);
							}
							break;
						}
						this.state = 848;
						this.match(SolidityParser.RBrack);
						}
						break;

					case 16:
						{
						_localctx = new MemberAccessContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 849;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 850;
						this.match(SolidityParser.Period);
						this.state = 853;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case SolidityParser.Error:
						case SolidityParser.From:
						case SolidityParser.Global:
						case SolidityParser.Revert:
						case SolidityParser.Identifier:
							{
							this.state = 851;
							this.identifier();
							}
							break;
						case SolidityParser.Address:
							{
							this.state = 852;
							this.match(SolidityParser.Address);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 17:
						{
						_localctx = new FunctionCallOptionsContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 855;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 856;
						this.match(SolidityParser.LBrace);
						this.state = 865;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
							{
							this.state = 857;
							this.namedArgument();
							this.state = 862;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === SolidityParser.Comma) {
								{
								{
								this.state = 858;
								this.match(SolidityParser.Comma);
								this.state = 859;
								this.namedArgument();
								}
								}
								this.state = 864;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 867;
						this.match(SolidityParser.RBrace);
						}
						break;

					case 18:
						{
						_localctx = new FunctionCallContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 868;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 869;
						this.callArgumentList();
						}
						break;

					case 19:
						{
						_localctx = new UnarySuffixOperationContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, SolidityParser.RULE_expression);
						this.state = 870;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 871;
						_la = this._input.LA(1);
						if (!(_la === SolidityParser.Inc || _la === SolidityParser.Dec)) {
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
					}
					}
				}
				this.state = 876;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
	public assignOp(): AssignOpContext {
		let _localctx: AssignOpContext = new AssignOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SolidityParser.RULE_assignOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 877;
			_la = this._input.LA(1);
			if (!(((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (SolidityParser.Assign - 82)) | (1 << (SolidityParser.AssignBitOr - 82)) | (1 << (SolidityParser.AssignBitXor - 82)) | (1 << (SolidityParser.AssignBitAnd - 82)) | (1 << (SolidityParser.AssignShl - 82)) | (1 << (SolidityParser.AssignSar - 82)) | (1 << (SolidityParser.AssignShr - 82)) | (1 << (SolidityParser.AssignAdd - 82)) | (1 << (SolidityParser.AssignSub - 82)) | (1 << (SolidityParser.AssignMul - 82)) | (1 << (SolidityParser.AssignDiv - 82)) | (1 << (SolidityParser.AssignMod - 82)))) !== 0))) {
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
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SolidityParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.match(SolidityParser.LParen);
			{
			this.state = 881;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 880;
				this.expression(0);
				}
				break;
			}
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 883;
				this.match(SolidityParser.Comma);
				this.state = 885;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 884;
					this.expression(0);
					}
					break;
				}
				}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 892;
			this.match(SolidityParser.RParen);
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
	public inlineArrayExpression(): InlineArrayExpressionContext {
		let _localctx: InlineArrayExpressionContext = new InlineArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SolidityParser.RULE_inlineArrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 894;
			this.match(SolidityParser.LBrack);
			{
			this.state = 895;
			this.expression(0);
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 896;
				this.match(SolidityParser.Comma);
				this.state = 897;
				this.expression(0);
				}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 903;
			this.match(SolidityParser.RBrack);
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
		this.enterRule(_localctx, 94, SolidityParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier)) {
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SolidityParser.RULE_literal);
		try {
			this.state = 912;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.NonEmptyStringLiteral:
			case SolidityParser.EmptyStringLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 907;
				this.stringLiteral();
				}
				break;
			case SolidityParser.HexNumber:
			case SolidityParser.DecimalNumber:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 908;
				this.numberLiteral();
				}
				break;
			case SolidityParser.False:
			case SolidityParser.True:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 909;
				this.booleanLiteral();
				}
				break;
			case SolidityParser.HexString:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 910;
				this.hexStringLiteral();
				}
				break;
			case SolidityParser.UnicodeStringLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 911;
				this.unicodeStringLiteral();
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
	public booleanLiteral(): BooleanLiteralContext {
		let _localctx: BooleanLiteralContext = new BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SolidityParser.RULE_booleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.False || _la === SolidityParser.True)) {
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
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SolidityParser.RULE_stringLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 917;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 916;
					_la = this._input.LA(1);
					if (!(_la === SolidityParser.NonEmptyStringLiteral || _la === SolidityParser.EmptyStringLiteral)) {
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
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 919;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
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
	public hexStringLiteral(): HexStringLiteralContext {
		let _localctx: HexStringLiteralContext = new HexStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SolidityParser.RULE_hexStringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 921;
					this.match(SolidityParser.HexString);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
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
	public unicodeStringLiteral(): UnicodeStringLiteralContext {
		let _localctx: UnicodeStringLiteralContext = new UnicodeStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SolidityParser.RULE_unicodeStringLiteral);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 927;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 926;
					this.match(SolidityParser.UnicodeStringLiteral);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 929;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
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
	public numberLiteral(): NumberLiteralContext {
		let _localctx: NumberLiteralContext = new NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SolidityParser.RULE_numberLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.HexNumber || _la === SolidityParser.DecimalNumber)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 933;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 932;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SolidityParser.RULE_block);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 935;
			this.match(SolidityParser.LBrace);
			this.state = 940;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 938;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						this.state = 936;
						this.statement();
						}
						break;

					case 2:
						{
						this.state = 937;
						this.uncheckedBlock();
						}
						break;
					}
					}
				}
				this.state = 942;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			this.state = 943;
			this.match(SolidityParser.RBrace);
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
	public uncheckedBlock(): UncheckedBlockContext {
		let _localctx: UncheckedBlockContext = new UncheckedBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SolidityParser.RULE_uncheckedBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this.match(SolidityParser.Unchecked);
			this.state = 946;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SolidityParser.RULE_statement);
		try {
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 948;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 949;
				this.simpleStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 950;
				this.ifStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 951;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 952;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 953;
				this.doWhileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 954;
				this.continueStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 955;
				this.breakStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 956;
				this.tryStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 957;
				this.returnStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 958;
				this.emitStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 959;
				this.revertStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 960;
				this.assemblyStatement();
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
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SolidityParser.RULE_simpleStatement);
		try {
			this.state = 965;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 963;
				this.variableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 964;
				this.expressionStatement();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SolidityParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(SolidityParser.If);
			this.state = 968;
			this.match(SolidityParser.LParen);
			this.state = 969;
			this.expression(0);
			this.state = 970;
			this.match(SolidityParser.RParen);
			this.state = 971;
			this.statement();
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 972;
				this.match(SolidityParser.Else);
				this.state = 973;
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, SolidityParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this.match(SolidityParser.For);
			this.state = 977;
			this.match(SolidityParser.LParen);
			this.state = 980;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 978;
				this.simpleStatement();
				}
				break;

			case 2:
				{
				this.state = 979;
				this.match(SolidityParser.Semicolon);
				}
				break;
			}
			this.state = 984;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 982;
				this.expressionStatement();
				}
				break;

			case 2:
				{
				this.state = 983;
				this.match(SolidityParser.Semicolon);
				}
				break;
			}
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 986;
				this.expression(0);
				}
				break;
			}
			this.state = 989;
			this.match(SolidityParser.RParen);
			this.state = 990;
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SolidityParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 992;
			this.match(SolidityParser.While);
			this.state = 993;
			this.match(SolidityParser.LParen);
			this.state = 994;
			this.expression(0);
			this.state = 995;
			this.match(SolidityParser.RParen);
			this.state = 996;
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
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SolidityParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(SolidityParser.Do);
			this.state = 999;
			this.statement();
			this.state = 1000;
			this.match(SolidityParser.While);
			this.state = 1001;
			this.match(SolidityParser.LParen);
			this.state = 1002;
			this.expression(0);
			this.state = 1003;
			this.match(SolidityParser.RParen);
			this.state = 1004;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 124, SolidityParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1006;
			this.match(SolidityParser.Continue);
			this.state = 1007;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 126, SolidityParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.match(SolidityParser.Break);
			this.state = 1010;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 128, SolidityParser.RULE_tryStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.match(SolidityParser.Try);
			this.state = 1013;
			this.expression(0);
			this.state = 1019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.Returns) {
				{
				this.state = 1014;
				this.match(SolidityParser.Returns);
				this.state = 1015;
				this.match(SolidityParser.LParen);
				this.state = 1016;
				_localctx._returnParameters = this.parameterList();
				this.state = 1017;
				this.match(SolidityParser.RParen);
				}
			}

			this.state = 1021;
			this.block();
			this.state = 1023;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1022;
					this.catchClause();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1025;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 106, this._ctx);
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
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SolidityParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this.match(SolidityParser.Catch);
			this.state = 1035;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.LParen || _la === SolidityParser.Identifier) {
				{
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
					{
					this.state = 1028;
					this.identifier();
					}
				}

				this.state = 1031;
				this.match(SolidityParser.LParen);
				{
				this.state = 1032;
				_localctx._arguments = this.parameterList();
				}
				this.state = 1033;
				this.match(SolidityParser.RParen);
				}
			}

			this.state = 1037;
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
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SolidityParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1039;
			this.match(SolidityParser.Return);
			this.state = 1041;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 1040;
				this.expression(0);
				}
				break;
			}
			this.state = 1043;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 134, SolidityParser.RULE_emitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1045;
			this.match(SolidityParser.Emit);
			this.state = 1046;
			this.expression(0);
			this.state = 1047;
			this.callArgumentList();
			this.state = 1048;
			this.match(SolidityParser.Semicolon);
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
	public revertStatement(): RevertStatementContext {
		let _localctx: RevertStatementContext = new RevertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SolidityParser.RULE_revertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.match(SolidityParser.Revert);
			this.state = 1051;
			this.expression(0);
			this.state = 1052;
			this.callArgumentList();
			this.state = 1053;
			this.match(SolidityParser.Semicolon);
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
	public assemblyStatement(): AssemblyStatementContext {
		let _localctx: AssemblyStatementContext = new AssemblyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SolidityParser.RULE_assemblyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1055;
			this.match(SolidityParser.Assembly);
			this.state = 1057;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AssemblyDialect) {
				{
				this.state = 1056;
				this.match(SolidityParser.AssemblyDialect);
				}
			}

			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.AssemblyBlockLParen) {
				{
				this.state = 1059;
				this.assemblyFlags();
				}
			}

			this.state = 1062;
			this.match(SolidityParser.AssemblyLBrace);
			this.state = 1066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (SolidityParser.YulBreak - 140)) | (1 << (SolidityParser.YulContinue - 140)) | (1 << (SolidityParser.YulFor - 140)) | (1 << (SolidityParser.YulFunction - 140)) | (1 << (SolidityParser.YulIf - 140)) | (1 << (SolidityParser.YulLeave - 140)) | (1 << (SolidityParser.YulLet - 140)) | (1 << (SolidityParser.YulSwitch - 140)) | (1 << (SolidityParser.YulEVMBuiltin - 140)) | (1 << (SolidityParser.YulLBrace - 140)) | (1 << (SolidityParser.YulIdentifier - 140)))) !== 0)) {
				{
				{
				this.state = 1063;
				this.yulStatement();
				}
				}
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1069;
			this.match(SolidityParser.YulRBrace);
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
	public assemblyFlags(): AssemblyFlagsContext {
		let _localctx: AssemblyFlagsContext = new AssemblyFlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SolidityParser.RULE_assemblyFlags);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this.match(SolidityParser.AssemblyBlockLParen);
			this.state = 1072;
			this.match(SolidityParser.AssemblyFlagString);
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.AssemblyBlockComma) {
				{
				{
				this.state = 1073;
				this.match(SolidityParser.AssemblyBlockComma);
				this.state = 1074;
				this.match(SolidityParser.AssemblyFlagString);
				}
				}
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1080;
			this.match(SolidityParser.AssemblyBlockRParen);
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
		this.enterRule(_localctx, 142, SolidityParser.RULE_variableDeclarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1082;
			_localctx._variableDeclaration = this.variableDeclaration();
			_localctx._variableDeclarations.push(_localctx._variableDeclaration);
			this.state = 1087;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 1083;
				this.match(SolidityParser.Comma);
				this.state = 1084;
				_localctx._variableDeclaration = this.variableDeclaration();
				_localctx._variableDeclarations.push(_localctx._variableDeclaration);
				}
				}
				this.state = 1089;
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
	public variableDeclarationTuple(): VariableDeclarationTupleContext {
		let _localctx: VariableDeclarationTupleContext = new VariableDeclarationTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SolidityParser.RULE_variableDeclarationTuple);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1090;
			this.match(SolidityParser.LParen);
			{
			this.state = 1094;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1091;
					this.match(SolidityParser.Comma);
					}
					}
				}
				this.state = 1096;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			}
			this.state = 1097;
			_localctx._variableDeclaration = this.variableDeclaration();
			_localctx._variableDeclarations.push(_localctx._variableDeclaration);
			}
			this.state = 1105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.Comma) {
				{
				{
				this.state = 1099;
				this.match(SolidityParser.Comma);
				this.state = 1101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
				case 1:
					{
					this.state = 1100;
					_localctx._variableDeclaration = this.variableDeclaration();
					_localctx._variableDeclarations.push(_localctx._variableDeclaration);
					}
					break;
				}
				}
				}
				this.state = 1107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1108;
			this.match(SolidityParser.RParen);
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
		this.enterRule(_localctx, 146, SolidityParser.RULE_variableDeclarationStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 119, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1110;
				this.variableDeclaration();
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.Assign) {
					{
					this.state = 1111;
					this.match(SolidityParser.Assign);
					this.state = 1112;
					this.expression(0);
					}
				}

				}
				}
				break;

			case 2:
				{
				{
				this.state = 1115;
				this.variableDeclarationTuple();
				this.state = 1116;
				this.match(SolidityParser.Assign);
				this.state = 1117;
				this.expression(0);
				}
				}
				break;
			}
			this.state = 1121;
			this.match(SolidityParser.Semicolon);
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
		this.enterRule(_localctx, 148, SolidityParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1123;
			this.expression(0);
			this.state = 1124;
			this.match(SolidityParser.Semicolon);
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
	public mappingType(): MappingTypeContext {
		let _localctx: MappingTypeContext = new MappingTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SolidityParser.RULE_mappingType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.match(SolidityParser.Mapping);
			this.state = 1127;
			this.match(SolidityParser.LParen);
			this.state = 1128;
			_localctx._key = this.mappingKeyType();
			this.state = 1130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
				{
				this.state = 1129;
				_localctx._name = this.identifier();
				}
			}

			this.state = 1132;
			this.match(SolidityParser.DoubleArrow);
			this.state = 1133;
			_localctx._value = this.typeName(0);
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SolidityParser.Error) | (1 << SolidityParser.From) | (1 << SolidityParser.Global))) !== 0) || _la === SolidityParser.Revert || _la === SolidityParser.Identifier) {
				{
				this.state = 1134;
				_localctx._name = this.identifier();
				}
			}

			this.state = 1137;
			this.match(SolidityParser.RParen);
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
	public mappingKeyType(): MappingKeyTypeContext {
		let _localctx: MappingKeyTypeContext = new MappingKeyTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SolidityParser.RULE_mappingKeyType);
		try {
			this.state = 1141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1139;
				this.elementaryTypeName(false);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1140;
				this.identifierPath();
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
	public yulStatement(): YulStatementContext {
		let _localctx: YulStatementContext = new YulStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SolidityParser.RULE_yulStatement);
		try {
			this.state = 1154;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1143;
				this.yulBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1144;
				this.yulVariableDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1145;
				this.yulAssignment();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1146;
				this.yulFunctionCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1147;
				this.yulIfStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1148;
				this.yulForStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1149;
				this.yulSwitchStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1150;
				this.match(SolidityParser.YulLeave);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1151;
				this.match(SolidityParser.YulBreak);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1152;
				this.match(SolidityParser.YulContinue);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1153;
				this.yulFunctionDefinition();
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
	public yulBlock(): YulBlockContext {
		let _localctx: YulBlockContext = new YulBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SolidityParser.RULE_yulBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			this.match(SolidityParser.YulLBrace);
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (SolidityParser.YulBreak - 140)) | (1 << (SolidityParser.YulContinue - 140)) | (1 << (SolidityParser.YulFor - 140)) | (1 << (SolidityParser.YulFunction - 140)) | (1 << (SolidityParser.YulIf - 140)) | (1 << (SolidityParser.YulLeave - 140)) | (1 << (SolidityParser.YulLet - 140)) | (1 << (SolidityParser.YulSwitch - 140)) | (1 << (SolidityParser.YulEVMBuiltin - 140)) | (1 << (SolidityParser.YulLBrace - 140)) | (1 << (SolidityParser.YulIdentifier - 140)))) !== 0)) {
				{
				{
				this.state = 1157;
				this.yulStatement();
				}
				}
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1163;
			this.match(SolidityParser.YulRBrace);
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
	public yulVariableDeclaration(): YulVariableDeclarationContext {
		let _localctx: YulVariableDeclarationContext = new YulVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SolidityParser.RULE_yulVariableDeclaration);
		let _la: number;
		try {
			this.state = 1184;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1165;
				this.match(SolidityParser.YulLet);
				this.state = 1166;
				_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
				_localctx._variables.push(_localctx._YulIdentifier);
				this.state = 1169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.YulAssign) {
					{
					this.state = 1167;
					this.match(SolidityParser.YulAssign);
					this.state = 1168;
					this.yulExpression();
					}
				}

				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1171;
				this.match(SolidityParser.YulLet);
				this.state = 1172;
				_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
				_localctx._variables.push(_localctx._YulIdentifier);
				this.state = 1177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.YulComma) {
					{
					{
					this.state = 1173;
					this.match(SolidityParser.YulComma);
					this.state = 1174;
					_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
					_localctx._variables.push(_localctx._YulIdentifier);
					}
					}
					this.state = 1179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.YulAssign) {
					{
					this.state = 1180;
					this.match(SolidityParser.YulAssign);
					this.state = 1181;
					this.yulFunctionCall();
					}
				}

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
	public yulAssignment(): YulAssignmentContext {
		let _localctx: YulAssignmentContext = new YulAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SolidityParser.RULE_yulAssignment);
		let _la: number;
		try {
			this.state = 1200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1186;
				this.yulPath();
				this.state = 1187;
				this.match(SolidityParser.YulAssign);
				this.state = 1188;
				this.yulExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1190;
				this.yulPath();
				this.state = 1193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1191;
					this.match(SolidityParser.YulComma);
					this.state = 1192;
					this.yulPath();
					}
					}
					this.state = 1195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SolidityParser.YulComma);
				}
				this.state = 1197;
				this.match(SolidityParser.YulAssign);
				this.state = 1198;
				this.yulFunctionCall();
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
	public yulIfStatement(): YulIfStatementContext {
		let _localctx: YulIfStatementContext = new YulIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SolidityParser.RULE_yulIfStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1202;
			this.match(SolidityParser.YulIf);
			this.state = 1203;
			_localctx._cond = this.yulExpression();
			this.state = 1204;
			_localctx._body = this.yulBlock();
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
	public yulForStatement(): YulForStatementContext {
		let _localctx: YulForStatementContext = new YulForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SolidityParser.RULE_yulForStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.match(SolidityParser.YulFor);
			this.state = 1207;
			_localctx._init = this.yulBlock();
			this.state = 1208;
			_localctx._cond = this.yulExpression();
			this.state = 1209;
			_localctx._post = this.yulBlock();
			this.state = 1210;
			_localctx._body = this.yulBlock();
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
	public yulSwitchCase(): YulSwitchCaseContext {
		let _localctx: YulSwitchCaseContext = new YulSwitchCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SolidityParser.RULE_yulSwitchCase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.match(SolidityParser.YulCase);
			this.state = 1213;
			this.yulLiteral();
			this.state = 1214;
			this.yulBlock();
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
	public yulSwitchStatement(): YulSwitchStatementContext {
		let _localctx: YulSwitchStatementContext = new YulSwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SolidityParser.RULE_yulSwitchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1216;
			this.match(SolidityParser.YulSwitch);
			this.state = 1217;
			this.yulExpression();
			this.state = 1229;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.YulCase:
				{
				{
				this.state = 1219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1218;
					this.yulSwitchCase();
					}
					}
					this.state = 1221;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SolidityParser.YulCase);
				this.state = 1225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SolidityParser.YulDefault) {
					{
					this.state = 1223;
					this.match(SolidityParser.YulDefault);
					this.state = 1224;
					this.yulBlock();
					}
				}

				}
				}
				break;
			case SolidityParser.YulDefault:
				{
				{
				this.state = 1227;
				this.match(SolidityParser.YulDefault);
				this.state = 1228;
				this.yulBlock();
				}
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
	public yulFunctionDefinition(): YulFunctionDefinitionContext {
		let _localctx: YulFunctionDefinitionContext = new YulFunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SolidityParser.RULE_yulFunctionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1231;
			this.match(SolidityParser.YulFunction);
			this.state = 1232;
			this.match(SolidityParser.YulIdentifier);
			this.state = 1233;
			this.match(SolidityParser.YulLParen);
			this.state = 1242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.YulIdentifier) {
				{
				this.state = 1234;
				_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
				_localctx._arguments.push(_localctx._YulIdentifier);
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.YulComma) {
					{
					{
					this.state = 1235;
					this.match(SolidityParser.YulComma);
					this.state = 1236;
					_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
					_localctx._arguments.push(_localctx._YulIdentifier);
					}
					}
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1244;
			this.match(SolidityParser.YulRParen);
			this.state = 1254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SolidityParser.YulArrow) {
				{
				this.state = 1245;
				this.match(SolidityParser.YulArrow);
				this.state = 1246;
				_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
				_localctx._returnParameters.push(_localctx._YulIdentifier);
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.YulComma) {
					{
					{
					this.state = 1247;
					this.match(SolidityParser.YulComma);
					this.state = 1248;
					_localctx._YulIdentifier = this.match(SolidityParser.YulIdentifier);
					_localctx._returnParameters.push(_localctx._YulIdentifier);
					}
					}
					this.state = 1253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1256;
			_localctx._body = this.yulBlock();
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
	public yulPath(): YulPathContext {
		let _localctx: YulPathContext = new YulPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SolidityParser.RULE_yulPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1258;
			this.match(SolidityParser.YulIdentifier);
			this.state = 1263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SolidityParser.YulPeriod) {
				{
				{
				this.state = 1259;
				this.match(SolidityParser.YulPeriod);
				this.state = 1260;
				_la = this._input.LA(1);
				if (!(_la === SolidityParser.YulEVMBuiltin || _la === SolidityParser.YulIdentifier)) {
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
				this.state = 1265;
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
	public yulFunctionCall(): YulFunctionCallContext {
		let _localctx: YulFunctionCallContext = new YulFunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SolidityParser.RULE_yulFunctionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.YulEVMBuiltin || _la === SolidityParser.YulIdentifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1267;
			this.match(SolidityParser.YulLParen);
			this.state = 1276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 144)) & ~0x1F) === 0 && ((1 << (_la - 144)) & ((1 << (SolidityParser.YulFalse - 144)) | (1 << (SolidityParser.YulTrue - 144)) | (1 << (SolidityParser.YulEVMBuiltin - 144)) | (1 << (SolidityParser.YulIdentifier - 144)) | (1 << (SolidityParser.YulHexNumber - 144)) | (1 << (SolidityParser.YulDecimalNumber - 144)) | (1 << (SolidityParser.YulStringLiteral - 144)) | (1 << (SolidityParser.YulHexStringLiteral - 144)))) !== 0)) {
				{
				this.state = 1268;
				this.yulExpression();
				this.state = 1273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SolidityParser.YulComma) {
					{
					{
					this.state = 1269;
					this.match(SolidityParser.YulComma);
					this.state = 1270;
					this.yulExpression();
					}
					}
					this.state = 1275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1278;
			this.match(SolidityParser.YulRParen);
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
	public yulBoolean(): YulBooleanContext {
		let _localctx: YulBooleanContext = new YulBooleanContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, SolidityParser.RULE_yulBoolean);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1280;
			_la = this._input.LA(1);
			if (!(_la === SolidityParser.YulFalse || _la === SolidityParser.YulTrue)) {
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
	public yulLiteral(): YulLiteralContext {
		let _localctx: YulLiteralContext = new YulLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, SolidityParser.RULE_yulLiteral);
		try {
			this.state = 1287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SolidityParser.YulDecimalNumber:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1282;
				this.match(SolidityParser.YulDecimalNumber);
				}
				break;
			case SolidityParser.YulStringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1283;
				this.match(SolidityParser.YulStringLiteral);
				}
				break;
			case SolidityParser.YulHexNumber:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1284;
				this.match(SolidityParser.YulHexNumber);
				}
				break;
			case SolidityParser.YulFalse:
			case SolidityParser.YulTrue:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1285;
				this.yulBoolean();
				}
				break;
			case SolidityParser.YulHexStringLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1286;
				this.match(SolidityParser.YulHexStringLiteral);
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
	public yulExpression(): YulExpressionContext {
		let _localctx: YulExpressionContext = new YulExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, SolidityParser.RULE_yulExpression);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 142, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1289;
				this.yulPath();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1290;
				this.yulFunctionCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1291;
				this.yulLiteral();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.constructorDefinition_sempred(_localctx as ConstructorDefinitionContext, predIndex);

		case 22:
			return this.functionDefinition_sempred(_localctx as FunctionDefinitionContext, predIndex);

		case 23:
			return this.modifierDefinition_sempred(_localctx as ModifierDefinitionContext, predIndex);

		case 24:
			return this.fallbackFunctionDefinition_sempred(_localctx as FallbackFunctionDefinitionContext, predIndex);

		case 25:
			return this.receiveFunctionDefinition_sempred(_localctx as ReceiveFunctionDefinitionContext, predIndex);

		case 30:
			return this.stateVariableDeclaration_sempred(_localctx as StateVariableDeclarationContext, predIndex);

		case 38:
			return this.typeName_sempred(_localctx as TypeNameContext, predIndex);

		case 39:
			return this.elementaryTypeName_sempred(_localctx as ElementaryTypeNameContext, predIndex);

		case 40:
			return this.functionTypeName_sempred(_localctx as FunctionTypeNameContext, predIndex);

		case 43:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private constructorDefinition_sempred(_localctx: ConstructorDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return !_localctx.payableSet;

		case 1:
			return !_localctx.visibilitySet;

		case 2:
			return !_localctx.visibilitySet;
		}
		return true;
	}
	private functionDefinition_sempred(_localctx: FunctionDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return !_localctx.visibilitySet;

		case 4:
			return !_localctx.mutabilitySet;

		case 5:
			return !_localctx.virtualSet;

		case 6:
			return !_localctx.overrideSpecifierSet;
		}
		return true;
	}
	private modifierDefinition_sempred(_localctx: ModifierDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return !_localctx.virtualSet;

		case 8:
			return !_localctx.overrideSpecifierSet;
		}
		return true;
	}
	private fallbackFunctionDefinition_sempred(_localctx: FallbackFunctionDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return !_localctx.visibilitySet;

		case 10:
			return !_localctx.mutabilitySet;

		case 11:
			return !_localctx.virtualSet;

		case 12:
			return !_localctx.overrideSpecifierSet;

		case 13:
			return _localctx.hasParameters;

		case 14:
			return !_localctx.hasParameters;
		}
		return true;
	}
	private receiveFunctionDefinition_sempred(_localctx: ReceiveFunctionDefinitionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return !_localctx.visibilitySet;

		case 16:
			return !_localctx.mutabilitySet;

		case 17:
			return !_localctx.virtualSet;

		case 18:
			return !_localctx.overrideSpecifierSet;
		}
		return true;
	}
	private stateVariableDeclaration_sempred(_localctx: StateVariableDeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return !_localctx.visibilitySet;

		case 20:
			return !_localctx.visibilitySet;

		case 21:
			return !_localctx.visibilitySet;

		case 22:
			return !_localctx.constantnessSet;

		case 23:
			return !_localctx.overrideSpecifierSet;

		case 24:
			return !_localctx.constantnessSet;
		}
		return true;
	}
	private typeName_sempred(_localctx: TypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private elementaryTypeName_sempred(_localctx: ElementaryTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return _localctx.allowAddressPayable;
		}
		return true;
	}
	private functionTypeName_sempred(_localctx: FunctionTypeNameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 27:
			return !_localctx.visibilitySet;

		case 28:
			return !_localctx.mutabilitySet;
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 29:
			return this.precpred(this._ctx, 17);

		case 30:
			return this.precpred(this._ctx, 16);

		case 31:
			return this.precpred(this._ctx, 15);

		case 32:
			return this.precpred(this._ctx, 14);

		case 33:
			return this.precpred(this._ctx, 13);

		case 34:
			return this.precpred(this._ctx, 12);

		case 35:
			return this.precpred(this._ctx, 11);

		case 36:
			return this.precpred(this._ctx, 10);

		case 37:
			return this.precpred(this._ctx, 9);

		case 38:
			return this.precpred(this._ctx, 8);

		case 39:
			return this.precpred(this._ctx, 7);

		case 40:
			return this.precpred(this._ctx, 6);

		case 41:
			return this.precpred(this._ctx, 5);

		case 42:
			return this.precpred(this._ctx, 26);

		case 43:
			return this.precpred(this._ctx, 25);

		case 44:
			return this.precpred(this._ctx, 24);

		case 45:
			return this.precpred(this._ctx, 23);

		case 46:
			return this.precpred(this._ctx, 22);

		case 47:
			return this.precpred(this._ctx, 18);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xB0\u0511\x04" +
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
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
		"\xC5\n\x02\f\x02\x0E\x02\xC8\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x06" +
		"\x03\xCE\n\x03\r\x03\x0E\x03\xCF\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\xD8\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xE4\n\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xEB\n\x05\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\xF3\n\x07\f\x07\x0E\x07\xF6\v\x07\x03\x07" +
		"\x03\x07\x03\b\x05\b\xFB\n\b\x03\b\x03\b\x03\b\x05\b\u0100\n\b\x03\b\x03" +
		"\b\x07\b\u0104\n\b\f\b\x0E\b\u0107\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05" +
		"\t\u010E\n\t\x03\t\x03\t\x07\t\u0112\n\t\f\t\x0E\t\u0115\v\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x07\n\u011D\n\n\f\n\x0E\n\u0120\v\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0128\n\v\f\v\x0E\v\u012B\v\v\x03\f\x03" +
		"\f\x05\f\u012F\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u013D\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0147\n\x0F\f\x0F\x0E\x0F\u014A\v" +
		"\x0F\x05\x0F\u014C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0152" +
		"\n\x0F\f\x0F\x0E\x0F\u0155\v\x0F\x05\x0F\u0157\n\x0F\x03\x0F\x05\x0F\u015A" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x07\x10\u0161\n\x10\f\x10" +
		"\x0E\x10\u0164\v\x10\x03\x11\x03\x11\x05\x11\u0168\n\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x13\x07\x13\u016F\n\x13\f\x13\x0E\x13\u0172\v\x13" +
		"\x03\x14\x03\x14\x05\x14\u0176\n\x14\x03\x14\x05\x14\u0179\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u017E\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u018B\n\x15" +
		"\f\x15\x0E\x15\u018E\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x07\x17\u0199\n\x17\f\x17\x0E\x17\u019C\v" +
		"\x17\x03\x17\x03\x17\x05\x17\u01A0\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u01A6\n\x18\x03\x18\x03\x18\x05\x18\u01AA\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01BD\n\x18\f" +
		"\x18\x0E\x18\u01C0\v\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18" +
		"\u01C7\n\x18\x03\x18\x03\x18\x05\x18\u01CB\n\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u01D1\n\x19\x03\x19\x05\x19\u01D4\n\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u01DD\n\x19\f\x19\x0E" +
		"\x19\u01E0\v\x19\x03\x19\x03\x19\x05\x19\u01E4\n\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u01EB\n\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u01FD\n\x1A\f\x1A\x0E\x1A\u0200\v\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0209" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u020D\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0220\n\x1B\f\x1B\x0E\x1B" +
		"\u0223\v\x1B\x03\x1B\x03\x1B\x05\x1B\u0227\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x06\x1C\u022D\n\x1C\r\x1C\x0E\x1C\u022E\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u023D\n\x1E\f\x1E\x0E\x1E\u0240\v\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x07 \u025E\n \f \x0E \u0261\v \x03 \x03 \x03 \x05 \u0266\n \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u0273\n\"\x03\"" +
		"\x05\"\u0276\n\"\x03#\x03#\x03#\x03#\x03#\x03#\x07#\u027E\n#\f#\x0E#\u0281" +
		"\v#\x05#\u0283\n#\x03#\x03#\x05#\u0287\n#\x03#\x03#\x03$\x03$\x05$\u028D" +
		"\n$\x03%\x03%\x03%\x03%\x03%\x03%\x07%\u0295\n%\f%\x0E%\u0298\v%\x05%" +
		"\u029A\n%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x05\'\u02A7\n\'\x03\'\x03\'\x03\'\x03\'\x05\'\u02AD\n\'\x07\'\u02AF\n" +
		"\'\f\'\x0E\'\u02B2\v\'\x03\'\x03\'\x05\'\u02B6\n\'\x03\'\x03\'\x03\'\x05" +
		"\'\u02BB\n\'\x03\'\x05\'\u02BE\n\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03" +
		"(\x05(\u02C7\n(\x03(\x03(\x03(\x05(\u02CC\n(\x03(\x07(\u02CF\n(\f(\x0E" +
		"(\u02D2\v(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x05)\u02E0\n)\x03*\x03*\x03*\x05*\u02E5\n*\x03*\x03*\x03*\x03*\x03*" +
		"\x03*\x03*\x03*\x03*\x07*\u02F0\n*\f*\x0E*\u02F3\v*\x03*\x03*\x03*\x03" +
		"*\x03*\x05*\u02FA\n*\x03+\x03+\x05+\u02FE\n+\x03+\x03+\x03,\x03,\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x05-\u0315\n-\x05-\u0317\n-\x03-\x03-\x03-\x03-\x03-\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0347" +
		"\n-\x03-\x03-\x03-\x03-\x05-\u034D\n-\x03-\x03-\x05-\u0351\n-\x03-\x03" +
		"-\x03-\x03-\x03-\x05-\u0358\n-\x03-\x03-\x03-\x03-\x03-\x07-\u035F\n-" +
		"\f-\x0E-\u0362\v-\x05-\u0364\n-\x03-\x03-\x03-\x03-\x03-\x07-\u036B\n" +
		"-\f-\x0E-\u036E\v-\x03.\x03.\x03/\x03/\x05/\u0374\n/\x03/\x03/\x05/\u0378" +
		"\n/\x07/\u037A\n/\f/\x0E/\u037D\v/\x03/\x03/\x030\x030\x030\x030\x070" +
		"\u0385\n0\f0\x0E0\u0388\v0\x030\x030\x031\x031\x032\x032\x032\x032\x03" +
		"2\x052\u0393\n2\x033\x033\x034\x064\u0398\n4\r4\x0E4\u0399\x035\x065\u039D" +
		"\n5\r5\x0E5\u039E\x036\x066\u03A2\n6\r6\x0E6\u03A3\x037\x037\x057\u03A8" +
		"\n7\x038\x038\x038\x078\u03AD\n8\f8\x0E8\u03B0\v8\x038\x038\x039\x039" +
		"\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03" +
		":\x05:\u03C4\n:\x03;\x03;\x05;\u03C8\n;\x03<\x03<\x03<\x03<\x03<\x03<" +
		"\x03<\x05<\u03D1\n<\x03=\x03=\x03=\x03=\x05=\u03D7\n=\x03=\x03=\x05=\u03DB" +
		"\n=\x03=\x05=\u03DE\n=\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03>\x03>\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u03FE\nB\x03B\x03B\x06B\u0402\nB" +
		"\rB\x0EB\u0403\x03C\x03C\x05C\u0408\nC\x03C\x03C\x03C\x03C\x05C\u040E" +
		"\nC\x03C\x03C\x03D\x03D\x05D\u0414\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
		"E\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x05G\u0424\nG\x03G\x05G\u0427\nG" +
		"\x03G\x03G\x07G\u042B\nG\fG\x0EG\u042E\vG\x03G\x03G\x03H\x03H\x03H\x03" +
		"H\x07H\u0436\nH\fH\x0EH\u0439\vH\x03H\x03H\x03I\x03I\x03I\x07I\u0440\n" +
		"I\fI\x0EI\u0443\vI\x03J\x03J\x07J\u0447\nJ\fJ\x0EJ\u044A\vJ\x03J\x03J" +
		"\x03J\x03J\x05J\u0450\nJ\x07J\u0452\nJ\fJ\x0EJ\u0455\vJ\x03J\x03J\x03" +
		"K\x03K\x03K\x05K\u045C\nK\x03K\x03K\x03K\x03K\x05K\u0462\nK\x03K\x03K" +
		"\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x05M\u046D\nM\x03M\x03M\x03M\x05M" +
		"\u0472\nM\x03M\x03M\x03N\x03N\x05N\u0478\nN\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x03O\x03O\x03O\x03O\x03O\x05O\u0485\nO\x03P\x03P\x07P\u0489\nP\fP\x0E" +
		"P\u048C\vP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x05Q\u0494\nQ\x03Q\x03Q\x03Q" +
		"\x03Q\x07Q\u049A\nQ\fQ\x0EQ\u049D\vQ\x03Q\x03Q\x05Q\u04A1\nQ\x05Q\u04A3" +
		"\nQ\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x06R\u04AC\nR\rR\x0ER\u04AD\x03" +
		"R\x03R\x03R\x05R\u04B3\nR\x03S\x03S\x03S\x03S\x03T\x03T\x03T\x03T\x03" +
		"T\x03T\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x06V\u04C6\nV\rV\x0EV\u04C7" +
		"\x03V\x03V\x05V\u04CC\nV\x03V\x03V\x05V\u04D0\nV\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x07W\u04D8\nW\fW\x0EW\u04DB\vW\x05W\u04DD\nW\x03W\x03W\x03W\x03" +
		"W\x03W\x07W\u04E4\nW\fW\x0EW\u04E7\vW\x05W\u04E9\nW\x03W\x03W\x03X\x03" +
		"X\x03X\x07X\u04F0\nX\fX\x0EX\u04F3\vX\x03Y\x03Y\x03Y\x03Y\x03Y\x07Y\u04FA" +
		"\nY\fY\x0EY\u04FD\vY\x05Y\u04FF\nY\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03[" +
		"\x03[\x03[\x05[\u050A\n[\x03\\\x03\\\x03\\\x05\\\u050F\n\\\x03\\\x03\u0129" +
		"\x02\x04NX]\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\x02\x14\x05\x02\x19\x19((34\x05\x021155EE\x06" +
		"\x02ceimotvv\x05\x02\f\f,,;;\x05\x02\x12\x12jjux\x03\x02km\x03\x02ij\x03" +
		"\x02fh\x03\x02qt\x03\x02op\x03\x02wx\x03\x02T_\x07\x02\x17\x17\x1F\x1F" +
		"!!99\x81\x81\x04\x02\x1B\x1B>>\x03\x02{|\x03\x02\x7F\x80\x04\x02\x9B\x9B" +
		"\xA4\xA4\x04\x02\x92\x92\x99\x99\x02\u05A5\x02\xC6\x03\x02\x02\x02\x04" +
		"\xCB\x03\x02\x02\x02\x06\xD3\x03\x02\x02\x02\b\xE7\x03\x02\x02\x02\n\xEC" +
		"\x03\x02\x02\x02\f\xEE\x03\x02\x02\x02\x0E\xFA\x03\x02\x02\x02\x10\u010A" +
		"\x03\x02\x02\x02\x12\u0118\x03\x02\x02\x02\x14\u0123\x03\x02\x02\x02\x16" +
		"\u012C\x03\x02\x02\x02\x18\u013C\x03\x02\x02\x02\x1A\u013E\x03\x02\x02" +
		"\x02\x1C\u0142\x03\x02\x02\x02\x1E\u015D\x03\x02\x02\x02 \u0165\x03\x02" +
		"\x02\x02\"\u0169\x03\x02\x02\x02$\u016B\x03\x02\x02\x02&\u0173\x03\x02" +
		"\x02\x02(\u017A\x03\x02\x02\x02*\u0191\x03\x02\x02\x02,\u0193\x03\x02" +
		"\x02\x02.\u01A1\x03\x02\x02\x020\u01CC\x03\x02\x02\x022\u01E5\x03\x02" +
		"\x02\x024\u020E\x03\x02\x02\x026\u0228\x03\x02\x02\x028\u0232\x03\x02" +
		"\x02\x02:\u0236\x03\x02\x02\x02<\u0243\x03\x02\x02\x02>\u0249\x03\x02" +
		"\x02\x02@\u0269\x03\x02\x02\x02B\u0270\x03\x02\x02\x02D\u0277\x03\x02" +
		"\x02\x02F\u028A\x03\x02\x02\x02H\u028E\x03\x02\x02\x02J\u029E\x03\x02" +
		"\x02\x02L\u02A0\x03\x02\x02\x02N\u02C6\x03\x02\x02\x02P\u02DF\x03\x02" +
		"\x02\x02R\u02E1\x03\x02\x02\x02T\u02FB\x03\x02\x02\x02V\u0301\x03\x02" +
		"\x02\x02X\u0316\x03\x02\x02\x02Z\u036F\x03\x02\x02\x02\\\u0371\x03\x02" +
		"\x02\x02^\u0380\x03\x02\x02\x02`\u038B\x03\x02\x02\x02b\u0392\x03\x02" +
		"\x02\x02d\u0394\x03\x02\x02\x02f\u0397\x03\x02\x02\x02h\u039C\x03\x02" +
		"\x02\x02j\u03A1\x03\x02\x02\x02l\u03A5\x03\x02\x02\x02n\u03A9\x03\x02" +
		"\x02\x02p\u03B3\x03\x02\x02\x02r\u03C3\x03\x02\x02\x02t\u03C7\x03\x02" +
		"\x02\x02v\u03C9\x03\x02\x02\x02x\u03D2\x03\x02\x02\x02z\u03E2\x03\x02" +
		"\x02\x02|\u03E8\x03\x02\x02\x02~\u03F0\x03\x02\x02\x02\x80\u03F3\x03\x02" +
		"\x02\x02\x82\u03F6\x03\x02\x02\x02\x84\u0405\x03\x02\x02\x02\x86\u0411" +
		"\x03\x02\x02\x02\x88\u0417\x03\x02\x02\x02\x8A\u041C\x03\x02\x02\x02\x8C" +
		"\u0421\x03\x02\x02\x02\x8E\u0431\x03\x02\x02\x02\x90\u043C\x03\x02\x02" +
		"\x02\x92\u0444\x03\x02\x02\x02\x94\u0461\x03\x02\x02\x02\x96\u0465\x03" +
		"\x02\x02\x02\x98\u0468\x03\x02\x02\x02\x9A\u0477\x03\x02\x02\x02\x9C\u0484" +
		"\x03\x02\x02\x02\x9E\u0486\x03\x02\x02\x02\xA0\u04A2\x03\x02\x02\x02\xA2" +
		"\u04B2\x03\x02\x02\x02\xA4\u04B4\x03\x02\x02\x02\xA6\u04B8\x03\x02\x02" +
		"\x02\xA8\u04BE\x03\x02\x02\x02\xAA\u04C2\x03\x02\x02\x02\xAC\u04D1\x03" +
		"\x02\x02\x02\xAE\u04EC\x03\x02\x02\x02\xB0\u04F4\x03\x02\x02\x02\xB2\u0502" +
		"\x03\x02\x02\x02\xB4\u0509\x03\x02\x02\x02\xB6\u050E\x03\x02\x02\x02\xB8" +
		"\xC5\x05\x04\x03\x02\xB9\xC5\x05\x06\x04\x02\xBA\xC5\x05L\'\x02\xBB\xC5" +
		"\x05\x0E\b\x02\xBC\xC5\x05\x10\t\x02\xBD\xC5\x05\x12\n\x02\xBE\xC5\x05" +
		".\x18\x02\xBF\xC5\x05@!\x02\xC0\xC5\x056\x1C\x02\xC1\xC5\x05:\x1E\x02" +
		"\xC2\xC5\x05<\x1F\x02\xC3\xC5\x05H%\x02\xC4\xB8\x03\x02\x02\x02\xC4\xB9" +
		"\x03\x02\x02\x02\xC4\xBA\x03\x02\x02\x02\xC4\xBB\x03\x02\x02\x02\xC4\xBC" +
		"\x03\x02\x02\x02\xC4\xBD\x03\x02\x02\x02\xC4\xBE\x03\x02\x02\x02\xC4\xBF" +
		"\x03\x02\x02\x02\xC4\xC0\x03\x02\x02\x02\xC4\xC1\x03\x02\x02\x02\xC4\xC2" +
		"\x03\x02\x02\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4" +
		"\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xC6" +
		"\x03\x02\x02\x02\xC9\xCA\x07\x02\x02\x03\xCA\x03\x03\x02\x02\x02\xCB\xCD" +
		"\x072\x02\x02\xCC\xCE\x07\xAC\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF" +
		"\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1" +
		"\x03\x02\x02\x02\xD1\xD2\x07\xAD\x02\x02\xD2\x05\x03\x02\x02\x02\xD3\xE3" +
		"\x07%\x02\x02\xD4\xD7\x05\n\x06\x02\xD5\xD6\x07\x07\x02\x02\xD6\xD8\x05" +
		"`1\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xE4\x03\x02" +
		"\x02\x02\xD9\xDA\x05\f\x07\x02\xDA\xDB\x07\x1F\x02\x02\xDB\xDC\x05\n\x06" +
		"\x02\xDC\xE4\x03\x02\x02\x02\xDD\xDE\x07k\x02\x02\xDE\xDF\x07\x07\x02" +
		"\x02\xDF\xE0\x05`1\x02\xE0\xE1\x07\x1F\x02\x02\xE1\xE2\x05\n\x06\x02\xE2" +
		"\xE4\x03\x02\x02\x02\xE3\xD4\x03\x02\x02\x02\xE3\xD9\x03\x02\x02\x02\xE3" +
		"\xDD\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE6\x07O\x02\x02\xE6" +
		"\x07\x03\x02\x02\x02\xE7\xEA\x05`1\x02\xE8\xE9\x07\x07\x02\x02\xE9\xEB" +
		"\x05`1\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\t\x03\x02" +
		"\x02\x02\xEC\xED\x07{\x02\x02\xED\v\x03\x02\x02\x02\xEE\xEF\x07L\x02\x02" +
		"\xEF\xF4\x05\b\x05\x02\xF0\xF1\x07`\x02\x02\xF1\xF3\x05\b\x05\x02\xF2" +
		"\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4" +
		"\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7" +
		"\xF8\x07M\x02\x02\xF8\r\x03\x02\x02\x02\xF9\xFB\x07\x04\x02\x02\xFA\xF9" +
		"\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD" +
		"\x07\x11\x02\x02\xFD\xFF\x05`1\x02\xFE\u0100\x05\x14\v\x02\xFF\xFE\x03" +
		"\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101" +
		"\u0105\x07L\x02\x02\u0102\u0104\x05\x18\r\x02\u0103\u0102\x03\x02\x02" +
		"\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02" +
		"\u0108\u0109\x07M\x02\x02\u0109\x0F\x03\x02\x02\x02\u010A\u010B\x07\'" +
		"\x02\x02\u010B\u010D\x05`1\x02\u010C\u010E\x05\x14\v\x02\u010D\u010C\x03" +
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0113\x07L\x02\x02\u0110\u0112\x05\x18\r\x02\u0111\u0110\x03\x02\x02" +
		"\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0114" +
		"\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02" +
		"\u0116\u0117\x07M\x02\x02\u0117\x11\x03\x02\x02\x02\u0118\u0119\x07*\x02" +
		"\x02\u0119\u011A\x05`1\x02\u011A\u011E\x07L\x02\x02\u011B\u011D\x05\x18" +
		"\r\x02\u011C\u011B\x03\x02\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C" +
		"\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02" +
		"\u0120\u011E\x03\x02\x02\x02\u0121\u0122\x07M\x02\x02\u0122\x13\x03\x02" +
		"\x02\x02\u0123\u0124\x07)\x02\x02\u0124\u0129\x05\x16\f\x02\u0125\u0126" +
		"\x07`\x02\x02\u0126\u0128\x05\x16\f\x02\u0127\u0125\x03\x02\x02\x02\u0128" +
		"\u012B\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u012A\x15\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012E" +
		"\x05\x1E\x10\x02\u012D\u012F\x05\x1C\x0F\x02\u012E\u012D\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\x17\x03\x02\x02\x02\u0130\u013D\x05" +
		"(\x15\x02\u0131\u013D\x05.\x18\x02\u0132\u013D\x050\x19\x02\u0133\u013D" +
		"\x052\x1A\x02\u0134\u013D\x054\x1B\x02\u0135\u013D\x056\x1C\x02\u0136" +
		"\u013D\x05:\x1E\x02\u0137\u013D\x05<\x1F\x02\u0138\u013D\x05> \x02\u0139" +
		"\u013D\x05D#\x02\u013A\u013D\x05H%\x02\u013B\u013D\x05L\'\x02\u013C\u0130" +
		"\x03\x02\x02\x02\u013C\u0131\x03\x02\x02\x02\u013C\u0132\x03\x02\x02\x02" +
		"\u013C\u0133\x03\x02\x02\x02\u013C\u0134\x03\x02\x02\x02\u013C\u0135\x03" +
		"\x02\x02\x02\u013C\u0136\x03\x02\x02\x02\u013C\u0137\x03\x02\x02\x02\u013C" +
		"\u0138\x03\x02\x02\x02\u013C\u0139\x03\x02\x02\x02\u013C\u013A\x03\x02" +
		"\x02\x02\u013C\u013B\x03\x02\x02\x02\u013D\x19\x03\x02\x02\x02\u013E\u013F" +
		"\x05`1\x02\u013F\u0140\x07N\x02\x02\u0140\u0141\x05X-\x02\u0141\x1B\x03" +
		"\x02\x02\x02\u0142\u0159\x07H\x02\x02\u0143\u0148\x05X-\x02\u0144\u0145" +
		"\x07`\x02\x02\u0145\u0147\x05X-\x02\u0146\u0144\x03\x02\x02\x02\u0147" +
		"\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02" +
		"\x02\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
		"\u0143\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u015A\x03\x02" +
		"\x02\x02\u014D\u0156\x07L\x02\x02\u014E\u0153\x05\x1A\x0E\x02\u014F\u0150" +
		"\x07`\x02\x02\u0150\u0152\x05\x1A\x0E\x02\u0151\u014F\x03\x02\x02\x02" +
		"\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
		"\u014E\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u015A\x07M\x02\x02\u0159\u014B\x03\x02\x02\x02\u0159\u014D" +
		"\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x07I\x02\x02" +
		"\u015C\x1D\x03\x02\x02\x02\u015D\u0162\x05`1\x02\u015E\u015F\x07P\x02" +
		"\x02\u015F\u0161\x05`1\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0164\x03" +
		"\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163" +
		"\x1F\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0167\x05\x1E\x10" +
		"\x02\u0166\u0168\x05\x1C\x0F\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168" +
		"\x03\x02\x02\x02\u0168!\x03\x02\x02\x02\u0169\u016A\t\x02\x02\x02\u016A" +
		"#\x03\x02\x02\x02\u016B\u0170\x05&\x14\x02\u016C\u016D\x07`\x02\x02\u016D" +
		"\u016F\x05&\x14\x02\u016E\u016C\x03\x02\x02\x02\u016F\u0172\x03\x02\x02" +
		"\x02\u0170\u016E\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171%\x03\x02\x02\x02\u0172" +
		"\u0170\x03\x02\x02\x02\u0173\u0175\x05N(\x02\u0174\u0176\x05V,\x02\u0175" +
		"\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176\u0178\x03\x02" +
		"\x02\x02\u0177\u0179\x05`1\x02\u0178\u0177\x03\x02\x02\x02\u0178\u0179" +
		"\x03\x02\x02\x02\u0179\'\x03\x02\x02\x02\u017A\u017B\x07\x0F\x02\x02\u017B" +
		"\u017D\x07H\x02\x02\u017C\u017E\x05$\x13\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u018C\x07" +
		"I\x02\x02\u0180\u018B\x05 \x11\x02\u0181\u0182\x06\x15\x02\x03\u0182\u0183" +
		"\x071\x02\x02\u0183\u018B\b\x15\x01\x02\u0184\u0185\x06\x15\x03\x03\u0185" +
		"\u0186\x07(\x02\x02\u0186\u018B\b\x15\x01\x02\u0187\u0188\x06\x15\x04" +
		"\x03\u0188\u0189\x074\x02\x02\u0189\u018B\b\x15\x01\x02\u018A\u0180\x03" +
		"\x02\x02\x02\u018A\u0181\x03\x02\x02\x02\u018A\u0184\x03\x02\x02\x02\u018A" +
		"\u0187\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02" +
		"\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E" +
		"\u018C\x03\x02\x02\x02\u018F\u0190\x05n8\x02\u0190)\x03\x02\x02\x02\u0191" +
		"\u0192\t\x03\x02\x02\u0192+\x03\x02\x02\x02\u0193\u019F\x070\x02\x02\u0194" +
		"\u0195\x07H\x02\x02\u0195\u019A\x05\x1E\x10\x02\u0196\u0197\x07`\x02\x02" +
		"\u0197\u0199\x05\x1E\x10\x02\u0198\u0196\x03\x02\x02\x02\u0199\u019C\x03" +
		"\x02\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B" +
		"\u019D\x03\x02\x02\x02\u019C\u019A\x03\x02\x02\x02\u019D\u019E\x07I\x02" +
		"\x02\u019E\u01A0\x03\x02\x02\x02\u019F\u0194\x03\x02\x02\x02\u019F\u01A0" +
		"\x03\x02\x02\x02\u01A0-\x03\x02\x02\x02\u01A1\u01A5\x07 \x02\x02\u01A2" +
		"\u01A6\x05`1\x02\u01A3\u01A6\x07\x1A\x02\x02\u01A4\u01A6\x076\x02\x02" +
		"\u01A5\u01A2\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A5\u01A4\x03" +
		"\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A9\x07H\x02\x02\u01A8" +
		"\u01AA\x05$\x13\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02" +
		"\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB\u01BE\x07I\x02\x02\u01AC\u01AD" +
		"\x06\x18\x05\x03\u01AD\u01AE\x05\"\x12\x02\u01AE\u01AF\b\x18\x01\x02\u01AF" +
		"\u01BD\x03\x02\x02\x02\u01B0\u01B1\x06\x18\x06\x03\u01B1\u01B2\x05*\x16" +
		"\x02\u01B2\u01B3\b\x18\x01\x02\u01B3\u01BD\x03\x02\x02\x02\u01B4\u01BD" +
		"\x05 \x11\x02\u01B5\u01B6\x06\x18\x07\x03\u01B6\u01B7\x07F\x02\x02\u01B7" +
		"\u01BD\b\x18\x01\x02\u01B8\u01B9\x06\x18\b\x03\u01B9\u01BA\x05,\x17\x02" +
		"\u01BA\u01BB\b\x18\x01\x02\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01AC\x03" +
		"\x02\x02\x02\u01BC\u01B0\x03\x02\x02\x02\u01BC\u01B4\x03\x02\x02\x02\u01BC" +
		"\u01B5\x03\x02\x02\x02\u01BC\u01B8\x03\x02\x02\x02\u01BD\u01C0\x03\x02" +
		"\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF" +
		"\u01C6\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C1\u01C2\x078\x02" +
		"\x02\u01C2\u01C3\x07H\x02\x02\u01C3\u01C4\x05$\x13\x02\u01C4\u01C5\x07" +
		"I\x02\x02\u01C5\u01C7\x03\x02\x02\x02\u01C6\u01C1\x03\x02\x02\x02\u01C6" +
		"\u01C7\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01CB\x07O\x02" +
		"\x02\u01C9\u01CB\x05n8\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA\u01C9\x03" +
		"\x02\x02\x02\u01CB/\x03\x02\x02\x02\u01CC\u01CD\x07-\x02\x02\u01CD\u01D3" +
		"\x05`1\x02\u01CE\u01D0\x07H\x02\x02\u01CF\u01D1\x05$\x13\x02\u01D0\u01CF" +
		"\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
		"\u01D2\u01D4\x07I\x02\x02\u01D3\u01CE\x03\x02\x02\x02\u01D3\u01D4\x03" +
		"\x02\x02\x02\u01D4\u01DE\x03\x02\x02\x02\u01D5\u01D6\x06\x19\t\x03\u01D6" +
		"\u01D7\x07F\x02\x02\u01D7\u01DD\b\x19\x01\x02\u01D8\u01D9\x06\x19\n\x03" +
		"\u01D9\u01DA\x05,\x17\x02\u01DA\u01DB\b\x19\x01\x02\u01DB\u01DD\x03\x02" +
		"\x02\x02\u01DC\u01D5\x03\x02\x02\x02\u01DC\u01D8\x03\x02\x02\x02\u01DD" +
		"\u01E0\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02" +
		"\x02\x02\u01DF\u01E3\x03\x02\x02\x02\u01E0\u01DE\x03\x02\x02\x02\u01E1" +
		"\u01E4\x07O\x02\x02\u01E2\u01E4\x05n8\x02\u01E3\u01E1\x03\x02\x02\x02" +
		"\u01E3\u01E2\x03\x02\x02\x02\u01E41\x03\x02\x02\x02\u01E5\u01E6\x07\x1A" +
		"\x02\x02\u01E6\u01EA\x07H\x02\x02\u01E7\u01E8\x05$\x13\x02\u01E8\u01E9" +
		"\b\x1A\x01\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E7\x03\x02\x02\x02" +
		"\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01EC\u01FE\x07" +
		"I\x02\x02\u01ED\u01EE\x06\x1A\v\x03\u01EE\u01EF\x07\x19\x02\x02\u01EF" +
		"\u01FD\b\x1A\x01\x02\u01F0\u01F1\x06\x1A\f\x03\u01F1\u01F2\x05*\x16\x02" +
		"\u01F2\u01F3\b\x1A\x01\x02\u01F3\u01FD\x03\x02\x02\x02\u01F4\u01FD\x05" +
		" \x11\x02\u01F5\u01F6\x06\x1A\r\x03\u01F6\u01F7\x07F\x02\x02\u01F7\u01FD" +
		"\b\x1A\x01\x02\u01F8\u01F9\x06\x1A\x0E\x03\u01F9\u01FA\x05,\x17\x02\u01FA" +
		"\u01FB\b\x1A\x01\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01ED\x03\x02\x02" +
		"\x02\u01FC\u01F0\x03\x02\x02\x02\u01FC\u01F4\x03\x02\x02\x02\u01FC\u01F5" +
		"\x03\x02\x02\x02\u01FC\u01F8\x03\x02\x02\x02\u01FD\u0200\x03\x02\x02\x02" +
		"\u01FE\u01FC\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0208\x03" +
		"\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0201\u0202\x06\x1A\x0F\x03\u0202" +
		"\u0203\x078\x02\x02\u0203\u0204\x07H\x02\x02\u0204\u0205\x05$\x13\x02" +
		"\u0205\u0206\x07I\x02\x02\u0206\u0209\x03\x02\x02\x02\u0207\u0209\x06" +
		"\x1A\x10\x03\u0208\u0201\x03\x02\x02\x02\u0208\u0207\x03\x02\x02\x02\u0209" +
		"\u020C\x03\x02\x02\x02\u020A\u020D\x07O\x02\x02\u020B\u020D\x05n8\x02" +
		"\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D3\x03\x02" +
		"\x02\x02\u020E\u020F\x076\x02\x02\u020F\u0210\x07H\x02\x02\u0210\u0221" +
		"\x07I\x02\x02\u0211\u0212\x06\x1B\x11\x03\u0212\u0213\x07\x19\x02\x02" +
		"\u0213\u0220\b\x1B\x01\x02\u0214\u0215\x06\x1B\x12\x03\u0215\u0216\x07" +
		"1\x02\x02\u0216\u0220\b\x1B\x01\x02\u0217\u0220\x05 \x11\x02\u0218\u0219" +
		"\x06\x1B\x13\x03\u0219\u021A\x07F\x02\x02\u021A\u0220\b\x1B\x01\x02\u021B" +
		"\u021C\x06\x1B\x14\x03\u021C\u021D\x05,\x17\x02\u021D\u021E\b\x1B\x01" +
		"\x02\u021E\u0220\x03\x02\x02\x02\u021F\u0211\x03\x02\x02\x02\u021F\u0214" +
		"\x03\x02\x02\x02\u021F\u0217\x03\x02\x02\x02\u021F\u0218\x03\x02\x02\x02" +
		"\u021F\u021B\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03" +
		"\x02\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0226\x03\x02\x02\x02\u0223" +
		"\u0221\x03\x02\x02\x02\u0224\u0227\x07O\x02\x02\u0225\u0227\x05n8\x02" +
		"\u0226\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u02275\x03\x02" +
		"\x02\x02\u0228\u0229\x07=\x02\x02\u0229\u022A\x05`1\x02\u022A\u022C\x07" +
		"L\x02\x02\u022B\u022D\x058\x1D\x02\u022C\u022B\x03\x02\x02\x02\u022D\u022E" +
		"\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02" +
		"\u022F\u0230\x03\x02\x02\x02\u0230\u0231\x07M\x02\x02\u02317\x03\x02\x02" +
		"\x02\u0232\u0233\x05N(\x02\u0233\u0234\x05`1\x02\u0234\u0235\x07O\x02" +
		"\x02\u02359\x03\x02\x02\x02\u0236\u0237\x07\x16\x02\x02\u0237\u0238\x05" +
		"`1\x02\u0238\u0239\x07L\x02\x02\u0239\u023E\x05`1\x02\u023A\u023B\x07" +
		"`\x02\x02\u023B\u023D\x05`1\x02\u023C\u023A\x03\x02\x02\x02\u023D\u0240" +
		"\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02" +
		"\u023F\u0241\x03\x02\x02\x02\u0240\u023E\x03\x02\x02\x02\u0241\u0242\x07" +
		"M\x02\x02\u0242;\x03\x02\x02\x02\u0243\u0244\x07@\x02\x02\u0244\u0245" +
		"\x05`1\x02\u0245\u0246\x07)\x02\x02\u0246\u0247\x05P)\x02\u0247\u0248" +
		"\x07O\x02\x02\u0248=\x03\x02\x02\x02\u0249\u025F\x05N(\x02\u024A\u024B" +
		"\x06 \x15\x03\u024B\u024C\x074\x02\x02\u024C\u025E\b \x01\x02\u024D\u024E" +
		"\x06 \x16\x03\u024E\u024F\x073\x02\x02\u024F\u025E\b \x01\x02\u0250\u0251" +
		"\x06 \x17\x03\u0251\u0252\x07(\x02\x02\u0252\u025E\b \x01\x02\u0253\u0254" +
		"\x06 \x18\x03\u0254\u0255\x07\x0E\x02\x02\u0255\u025E\b \x01\x02\u0256" +
		"\u0257\x06 \x19\x03\u0257\u0258\x05,\x17\x02\u0258\u0259\b \x01\x02\u0259" +
		"\u025E\x03\x02\x02\x02\u025A\u025B\x06 \x1A\x03\u025B\u025C\x07$\x02\x02" +
		"\u025C\u025E\b \x01\x02\u025D\u024A\x03\x02\x02\x02\u025D\u024D\x03\x02" +
		"\x02\x02\u025D\u0250\x03\x02\x02\x02\u025D\u0253\x03\x02\x02\x02\u025D" +
		"\u0256\x03\x02\x02\x02\u025D\u025A\x03\x02\x02\x02\u025E\u0261\x03\x02" +
		"\x02\x02\u025F\u025D\x03\x02\x02\x02\u025F\u0260\x03\x02\x02\x02\u0260" +
		"\u0262\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265\x05`1\x02" +
		"\u0263\u0264\x07T\x02\x02\u0264\u0266\x05X-\x02\u0265\u0263\x03\x02\x02" +
		"\x02\u0265\u0266\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268" +
		"\x07O\x02\x02\u0268?\x03\x02\x02\x02\u0269\u026A\x05N(\x02\u026A\u026B" +
		"\x07\x0E\x02\x02\u026B\u026C\x05`1\x02\u026C\u026D\x07T\x02\x02\u026D" +
		"\u026E\x05X-\x02\u026E\u026F\x07O\x02\x02\u026FA\x03\x02\x02\x02\u0270" +
		"\u0272\x05N(\x02\u0271\u0273\x07&\x02\x02\u0272\u0271\x03\x02\x02\x02" +
		"\u0272\u0273\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u0276\x05" +
		"`1\x02\u0275\u0274\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276C" +
		"\x03\x02\x02\x02\u0277\u0278\x07\x18\x02\x02\u0278\u0279\x05`1\x02\u0279" +
		"\u0282\x07H\x02\x02\u027A\u027F\x05B\"\x02\u027B\u027C\x07`\x02\x02\u027C" +
		"\u027E\x05B\"\x02\u027D\u027B\x03\x02\x02\x02\u027E\u0281\x03\x02\x02" +
		"\x02\u027F\u027D\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0283" +
		"\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0282\u027A\x03\x02\x02\x02" +
		"\u0282\u0283\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0286\x07" +
		"I\x02\x02\u0285\u0287\x07\x06\x02\x02\u0286\u0285\x03\x02\x02\x02\u0286" +
		"\u0287\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288\u0289\x07O\x02" +
		"\x02\u0289E\x03\x02\x02\x02\u028A\u028C\x05N(\x02\u028B\u028D\x05`1\x02" +
		"\u028C\u028B\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028DG\x03\x02" +
		"\x02\x02\u028E\u028F\x07\x17\x02\x02\u028F\u0290\x05`1\x02\u0290\u0299" +
		"\x07H\x02\x02\u0291\u0296\x05F$\x02\u0292\u0293\x07`\x02\x02\u0293\u0295" +
		"\x05F$\x02\u0294\u0292\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296" +
		"\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u029A\x03\x02" +
		"\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u0291\x03\x02\x02\x02\u0299" +
		"\u029A\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029C\x07I\x02" +
		"\x02\u029C\u029D\x07O\x02\x02\u029DI\x03\x02\x02\x02\u029E\u029F\t\x04" +
		"\x02\x02\u029FK\x03\x02\x02\x02\u02A0\u02B5\x07D\x02\x02\u02A1\u02B6\x05" +
		"\x1E\x10\x02\u02A2\u02A3\x07L\x02\x02\u02A3\u02A6\x05\x1E\x10\x02\u02A4" +
		"\u02A5\x07\x07\x02\x02\u02A5\u02A7\x05J&\x02\u02A6\u02A4\x03\x02\x02\x02" +
		"\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02B0\x03\x02\x02\x02\u02A8\u02A9\x07" +
		"`\x02\x02\u02A9\u02AC\x05\x1E\x10\x02\u02AA\u02AB\x07\x07\x02\x02\u02AB" +
		"\u02AD\x05J&\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02" +
		"\u02AD\u02AF\x03\x02\x02\x02\u02AE\u02A8\x03\x02\x02\x02\u02AF\u02B2\x03" +
		"\x02\x02\x02\u02B0\u02AE\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1" +
		"\u02B3\x03\x02\x02\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B4\x07M\x02" +
		"\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02A1\x03\x02\x02\x02\u02B5\u02A2" +
		"\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02BA\x07\x1E\x02\x02" +
		"\u02B8\u02BB\x07k\x02\x02\u02B9\u02BB\x05N(\x02\u02BA\u02B8\x03\x02\x02" +
		"\x02\u02BA\u02B9\x03\x02\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02BE" +
		"\x07!\x02\x02\u02BD\u02BC\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x07O\x02\x02\u02C0M\x03\x02\x02" +
		"\x02\u02C1\u02C2\b(\x01\x02\u02C2\u02C7\x05P)\x02\u02C3\u02C7\x05R*\x02" +
		"\u02C4\u02C7\x05\x98M\x02\u02C5\u02C7\x05\x1E\x10\x02\u02C6\u02C1\x03" +
		"\x02\x02\x02\u02C6\u02C3\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6" +
		"\u02C5\x03\x02\x02\x02\u02C7\u02D0\x03\x02\x02\x02\u02C8\u02C9\f\x03\x02" +
		"\x02\u02C9\u02CB\x07J\x02\x02\u02CA\u02CC\x05X-\x02\u02CB\u02CA\x03\x02" +
		"\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD" +
		"\u02CF\x07K\x02\x02\u02CE\u02C8\x03\x02\x02\x02\u02CF\u02D2\x03\x02\x02" +
		"\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1O\x03" +
		"\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3\u02E0\x07\x05\x02\x02\u02D4" +
		"\u02D5\x06)\x1C\x03\u02D5\u02D6\x07\x05\x02\x02\u02D6\u02E0\x071\x02\x02" +
		"\u02D7\u02E0\x07\t\x02\x02\u02D8\u02E0\x07<\x02\x02\u02D9\u02E0\x07\v" +
		"\x02\x02\u02DA\u02E0\x07:\x02\x02\u02DB\u02E0\x07C\x02\x02\u02DC\u02E0" +
		"\x07\x1D\x02\x02\u02DD\u02E0\x07\x1C\x02\x02\u02DE\u02E0\x07A\x02\x02" +
		"\u02DF\u02D3\x03\x02\x02\x02\u02DF\u02D4\x03\x02\x02\x02\u02DF\u02D7\x03" +
		"\x02\x02\x02\u02DF\u02D8\x03\x02\x02\x02\u02DF\u02D9\x03\x02\x02\x02\u02DF" +
		"\u02DA\x03\x02\x02\x02\u02DF\u02DB\x03\x02\x02\x02\u02DF\u02DC\x03\x02" +
		"\x02\x02\u02DF\u02DD\x03\x02\x02\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0" +
		"Q\x03\x02\x02\x02\u02E1\u02E2\x07 \x02\x02\u02E2\u02E4\x07H\x02\x02\u02E3" +
		"\u02E5\x05$\x13\x02\u02E4\u02E3\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02" +
		"\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02F1\x07I\x02\x02\u02E7\u02E8" +
		"\x06*\x1D\x03\u02E8\u02E9\x05\"\x12\x02\u02E9\u02EA\b*\x01\x02\u02EA\u02F0" +
		"\x03\x02\x02\x02\u02EB\u02EC\x06*\x1E\x03\u02EC\u02ED\x05*\x16\x02\u02ED" +
		"\u02EE\b*\x01\x02\u02EE\u02F0\x03\x02\x02\x02\u02EF\u02E7\x03\x02\x02" +
		"\x02\u02EF\u02EB\x03\x02\x02\x02\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF" +
		"\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2\u02F9\x03\x02\x02\x02" +
		"\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F5\x078\x02\x02\u02F5\u02F6\x07" +
		"H\x02\x02\u02F6\u02F7\x05$\x13\x02\u02F7\u02F8\x07I\x02\x02\u02F8\u02FA" +
		"\x03\x02\x02\x02\u02F9\u02F4\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02" +
		"\u02FAS\x03\x02\x02\x02\u02FB\u02FD\x05N(\x02\u02FC\u02FE\x05V,\x02\u02FD" +
		"\u02FC\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02" +
		"\x02\x02\u02FF\u0300\x05`1\x02\u0300U\x03\x02\x02\x02\u0301\u0302\t\x05" +
		"\x02\x02\u0302W\x03\x02\x02\x02\u0303\u0304\b-\x01\x02\u0304\u0305\x07" +
		"1\x02\x02\u0305\u0317\x05\x1C\x0F\x02\u0306\u0307\x07@\x02\x02\u0307\u0308" +
		"\x07H\x02\x02\u0308\u0309\x05N(\x02\u0309\u030A\x07I\x02\x02\u030A\u0317" +
		"\x03\x02\x02\x02\u030B\u030C\t\x06\x02\x02\u030C\u0317\x05X-\x15\u030D" +
		"\u030E\x07.\x02\x02\u030E\u0317\x05N(\x02\u030F\u0317\x05\\/\x02\u0310" +
		"\u0317\x05^0\x02\u0311\u0315\x05`1\x02\u0312\u0315\x05b2\x02\u0313\u0315" +
		"\x05P)\x02\u0314\u0311\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0314" +
		"\u0313\x03\x02\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316\u0303\x03\x02" +
		"\x02\x02\u0316\u0306\x03\x02\x02\x02\u0316\u030B\x03\x02\x02\x02\u0316" +
		"\u030D\x03\x02\x02\x02\u0316\u030F\x03\x02\x02\x02\u0316\u0310\x03\x02" +
		"\x02\x02\u0316\u0314\x03\x02\x02\x02\u0317\u036C\x03\x02\x02\x02\u0318" +
		"\u0319\f\x13\x02\x02\u0319\u031A\x07n\x02\x02\u031A\u036B\x05X-\x13\u031B" +
		"\u031C\f\x12\x02\x02\u031C\u031D\t\x07\x02\x02\u031D\u036B\x05X-\x13\u031E" +
		"\u031F\f\x11\x02\x02\u031F\u0320\t\b\x02\x02\u0320\u036B\x05X-\x12\u0321" +
		"\u0322\f\x10\x02\x02\u0322\u0323\t\t\x02\x02\u0323\u036B\x05X-\x11\u0324" +
		"\u0325\f\x0F\x02\x02\u0325\u0326\x07e\x02\x02\u0326\u036B\x05X-\x10\u0327" +
		"\u0328\f\x0E\x02\x02\u0328\u0329\x07d\x02\x02\u0329\u036B\x05X-\x0F\u032A" +
		"\u032B\f\r\x02\x02\u032B\u032C\x07c\x02\x02\u032C\u036B\x05X-\x0E\u032D" +
		"\u032E\f\f\x02\x02\u032E\u032F\t\n\x02\x02\u032F\u036B\x05X-\r\u0330\u0331" +
		"\f\v\x02\x02\u0331\u0332\t\v\x02\x02\u0332\u036B\x05X-\f\u0333\u0334\f" +
		"\n\x02\x02\u0334\u0335\x07b\x02\x02\u0335\u036B\x05X-\v\u0336\u0337\f" +
		"\t\x02\x02\u0337\u0338\x07a\x02\x02\u0338\u036B\x05X-\n\u0339\u033A\f" +
		"\b\x02\x02\u033A\u033B\x07Q\x02\x02\u033B\u033C\x05X-\x02\u033C\u033D" +
		"\x07N\x02\x02\u033D\u033E\x05X-\b\u033E\u036B\x03\x02\x02\x02\u033F\u0340" +
		"\f\x07\x02\x02\u0340\u0341\x05Z.\x02\u0341\u0342\x05X-\x07\u0342\u036B" +
		"\x03\x02\x02\x02\u0343\u0344\f\x1C\x02\x02\u0344\u0346\x07J\x02\x02\u0345" +
		"\u0347\x05X-\x02\u0346\u0345\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02" +
		"\u0347\u0348\x03\x02\x02\x02\u0348\u036B\x07K\x02\x02\u0349\u034A\f\x1B" +
		"\x02\x02\u034A\u034C\x07J\x02\x02\u034B\u034D\x05X-\x02\u034C\u034B\x03" +
		"\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u0350\x07N\x02\x02\u034F\u0351\x05X-\x02\u0350\u034F\x03\x02\x02\x02" +
		"\u0350\u0351\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u036B\x07" +
		"K\x02\x02\u0353\u0354\f\x1A\x02\x02\u0354\u0357\x07P\x02\x02\u0355\u0358" +
		"\x05`1\x02\u0356\u0358\x07\x05\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357" +
		"\u0356\x03\x02\x02\x02\u0358\u036B\x03\x02\x02\x02\u0359\u035A\f\x19\x02" +
		"\x02\u035A\u0363\x07L\x02\x02\u035B\u0360\x05\x1A\x0E\x02\u035C\u035D" +
		"\x07`\x02\x02\u035D\u035F\x05\x1A\x0E\x02\u035E\u035C\x03\x02\x02\x02" +
		"\u035F\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03" +
		"\x02\x02\x02\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363" +
		"\u035B\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02" +
		"\x02\x02\u0365\u036B\x07M\x02\x02\u0366\u0367\f\x18\x02\x02\u0367\u036B" +
		"\x05\x1C\x0F\x02\u0368\u0369\f\x14\x02\x02\u0369\u036B\t\f\x02\x02\u036A" +
		"\u0318\x03\x02\x02\x02\u036A\u031B\x03\x02\x02\x02\u036A\u031E\x03\x02" +
		"\x02\x02\u036A\u0321\x03\x02\x02\x02\u036A\u0324\x03\x02\x02\x02\u036A" +
		"\u0327\x03\x02\x02\x02\u036A\u032A\x03\x02\x02\x02\u036A\u032D\x03\x02" +
		"\x02\x02\u036A\u0330\x03\x02\x02\x02\u036A\u0333\x03\x02\x02\x02\u036A" +
		"\u0336\x03\x02\x02\x02\u036A\u0339\x03\x02\x02\x02\u036A\u033F\x03\x02" +
		"\x02\x02\u036A\u0343\x03\x02\x02\x02\u036A\u0349\x03\x02\x02\x02\u036A" +
		"\u0353\x03\x02\x02\x02\u036A\u0359\x03\x02\x02\x02\u036A\u0366\x03\x02" +
		"\x02\x02\u036A\u0368\x03\x02\x02\x02\u036B\u036E\x03\x02\x02\x02\u036C" +
		"\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036DY\x03\x02\x02" +
		"\x02\u036E\u036C\x03\x02\x02\x02\u036F\u0370\t\r\x02\x02\u0370[\x03\x02" +
		"\x02\x02\u0371\u0373\x07H\x02\x02\u0372\u0374\x05X-\x02\u0373\u0372\x03" +
		"\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u037B\x03\x02\x02\x02\u0375" +
		"\u0377\x07`\x02\x02\u0376\u0378\x05X-\x02\u0377\u0376\x03\x02\x02\x02" +
		"\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u0375\x03" +
		"\x02\x02\x02\u037A\u037D\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\u037E\x03\x02\x02\x02\u037D\u037B\x03\x02" +
		"\x02\x02\u037E\u037F\x07I\x02\x02\u037F]\x03\x02\x02\x02\u0380\u0381\x07" +
		"J\x02\x02\u0381\u0386\x05X-\x02\u0382\u0383\x07`\x02\x02\u0383\u0385\x05" +
		"X-\x02\u0384\u0382\x03\x02\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384" +
		"\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0389\x03\x02\x02\x02" +
		"\u0388\u0386\x03\x02\x02\x02\u0389\u038A\x07K\x02\x02\u038A_\x03\x02\x02" +
		"\x02\u038B\u038C\t\x0E\x02\x02\u038Ca\x03\x02\x02\x02\u038D\u0393\x05" +
		"f4\x02\u038E\u0393\x05l7\x02\u038F\u0393\x05d3\x02\u0390\u0393\x05h5\x02" +
		"\u0391\u0393\x05j6\x02\u0392\u038D\x03\x02\x02\x02\u0392\u038E\x03\x02" +
		"\x02\x02\u0392\u038F\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392" +
		"\u0391\x03\x02\x02\x02\u0393c\x03\x02\x02\x02\u0394\u0395\t\x0F\x02\x02" +
		"\u0395e\x03\x02\x02\x02\u0396\u0398\t\x10\x02\x02\u0397\u0396\x03\x02" +
		"\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399\u0397\x03\x02\x02\x02\u0399" +
		"\u039A\x03\x02\x02\x02\u039Ag\x03\x02\x02\x02\u039B\u039D\x07~\x02\x02" +
		"\u039C\u039B\x03\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u039C\x03" +
		"\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039Fi\x03\x02\x02\x02\u03A0" +
		"\u03A2\x07}\x02\x02\u03A1\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02" +
		"\x02\u03A3\u03A1\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02\u03A4k\x03" +
		"\x02\x02\x02\u03A5\u03A7\t\x11\x02\x02\u03A6\u03A8\x07/\x02\x02\u03A7" +
		"\u03A6\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8m\x03\x02\x02" +
		"\x02\u03A9\u03AE\x07L\x02\x02\u03AA\u03AD\x05r:\x02\u03AB\u03AD\x05p9" +
		"\x02\u03AC\u03AA\x03\x02\x02\x02\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0" +
		"\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02" +
		"\u03AF\u03B1\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B2\x07" +
		"M\x02\x02\u03B2o\x03\x02\x02\x02\u03B3\u03B4\x07B\x02\x02\u03B4\u03B5" +
		"\x05n8\x02\u03B5q\x03\x02\x02\x02\u03B6\u03C4\x05n8\x02\u03B7\u03C4\x05" +
		"t;\x02\u03B8\u03C4\x05v<\x02\u03B9\u03C4\x05x=\x02\u03BA\u03C4\x05z>\x02" +
		"\u03BB\u03C4\x05|?\x02\u03BC\u03C4\x05~@\x02\u03BD\u03C4\x05\x80A\x02" +
		"\u03BE\u03C4\x05\x82B\x02\u03BF\u03C4\x05\x86D\x02\u03C0\u03C4\x05\x88" +
		"E\x02\u03C1\u03C4\x05\x8AF\x02\u03C2\u03C4\x05\x8CG\x02\u03C3\u03B6\x03" +
		"\x02\x02\x02\u03C3\u03B7\x03\x02\x02\x02\u03C3\u03B8\x03\x02\x02\x02\u03C3" +
		"\u03B9\x03\x02\x02\x02\u03C3\u03BA\x03\x02\x02\x02\u03C3\u03BB\x03\x02" +
		"\x02\x02\u03C3\u03BC\x03\x02\x02\x02\u03C3\u03BD\x03\x02\x02\x02\u03C3" +
		"\u03BE\x03\x02\x02\x02\u03C3\u03BF\x03\x02\x02\x02\u03C3\u03C0\x03\x02" +
		"\x02\x02\u03C3\u03C1\x03\x02\x02\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4" +
		"s\x03\x02\x02\x02\u03C5\u03C8\x05\x94K\x02\u03C6\u03C8\x05\x96L\x02\u03C7" +
		"\u03C5\x03\x02\x02\x02\u03C7\u03C6\x03\x02\x02\x02\u03C8u\x03\x02\x02" +
		"\x02\u03C9\u03CA\x07#\x02\x02\u03CA\u03CB\x07H\x02\x02\u03CB\u03CC\x05" +
		"X-\x02\u03CC\u03CD\x07I\x02\x02\u03CD\u03D0\x05r:\x02\u03CE\u03CF\x07" +
		"\x14\x02\x02\u03CF\u03D1\x05r:\x02\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03D1" +
		"\x03\x02\x02\x02\u03D1w\x03\x02\x02\x02\u03D2\u03D3\x07\x1E\x02\x02\u03D3" +
		"\u03D6\x07H\x02\x02\u03D4\u03D7\x05t;\x02\u03D5\u03D7\x07O\x02\x02\u03D6" +
		"\u03D4\x03\x02\x02\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7\u03DA\x03\x02" +
		"\x02\x02\u03D8\u03DB\x05\x96L\x02\u03D9\u03DB\x07O\x02\x02\u03DA\u03D8" +
		"\x03\x02\x02\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DD\x03\x02\x02\x02" +
		"\u03DC\u03DE\x05X-\x02\u03DD\u03DC\x03\x02\x02\x02\u03DD\u03DE\x03\x02" +
		"\x02\x02\u03DE\u03DF\x03\x02\x02\x02\u03DF\u03E0\x07I\x02\x02\u03E0\u03E1" +
		"\x05r:\x02\u03E1y\x03\x02\x02\x02\u03E2\u03E3\x07G\x02\x02\u03E3\u03E4" +
		"\x07H\x02\x02\u03E4\u03E5\x05X-\x02\u03E5\u03E6\x07I\x02\x02\u03E6\u03E7" +
		"\x05r:\x02\u03E7{\x03\x02\x02\x02\u03E8\u03E9\x07\x13\x02\x02\u03E9\u03EA" +
		"\x05r:\x02\u03EA\u03EB\x07G\x02\x02\u03EB\u03EC\x07H\x02\x02\u03EC\u03ED" +
		"\x05X-\x02\u03ED\u03EE\x07I\x02\x02\u03EE\u03EF\x07O\x02\x02\u03EF}\x03" +
		"\x02\x02\x02\u03F0\u03F1\x07\x10\x02\x02\u03F1\u03F2\x07O\x02\x02\u03F2" +
		"\x7F\x03\x02\x02\x02\u03F3\u03F4\x07\n\x02\x02\u03F4\u03F5\x07O\x02\x02" +
		"\u03F5\x81\x03\x02\x02\x02\u03F6\u03F7\x07?\x02\x02\u03F7\u03FD\x05X-" +
		"\x02\u03F8\u03F9\x078\x02\x02\u03F9\u03FA\x07H\x02\x02\u03FA\u03FB\x05" +
		"$\x13\x02\u03FB\u03FC\x07I\x02\x02\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03F8" +
		"\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u03FF\x03\x02\x02\x02" +
		"\u03FF\u0401\x05n8\x02\u0400\u0402\x05\x84C\x02\u0401\u0400\x03\x02\x02" +
		"\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02\u0403\u0404" +
		"\x03\x02\x02\x02\u0404\x83\x03\x02\x02\x02\u0405\u040D\x07\r\x02\x02\u0406" +
		"\u0408\x05`1\x02\u0407\u0406\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02" +
		"\u0408\u0409\x03\x02\x02\x02\u0409\u040A\x07H\x02\x02\u040A\u040B\x05" +
		"$\x13\x02\u040B\u040C\x07I\x02\x02\u040C\u040E\x03\x02\x02\x02\u040D\u0407" +
		"\x03\x02\x02\x02\u040D\u040E\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
		"\u040F\u0410\x05n8\x02\u0410\x85\x03\x02\x02\x02\u0411\u0413\x077\x02" +
		"\x02\u0412\u0414\x05X-\x02\u0413\u0412\x03\x02\x02\x02\u0413\u0414\x03" +
		"\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0416\x07O\x02\x02\u0416" +
		"\x87\x03\x02\x02\x02\u0417\u0418\x07\x15\x02\x02\u0418\u0419\x05X-\x02" +
		"\u0419\u041A\x05\x1C\x0F\x02\u041A\u041B\x07O\x02\x02\u041B\x89\x03\x02" +
		"\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u041C\u041D\x079\x02\x02\u041D\u041E\x05X-\x02\u041E\u041F\x05\x1C" +
		"\x0F\x02\u041F\u0420\x07O\x02\x02\u0420\x8B\x03\x02\x02\x02\u0421\u0423" +
		"\x07\b\x02\x02\u0422\u0424\x07\x85\x02\x02\u0423\u0422\x03\x02\x02\x02" +
		"\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425\u0427\x05" +
		"\x8EH\x02\u0426\u0425\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02\u0427" +
		"\u0428\x03\x02\x02\x02\u0428\u042C\x07\x86\x02\x02\u0429\u042B\x05\x9C" +
		"O\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042A" +
		"\x03\x02\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042F\x03\x02\x02\x02" +
		"\u042E\u042C\x03\x02\x02\x02\u042F\u0430\x07\x9D\x02\x02\u0430\x8D\x03" +
		"\x02\x02\x02\u0431\u0432\x07\x88\x02\x02\u0432\u0437\x07\x87\x02\x02\u0433" +
		"\u0434\x07\x8A\x02\x02\u0434\u0436\x07\x87\x02\x02\u0435\u0433\x03\x02" +
		"\x02\x02\u0436\u0439\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u043A\x03\x02\x02\x02\u0439\u0437\x03\x02" +
		"\x02\x02\u043A\u043B\x07\x89\x02\x02\u043B\x8F\x03\x02\x02\x02\u043C\u0441" +
		"\x05T+\x02\u043D\u043E\x07`\x02\x02\u043E\u0440\x05T+\x02\u043F\u043D" +
		"\x03\x02\x02\x02\u0440\u0443\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02" +
		"\u0441\u0442\x03\x02\x02\x02\u0442\x91\x03\x02\x02\x02\u0443\u0441\x03" +
		"\x02\x02\x02\u0444\u0448\x07H\x02\x02\u0445\u0447\x07`\x02\x02\u0446\u0445" +
		"\x03\x02\x02\x02\u0447\u044A\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02" +
		"\u0448\u0449\x03\x02\x02\x02\u0449\u044B\x03\x02\x02\x02\u044A\u0448\x03" +
		"\x02\x02\x02\u044B\u044C\x05T+\x02\u044C\u0453\x03\x02\x02\x02\u044D\u044F" +
		"\x07`\x02\x02\u044E\u0450\x05T+\x02\u044F\u044E\x03\x02\x02\x02\u044F" +
		"\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02\x02\x02\u0451\u044D\x03\x02" +
		"\x02\x02\u0452\u0455\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0453" +
		"\u0454\x03\x02\x02\x02\u0454\u0456\x03\x02\x02\x02\u0455\u0453\x03\x02" +
		"\x02\x02\u0456\u0457\x07I\x02\x02\u0457\x93\x03\x02\x02\x02\u0458\u045B" +
		"\x05T+\x02\u0459\u045A\x07T\x02\x02\u045A\u045C\x05X-\x02\u045B\u0459" +
		"\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u0462\x03\x02\x02\x02" +
		"\u045D\u045E\x05\x92J\x02\u045E\u045F\x07T\x02\x02\u045F\u0460\x05X-\x02" +
		"\u0460\u0462\x03\x02\x02\x02\u0461\u0458\x03\x02\x02\x02\u0461\u045D\x03" +
		"\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0464\x07O\x02\x02\u0464" +
		"\x95\x03\x02\x02\x02\u0465\u0466\x05X-\x02\u0466\u0467\x07O\x02\x02\u0467" +
		"\x97\x03\x02\x02\x02\u0468\u0469\x07+\x02\x02\u0469\u046A\x07H\x02\x02" +
		"\u046A\u046C\x05\x9AN\x02\u046B\u046D\x05`1\x02\u046C\u046B\x03\x02\x02" +
		"\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F" +
		"\x07R\x02\x02\u046F\u0471\x05N(\x02\u0470\u0472\x05`1\x02\u0471\u0470" +
		"\x03\x02\x02\x02\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02" +
		"\u0473\u0474\x07I\x02\x02\u0474\x99\x03\x02\x02\x02\u0475\u0478\x05P)" +
		"\x02\u0476\u0478\x05\x1E\x10\x02\u0477\u0475\x03\x02\x02\x02\u0477\u0476" +
		"\x03\x02\x02\x02\u0478\x9B\x03\x02\x02\x02\u0479\u0485\x05\x9EP\x02\u047A" +
		"\u0485\x05\xA0Q\x02\u047B\u0485\x05\xA2R\x02\u047C\u0485\x05\xB0Y\x02" +
		"\u047D\u0485\x05\xA4S\x02\u047E\u0485\x05\xA6T\x02\u047F\u0485\x05\xAA" +
		"V\x02\u0480\u0485\x07\x96\x02\x02\u0481\u0485\x07\x8E\x02\x02\u0482\u0485" +
		"\x07\x90\x02\x02\u0483\u0485\x05\xACW\x02\u0484\u0479\x03\x02\x02\x02" +
		"\u0484\u047A\x03\x02\x02\x02\u0484\u047B\x03\x02\x02\x02\u0484\u047C\x03" +
		"\x02\x02\x02\u0484\u047D\x03\x02\x02\x02\u0484\u047E\x03\x02\x02\x02\u0484" +
		"\u047F\x03\x02\x02\x02\u0484\u0480\x03\x02\x02\x02\u0484\u0481\x03\x02" +
		"\x02\x02\u0484\u0482\x03\x02\x02\x02\u0484\u0483\x03\x02\x02\x02\u0485" +
		"\x9D\x03\x02\x02\x02\u0486\u048A\x07\x9C\x02\x02\u0487\u0489\x05\x9CO" +
		"\x02\u0488\u0487\x03\x02\x02\x02\u0489\u048C\x03\x02\x02\x02\u048A\u0488" +
		"\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B\u048D\x03\x02\x02\x02" +
		"\u048C\u048A\x03\x02\x02\x02\u048D\u048E\x07\x9D\x02\x02\u048E\x9F\x03" +
		"\x02\x02\x02\u048F\u0490\x07\x97\x02\x02\u0490\u0493\x07\xA4\x02\x02\u0491" +
		"\u0492\x07\xA0\x02\x02\u0492\u0494\x05\xB6\\\x02\u0493\u0491\x03\x02\x02" +
		"\x02\u0493\u0494\x03\x02\x02\x02\u0494\u04A3\x03\x02\x02\x02\u0495\u0496" +
		"\x07\x97\x02\x02\u0496\u049B\x07\xA4\x02\x02\u0497\u0498\x07\xA2\x02\x02" +
		"\u0498\u049A\x07\xA4\x02\x02\u0499\u0497\x03\x02\x02\x02\u049A\u049D\x03" +
		"\x02\x02\x02\u049B\u0499\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C" +
		"\u04A0\x03\x02\x02\x02\u049D\u049B\x03\x02\x02\x02\u049E\u049F\x07\xA0" +
		"\x02\x02\u049F\u04A1\x05\xB0Y\x02\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1" +
		"\x03\x02\x02\x02\u04A1\u04A3\x03\x02\x02\x02\u04A2\u048F\x03\x02\x02\x02" +
		"\u04A2\u0495\x03\x02\x02\x02\u04A3\xA1\x03\x02\x02\x02\u04A4\u04A5\x05" +
		"\xAEX\x02\u04A5\u04A6\x07\xA0\x02\x02\u04A6\u04A7\x05\xB6\\\x02\u04A7" +
		"\u04B3\x03\x02\x02\x02\u04A8\u04AB\x05\xAEX\x02\u04A9\u04AA\x07\xA2\x02" +
		"\x02\u04AA\u04AC\x05\xAEX\x02\u04AB\u04A9\x03\x02\x02\x02\u04AC\u04AD" +
		"\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
		"\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B0\x07\xA0\x02\x02\u04B0\u04B1\x05" +
		"\xB0Y\x02\u04B1\u04B3\x03\x02\x02\x02\u04B2\u04A4\x03\x02\x02\x02\u04B2" +
		"\u04A8\x03\x02\x02\x02\u04B3\xA3\x03\x02\x02\x02\u04B4\u04B5\x07\x95\x02" +
		"\x02\u04B5\u04B6\x05\xB6\\\x02\u04B6\u04B7\x05\x9EP\x02\u04B7\xA5\x03" +
		"\x02\x02\x02\u04B8\u04B9\x07\x93\x02\x02\u04B9\u04BA\x05\x9EP\x02\u04BA" +
		"\u04BB\x05\xB6\\\x02\u04BB\u04BC\x05\x9EP\x02\u04BC\u04BD\x05\x9EP\x02" +
		"\u04BD\xA7\x03\x02\x02\x02\u04BE\u04BF\x07\x8F\x02\x02\u04BF\u04C0\x05" +
		"\xB4[\x02\u04C0\u04C1\x05\x9EP\x02\u04C1\xA9\x03\x02\x02\x02\u04C2\u04C3" +
		"\x07\x98\x02\x02\u04C3\u04CF\x05\xB6\\\x02\u04C4\u04C6\x05\xA8U\x02\u04C5" +
		"\u04C4\x03\x02\x02\x02\u04C6\u04C7\x03\x02\x02\x02\u04C7\u04C5\x03\x02" +
		"\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04CB\x03\x02\x02\x02\u04C9" +
		"\u04CA\x07\x91\x02\x02\u04CA\u04CC\x05\x9EP\x02\u04CB\u04C9\x03\x02\x02" +
		"\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04D0\x03\x02\x02\x02\u04CD\u04CE" +
		"\x07\x91\x02\x02\u04CE\u04D0\x05\x9EP\x02\u04CF\u04C5\x03\x02\x02\x02" +
		"\u04CF\u04CD\x03\x02\x02\x02\u04D0\xAB\x03\x02\x02\x02\u04D1\u04D2\x07" +
		"\x94\x02\x02\u04D2\u04D3\x07\xA4\x02\x02\u04D3\u04DC\x07\x9E\x02\x02\u04D4" +
		"\u04D9\x07\xA4\x02\x02\u04D5\u04D6\x07\xA2\x02\x02\u04D6\u04D8\x07\xA4" +
		"\x02\x02\u04D7\u04D5\x03\x02\x02\x02\u04D8\u04DB\x03\x02\x02\x02\u04D9" +
		"\u04D7\x03\x02\x02\x02\u04D9\u04DA\x03\x02\x02\x02\u04DA\u04DD\x03\x02" +
		"\x02\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04D4\x03\x02\x02\x02\u04DC" +
		"\u04DD\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04E8\x07\x9F" +
		"\x02\x02\u04DF\u04E0\x07\xA3\x02\x02\u04E0\u04E5\x07\xA4\x02\x02\u04E1" +
		"\u04E2\x07\xA2\x02\x02\u04E2\u04E4\x07\xA4\x02\x02\u04E3\u04E1\x03\x02" +
		"\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E5" +
		"\u04E6\x03\x02\x02\x02\u04E6\u04E9\x03\x02\x02\x02\u04E7\u04E5\x03\x02" +
		"\x02\x02\u04E8\u04DF\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9" +
		"\u04EA\x03\x02\x02\x02\u04EA\u04EB\x05\x9EP\x02\u04EB\xAD\x03\x02\x02" +
		"\x02\u04EC\u04F1\x07\xA4\x02\x02\u04ED\u04EE\x07\xA1\x02\x02\u04EE\u04F0" +
		"\t\x12\x02\x02\u04EF\u04ED\x03\x02\x02\x02\u04F0\u04F3\x03\x02\x02\x02" +
		"\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2\xAF\x03" +
		"\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F5\t\x12\x02\x02\u04F5" +
		"\u04FE\x07\x9E\x02\x02\u04F6\u04FB\x05\xB6\\\x02\u04F7\u04F8\x07\xA2\x02" +
		"\x02\u04F8\u04FA\x05\xB6\\\x02\u04F9\u04F7\x03\x02\x02\x02\u04FA\u04FD" +
		"\x03\x02\x02\x02\u04FB\u04F9\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02" +
		"\u04FC\u04FF\x03\x02\x02\x02\u04FD\u04FB\x03\x02\x02\x02\u04FE\u04F6\x03" +
		"\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500" +
		"\u0501\x07\x9F\x02\x02\u0501\xB1\x03\x02\x02\x02\u0502\u0503\t\x13\x02" +
		"\x02\u0503\xB3\x03\x02\x02\x02\u0504\u050A\x07\xA6\x02\x02\u0505\u050A" +
		"\x07\xA7\x02\x02\u0506\u050A\x07\xA5\x02\x02\u0507\u050A\x05\xB2Z\x02" +
		"\u0508\u050A\x07\xA8\x02\x02\u0509\u0504\x03\x02\x02\x02\u0509\u0505\x03" +
		"\x02\x02\x02\u0509\u0506\x03\x02\x02\x02\u0509\u0507\x03\x02\x02\x02\u0509" +
		"\u0508\x03\x02\x02\x02\u050A\xB5\x03\x02\x02\x02\u050B\u050F\x05\xAEX" +
		"\x02\u050C\u050F\x05\xB0Y\x02\u050D\u050F\x05\xB4[\x02\u050E\u050B\x03" +
		"\x02\x02\x02\u050E\u050C\x03\x02\x02\x02\u050E\u050D\x03\x02\x02\x02\u050F" +
		"\xB7\x03\x02\x02\x02\x91\xC4\xC6\xCF\xD7\xE3\xEA\xF4\xFA\xFF\u0105\u010D" +
		"\u0113\u011E\u0129\u012E\u013C\u0148\u014B\u0153\u0156\u0159\u0162\u0167" +
		"\u0170\u0175\u0178\u017D\u018A\u018C\u019A\u019F\u01A5\u01A9\u01BC\u01BE" +
		"\u01C6\u01CA\u01D0\u01D3\u01DC\u01DE\u01E3\u01EA\u01FC\u01FE\u0208\u020C" +
		"\u021F\u0221\u0226\u022E\u023E\u025D\u025F\u0265\u0272\u0275\u027F\u0282" +
		"\u0286\u028C\u0296\u0299\u02A6\u02AC\u02B0\u02B5\u02BA\u02BD\u02C6\u02CB" +
		"\u02D0\u02DF\u02E4\u02EF\u02F1\u02F9\u02FD\u0314\u0316\u0346\u034C\u0350" +
		"\u0357\u0360\u0363\u036A\u036C\u0373\u0377\u037B\u0386\u0392\u0399\u039E" +
		"\u03A3\u03A7\u03AC\u03AE\u03C3\u03C7\u03D0\u03D6\u03DA\u03DD\u03FD\u0403" +
		"\u0407\u040D\u0413\u0423\u0426\u042C\u0437\u0441\u0448\u044F\u0453\u045B" +
		"\u0461\u046C\u0471\u0477\u0484\u048A\u0493\u049B\u04A0\u04A2\u04AD\u04B2" +
		"\u04C7\u04CB\u04CF\u04D9\u04DC\u04E5\u04E8\u04F1\u04FB\u04FE\u0509\u050E";
	public static readonly _serializedATN: string = Utils.join(
		[
			SolidityParser._serializedATNSegment0,
			SolidityParser._serializedATNSegment1,
			SolidityParser._serializedATNSegment2,
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
	public usingDirective(): UsingDirectiveContext[];
	public usingDirective(i: number): UsingDirectiveContext;
	public usingDirective(i?: number): UsingDirectiveContext | UsingDirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UsingDirectiveContext);
		} else {
			return this.getRuleContext(i, UsingDirectiveContext);
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
	public interfaceDefinition(): InterfaceDefinitionContext[];
	public interfaceDefinition(i: number): InterfaceDefinitionContext;
	public interfaceDefinition(i?: number): InterfaceDefinitionContext | InterfaceDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceDefinitionContext);
		} else {
			return this.getRuleContext(i, InterfaceDefinitionContext);
		}
	}
	public libraryDefinition(): LibraryDefinitionContext[];
	public libraryDefinition(i: number): LibraryDefinitionContext;
	public libraryDefinition(i?: number): LibraryDefinitionContext | LibraryDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryDefinitionContext);
		} else {
			return this.getRuleContext(i, LibraryDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	public constantVariableDeclaration(): ConstantVariableDeclarationContext[];
	public constantVariableDeclaration(i: number): ConstantVariableDeclarationContext;
	public constantVariableDeclaration(i?: number): ConstantVariableDeclarationContext | ConstantVariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantVariableDeclarationContext);
		} else {
			return this.getRuleContext(i, ConstantVariableDeclarationContext);
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
	public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext[];
	public userDefinedValueTypeDefinition(i: number): UserDefinedValueTypeDefinitionContext;
	public userDefinedValueTypeDefinition(i?: number): UserDefinedValueTypeDefinitionContext | UserDefinedValueTypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedValueTypeDefinitionContext);
		} else {
			return this.getRuleContext(i, UserDefinedValueTypeDefinitionContext);
		}
	}
	public errorDefinition(): ErrorDefinitionContext[];
	public errorDefinition(i: number): ErrorDefinitionContext;
	public errorDefinition(i?: number): ErrorDefinitionContext | ErrorDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorDefinitionContext);
		} else {
			return this.getRuleContext(i, ErrorDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_sourceUnit; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterSourceUnit) {
			listener.enterSourceUnit(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitSourceUnit) {
			listener.exitSourceUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitSourceUnit) {
			return visitor.visitSourceUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PragmaDirectiveContext extends ParserRuleContext {
	public Pragma(): TerminalNode { return this.getToken(SolidityParser.Pragma, 0); }
	public PragmaSemicolon(): TerminalNode { return this.getToken(SolidityParser.PragmaSemicolon, 0); }
	public PragmaToken(): TerminalNode[];
	public PragmaToken(i: number): TerminalNode;
	public PragmaToken(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.PragmaToken);
		} else {
			return this.getToken(SolidityParser.PragmaToken, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_pragmaDirective; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterPragmaDirective) {
			listener.enterPragmaDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitPragmaDirective) {
			listener.exitPragmaDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitPragmaDirective) {
			return visitor.visitPragmaDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public _unitAlias!: IdentifierContext;
	public Import(): TerminalNode { return this.getToken(SolidityParser.Import, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public path(): PathContext | undefined {
		return this.tryGetRuleContext(0, PathContext);
	}
	public symbolAliases(): SymbolAliasesContext | undefined {
		return this.tryGetRuleContext(0, SymbolAliasesContext);
	}
	public From(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.From, 0); }
	public Mul(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mul, 0); }
	public As(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.As, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitImportDirective) {
			return visitor.visitImportDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportAliasesContext extends ParserRuleContext {
	public _symbol!: IdentifierContext;
	public _alias!: IdentifierContext;
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_importAliases; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterImportAliases) {
			listener.enterImportAliases(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitImportAliases) {
			listener.exitImportAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitImportAliases) {
			return visitor.visitImportAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathContext extends ParserRuleContext {
	public NonEmptyStringLiteral(): TerminalNode { return this.getToken(SolidityParser.NonEmptyStringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_path; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterPath) {
			listener.enterPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitPath) {
			listener.exitPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitPath) {
			return visitor.visitPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolAliasesContext extends ParserRuleContext {
	public _importAliases!: ImportAliasesContext;
	public _aliases: ImportAliasesContext[] = [];
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public importAliases(): ImportAliasesContext[];
	public importAliases(i: number): ImportAliasesContext;
	public importAliases(i?: number): ImportAliasesContext | ImportAliasesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportAliasesContext);
		} else {
			return this.getRuleContext(i, ImportAliasesContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_symbolAliases; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterSymbolAliases) {
			listener.enterSymbolAliases(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitSymbolAliases) {
			listener.exitSymbolAliases(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitSymbolAliases) {
			return visitor.visitSymbolAliases(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public Contract(): TerminalNode { return this.getToken(SolidityParser.Contract, 0); }
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Abstract(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Abstract, 0); }
	public inheritanceSpecifierList(): InheritanceSpecifierListContext | undefined {
		return this.tryGetRuleContext(0, InheritanceSpecifierListContext);
	}
	public contractBodyElement(): ContractBodyElementContext[];
	public contractBodyElement(i: number): ContractBodyElementContext;
	public contractBodyElement(i?: number): ContractBodyElementContext | ContractBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractBodyElementContext);
		} else {
			return this.getRuleContext(i, ContractBodyElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterContractDefinition) {
			listener.enterContractDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitContractDefinition) {
			listener.exitContractDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitContractDefinition) {
			return visitor.visitContractDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public Interface(): TerminalNode { return this.getToken(SolidityParser.Interface, 0); }
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public inheritanceSpecifierList(): InheritanceSpecifierListContext | undefined {
		return this.tryGetRuleContext(0, InheritanceSpecifierListContext);
	}
	public contractBodyElement(): ContractBodyElementContext[];
	public contractBodyElement(i: number): ContractBodyElementContext;
	public contractBodyElement(i?: number): ContractBodyElementContext | ContractBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractBodyElementContext);
		} else {
			return this.getRuleContext(i, ContractBodyElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_interfaceDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterInterfaceDefinition) {
			listener.enterInterfaceDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitInterfaceDefinition) {
			listener.exitInterfaceDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDefinition) {
			return visitor.visitInterfaceDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LibraryDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public Library(): TerminalNode { return this.getToken(SolidityParser.Library, 0); }
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public contractBodyElement(): ContractBodyElementContext[];
	public contractBodyElement(i: number): ContractBodyElementContext;
	public contractBodyElement(i?: number): ContractBodyElementContext | ContractBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContractBodyElementContext);
		} else {
			return this.getRuleContext(i, ContractBodyElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_libraryDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterLibraryDefinition) {
			listener.enterLibraryDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitLibraryDefinition) {
			listener.exitLibraryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitLibraryDefinition) {
			return visitor.visitLibraryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierListContext extends ParserRuleContext {
	public _inheritanceSpecifier!: InheritanceSpecifierContext;
	public _inheritanceSpecifiers: InheritanceSpecifierContext[] = [];
	public Is(): TerminalNode { return this.getToken(SolidityParser.Is, 0); }
	public inheritanceSpecifier(): InheritanceSpecifierContext[];
	public inheritanceSpecifier(i: number): InheritanceSpecifierContext;
	public inheritanceSpecifier(i?: number): InheritanceSpecifierContext | InheritanceSpecifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InheritanceSpecifierContext);
		} else {
			return this.getRuleContext(i, InheritanceSpecifierContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifierList; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterInheritanceSpecifierList) {
			listener.enterInheritanceSpecifierList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitInheritanceSpecifierList) {
			listener.exitInheritanceSpecifierList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifierList) {
			return visitor.visitInheritanceSpecifierList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritanceSpecifierContext extends ParserRuleContext {
	public _name!: IdentifierPathContext;
	public _arguments!: CallArgumentListContext;
	public identifierPath(): IdentifierPathContext {
		return this.getRuleContext(0, IdentifierPathContext);
	}
	public callArgumentList(): CallArgumentListContext | undefined {
		return this.tryGetRuleContext(0, CallArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inheritanceSpecifier; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterInheritanceSpecifier) {
			listener.enterInheritanceSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitInheritanceSpecifier) {
			listener.exitInheritanceSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitInheritanceSpecifier) {
			return visitor.visitInheritanceSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContractBodyElementContext extends ParserRuleContext {
	public constructorDefinition(): ConstructorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDefinitionContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public modifierDefinition(): ModifierDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ModifierDefinitionContext);
	}
	public fallbackFunctionDefinition(): FallbackFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FallbackFunctionDefinitionContext);
	}
	public receiveFunctionDefinition(): ReceiveFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ReceiveFunctionDefinitionContext);
	}
	public structDefinition(): StructDefinitionContext | undefined {
		return this.tryGetRuleContext(0, StructDefinitionContext);
	}
	public enumDefinition(): EnumDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumDefinitionContext);
	}
	public userDefinedValueTypeDefinition(): UserDefinedValueTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedValueTypeDefinitionContext);
	}
	public stateVariableDeclaration(): StateVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, StateVariableDeclarationContext);
	}
	public eventDefinition(): EventDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EventDefinitionContext);
	}
	public errorDefinition(): ErrorDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ErrorDefinitionContext);
	}
	public usingDirective(): UsingDirectiveContext | undefined {
		return this.tryGetRuleContext(0, UsingDirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_contractBodyElement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterContractBodyElement) {
			listener.enterContractBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitContractBodyElement) {
			listener.exitContractBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitContractBodyElement) {
			return visitor.visitContractBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgumentContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _value!: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(SolidityParser.Colon, 0); }
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
	public get ruleIndex(): number { return SolidityParser.RULE_namedArgument; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterNamedArgument) {
			listener.enterNamedArgument(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitNamedArgument) {
			listener.exitNamedArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitNamedArgument) {
			return visitor.visitNamedArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallArgumentListContext extends ParserRuleContext {
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public LBrace(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RBrace, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public namedArgument(): NamedArgumentContext[];
	public namedArgument(i: number): NamedArgumentContext;
	public namedArgument(i?: number): NamedArgumentContext | NamedArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedArgumentContext);
		} else {
			return this.getRuleContext(i, NamedArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_callArgumentList; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterCallArgumentList) {
			listener.enterCallArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitCallArgumentList) {
			listener.exitCallArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitCallArgumentList) {
			return visitor.visitCallArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierPathContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Period(): TerminalNode[];
	public Period(i: number): TerminalNode;
	public Period(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Period);
		} else {
			return this.getToken(SolidityParser.Period, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifierPath; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterIdentifierPath) {
			listener.enterIdentifierPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitIdentifierPath) {
			listener.exitIdentifierPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitIdentifierPath) {
			return visitor.visitIdentifierPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierInvocationContext extends ParserRuleContext {
	public identifierPath(): IdentifierPathContext {
		return this.getRuleContext(0, IdentifierPathContext);
	}
	public callArgumentList(): CallArgumentListContext | undefined {
		return this.tryGetRuleContext(0, CallArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierInvocation; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterModifierInvocation) {
			listener.enterModifierInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitModifierInvocation) {
			listener.exitModifierInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitModifierInvocation) {
			return visitor.visitModifierInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	public Internal(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Internal, 0); }
	public External(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.External, 0); }
	public Private(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Private, 0); }
	public Public(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Public, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_visibility; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public _parameterDeclaration!: ParameterDeclarationContext;
	public _parameters: ParameterDeclarationContext[] = [];
	public parameterDeclaration(): ParameterDeclarationContext[];
	public parameterDeclaration(i: number): ParameterDeclarationContext;
	public parameterDeclaration(i?: number): ParameterDeclarationContext | ParameterDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterDeclarationContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _location!: DataLocationContext;
	public _name!: IdentifierContext;
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public dataLocation(): DataLocationContext | undefined {
		return this.tryGetRuleContext(0, DataLocationContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_parameterDeclaration; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterParameterDeclaration) {
			listener.enterParameterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitParameterDeclaration) {
			listener.exitParameterDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitParameterDeclaration) {
			return visitor.visitParameterDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDefinitionContext extends ParserRuleContext {
	public payableSet: boolean = false;
	public visibilitySet: boolean = false;
	public _arguments!: ParameterListContext;
	public _body!: BlockContext;
	public Constructor(): TerminalNode { return this.getToken(SolidityParser.Constructor, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public Payable(): TerminalNode[];
	public Payable(i: number): TerminalNode;
	public Payable(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Payable);
		} else {
			return this.getToken(SolidityParser.Payable, i);
		}
	}
	public Internal(): TerminalNode[];
	public Internal(i: number): TerminalNode;
	public Internal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Internal);
		} else {
			return this.getToken(SolidityParser.Internal, i);
		}
	}
	public Public(): TerminalNode[];
	public Public(i: number): TerminalNode;
	public Public(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Public);
		} else {
			return this.getToken(SolidityParser.Public, i);
		}
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_constructorDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterConstructorDefinition) {
			listener.enterConstructorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitConstructorDefinition) {
			listener.exitConstructorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitConstructorDefinition) {
			return visitor.visitConstructorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateMutabilityContext extends ParserRuleContext {
	public Pure(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Pure, 0); }
	public View(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.View, 0); }
	public Payable(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Payable, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateMutability; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStateMutability) {
			listener.enterStateMutability(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStateMutability) {
			listener.exitStateMutability(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStateMutability) {
			return visitor.visitStateMutability(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSpecifierContext extends ParserRuleContext {
	public _identifierPath!: IdentifierPathContext;
	public _overrides: IdentifierPathContext[] = [];
	public Override(): TerminalNode { return this.getToken(SolidityParser.Override, 0); }
	public LParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RParen, 0); }
	public identifierPath(): IdentifierPathContext[];
	public identifierPath(i: number): IdentifierPathContext;
	public identifierPath(i?: number): IdentifierPathContext | IdentifierPathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierPathContext);
		} else {
			return this.getRuleContext(i, IdentifierPathContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_overrideSpecifier; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterOverrideSpecifier) {
			listener.enterOverrideSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitOverrideSpecifier) {
			listener.exitOverrideSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitOverrideSpecifier) {
			return visitor.visitOverrideSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public visibilitySet: boolean = false;
	public mutabilitySet: boolean = false;
	public virtualSet: boolean = false;
	public overrideSpecifierSet: boolean = false;
	public _arguments!: ParameterListContext;
	public _returnParameters!: ParameterListContext;
	public _body!: BlockContext;
	public Function(): TerminalNode { return this.getToken(SolidityParser.Function, 0); }
	public LParen(): TerminalNode[];
	public LParen(i: number): TerminalNode;
	public LParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.LParen);
		} else {
			return this.getToken(SolidityParser.LParen, i);
		}
	}
	public RParen(): TerminalNode[];
	public RParen(i: number): TerminalNode;
	public RParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.RParen);
		} else {
			return this.getToken(SolidityParser.RParen, i);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Fallback(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fallback, 0); }
	public Receive(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Receive, 0); }
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Semicolon, 0); }
	public visibility(): VisibilityContext[];
	public visibility(i: number): VisibilityContext;
	public visibility(i?: number): VisibilityContext | VisibilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VisibilityContext);
		} else {
			return this.getRuleContext(i, VisibilityContext);
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
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public Virtual(): TerminalNode[];
	public Virtual(i: number): TerminalNode;
	public Virtual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Virtual);
		} else {
			return this.getToken(SolidityParser.Virtual, i);
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
	public Returns(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Returns, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext[];
	public parameterList(i: number): ParameterListContext;
	public parameterList(i?: number): ParameterListContext | ParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterListContext);
		} else {
			return this.getRuleContext(i, ParameterListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierDefinitionContext extends ParserRuleContext {
	public virtualSet: boolean = false;
	public overrideSpecifierSet: boolean = false;
	public _name!: IdentifierContext;
	public _arguments!: ParameterListContext;
	public _body!: BlockContext;
	public Modifier(): TerminalNode { return this.getToken(SolidityParser.Modifier, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Semicolon, 0); }
	public LParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RParen, 0); }
	public Virtual(): TerminalNode[];
	public Virtual(i: number): TerminalNode;
	public Virtual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Virtual);
		} else {
			return this.getToken(SolidityParser.Virtual, i);
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
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_modifierDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterModifierDefinition) {
			listener.enterModifierDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitModifierDefinition) {
			listener.exitModifierDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitModifierDefinition) {
			return visitor.visitModifierDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FallbackFunctionDefinitionContext extends ParserRuleContext {
	public visibilitySet: boolean = false;
	public mutabilitySet: boolean = false;
	public virtualSet: boolean = false;
	public overrideSpecifierSet: boolean = false;
	public hasParameters: boolean = false;
	public _kind!: Token;
	public _returnParameters!: ParameterListContext;
	public _body!: BlockContext;
	public LParen(): TerminalNode[];
	public LParen(i: number): TerminalNode;
	public LParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.LParen);
		} else {
			return this.getToken(SolidityParser.LParen, i);
		}
	}
	public RParen(): TerminalNode[];
	public RParen(i: number): TerminalNode;
	public RParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.RParen);
		} else {
			return this.getToken(SolidityParser.RParen, i);
		}
	}
	public Fallback(): TerminalNode { return this.getToken(SolidityParser.Fallback, 0); }
	public Returns(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Returns, 0); }
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Semicolon, 0); }
	public parameterList(): ParameterListContext[];
	public parameterList(i: number): ParameterListContext;
	public parameterList(i?: number): ParameterListContext | ParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterListContext);
		} else {
			return this.getRuleContext(i, ParameterListContext);
		}
	}
	public External(): TerminalNode[];
	public External(i: number): TerminalNode;
	public External(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.External);
		} else {
			return this.getToken(SolidityParser.External, i);
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
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public Virtual(): TerminalNode[];
	public Virtual(i: number): TerminalNode;
	public Virtual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Virtual);
		} else {
			return this.getToken(SolidityParser.Virtual, i);
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
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_fallbackFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterFallbackFunctionDefinition) {
			listener.enterFallbackFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitFallbackFunctionDefinition) {
			listener.exitFallbackFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitFallbackFunctionDefinition) {
			return visitor.visitFallbackFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReceiveFunctionDefinitionContext extends ParserRuleContext {
	public visibilitySet: boolean = false;
	public mutabilitySet: boolean = false;
	public virtualSet: boolean = false;
	public overrideSpecifierSet: boolean = false;
	public _kind!: Token;
	public _body!: BlockContext;
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public Receive(): TerminalNode { return this.getToken(SolidityParser.Receive, 0); }
	public Semicolon(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Semicolon, 0); }
	public External(): TerminalNode[];
	public External(i: number): TerminalNode;
	public External(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.External);
		} else {
			return this.getToken(SolidityParser.External, i);
		}
	}
	public Payable(): TerminalNode[];
	public Payable(i: number): TerminalNode;
	public Payable(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Payable);
		} else {
			return this.getToken(SolidityParser.Payable, i);
		}
	}
	public modifierInvocation(): ModifierInvocationContext[];
	public modifierInvocation(i: number): ModifierInvocationContext;
	public modifierInvocation(i?: number): ModifierInvocationContext | ModifierInvocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierInvocationContext);
		} else {
			return this.getRuleContext(i, ModifierInvocationContext);
		}
	}
	public Virtual(): TerminalNode[];
	public Virtual(i: number): TerminalNode;
	public Virtual(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Virtual);
		} else {
			return this.getToken(SolidityParser.Virtual, i);
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
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_receiveFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterReceiveFunctionDefinition) {
			listener.enterReceiveFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitReceiveFunctionDefinition) {
			listener.exitReceiveFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitReceiveFunctionDefinition) {
			return visitor.visitReceiveFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _members!: StructMemberContext;
	public Struct(): TerminalNode { return this.getToken(SolidityParser.Struct, 0); }
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public structMember(): StructMemberContext[];
	public structMember(i: number): StructMemberContext;
	public structMember(i?: number): StructMemberContext | StructMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StructMemberContext);
		} else {
			return this.getRuleContext(i, StructMemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStructDefinition) {
			listener.enterStructDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStructDefinition) {
			listener.exitStructDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStructDefinition) {
			return visitor.visitStructDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructMemberContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _name!: IdentifierContext;
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_structMember; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStructMember) {
			listener.enterStructMember(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStructMember) {
			listener.exitStructMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStructMember) {
			return visitor.visitStructMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _identifier!: IdentifierContext;
	public _enumValues: IdentifierContext[] = [];
	public Enum(): TerminalNode { return this.getToken(SolidityParser.Enum, 0); }
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_enumDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterEnumDefinition) {
			listener.enterEnumDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitEnumDefinition) {
			listener.exitEnumDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitEnumDefinition) {
			return visitor.visitEnumDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinedValueTypeDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public Type(): TerminalNode { return this.getToken(SolidityParser.Type, 0); }
	public Is(): TerminalNode { return this.getToken(SolidityParser.Is, 0); }
	public elementaryTypeName(): ElementaryTypeNameContext {
		return this.getRuleContext(0, ElementaryTypeNameContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinedValueTypeDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUserDefinedValueTypeDefinition) {
			listener.enterUserDefinedValueTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUserDefinedValueTypeDefinition) {
			listener.exitUserDefinedValueTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUserDefinedValueTypeDefinition) {
			return visitor.visitUserDefinedValueTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StateVariableDeclarationContext extends ParserRuleContext {
	public constantnessSet: boolean = false;
	public visibilitySet: boolean = false;
	public overrideSpecifierSet: boolean = false;
	public _type!: TypeNameContext;
	public _name!: IdentifierContext;
	public _initialValue!: ExpressionContext;
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Public(): TerminalNode[];
	public Public(i: number): TerminalNode;
	public Public(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Public);
		} else {
			return this.getToken(SolidityParser.Public, i);
		}
	}
	public Private(): TerminalNode[];
	public Private(i: number): TerminalNode;
	public Private(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Private);
		} else {
			return this.getToken(SolidityParser.Private, i);
		}
	}
	public Internal(): TerminalNode[];
	public Internal(i: number): TerminalNode;
	public Internal(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Internal);
		} else {
			return this.getToken(SolidityParser.Internal, i);
		}
	}
	public Constant(): TerminalNode[];
	public Constant(i: number): TerminalNode;
	public Constant(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Constant);
		} else {
			return this.getToken(SolidityParser.Constant, i);
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
	public Immutable(): TerminalNode[];
	public Immutable(i: number): TerminalNode;
	public Immutable(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Immutable);
		} else {
			return this.getToken(SolidityParser.Immutable, i);
		}
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stateVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStateVariableDeclaration) {
			listener.enterStateVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStateVariableDeclaration) {
			listener.exitStateVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStateVariableDeclaration) {
			return visitor.visitStateVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantVariableDeclarationContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _name!: IdentifierContext;
	public _initialValue!: ExpressionContext;
	public Constant(): TerminalNode { return this.getToken(SolidityParser.Constant, 0); }
	public Assign(): TerminalNode { return this.getToken(SolidityParser.Assign, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
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
	public get ruleIndex(): number { return SolidityParser.RULE_constantVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterConstantVariableDeclaration) {
			listener.enterConstantVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitConstantVariableDeclaration) {
			listener.exitConstantVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitConstantVariableDeclaration) {
			return visitor.visitConstantVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventParameterContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _name!: IdentifierContext;
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public Indexed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Indexed, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventParameter; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterEventParameter) {
			listener.enterEventParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitEventParameter) {
			listener.exitEventParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitEventParameter) {
			return visitor.visitEventParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _eventParameter!: EventParameterContext;
	public _parameters: EventParameterContext[] = [];
	public Event(): TerminalNode { return this.getToken(SolidityParser.Event, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Anonymous(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Anonymous, 0); }
	public eventParameter(): EventParameterContext[];
	public eventParameter(i: number): EventParameterContext;
	public eventParameter(i?: number): EventParameterContext | EventParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventParameterContext);
		} else {
			return this.getRuleContext(i, EventParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_eventDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterEventDefinition) {
			listener.enterEventDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitEventDefinition) {
			listener.exitEventDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitEventDefinition) {
			return visitor.visitEventDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorParameterContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _name!: IdentifierContext;
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_errorParameter; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterErrorParameter) {
			listener.enterErrorParameter(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitErrorParameter) {
			listener.exitErrorParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitErrorParameter) {
			return visitor.visitErrorParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorDefinitionContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _errorParameter!: ErrorParameterContext;
	public _parameters: ErrorParameterContext[] = [];
	public Error(): TerminalNode { return this.getToken(SolidityParser.Error, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public errorParameter(): ErrorParameterContext[];
	public errorParameter(i: number): ErrorParameterContext;
	public errorParameter(i?: number): ErrorParameterContext | ErrorParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ErrorParameterContext);
		} else {
			return this.getRuleContext(i, ErrorParameterContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_errorDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterErrorDefinition) {
			listener.enterErrorDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitErrorDefinition) {
			listener.exitErrorDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitErrorDefinition) {
			return visitor.visitErrorDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserDefinableOperatorContext extends ParserRuleContext {
	public BitAnd(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BitAnd, 0); }
	public BitNot(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BitNot, 0); }
	public BitOr(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BitOr, 0); }
	public BitXor(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BitXor, 0); }
	public Add(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Add, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mod, 0); }
	public Mul(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mul, 0); }
	public Sub(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Sub, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Equal, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GreaterThan, 0); }
	public GreaterThanOrEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GreaterThanOrEqual, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LessThan, 0); }
	public LessThanOrEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LessThanOrEqual, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NotEqual, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_userDefinableOperator; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUserDefinableOperator) {
			listener.enterUserDefinableOperator(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUserDefinableOperator) {
			listener.exitUserDefinableOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUserDefinableOperator) {
			return visitor.visitUserDefinableOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingDirectiveContext extends ParserRuleContext {
	public Using(): TerminalNode { return this.getToken(SolidityParser.Using, 0); }
	public For(): TerminalNode { return this.getToken(SolidityParser.For, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public identifierPath(): IdentifierPathContext[];
	public identifierPath(i: number): IdentifierPathContext;
	public identifierPath(i?: number): IdentifierPathContext | IdentifierPathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierPathContext);
		} else {
			return this.getRuleContext(i, IdentifierPathContext);
		}
	}
	public Mul(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mul, 0); }
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public Global(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Global, 0); }
	public LBrace(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RBrace, 0); }
	public As(): TerminalNode[];
	public As(i: number): TerminalNode;
	public As(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.As);
		} else {
			return this.getToken(SolidityParser.As, i);
		}
	}
	public userDefinableOperator(): UserDefinableOperatorContext[];
	public userDefinableOperator(i: number): UserDefinableOperatorContext;
	public userDefinableOperator(i?: number): UserDefinableOperatorContext | UserDefinableOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinableOperatorContext);
		} else {
			return this.getRuleContext(i, UserDefinableOperatorContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_usingDirective; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUsingDirective) {
			listener.enterUsingDirective(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUsingDirective) {
			listener.exitUsingDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUsingDirective) {
			return visitor.visitUsingDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public functionTypeName(): FunctionTypeNameContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeNameContext);
	}
	public mappingType(): MappingTypeContext | undefined {
		return this.tryGetRuleContext(0, MappingTypeContext);
	}
	public identifierPath(): IdentifierPathContext | undefined {
		return this.tryGetRuleContext(0, IdentifierPathContext);
	}
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public LBrack(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LBrack, 0); }
	public RBrack(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RBrack, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementaryTypeNameContext extends ParserRuleContext {
	public allowAddressPayable: boolean;
	public Address(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Address, 0); }
	public Payable(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Payable, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Bool, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.String, 0); }
	public Bytes(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Bytes, 0); }
	public SignedIntegerType(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.SignedIntegerType, 0); }
	public UnsignedIntegerType(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.UnsignedIntegerType, 0); }
	public FixedBytes(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.FixedBytes, 0); }
	public Fixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Fixed, 0); }
	public Ufixed(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Ufixed, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number, allowAddressPayable: boolean) {
		super(parent, invokingState);
		this.allowAddressPayable = allowAddressPayable;
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_elementaryTypeName; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterElementaryTypeName) {
			listener.enterElementaryTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitElementaryTypeName) {
			listener.exitElementaryTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitElementaryTypeName) {
			return visitor.visitElementaryTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeNameContext extends ParserRuleContext {
	public visibilitySet: boolean = false;
	public mutabilitySet: boolean = false;
	public _arguments!: ParameterListContext;
	public _returnParameters!: ParameterListContext;
	public Function(): TerminalNode { return this.getToken(SolidityParser.Function, 0); }
	public LParen(): TerminalNode[];
	public LParen(i: number): TerminalNode;
	public LParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.LParen);
		} else {
			return this.getToken(SolidityParser.LParen, i);
		}
	}
	public RParen(): TerminalNode[];
	public RParen(i: number): TerminalNode;
	public RParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.RParen);
		} else {
			return this.getToken(SolidityParser.RParen, i);
		}
	}
	public visibility(): VisibilityContext[];
	public visibility(i: number): VisibilityContext;
	public visibility(i?: number): VisibilityContext | VisibilityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VisibilityContext);
		} else {
			return this.getRuleContext(i, VisibilityContext);
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
	public Returns(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Returns, 0); }
	public parameterList(): ParameterListContext[];
	public parameterList(i: number): ParameterListContext;
	public parameterList(i?: number): ParameterListContext | ParameterListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterListContext);
		} else {
			return this.getRuleContext(i, ParameterListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_functionTypeName; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterFunctionTypeName) {
			listener.enterFunctionTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitFunctionTypeName) {
			listener.exitFunctionTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitFunctionTypeName) {
			return visitor.visitFunctionTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public _type!: TypeNameContext;
	public _location!: DataLocationContext;
	public _name!: IdentifierContext;
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public dataLocation(): DataLocationContext | undefined {
		return this.tryGetRuleContext(0, DataLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataLocationContext extends ParserRuleContext {
	public Memory(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Memory, 0); }
	public Storage(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Storage, 0); }
	public Calldata(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Calldata, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_dataLocation; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterDataLocation) {
			listener.enterDataLocation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitDataLocation) {
			listener.exitDataLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitDataLocation) {
			return visitor.visitDataLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IndexAccessContext extends ExpressionContext {
	public _index!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBrack(): TerminalNode { return this.getToken(SolidityParser.LBrack, 0); }
	public RBrack(): TerminalNode { return this.getToken(SolidityParser.RBrack, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterIndexAccess) {
			listener.enterIndexAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitIndexAccess) {
			listener.exitIndexAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitIndexAccess) {
			return visitor.visitIndexAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IndexRangeAccessContext extends ExpressionContext {
	public _start!: ExpressionContext;
	public _end!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBrack(): TerminalNode { return this.getToken(SolidityParser.LBrack, 0); }
	public Colon(): TerminalNode { return this.getToken(SolidityParser.Colon, 0); }
	public RBrack(): TerminalNode { return this.getToken(SolidityParser.RBrack, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterIndexRangeAccess) {
			listener.enterIndexRangeAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitIndexRangeAccess) {
			listener.exitIndexRangeAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitIndexRangeAccess) {
			return visitor.visitIndexRangeAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Period(): TerminalNode { return this.getToken(SolidityParser.Period, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public Address(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Address, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterMemberAccess) {
			listener.enterMemberAccess(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitMemberAccess) {
			listener.exitMemberAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitMemberAccess) {
			return visitor.visitMemberAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallOptionsContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public namedArgument(): NamedArgumentContext[];
	public namedArgument(i: number): NamedArgumentContext;
	public namedArgument(i?: number): NamedArgumentContext | NamedArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedArgumentContext);
		} else {
			return this.getRuleContext(i, NamedArgumentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterFunctionCallOptions) {
			listener.enterFunctionCallOptions(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitFunctionCallOptions) {
			listener.exitFunctionCallOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitFunctionCallOptions) {
			return visitor.visitFunctionCallOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public callArgumentList(): CallArgumentListContext {
		return this.getRuleContext(0, CallArgumentListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PayableConversionContext extends ExpressionContext {
	public Payable(): TerminalNode { return this.getToken(SolidityParser.Payable, 0); }
	public callArgumentList(): CallArgumentListContext {
		return this.getRuleContext(0, CallArgumentListContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterPayableConversion) {
			listener.enterPayableConversion(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitPayableConversion) {
			listener.exitPayableConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitPayableConversion) {
			return visitor.visitPayableConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MetaTypeContext extends ExpressionContext {
	public Type(): TerminalNode { return this.getToken(SolidityParser.Type, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterMetaType) {
			listener.enterMetaType(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitMetaType) {
			listener.exitMetaType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitMetaType) {
			return visitor.visitMetaType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPrefixOperationContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Inc(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Inc, 0); }
	public Dec(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Dec, 0); }
	public Not(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Not, 0); }
	public BitNot(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.BitNot, 0); }
	public Delete(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Delete, 0); }
	public Sub(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Sub, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUnaryPrefixOperation) {
			listener.enterUnaryPrefixOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUnaryPrefixOperation) {
			listener.exitUnaryPrefixOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUnaryPrefixOperation) {
			return visitor.visitUnaryPrefixOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnarySuffixOperationContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Inc(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Inc, 0); }
	public Dec(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Dec, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUnarySuffixOperation) {
			listener.enterUnarySuffixOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUnarySuffixOperation) {
			listener.exitUnarySuffixOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUnarySuffixOperation) {
			return visitor.visitUnarySuffixOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Exp(): TerminalNode { return this.getToken(SolidityParser.Exp, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterExpOperation) {
			listener.enterExpOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitExpOperation) {
			listener.exitExpOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitExpOperation) {
			return visitor.visitExpOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulDivModOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Mul(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mul, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Mod, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterMulDivModOperation) {
			listener.enterMulDivModOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitMulDivModOperation) {
			listener.exitMulDivModOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitMulDivModOperation) {
			return visitor.visitMulDivModOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddSubOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Add(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Add, 0); }
	public Sub(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Sub, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAddSubOperation) {
			listener.enterAddSubOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAddSubOperation) {
			listener.exitAddSubOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAddSubOperation) {
			return visitor.visitAddSubOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Shl(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Shl, 0); }
	public Sar(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Sar, 0); }
	public Shr(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Shr, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterShiftOperation) {
			listener.enterShiftOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitShiftOperation) {
			listener.exitShiftOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitShiftOperation) {
			return visitor.visitShiftOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BitAnd(): TerminalNode { return this.getToken(SolidityParser.BitAnd, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBitAndOperation) {
			listener.enterBitAndOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBitAndOperation) {
			listener.exitBitAndOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBitAndOperation) {
			return visitor.visitBitAndOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXorOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BitXor(): TerminalNode { return this.getToken(SolidityParser.BitXor, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBitXorOperation) {
			listener.enterBitXorOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBitXorOperation) {
			listener.exitBitXorOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBitXorOperation) {
			return visitor.visitBitXorOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BitOr(): TerminalNode { return this.getToken(SolidityParser.BitOr, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBitOrOperation) {
			listener.enterBitOrOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBitOrOperation) {
			listener.exitBitOrOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBitOrOperation) {
			return visitor.visitBitOrOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrderComparisonContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LessThan, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GreaterThan, 0); }
	public LessThanOrEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LessThanOrEqual, 0); }
	public GreaterThanOrEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.GreaterThanOrEqual, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterOrderComparison) {
			listener.enterOrderComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitOrderComparison) {
			listener.exitOrderComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitOrderComparison) {
			return visitor.visitOrderComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityComparisonContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.NotEqual, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterEqualityComparison) {
			listener.enterEqualityComparison(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitEqualityComparison) {
			listener.exitEqualityComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitEqualityComparison) {
			return visitor.visitEqualityComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(SolidityParser.And, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAndOperation) {
			listener.enterAndOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAndOperation) {
			listener.exitAndOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAndOperation) {
			return visitor.visitAndOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrOperationContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(SolidityParser.Or, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterOrOperation) {
			listener.enterOrOperation(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitOrOperation) {
			listener.exitOrOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitOrOperation) {
			return visitor.visitOrOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Conditional(): TerminalNode { return this.getToken(SolidityParser.Conditional, 0); }
	public Colon(): TerminalNode { return this.getToken(SolidityParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public assignOp(): AssignOpContext {
		return this.getRuleContext(0, AssignOpContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends ExpressionContext {
	public New(): TerminalNode { return this.getToken(SolidityParser.New, 0); }
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleContext extends ExpressionContext {
	public tupleExpression(): TupleExpressionContext {
		return this.getRuleContext(0, TupleExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InlineArrayContext extends ExpressionContext {
	public inlineArrayExpression(): InlineArrayExpressionContext {
		return this.getRuleContext(0, InlineArrayExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterInlineArray) {
			listener.enterInlineArray(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitInlineArray) {
			listener.exitInlineArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitInlineArray) {
			return visitor.visitInlineArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignOpContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Assign, 0); }
	public AssignBitOr(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignBitOr, 0); }
	public AssignBitXor(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignBitXor, 0); }
	public AssignBitAnd(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignBitAnd, 0); }
	public AssignShl(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignShl, 0); }
	public AssignSar(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignSar, 0); }
	public AssignShr(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignShr, 0); }
	public AssignAdd(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignAdd, 0); }
	public AssignSub(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignSub, 0); }
	public AssignMul(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignMul, 0); }
	public AssignDiv(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignDiv, 0); }
	public AssignMod(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssignMod, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assignOp; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAssignOp) {
			listener.enterAssignOp(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAssignOp) {
			listener.exitAssignOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAssignOp) {
			return visitor.visitAssignOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineArrayExpressionContext extends ParserRuleContext {
	public LBrack(): TerminalNode { return this.getToken(SolidityParser.LBrack, 0); }
	public RBrack(): TerminalNode { return this.getToken(SolidityParser.RBrack, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_inlineArrayExpression; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterInlineArrayExpression) {
			listener.enterInlineArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitInlineArrayExpression) {
			listener.exitInlineArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitInlineArrayExpression) {
			return visitor.visitInlineArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Identifier, 0); }
	public From(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.From, 0); }
	public Error(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Error, 0); }
	public Revert(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Revert, 0); }
	public Global(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Global, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public numberLiteral(): NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralContext);
	}
	public booleanLiteral(): BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralContext);
	}
	public hexStringLiteral(): HexStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, HexStringLiteralContext);
	}
	public unicodeStringLiteral(): UnicodeStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, UnicodeStringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_literal; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralContext extends ParserRuleContext {
	public True(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.True, 0); }
	public False(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.False, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_booleanLiteral; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public NonEmptyStringLiteral(): TerminalNode[];
	public NonEmptyStringLiteral(i: number): TerminalNode;
	public NonEmptyStringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.NonEmptyStringLiteral);
		} else {
			return this.getToken(SolidityParser.NonEmptyStringLiteral, i);
		}
	}
	public EmptyStringLiteral(): TerminalNode[];
	public EmptyStringLiteral(i: number): TerminalNode;
	public EmptyStringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.EmptyStringLiteral);
		} else {
			return this.getToken(SolidityParser.EmptyStringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HexStringLiteralContext extends ParserRuleContext {
	public HexString(): TerminalNode[];
	public HexString(i: number): TerminalNode;
	public HexString(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.HexString);
		} else {
			return this.getToken(SolidityParser.HexString, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_hexStringLiteral; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterHexStringLiteral) {
			listener.enterHexStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitHexStringLiteral) {
			listener.exitHexStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitHexStringLiteral) {
			return visitor.visitHexStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnicodeStringLiteralContext extends ParserRuleContext {
	public UnicodeStringLiteral(): TerminalNode[];
	public UnicodeStringLiteral(i: number): TerminalNode;
	public UnicodeStringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.UnicodeStringLiteral);
		} else {
			return this.getToken(SolidityParser.UnicodeStringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_unicodeStringLiteral; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUnicodeStringLiteral) {
			listener.enterUnicodeStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUnicodeStringLiteral) {
			listener.exitUnicodeStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUnicodeStringLiteral) {
			return visitor.visitUnicodeStringLiteral(this);
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
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBrace(): TerminalNode { return this.getToken(SolidityParser.LBrace, 0); }
	public RBrace(): TerminalNode { return this.getToken(SolidityParser.RBrace, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public uncheckedBlock(): UncheckedBlockContext[];
	public uncheckedBlock(i: number): UncheckedBlockContext;
	public uncheckedBlock(i?: number): UncheckedBlockContext | UncheckedBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UncheckedBlockContext);
		} else {
			return this.getRuleContext(i, UncheckedBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_block; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UncheckedBlockContext extends ParserRuleContext {
	public Unchecked(): TerminalNode { return this.getToken(SolidityParser.Unchecked, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_uncheckedBlock; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterUncheckedBlock) {
			listener.enterUncheckedBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitUncheckedBlock) {
			listener.exitUncheckedBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitUncheckedBlock) {
			return visitor.visitUncheckedBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
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
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public emitStatement(): EmitStatementContext | undefined {
		return this.tryGetRuleContext(0, EmitStatementContext);
	}
	public revertStatement(): RevertStatementContext | undefined {
		return this.tryGetRuleContext(0, RevertStatementContext);
	}
	public assemblyStatement(): AssemblyStatementContext | undefined {
		return this.tryGetRuleContext(0, AssemblyStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_statement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
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
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitSimpleStatement) {
			return visitor.visitSimpleStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(SolidityParser.If, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public For(): TerminalNode { return this.getToken(SolidityParser.For, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public Semicolon(): TerminalNode[];
	public Semicolon(i: number): TerminalNode;
	public Semicolon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Semicolon);
		} else {
			return this.getToken(SolidityParser.Semicolon, i);
		}
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
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(SolidityParser.While, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public Do(): TerminalNode { return this.getToken(SolidityParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(SolidityParser.While, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(SolidityParser.Continue, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(SolidityParser.Break, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public _returnParameters!: ParameterListContext;
	public Try(): TerminalNode { return this.getToken(SolidityParser.Try, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public Returns(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Returns, 0); }
	public LParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RParen, 0); }
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public _arguments!: ParameterListContext;
	public Catch(): TerminalNode { return this.getToken(SolidityParser.Catch, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public LParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.RParen, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Return(): TerminalNode { return this.getToken(SolidityParser.Return, 0); }
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmitStatementContext extends ParserRuleContext {
	public Emit(): TerminalNode { return this.getToken(SolidityParser.Emit, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public callArgumentList(): CallArgumentListContext {
		return this.getRuleContext(0, CallArgumentListContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_emitStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterEmitStatement) {
			listener.enterEmitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitEmitStatement) {
			listener.exitEmitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitEmitStatement) {
			return visitor.visitEmitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RevertStatementContext extends ParserRuleContext {
	public Revert(): TerminalNode { return this.getToken(SolidityParser.Revert, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public callArgumentList(): CallArgumentListContext {
		return this.getRuleContext(0, CallArgumentListContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_revertStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterRevertStatement) {
			listener.enterRevertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitRevertStatement) {
			listener.exitRevertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitRevertStatement) {
			return visitor.visitRevertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyStatementContext extends ParserRuleContext {
	public Assembly(): TerminalNode { return this.getToken(SolidityParser.Assembly, 0); }
	public AssemblyLBrace(): TerminalNode { return this.getToken(SolidityParser.AssemblyLBrace, 0); }
	public YulRBrace(): TerminalNode { return this.getToken(SolidityParser.YulRBrace, 0); }
	public AssemblyDialect(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.AssemblyDialect, 0); }
	public assemblyFlags(): AssemblyFlagsContext | undefined {
		return this.tryGetRuleContext(0, AssemblyFlagsContext);
	}
	public yulStatement(): YulStatementContext[];
	public yulStatement(i: number): YulStatementContext;
	public yulStatement(i?: number): YulStatementContext | YulStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulStatementContext);
		} else {
			return this.getRuleContext(i, YulStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAssemblyStatement) {
			listener.enterAssemblyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAssemblyStatement) {
			listener.exitAssemblyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAssemblyStatement) {
			return visitor.visitAssemblyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblyFlagsContext extends ParserRuleContext {
	public AssemblyBlockLParen(): TerminalNode { return this.getToken(SolidityParser.AssemblyBlockLParen, 0); }
	public AssemblyFlagString(): TerminalNode[];
	public AssemblyFlagString(i: number): TerminalNode;
	public AssemblyFlagString(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.AssemblyFlagString);
		} else {
			return this.getToken(SolidityParser.AssemblyFlagString, i);
		}
	}
	public AssemblyBlockRParen(): TerminalNode { return this.getToken(SolidityParser.AssemblyBlockRParen, 0); }
	public AssemblyBlockComma(): TerminalNode[];
	public AssemblyBlockComma(i: number): TerminalNode;
	public AssemblyBlockComma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.AssemblyBlockComma);
		} else {
			return this.getToken(SolidityParser.AssemblyBlockComma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_assemblyFlags; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterAssemblyFlags) {
			listener.enterAssemblyFlags(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitAssemblyFlags) {
			listener.exitAssemblyFlags(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitAssemblyFlags) {
			return visitor.visitAssemblyFlags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public _variableDeclaration!: VariableDeclarationContext;
	public _variableDeclarations: VariableDeclarationContext[] = [];
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationTupleContext extends ParserRuleContext {
	public _variableDeclaration!: VariableDeclarationContext;
	public _variableDeclarations: VariableDeclarationContext[] = [];
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.Comma);
		} else {
			return this.getToken(SolidityParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationTuple; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterVariableDeclarationTuple) {
			listener.enterVariableDeclarationTuple(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitVariableDeclarationTuple) {
			listener.exitVariableDeclarationTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationTuple) {
			return visitor.visitVariableDeclarationTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public variableDeclarationTuple(): VariableDeclarationTupleContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationTupleContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Semicolon(): TerminalNode { return this.getToken(SolidityParser.Semicolon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingTypeContext extends ParserRuleContext {
	public _key!: MappingKeyTypeContext;
	public _name!: IdentifierContext;
	public _value!: TypeNameContext;
	public Mapping(): TerminalNode { return this.getToken(SolidityParser.Mapping, 0); }
	public LParen(): TerminalNode { return this.getToken(SolidityParser.LParen, 0); }
	public DoubleArrow(): TerminalNode { return this.getToken(SolidityParser.DoubleArrow, 0); }
	public RParen(): TerminalNode { return this.getToken(SolidityParser.RParen, 0); }
	public mappingKeyType(): MappingKeyTypeContext {
		return this.getRuleContext(0, MappingKeyTypeContext);
	}
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
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
	public get ruleIndex(): number { return SolidityParser.RULE_mappingType; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterMappingType) {
			listener.enterMappingType(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitMappingType) {
			listener.exitMappingType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitMappingType) {
			return visitor.visitMappingType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MappingKeyTypeContext extends ParserRuleContext {
	public elementaryTypeName(): ElementaryTypeNameContext | undefined {
		return this.tryGetRuleContext(0, ElementaryTypeNameContext);
	}
	public identifierPath(): IdentifierPathContext | undefined {
		return this.tryGetRuleContext(0, IdentifierPathContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_mappingKeyType; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterMappingKeyType) {
			listener.enterMappingKeyType(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitMappingKeyType) {
			listener.exitMappingKeyType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitMappingKeyType) {
			return visitor.visitMappingKeyType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulStatementContext extends ParserRuleContext {
	public yulBlock(): YulBlockContext | undefined {
		return this.tryGetRuleContext(0, YulBlockContext);
	}
	public yulVariableDeclaration(): YulVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, YulVariableDeclarationContext);
	}
	public yulAssignment(): YulAssignmentContext | undefined {
		return this.tryGetRuleContext(0, YulAssignmentContext);
	}
	public yulFunctionCall(): YulFunctionCallContext | undefined {
		return this.tryGetRuleContext(0, YulFunctionCallContext);
	}
	public yulIfStatement(): YulIfStatementContext | undefined {
		return this.tryGetRuleContext(0, YulIfStatementContext);
	}
	public yulForStatement(): YulForStatementContext | undefined {
		return this.tryGetRuleContext(0, YulForStatementContext);
	}
	public yulSwitchStatement(): YulSwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, YulSwitchStatementContext);
	}
	public YulLeave(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulLeave, 0); }
	public YulBreak(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulBreak, 0); }
	public YulContinue(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulContinue, 0); }
	public yulFunctionDefinition(): YulFunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, YulFunctionDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulStatement) {
			listener.enterYulStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulStatement) {
			listener.exitYulStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulStatement) {
			return visitor.visitYulStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulBlockContext extends ParserRuleContext {
	public YulLBrace(): TerminalNode { return this.getToken(SolidityParser.YulLBrace, 0); }
	public YulRBrace(): TerminalNode { return this.getToken(SolidityParser.YulRBrace, 0); }
	public yulStatement(): YulStatementContext[];
	public yulStatement(i: number): YulStatementContext;
	public yulStatement(i?: number): YulStatementContext | YulStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulStatementContext);
		} else {
			return this.getRuleContext(i, YulStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulBlock; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulBlock) {
			listener.enterYulBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulBlock) {
			listener.exitYulBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulBlock) {
			return visitor.visitYulBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulVariableDeclarationContext extends ParserRuleContext {
	public _YulIdentifier!: Token;
	public _variables: Token[] = [];
	public YulLet(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulLet, 0); }
	public YulIdentifier(): TerminalNode[];
	public YulIdentifier(i: number): TerminalNode;
	public YulIdentifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulIdentifier);
		} else {
			return this.getToken(SolidityParser.YulIdentifier, i);
		}
	}
	public YulAssign(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulAssign, 0); }
	public yulExpression(): YulExpressionContext | undefined {
		return this.tryGetRuleContext(0, YulExpressionContext);
	}
	public YulComma(): TerminalNode[];
	public YulComma(i: number): TerminalNode;
	public YulComma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulComma);
		} else {
			return this.getToken(SolidityParser.YulComma, i);
		}
	}
	public yulFunctionCall(): YulFunctionCallContext | undefined {
		return this.tryGetRuleContext(0, YulFunctionCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulVariableDeclaration; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulVariableDeclaration) {
			listener.enterYulVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulVariableDeclaration) {
			listener.exitYulVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulVariableDeclaration) {
			return visitor.visitYulVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulAssignmentContext extends ParserRuleContext {
	public yulPath(): YulPathContext[];
	public yulPath(i: number): YulPathContext;
	public yulPath(i?: number): YulPathContext | YulPathContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulPathContext);
		} else {
			return this.getRuleContext(i, YulPathContext);
		}
	}
	public YulAssign(): TerminalNode { return this.getToken(SolidityParser.YulAssign, 0); }
	public yulExpression(): YulExpressionContext | undefined {
		return this.tryGetRuleContext(0, YulExpressionContext);
	}
	public yulFunctionCall(): YulFunctionCallContext | undefined {
		return this.tryGetRuleContext(0, YulFunctionCallContext);
	}
	public YulComma(): TerminalNode[];
	public YulComma(i: number): TerminalNode;
	public YulComma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulComma);
		} else {
			return this.getToken(SolidityParser.YulComma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulAssignment; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulAssignment) {
			listener.enterYulAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulAssignment) {
			listener.exitYulAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulAssignment) {
			return visitor.visitYulAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulIfStatementContext extends ParserRuleContext {
	public _cond!: YulExpressionContext;
	public _body!: YulBlockContext;
	public YulIf(): TerminalNode { return this.getToken(SolidityParser.YulIf, 0); }
	public yulExpression(): YulExpressionContext {
		return this.getRuleContext(0, YulExpressionContext);
	}
	public yulBlock(): YulBlockContext {
		return this.getRuleContext(0, YulBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulIfStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulIfStatement) {
			listener.enterYulIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulIfStatement) {
			listener.exitYulIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulIfStatement) {
			return visitor.visitYulIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulForStatementContext extends ParserRuleContext {
	public _init!: YulBlockContext;
	public _cond!: YulExpressionContext;
	public _post!: YulBlockContext;
	public _body!: YulBlockContext;
	public YulFor(): TerminalNode { return this.getToken(SolidityParser.YulFor, 0); }
	public yulBlock(): YulBlockContext[];
	public yulBlock(i: number): YulBlockContext;
	public yulBlock(i?: number): YulBlockContext | YulBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulBlockContext);
		} else {
			return this.getRuleContext(i, YulBlockContext);
		}
	}
	public yulExpression(): YulExpressionContext {
		return this.getRuleContext(0, YulExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulForStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulForStatement) {
			listener.enterYulForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulForStatement) {
			listener.exitYulForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulForStatement) {
			return visitor.visitYulForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulSwitchCaseContext extends ParserRuleContext {
	public YulCase(): TerminalNode { return this.getToken(SolidityParser.YulCase, 0); }
	public yulLiteral(): YulLiteralContext {
		return this.getRuleContext(0, YulLiteralContext);
	}
	public yulBlock(): YulBlockContext {
		return this.getRuleContext(0, YulBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulSwitchCase; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulSwitchCase) {
			listener.enterYulSwitchCase(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulSwitchCase) {
			listener.exitYulSwitchCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulSwitchCase) {
			return visitor.visitYulSwitchCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulSwitchStatementContext extends ParserRuleContext {
	public YulSwitch(): TerminalNode { return this.getToken(SolidityParser.YulSwitch, 0); }
	public yulExpression(): YulExpressionContext {
		return this.getRuleContext(0, YulExpressionContext);
	}
	public YulDefault(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulDefault, 0); }
	public yulBlock(): YulBlockContext | undefined {
		return this.tryGetRuleContext(0, YulBlockContext);
	}
	public yulSwitchCase(): YulSwitchCaseContext[];
	public yulSwitchCase(i: number): YulSwitchCaseContext;
	public yulSwitchCase(i?: number): YulSwitchCaseContext | YulSwitchCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulSwitchCaseContext);
		} else {
			return this.getRuleContext(i, YulSwitchCaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulSwitchStatement; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulSwitchStatement) {
			listener.enterYulSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulSwitchStatement) {
			listener.exitYulSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulSwitchStatement) {
			return visitor.visitYulSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulFunctionDefinitionContext extends ParserRuleContext {
	public _YulIdentifier!: Token;
	public _arguments: Token[] = [];
	public _returnParameters: Token[] = [];
	public _body!: YulBlockContext;
	public YulFunction(): TerminalNode { return this.getToken(SolidityParser.YulFunction, 0); }
	public YulIdentifier(): TerminalNode[];
	public YulIdentifier(i: number): TerminalNode;
	public YulIdentifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulIdentifier);
		} else {
			return this.getToken(SolidityParser.YulIdentifier, i);
		}
	}
	public YulLParen(): TerminalNode { return this.getToken(SolidityParser.YulLParen, 0); }
	public YulRParen(): TerminalNode { return this.getToken(SolidityParser.YulRParen, 0); }
	public yulBlock(): YulBlockContext {
		return this.getRuleContext(0, YulBlockContext);
	}
	public YulArrow(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulArrow, 0); }
	public YulComma(): TerminalNode[];
	public YulComma(i: number): TerminalNode;
	public YulComma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulComma);
		} else {
			return this.getToken(SolidityParser.YulComma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulFunctionDefinition; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulFunctionDefinition) {
			listener.enterYulFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulFunctionDefinition) {
			listener.exitYulFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulFunctionDefinition) {
			return visitor.visitYulFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulPathContext extends ParserRuleContext {
	public YulIdentifier(): TerminalNode[];
	public YulIdentifier(i: number): TerminalNode;
	public YulIdentifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulIdentifier);
		} else {
			return this.getToken(SolidityParser.YulIdentifier, i);
		}
	}
	public YulPeriod(): TerminalNode[];
	public YulPeriod(i: number): TerminalNode;
	public YulPeriod(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulPeriod);
		} else {
			return this.getToken(SolidityParser.YulPeriod, i);
		}
	}
	public YulEVMBuiltin(): TerminalNode[];
	public YulEVMBuiltin(i: number): TerminalNode;
	public YulEVMBuiltin(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulEVMBuiltin);
		} else {
			return this.getToken(SolidityParser.YulEVMBuiltin, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulPath; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulPath) {
			listener.enterYulPath(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulPath) {
			listener.exitYulPath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulPath) {
			return visitor.visitYulPath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulFunctionCallContext extends ParserRuleContext {
	public YulLParen(): TerminalNode { return this.getToken(SolidityParser.YulLParen, 0); }
	public YulRParen(): TerminalNode { return this.getToken(SolidityParser.YulRParen, 0); }
	public YulIdentifier(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulIdentifier, 0); }
	public YulEVMBuiltin(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulEVMBuiltin, 0); }
	public yulExpression(): YulExpressionContext[];
	public yulExpression(i: number): YulExpressionContext;
	public yulExpression(i?: number): YulExpressionContext | YulExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(YulExpressionContext);
		} else {
			return this.getRuleContext(i, YulExpressionContext);
		}
	}
	public YulComma(): TerminalNode[];
	public YulComma(i: number): TerminalNode;
	public YulComma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SolidityParser.YulComma);
		} else {
			return this.getToken(SolidityParser.YulComma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulFunctionCall; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulFunctionCall) {
			listener.enterYulFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulFunctionCall) {
			listener.exitYulFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulFunctionCall) {
			return visitor.visitYulFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulBooleanContext extends ParserRuleContext {
	public YulTrue(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulTrue, 0); }
	public YulFalse(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulFalse, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulBoolean; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulBoolean) {
			listener.enterYulBoolean(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulBoolean) {
			listener.exitYulBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulBoolean) {
			return visitor.visitYulBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulLiteralContext extends ParserRuleContext {
	public YulDecimalNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulDecimalNumber, 0); }
	public YulStringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulStringLiteral, 0); }
	public YulHexNumber(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulHexNumber, 0); }
	public yulBoolean(): YulBooleanContext | undefined {
		return this.tryGetRuleContext(0, YulBooleanContext);
	}
	public YulHexStringLiteral(): TerminalNode | undefined { return this.tryGetToken(SolidityParser.YulHexStringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulLiteral; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulLiteral) {
			listener.enterYulLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulLiteral) {
			listener.exitYulLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulLiteral) {
			return visitor.visitYulLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YulExpressionContext extends ParserRuleContext {
	public yulPath(): YulPathContext | undefined {
		return this.tryGetRuleContext(0, YulPathContext);
	}
	public yulFunctionCall(): YulFunctionCallContext | undefined {
		return this.tryGetRuleContext(0, YulFunctionCallContext);
	}
	public yulLiteral(): YulLiteralContext | undefined {
		return this.tryGetRuleContext(0, YulLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SolidityParser.RULE_yulExpression; }
	// @Override
	public enterRule(listener: SolidityParserListener): void {
		if (listener.enterYulExpression) {
			listener.enterYulExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SolidityParserListener): void {
		if (listener.exitYulExpression) {
			listener.exitYulExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SolidityParserVisitor<Result>): Result {
		if (visitor.visitYulExpression) {
			return visitor.visitYulExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
