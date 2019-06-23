import path from 'path';
import { exec } from 'child_process';
import { Utils } from './utils';
import Debug from 'debug';
import {
  FileAnalyzer,
  FileAnalyzerImportsResult,
  FileAnalyzerResult,
  FileAnalyzerNamedImportResult,
  FileAnalyzerExportsResult,
} from './fileAnalyzer';

const error = Debug('sol-merger:error');
const log = Debug('sol-merge:log');

export class Merger {
  delimeter: string;
  registeredImports: RegistredImport[];
  nodeModulesRoot: string;

  constructor(options: SolMergerOptions = {}) {
    const { delimeter } = options;

    this.delimeter = delimeter || '\n\n';
    this.registeredImports = [];
    this.nodeModulesRoot = null;
  }

  getPragmaRegex() {
    return /(pragma solidity (.+?);)/g;
  }

  getImportRegex() {
    return /import.+?;/g;
  }

  getPragma(contents: string) {
    const group = this.getPragmaRegex().exec(contents);
    return group && group[1];
  }

  stripPragma(contents: string) {
    return contents.replace(this.getPragmaRegex(), '').trim();
  }

  isImported(filename: string, name: string, as: string | null) {
    return (
      this.registeredImports.find(
        (ri) => ri.file === filename && ri.name === name && ri.as === as,
      ) !== undefined // eslint-disable-line
    );
  }

  async processFile(
    file: string,
    isRoot: boolean,
    parentImport?: FileAnalyzerImportsResult,
  ) {
    if (isRoot) {
      this.registeredImports = [];
      this.nodeModulesRoot = await this.getNodeModulesPath(file);
    }
    const analyzedFile = await new FileAnalyzer(file).analyze();

    let result = '';

    if (isRoot) {
      const pragma = this.getPragma(analyzedFile.contents);
      result = pragma + this.delimeter;
    }

    const imports = await this.processImports(analyzedFile);

    for (const i of imports) {
      result += i + this.delimeter;
    }

    const exports = await this.processExports(analyzedFile, parentImport);
    for (const e of exports) {
      result += e + this.delimeter;
    }

    return result.trimRight();
  }

  async processImports(analyzedFile: FileAnalyzerResult): Promise<string[]> {
    const result = [];
    for (const i of analyzedFile.imports) {
      let filePath = Utils.isRelative(i.file)
        ? path.join(path.dirname(analyzedFile.filename), i.file)
        : path.join(this.nodeModulesRoot, i.file);
      filePath = path.normalize(filePath);

      const contents = await this.processFile(filePath, false, i);

      if (contents) {
        result.push(contents);
      }
    }
    return result;
  }

  async processExports(
    analyzedFile: FileAnalyzerResult,
    parentImport?: FileAnalyzerImportsResult,
  ): Promise<string[]> {
    const isAllImport = Utils.isAllImport(parentImport);

    const isRenameGlobalImport = Utils.isRenameGlobalImport(parentImport);

    const shouldBeImported = (exportName: string) => {
      return (
        isAllImport ||
        isRenameGlobalImport ||
        parentImport.namedImports.find(
          (namedImport) => namedImport.name === exportName,
        )
      );
    };

    const result: string[] = [];

    analyzedFile.exports.forEach((e) => {
      this.processExport(
        analyzedFile,
        parentImport,
        e,
        shouldBeImported,
        isRenameGlobalImport,
        result,
      );
    });
    return result;
  }

  processExport(
    analyzedFile: FileAnalyzerResult,
    parentImport: FileAnalyzerImportsResult | undefined,
    e: FileAnalyzerExportsResult,
    shouldBeImported: (e: string) => boolean | FileAnalyzerNamedImportResult,
    isRenameGlobalImport: boolean,
    result: string[],
  ): void {
    const beImported = shouldBeImported(e.name);
    let rename =
      typeof beImported === 'object' && beImported !== null
        ? beImported.as
        : null;
    const isImported = this.isImported(analyzedFile.filename, e.name, rename);
    if (isImported) {
      log('%s %s %s', '⚠', e.name, analyzedFile.filename);
      return;
    }
    if (beImported) {
      if (isRenameGlobalImport) {
        rename = `${parentImport.globalRenameImport}$${e.name}`;
      }
      const globalRenames = this.getGlobalImports();
      const body = FileAnalyzer.buildExportBody(
        analyzedFile,
        e,
        rename,
        globalRenames,
      );
      result.push(body);
      this.registerImport({
        as: rename,
        file: analyzedFile.filename,
        name: e.name,
        globalRename: parentImport && parentImport.globalRenameImport,
      });
    }
  }

  registerImport(i: RegistredImport): void {
    this.registeredImports.push(i);
  }

  getGlobalImports(): RegistredImport[] {
    return this.registeredImports.filter((i) => i.globalRename);
  }

  stripImports(contents: string): string {
    return contents.replace(this.getImportRegex(), '').trim();
  }

  async getNodeModulesPath(file: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec('npm root', { cwd: path.dirname(file) }, (err, stdout) => {
        if (err) {
          error(
            'Unable to find npm root directory. Make sure contract is inside npm package.',
          );
          return reject(err);
        }
        resolve(stdout.trim());
      });
    });
  }
}

export interface SolMergerOptions {
  delimeter?: string;
}

export interface RegistredImport {
  file: string;
  name: string;
  as: string;
  globalRename: string;
}
