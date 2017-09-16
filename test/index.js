'use strict';

const Merger = require('../lib/merger')
  , path = require('path');
require('./_config');

describe('Solidity Merger', () => {

  it('should set default options', function () {
    let merger = new Merger();
    assert.equal(merger.delimeter, '\n\n', 'Delimeter must be set to 2 new lines');
    assert.isArray(merger.processedFiles, 'Must be initialized as array');
  });

  it('should import relative files', async () => {
    let merger = new Merger({ delimeter: '\n\n' });
    let file = path.join(__dirname, '/contracts/LocalImports.sol');

    let result = await merger.processFile(file, true);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should not import twice same ', async () => {
    let merger = new Merger({ delimeter: '\n\n' });
    let file = path.join(__dirname, '/contracts/MultiImports.sol');

    let result = await merger.processFile(file, true);

    assertWithFile(result, 'MultiImports.sol');

  });

});
