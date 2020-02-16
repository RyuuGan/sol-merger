import { ExportsAnalyzerResult } from './exportsAnalyzer';
import { FileAnalyzer, FileAnalyzerResult } from './fileAnalyzer';
import { ImportsRegistry } from './importRegistry';
import { ImportsAnalyzer, ImportsAnalyzerResult } from './importsAnalyzer';
import { FsContractResolver } from './resolvers/fsResolver';
import { ContractResolver, ContractResolverCtor } from './resolvers/resolver';
import { debug } from './utils/logger';

export class Merger {
  delimeter: string = this.options.delimeter || '\n\n';
  removeComments: boolean;

  private importRegistry: ImportsRegistry;
  private contractResolver: ContractResolver;

  constructor(private options: SolMergerOptions = {}) {
    this.removeComments = options.removeComments ?? false;

    const Ctor = options.ContractResolver ?? FsContractResolver;
    this.contractResolver = new Ctor();

    this.importRegistry = new ImportsRegistry();
  }

  getPragmaRegex() {
    return /(pragma ([a-zA-Z_$][a-zA-Z_$0-9]*) (.+?);)/g;
  }

  getImportRegex() {
    return /import.+?;/g;
  }

  getPragma(contents: string) {
    let result = '';
    const pragmaRegex = this.getPragmaRegex();
    let group = pragmaRegex.exec(contents);
    while (group) {
      result += group[1] + '\n';
      group = pragmaRegex.exec(contents);
    }
    return result;
  }

  stripPragma(contents: string) {
    return contents.replace(this.getPragmaRegex(), '').trim();
  }

  async init() {
    this.importRegistry = new ImportsRegistry();
    await this.contractResolver.init();
  }

  async processFile(
    file: string,
    isRoot: boolean,
    parentImport?: ImportsAnalyzerResult,
  ): Promise<string> {
    if (isRoot) {
      await this.init();
    }
    if (this.importRegistry.isImportProcessed(parentImport?.importStatement)) {
      debug(
        '  %s Import statement already processed: %s',
        '⚠',
        parentImport?.importStatement,
      );
      return '';
    }
    if (parentImport) {
      this.importRegistry.registerImportStatement(parentImport.importStatement);
    }

    debug('Processing file %s', file);

    const analyzedFile = await new FileAnalyzer(
      this.contractResolver,
      file,
      this.removeComments,
    ).analyze();

    return this.buildString(analyzedFile, isRoot, parentImport);
  }

  private async buildString(
    analyzedFile: FileAnalyzerResult,
    isRoot: boolean,
    parentImport?: ImportsAnalyzerResult,
  ) {
    let result = '';

    if (isRoot) {
      const pragma = this.getPragma(analyzedFile.contents);
      result = pragma + this.delimeter;
    }

    const imports = await this.processImports(analyzedFile);

    for (const i of imports) {
      result += i + this.delimeter;
    }

    const fileExports = await this.processExports(analyzedFile, parentImport);
    for (const e of fileExports) {
      result += e + this.delimeter;
    }

    return result.trimRight();
  }

  async processImports(analyzedFile: FileAnalyzerResult): Promise<string[]> {
    const result: string[] = [];
    for (const i of analyzedFile.imports) {
      const filePath = this.contractResolver.getPath(analyzedFile, i);
      const contents = await this.processFile(filePath, false, i);

      if (contents) {
        result.push(contents);
      }
    }
    return result;
  }

  async processExports(
    analyzedFile: FileAnalyzerResult,
    parentImport?: ImportsAnalyzerResult,
  ): Promise<string[]> {
    const result: string[] = [];

    analyzedFile.exports.forEach((e) => {
      const fileExports = this.processExport(analyzedFile, e, parentImport);

      result.push(...fileExports);
    });
    return result;
  }

  private processExport(
    analyzedFile: FileAnalyzerResult,
    e: ExportsAnalyzerResult,
    parentImport?: ImportsAnalyzerResult,
  ): string[] {
    const isAllImport = ImportsAnalyzer.isAllImport(parentImport);

    const isRenameGlobalImport = ImportsAnalyzer.isRenameGlobalImport(
      parentImport,
    );

    const shouldBeImported = (exportName: string) => {
      return (
        isAllImport ||
        isRenameGlobalImport ||
        parentImport?.namedImports?.find(
          (namedImport) => namedImport.name === exportName,
        )
      );
    };

    const result: string[] = [];
    const beImported = shouldBeImported(e.name);
    let rename =
      typeof beImported === 'object' && beImported !== null
        ? beImported.as
        : null;
    const isImported = this.importRegistry.isImported(
      analyzedFile.filename,
      e.name,
      rename,
    );
    if (isImported) {
      debug('%s Already imported: %s %s', '⚠', e.name, analyzedFile.filename);
      return [];
    }
    if (beImported) {
      if (isRenameGlobalImport && parentImport) {
        rename = `${parentImport.globalRenameImport}$${e.name}`;
      }
      const globalRenames = this.importRegistry.getGlobalImports();
      const body = FileAnalyzer.buildExportBody(
        analyzedFile,
        e,
        rename,
        globalRenames,
      );
      result.push(body);
      this.importRegistry.registerImport({
        as: rename,
        file: analyzedFile.filename,
        name: e.name,
        globalRename: parentImport && parentImport.globalRenameImport,
      });
    }
    return result;
  }

  stripImports(contents: string): string {
    return contents.replace(this.getImportRegex(), '').trim();
  }
}

export interface SolMergerOptions {
  delimeter?: string;
  removeComments?: boolean;
  ContractResolver?: ContractResolverCtor;
}
