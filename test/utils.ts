import fs from 'fs';
import path from 'path';
import { assert } from 'chai';

export function assertWithFile(contents: string, filename: string) {
  let fileContents = fs.readFileSync(
    path.join(__dirname, 'compiled', filename),
    { encoding: 'utf-8' }
  );

  assert.equal(
    contents.trim(),
    fileContents.trim(),
    'Contents must match with compiled version'
  );
}
