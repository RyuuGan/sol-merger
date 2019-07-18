import colors from 'cli-color';
import Debug from 'debug';

const log = Debug('sol-merger:log');

export function done(err?: any) {
  if (err) {
    console.log(colors.red(err));
    log(err);
    process.exit(1);
  }
  process.exit(0);
}
