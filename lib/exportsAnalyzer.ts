import Debug from 'debug';
import { SolidityExportVisitor } from './antlr/visitors/exportVisitor';
import {
  ExportVisitResultConstant,
  ExportVisitResultFunction,
  ExportVisitResultUserDefinedValueType,
} from './antlr/visitors/types';
import { ContractLikeExportType, ExportType } from './types';

const error = Debug('sol-merger:error');

export type ExportsAnalyzerResult =
  | ExportsAnalyzerResultContractLike
  | ExportsAnalyzerResultConstant
  | ExportsAnalyzerResultFunction
  | ExportsAnalyzerResultUserDefinedValueType;

export interface ExportsAnalyzerResultContractLike {
  abstract: boolean;
  type: ContractLikeExportType;
  name: string;
  is: string;
  body: string;
}

export interface ExportsAnalyzerResultConstant {
  type: ExportType.constant;
  name: string;
  body: string;
  typeName: string;
}

export interface ExportsAnalyzerResultFunction {
  type: ExportType.function;
  name: string;
  body: string;
}

export interface ExportsAnalyzerResultUserDefinedValueType {
  type: ExportType.userDefinedValueType;
  name: string;
  body: string;
}

export class ExportsAnalyzer {
  constructor(private contents: string) {}

  /**
   * Analyzes all the exports of the file (Contract, Interface, Library)
   *
   * Single export statement to process. Basically it analyzes next things:
   *
   * 1. Get the type of the export
   * 2. Get the body of the export
   * 3. Get inheritance of the specifier
   *
   */
  analyzeExports(): ExportsAnalyzerResult[] {
    try {
      const results: ExportsAnalyzerResult[] = [];
      const visitor = new SolidityExportVisitor(this.contents);
      visitor.visit((e) => {
        if (e.type === ExportType.constant) {
          const constantExport = this.analyzeExportConstant(e);
          results.push(constantExport);
          return;
        }

        if (e.type === ExportType.function) {
          const functionExport = this.analyzeExportFunction(e);
          results.push(functionExport);
          return;
        }

        if (e.type === ExportType.userDefinedValueType) {
          const userDefinedValueTypeExport =
            this.analyzeExportUserDefinedValueType(e);
          results.push(userDefinedValueTypeExport);
          return;
        }
        results.push({
          abstract: e.abstract,
          type: e.type,
          name: e.name,
          body: this.contents.substring(e.body.start, e.body.end + 1).trim(),
          is: e.is
            ? this.contents.substring(e.is.start, e.is.end + 1).trimLeft()
            : '',
        });
      });
      return results;
    } catch (e) {
      error(e);
      return [];
    }
  }

  private analyzeExportConstant(
    e: ExportVisitResultConstant,
  ): ExportsAnalyzerResultConstant {
    return {
      body: this.contents.substring(e.body.start, e.body.end + 1),
      name: e.name,
      type: ExportType.constant,
      typeName: e.typeName,
    };
  }

  private analyzeExportFunction(
    e: ExportVisitResultFunction,
  ): ExportsAnalyzerResultFunction {
    return {
      body: this.contents.substring(e.start, e.end + 1),
      name: e.name,
      type: ExportType.function,
    };
  }

  private analyzeExportUserDefinedValueType(
    e: ExportVisitResultUserDefinedValueType,
  ): ExportsAnalyzerResultUserDefinedValueType {
    return {
      body: this.contents.substring(e.start, e.end + 1),
      name: e.name,
      type: ExportType.userDefinedValueType,
    };
  }
}
