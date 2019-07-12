'use strict';

let path = require('path')
  , exec = require('child_process').exec
  , Bluebird = require('bluebird')
  , fs = Bluebird.promisifyAll(require('fs'))
  , Utils = require('./utils')
  , error = require('debug')('sol-merger:error')
  , log = require('debug')('sol-merge:log');

class Merger {

  constructor(options) {
    if (!options) options = {};
    let { delimeter } = options;

    this.delimeter = delimeter || '\n\n';
    this.processedFiles = [];
    this.nodeModulesRoot = null;
  }

  getPragmaRegex() {
    return /(pragma solidity (.+?);)/g;
  }
  getABIEncoderPragmaRegex() {
    return /(pragma experimental ABIEncoderV2;)/g;
  }

  getImportRegex() {
    return /import .*['"](.+?)['"];/g;
  }

  getPragma(contents) {
    let group = this.getPragmaRegex().exec(contents);
    return group && group[1];
  }
  getABIEncoderPragma(contents) {
    let group = this.getABIEncoderPragmaRegex().exec(contents);
    return group && group[1];
  }

  stripPragma(contents) {
    return contents.replace(this.getPragmaRegex(), '').replace(this.getABIEncoderPragmaRegex(), '').trim();
  }

  async processFile(file, isRoot) {
    if (isRoot) {
      this.processedFiles = [];
      this.nodeModulesRoot = await this.getNodeModulesPath(file);
    }
    if (this.processedFiles.indexOf(file) !== -1) {
      log('%s %s', '⚠', file);
      return '';
    }
    this.processedFiles.push(file);
    await fs.statAsync(file);

    let contents = await fs.readFileAsync(file, { encoding: 'utf-8' });

    let result = '';
    let importedContents = '';

    let imports = await this.processImports(file, contents);

    for (let i = 0; i < imports.length; i++) {
      importedContents += imports[i] + this.delimeter;
    }

    if (isRoot) {
      let pragma = this.getPragma(contents);
      result = pragma + this.delimeter;

      let hasExperimentalPragma = this.getABIEncoderPragma(contents) || this.getABIEncoderPragma(importedContents);
      if (hasExperimentalPragma) {
        result = result + 'pragma experimental ABIEncoderV2;' + this.delimeter;
      }
      
      contents = this.stripPragma(contents);
      importedContents = this.stripPragma(importedContents);
    }

    contents = this.stripImports(contents);
    importedContents = this.stripImports(importedContents);
    
    result += importedContents + this.delimeter + contents;
    result = result.replace(/^\s*[\r\n]/gm, '\n');
    return result;
  }

  async processImports(file, contents) {
    let importRegex = this.getImportRegex();

    let group;
    let result = [];
    while (group = importRegex.exec(contents)) {
      let _importFile = group[1];

      let filePath = Utils.isRelative(_importFile) ?
        path.join(path.dirname(file), _importFile) :
        path.join(this.nodeModulesRoot, './' + _importFile);

      filePath = path.normalize(filePath);

      let fileContents = await this.processFile(filePath, false);

      if (fileContents) {
        result.push(fileContents);
      }
    }

    return result;

  }

  stripImports(contents) {
    return contents.replace(this.getImportRegex(), '').trim();
  }

  async getNodeModulesPath(file) {

    return new Promise((resolve, reject) => {
      exec('npm root', { cwd: path.dirname(file) }, (err, stdout) => {
        if (err) {
          error('Unable to find npm root directory. Make sure contract is inside npm package.');
          return reject(err);
        }
        resolve(stdout.trim());
      });
    });

  }

}

module.exports = Merger;
