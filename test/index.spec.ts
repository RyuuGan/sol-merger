import { assert } from 'chai';
import path from 'path';
import { merge, Merger } from '../lib/index';
import { assertWithFile } from './utils';

describe('Solidity Merger', () => {
  it('should set default options', function () {
    const merger = new Merger();
    assert.equal(
      merger.delimeter,
      '\n\n',
      'Delimeter must be set to 2 new lines'
    );
    assert.isArray(merger.registeredImports, 'Must be initialized as array');
  });

  it('should import relative files', async () => {
    const merger = new Merger({ delimeter: '\n\n' });
    const file = path.join(__dirname, '/contracts/LocalImports.sol');

    const result = await merger.processFile(file, true);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should allow basic named imports', async () => {
    const merger = new Merger({ delimeter: '\n\n' });
    const file = path.join(__dirname, '/contracts/NamedImports.sol');

    const result = await merger.processFile(file, true);
    assertWithFile(result, 'NamedImports.sol');
  });

  it('should import relative files using merge function', async () => {
    const file = path.join(__dirname, '/contracts/LocalImports.sol');
    const result = await merge(file);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should not import twice same ', async () => {
    const merger = new Merger({ delimeter: '\n\n' });
    const file = path.join(__dirname, '/contracts/MultiImports.sol');

    const result = await merger.processFile(file, true);

    assertWithFile(result, 'MultiImports.sol');
  });
});
