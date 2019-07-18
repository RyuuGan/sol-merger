import fs from 'fs';
import path from 'path';
import { assert } from 'chai';
import { Merger } from '../lib/merger';

export function assertWithFile (contents: string, filename: string) {
  const fileContents = fs.readFileSync(
    path.join(__dirname, 'compiled', filename),
    { encoding: 'utf-8' }
  );

  assert.equal(
    contents.trim(),
    fileContents.trim(),
    'Contents must match with compiled version'
  );
}

export async function testFile (filename: string) {
  const merger = new Merger({ delimeter: '\n\n' });
  const file = path.join(__dirname, `/contracts/${filename}.sol`);

  const result = await merger.processFile(file, true);
  assertWithFile(result, `${filename}.sol`);
}
