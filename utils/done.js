'use strict';

let colors = require('cli-color')
  , log = require('debug')('sol-merger:log');

module.exports = function done(err) {
  if (err) {
    // eslint-disable-next-line
    console.log(colors.red(err));
    log(err);
    process.exit(1);
  }
  process.exit(0);
};
