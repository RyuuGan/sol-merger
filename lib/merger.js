'use strict';

let path = require('path')
  , exec = require('child_process').exec
  , fs = require('fs-extra')
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

  getImportRegex() {
    return /import ['"](.+?)['"];/g;
  }

  getPragma(contents) {
    let group = this.getPragmaRegex().exec(contents);
    return group && group[1];
  }

  stripPragma(contents) {
    return contents.replace(this.getPragmaRegex(), '').trim();
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
    await fs.stat(file);

    let contents = await fs.readFile(file, { encoding: 'utf-8' });

    let result = '';

    if (isRoot) {
      let pragma = this.getPragma(contents);
      result = pragma + this.delimeter;
    }
    contents = this.stripPragma(contents);
    let imports = await this.processImports(file, contents);

    for (let i = 0; i < imports.length; i++) {
      result += imports[i] + this.delimeter;
    }

    contents = this.stripImports(contents);
    result += contents;

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
