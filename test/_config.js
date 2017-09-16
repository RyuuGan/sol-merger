'use strict';

let chai = require('chai')
  , fs = require('fs')
  , path = require('path');

global.assert = chai.assert;

global.assertWithFile = (contents, filename) => {

  let fileContents = fs.readFileSync(
    path.join(__dirname, 'compiled', filename), { encoding: 'utf-8' });

  assert.equal(contents.trim(), fileContents.trim(), 'Contents must match with compiled version');

};
