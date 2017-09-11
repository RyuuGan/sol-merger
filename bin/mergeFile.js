#! /usr/local/bin/node

let path = require('path')
  , Merger = require('../lib/merger')
  , Utils = require('../lib/utils')
  , colors =  require('cli-color')
  , done = require('../utils/done')
  , error = require('debug')('sol-merger:error');

let contract = process.argv[2];

if (!contract) {
  error(colors.red('Please specify input solidity contract.'));
  done();
}

let file = Utils.isRelative(contract) ? path.join(process.cwd(), contract) : contract
  , outputFile = process.argv[3];

if (!outputFile) {
  let extname = path.extname(file);
  outputFile = path.join(path.dirname(file), path.basename(file, extname) + '_merged' + extname);
}

execute();

async function execute() {

  let merger = new Merger({ delimeter: '\n\n' });
  let result;
  try {
    result = await merger.processFile(file, true);
  } catch(e) {
    done(e);
  }

  require('fs').writeFileSync(outputFile, result, { encoding: 'utf-8' });
  done();
}

