import { exec } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { FileAnalyzerResult } from '../fileAnalyzer';
import { ImportsAnalyzerResult } from '../importsAnalyzer';
import { Utils } from '../utils';
import { error } from '../utils/logger';
import { ContractResolver } from './resolver';

export class FsContractResolver implements ContractResolver {
  private nodeModulesRoot = '';

  async init() {
    this.nodeModulesRoot = await this.getNodeModulesPath(__dirname);
  }

  async getContent(fullPath: string): Promise<string> {
    await fs.stat(fullPath);
    return fs.readFile(fullPath, { encoding: 'utf-8' });
  }

  getPath(
    analyzedFile: FileAnalyzerResult,
    analyzedImport: ImportsAnalyzerResult,
  ): string {
    let filePath = Utils.isRelative(analyzedImport.file)
      ? path.join(path.dirname(analyzedFile.filename), analyzedImport.file)
      : path.join(this.nodeModulesRoot, analyzedImport.file);
    filePath = path.normalize(filePath);

    return filePath;
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
