let Merger = require('./lib/merger');

const merge = async (file) => {
  const merger = new Merger({ delimeter: '\n\n' });
  return merger.processFile(file, true);
}
    return new Promise(async (resolve, reject) => {
        let merger = new Merger({ delimeter: '\n\n' });
        let result;
        try {
            result = await merger.processFile(file, true);
        } catch (e) {
            reject(e);
        }
        resolve(result);
    });
};

module.exports = merge;
