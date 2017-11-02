#!/usr/bin/env node

let path = require('path')
  , glob = require('glob')
  , Merger = require('../lib/merger')
  , colors = require('cli-color')
  , done = require('../utils/done')
  , fs = require('fs-extra')
  , debug = require('debug')('sol-merger:debug');

let program = require('commander');

let inputGlob, outputDir, append;

program
  .option('-a, --append [append]', '', /^([a-zA-Z_]+)$/)
  .arguments('<glob> [outputDir]')
  .action((_glob, _outputDir) => {
    inputGlob = _glob;
    outputDir = _outputDir;
  })
  .parse(process.argv);

if (!inputGlob) {
  // eslint-disable-next-line
  console.log(colors.red('Please specify input solidity contract.'));
  program.outputHelp(done);
  return;
}

append = program.append || '_merged';

if (outputDir) {
  outputDir = path.isAbsolute(outputDir) ?
    outputDir :
    path.join(process.cwd(), outputDir);
}

debug(outputDir);

glob(inputGlob, {
  cwd: process.cwd(),
  absolute: true
}, execute);

async function execute(err, files) {
  if (err) {
    return done(err);
  }

  debug(files);

  if (files.length === 0) {
    // eslint-disable-next-line
    console.log(colors.yellow('No files found for merge'));
  }

  let promises = files.map(file => {
    return new Promise(async (resolve, reject) => {
      let merger = new Merger({ delimeter: '\n\n' });
      let result;
      try {
        result = await merger.processFile(file, true);
      } catch (e) {
        reject(e);
      }
      let outputFile;
      if (outputDir) {
        outputFile = path.join(outputDir, path.basename(file));
      } else {
        let extname = path.extname(file);
        outputFile = path.join(
          path.dirname(file),
          path.basename(file, extname) + append + extname
        );
      }
      debug(`${file} -> ${outputFile}`);
      fs.outputFile(outputFile, result, { encoding: 'utf-8' }, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });

  Promise.all(promises)
    .then(() => done())
    .catch(done);

}

