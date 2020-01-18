import { assert } from 'chai';
import { FileAnalyzer } from '../lib/fileAnalyzer';

describe('FileAnalyzer', () => {

  describe('analyzeExports', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should analyze exports', () => {
      const exports = fileAnalyzer.analyzeExports(`
        contract A { }

        contract B is A {
          // some body here...
        }

        library L {
          // l...
        }

        interface B {
          // i...
        }
      `);

      assert.deepEqual(exports, [
        { type: 'contract', name: 'A', is: '', body: '{ }' },
        {
          type: 'contract',
          name: 'B',
          is: 'is A ',
          body: '{\n          // some body here...\n        }',
        },
        {
          type: 'library',
          name: 'L',
          is: '',
          body: '{\n          // l...\n        }',
        },
        {
          type: 'interface',
          name: 'B',
          is: '',
          body: '{\n          // i...\n        }',
        },
      ]);
    });

    it('should return empty array if there are no exports', () => {
      const exports = fileAnalyzer.analyzeExports(`
        // Some contracts without exports

        // Some contract text that is not required here
      `);

      assert.deepEqual(exports, []);
    });
  });
});
