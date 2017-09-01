'use strict';

let path = require('path')
  , exec = require('child_process').exec
  , Bluebird = require('bluebird')
  , fs = Bluebird.promisifyAll(require('fs'))
  , Utils = require('./utils');

class Merger {

  constructor({ delimeter }) {
    this.delimeter = delimeter || '\n\n';
    this.processedFiles = [];
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
    if (this.processedFiles.indexOf(file) !== -1) {
      console.log('%s %s', '⚠', file);
      return;
    }
    await fs.statAsync(file);

    let contents = await fs.readFileAsync(file, { encoding: 'utf-8' });

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
        path.join(await this.getNodeModulesPath(file), './' + _importFile);

      let fileContents = await this.processFile(filePath, false);

      result.push(fileContents);
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
          console.error('Unable to find npm root directory. Make sure contract is inside npm package.');
          return reject(err);
        }
        resolve(stdout.trim());
      });
    });

  }

}

module.exports = Merger;
