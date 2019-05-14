const Merger = require('./lib/merger');

const merge = async (file) => {
  const merger = new Merger({ delimeter: '\n\n' });
  return merger.processFile(file, true);
}

module.exports.Merger = Merger;
module.exports.merge = merge;
