'use strict';

class Utils {
  static isRelative(file) {
    return file.startsWith('.');
  }
}

module.exports = Utils;
