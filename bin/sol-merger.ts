#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import glob from 'glob';
import colors from 'cli-color';
import Debug from 'debug';
import { Merger } from '../lib/merger';
import { done } from '../utils/done';
import program from 'commander';

const debug = Debug('sol-merger:debug');

let inputGlob: string, outputDir: string, append: string;

program
  .option('-a, --append [append]', '', /^([a-zA-Z_]+)$/)
  .option('-c, --with-comments', `Doesn't remove comment from exports`, false)
  .arguments('<glob> [outputDir]')
  .action((_glob, _outputDir) => {
    inputGlob = _glob;
    outputDir = _outputDir;
  })
  .parse(process.argv);

if (!inputGlob) {
  console.log(colors.red('Please specify input solidity contract.'));
  program.outputHelp();
  done();
}

append = program.append || '_merged';

if (outputDir) {
  outputDir = path.isAbsolute(outputDir)
    ? outputDir
    : path.join(process.cwd(), outputDir);
}

debug('Output directory', outputDir);
debug('With comments?', program.withComments);

glob(
  inputGlob,
  {
    cwd: process.cwd(),
    absolute: true,
  },
  execute
);

async function execute(err: Error, files: string[]) {
  if (err) {
    return done(err);
  }

  debug(files);

  if (files.length === 0) {
    // eslint-disable-next-line
    console.log(colors.yellow('No files found for merge'));
  }

  const promises = files.map(async (file) => {
    const merger = new Merger({ delimeter: '\n\n', removeComments: !program.withComments });
    let result: string;
    result = await merger.processFile(file, true);
    let outputFile: string;
    if (outputDir) {
      outputFile = path.join(outputDir, path.basename(file));
    } else {
      const extname = path.extname(file);
      outputFile = path.join(
        path.dirname(file),
        path.basename(file, extname) + append + extname
      );
    }
    debug(`${file} -> ${outputFile}`);
    await fs.outputFile(outputFile, result, { encoding: 'utf-8' });
  });

  Promise.all(promises)
    .then(() => done())
    .catch(done);
}
