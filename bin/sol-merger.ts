#!/usr/bin/env node

import colors from 'picocolors';
import program from 'commander';
import Debug from 'debug';
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';
import { Merger } from '../lib/merger';
import { ExportPluginCtor } from '../lib/types';
import { Utils } from '../lib/utils';
import { done } from '../utils/done';
import { PluginsLoader } from './pluginsLoader';

const debug = Debug('sol-merger:debug');

let inputGlob = '';
let outputDir = '';
let append = '';

program
  .option('-a, --append [append]', '', /^([a-zA-Z_]+)$/)
  .option('-c, --remove-comments', `Remove comment from exports`, false)
  .option(
    '-p, --export-plugin [pathToPlugin]',
    `Add post processor for exports`,
    collectArrayOptions,
    [],
  )
  .option(
    '-r, --additional-root [pathToRoot]',
    `Add additional root to search contracts in`,
    collectArrayOptions,
    [],
  )
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
debug('Remove comments?', program.removeComments);
debug('Export plugins', program.exportPlugin);
debug('Additional roots', program.additionalRoot);

glob(
  inputGlob,
  {
    cwd: process.cwd(),
    absolute: true,
  },
  execute,
);

async function execute(err: Error, files: string[]) {
  if (err) {
    return done(err);
  }

  debug(files);

  if (files.length === 0) {
    console.log(colors.yellow('No files found for merge'));
  }

  const exportPlugins = await getExportPlugins(program.exportPlugin);

  const promises = files.map(async (file) => {
    const merger = new Merger({
      delimeter: '\n\n',
      removeComments: program.removeComments,
      exportPlugins,
      additionalRoots: program.additionalRoot,
    });
    let result: string;
    result = await merger.processFile(file, true);
    let outputFile: string;
    if (outputDir) {
      outputFile = path.join(outputDir, path.basename(file));
    } else {
      const extname = path.extname(file);
      outputFile = path.join(
        path.dirname(file),
        path.basename(file, extname) + append + extname,
      );
    }
    debug(`${file} -> ${outputFile}`);
    await fs.outputFile(outputFile, result, { encoding: 'utf-8' });
  });

  Promise.all(promises)
    .then(() => done())
    .catch(done);
}

function collectArrayOptions(value: string, previousValue: string[]) {
  return previousValue.concat([value]);
}

async function getExportPlugins(
  plugins: string[],
): Promise<ExportPluginCtor[]> {
  const npmRoot = await Utils.getNodeModulesPath(process.cwd());
  const loader = new PluginsLoader(plugins, npmRoot);
  return loader.getPlugins();
}
