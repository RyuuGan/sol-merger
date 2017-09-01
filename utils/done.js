'use strict';

module.exports = function done(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  process.exit(0);
};
