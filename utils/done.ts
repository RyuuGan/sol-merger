import colors from 'cli-color';
import { log } from '../lib/utils/logger';

export function done(err?: any) {
  if (err) {
    console.log(colors.red(err));
    log(err);
    process.exit(1);
  }
  process.exit(0);
}
