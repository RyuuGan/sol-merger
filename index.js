let Merger = require('./lib/merger');

let flatten = (file) => {
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

module.exports = flatten;