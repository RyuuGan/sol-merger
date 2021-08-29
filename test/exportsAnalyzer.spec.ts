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

        interface I {
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
        { abstract: false, type: 'contract', name: 'A', is: '', body: '{ }' },
        {
          abstract: false,
          type: 'contract',
          name: 'B',
          is: 'is A ',
          body: '{\n          // some body here...\n        }',
        },
        {
          abstract: false,
          type: 'library',
          name: 'L',
          is: '',
          body: '{\n          // l...\n        }',
        },
        {
          abstract: false,
          type: 'interface',
          name: 'I',
          is: '',
          body: '{\n          // i...\n        }',
        },
        {
          abstract: false,
          body: '{\n          uint weight;\n          bool voted;\n        }',
          is: '',
          name: 'S',
          type: 'struct',
        },
        {
          abstract: false,
          body:
            '{\n          Created,\n          Locked,\n          Inactive\n        }',
          is: '',
          name: 'State',
          type: 'enum',
        },
      ]);
    });

    it('should return comments array', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`
        // Some contracts without exports

        // Some contract text that is not required here
      `);
      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, [
        {
          abstract: false,
          body: '// Some contracts without exports',
          is: '',
          name: 'Comment#9',
          type: 'comment',
        },
        {
          abstract: false,
          body: '// Some contract text that is not required here',
          is: '',
          name: 'Comment#52',
          type: 'comment',
        },
      ]);
    });

    it('should return empty array if there are no exports', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`

      `);
      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, []);
    });
  });
});
