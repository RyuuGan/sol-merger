import { exec } from 'child_process';
import Debug from 'debug';
import path from 'path';

const error = Debug('sol-merger:error');

export class Utils {
  static isRelative(file: string) {
    return file.startsWith('.');
  }

  static async getNodeModulesPath(file: string): Promise<string> {
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
