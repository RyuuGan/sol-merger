const Merger = require('./lib/merger');

const merge = async (file) => {
  const merger = new Merger();
  return merger.processFile(file, true);
}

module.exports.Merger = Merger;
module.exports.merge = merge;
