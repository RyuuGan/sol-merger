import { ExportType } from '../../types';

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

export interface ExportVisitResult extends RangeVisitResult {
  abstract: boolean;
  type: ExportType;
  name: string;
  body: RangeVisitResult;
  is: RangeVisitResult | null;
}

export type VisitCallback<T extends RangeVisitResult> = (v: T) => void;
