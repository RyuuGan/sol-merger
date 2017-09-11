'use strict';

let log = require('debug')('sol-merger:log');

module.exports = function done(err) {
  if (err) {
    log(err);
    process.exit(1);
  }
  process.exit(0);
};
