'use strict';

let path = require('path'),
  exec = require('child_process').exec,
  fs = require('fs-extra'),
  Utils = require('./utils'),
  error = require('debug')('sol-merger:error'),
  log = require('debug')('sol-merge:log'),
  FileAnalyzer = require('./fileAnalyzer');

class Merger {
  constructor(options) {
    if (!options) options = {};
    const { delimeter } = options;

    /**
     * @type string;
     */
    this.delimeter = delimeter || '\n\n';

    /**
     * @type {RegistredImport[]}
     */
    this.registeredImports = [];

    /**
     * @type string;
     */
    this.nodeModulesRoot = null;
  }

  getPragmaRegex() {
    return /(pragma solidity (.+?);)/g;
  }

  getImportRegex() {
    return /import.+?;/g;
  }

  getPragma(contents) {
    let group = this.getPragmaRegex().exec(contents);
    return group && group[1];
  }

  stripPragma(contents) {
    return contents.replace(this.getPragmaRegex(), '').trim();
  }

  isImported(filename, name, as) {
    return (
      this.registeredImports.find(
        (ri) => ri.file === filename && ri.name === name && ri.as === as
      ) !== undefined // eslint-disable-line
    );
  }

  /**
   * Processes file
   * @param {string} file File path to process
   * @param {boolean} isRoot Is this file root
   * @param {FileAnalyzerImportsResult} parentImport
   */
  async processFile(file, isRoot, parentImport) {
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

    const exports = await this.processExports(analyzedFile);
    for (const e of exports) {
      result += e + this.delimeter;
    }

    return result.trimRight();
  }

  /**
   *
   * @param {FileAnalyzerResult} analyzedFile
   *
   * @returns {string[]}
   */
  async processImports(analyzedFile) {
    let result = [];
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

  /**
   *
   * @param {FileAnalyzerResult} analyzedFile
   * @param {FileAnalyzerImportsResult} [parentImport]
   *
   * @returns {string[]}
   */
  async processExports(analyzedFile, parentImport) {
    const isAllImport =
      !parentImport ||
      (parentImport.globalRenameImport === null &&
        parentImport.namedImports === null);

    const shouldBeImported = (exportName) =>
      isAllImport ||
      parentImport.namedImports.find(
        (namedImport) => namedImport.name === exportName
      );

    const result = [];

    analyzedFile.exports.forEach((e) => {
      const beImported = shouldBeImported(e.name);
      const as =
        typeof beImported === 'object' && beImported !== null
          ? beImported.as
          : null;
      const isImported = this.isImported(analyzedFile.filename, e.name, as);
      if (isImported) {
        log('%s %s %s', '⚠', e.name, analyzedFile.filename);
        return;
      }
      const body = FileAnalyzer.buildExportBody(e, as);
      if (beImported) {
        result.push(body);
        this.registerImport({
          as: as,
          file: analyzedFile.filename,
          name: e.name,
        });
        return;
      }
    });
    return result;
  }

  /**
   * Registers import that is processed
   * @param {RegistredImport} i
   */
  registerImport(i) {
    this.registeredImports.push(i);
  }

  stripImports(contents) {
    return contents.replace(this.getImportRegex(), '').trim();
  }

  async getNodeModulesPath(file) {
    return new Promise((resolve, reject) => {
      exec('npm root', { cwd: path.dirname(file) }, (err, stdout) => {
        if (err) {
          error(
            'Unable to find npm root directory. Make sure contract is inside npm package.'
          );
          return reject(err);
        }
        resolve(stdout.trim());
      });
    });
  }
}

module.exports = Merger;
