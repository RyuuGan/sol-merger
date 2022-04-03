import { ContractLikeExportType, ExportType } from '../../types';

export interface RangeVisitResult {
  start: number;
  end: number;
}

export interface ImportVisitResult extends RangeVisitResult {
  filename: string;
  globalRename: string | null;
  namedImports: ImportVisitNamedImport[] | null;
}

export interface ImportVisitNamedImport {
  name: string;
  as: string | null;
}

export type ExportVisitResult =
  | ExportVisitResultContractLike
  | ExportVisitResultConstant
  | ExportVisitResultFunction
  | ExportVisitResultUserDefinedValueType
  | ExportVisitResultUsingDirective;

export interface ExportVisitResultContractLike extends RangeVisitResult {
  abstract: boolean;
  type: ContractLikeExportType;
  name: string;
  body: RangeVisitResult;
  is: RangeVisitResult | null;
}

export interface ExportVisitResultConstant extends RangeVisitResult {
  type: ExportType.constant;
  body: RangeVisitResult;
  typeName: string;
  name: string;
}

export interface ExportVisitResultFunction extends RangeVisitResult {
  type: ExportType.function;
  name: string;
}

export interface ExportVisitResultUserDefinedValueType
  extends RangeVisitResult {
  type: ExportType.userDefinedValueType;
  name: string;
}

export interface ExportVisitResultUsingDirective extends RangeVisitResult {
  type: ExportType.usingDirective;
  name: string;
}

export type VisitCallback<T extends RangeVisitResult> = (v: T) => void;
