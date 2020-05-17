import { assert } from 'chai';
import { ExportsAnalyzer } from '../lib/exportsAnalyzer';

describe('ExportsAnalyzer', () => {
  describe('analyzeExports', () => {
    it('should analyze exports', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`
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

        struct S {
          uint weight;
          bool voted;
        }

        enum State {
          Created,
          Locked,
          Inactive
        }
      `);
      const exports = exportsAnalyzer.analyzeExports();

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
        {
          body: '{\n          uint weight;\n          bool voted;\n        }',
          is: '',
          name: 'S',
          type: 'struct',
        },
        {
          body:
            '{\n          Created,\n          Locked,\n          Inactive\n        }',
          is: '',
          name: 'State',
          type: 'enum',
        },
      ]);
    });

    it('should return empty array if there are no exports', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`
        // Some contracts without exports

        // Some contract text that is not required here
      `);
      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, []);
    });
  });
});
