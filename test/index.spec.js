'use strict';

const Merger = require('../lib/merger'),
  path = require('path'),
  { merge } = require('../index');
require('./_config');

describe('Solidity Merger', () => {
  it('should set default options', function () {
    let merger = new Merger();
    assert.equal(
      merger.delimeter,
      '\n\n',
      'Delimeter must be set to 2 new lines'
    );
    assert.isArray(merger.registeredImports, 'Must be initialized as array');
  });

  it('should import relative files', async () => {
    let merger = new Merger({ delimeter: '\n\n' });
    let file = path.join(__dirname, '/contracts/LocalImports.sol');

    let result = await merger.processFile(file, true);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should allow basic named imports', async () => {
    let merger = new Merger({ delimeter: '\n\n' });
    let file = path.join(__dirname, '/contracts/NamedImports.sol');

    let result = await merger.processFile(file, true);
    assertWithFile(result, 'NamedImports.sol');
  });

  it('should import relative files using merge function', async () => {
    let file = path.join(__dirname, '/contracts/LocalImports.sol');
    let result = await merge(file);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should not import twice same ', async () => {
    let merger = new Merger({ delimeter: '\n\n' });
    let file = path.join(__dirname, '/contracts/MultiImports.sol');

    let result = await merger.processFile(file, true);

    assertWithFile(result, 'MultiImports.sol');
  });
});
