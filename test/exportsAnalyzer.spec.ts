import { assert } from 'chai';
import { ExportType } from '../lib/types';
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
        {
          abstract: false,
          type: ExportType.contract,
          name: 'A',
          is: '',
          body: '{ }',
        },
        {
          abstract: false,
          type: ExportType.contract,
          name: 'B',
          is: 'is A ',
          body: '{\n          // some body here...\n        }',
        },
        {
          abstract: false,
          type: ExportType.library,
          name: 'L',
          is: '',
          body: '{\n          // l...\n        }',
        },
        {
          abstract: false,
          type: ExportType.interface,
          name: 'I',
          is: '',
          body: '{\n          // i...\n        }',
        },
        {
          abstract: false,
          body: '{\n          uint weight;\n          bool voted;\n        }',
          is: '',
          name: 'S',
          type: ExportType.struct,
        },
        {
          abstract: false,
          body: '{\n          Created,\n          Locked,\n          Inactive\n        }',
          is: '',
          name: 'State',
          type: ExportType.enum,
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
          type: ExportType.comment,
        },
        {
          abstract: false,
          body: '// Some contract text that is not required here',
          is: '',
          name: 'Comment#52',
          type: ExportType.comment,
        },
      ]);
    });

    it('should return constants array', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`
        uint constant X = 32**22 + 8;

        string constant text = "abc";

        bytes32 constant myHash = keccak256("abc");
      `);
      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, [
        {
          body: ' = 32**22 + 8;',
          name: 'X',
          type: ExportType.constant,
          typeName: 'uint',
        },
        {
          body: ' = "abc";',
          name: 'text',
          type: ExportType.constant,
          typeName: 'string',
        },
        {
          body: ' = keccak256("abc");',
          name: 'myHash',
          type: ExportType.constant,
          typeName: 'bytes32',
        },
      ]);
    });

    it('should return empty array if there are no exports', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`

      `);
      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, []);
    });

    it('should analyze function export', () => {
      const exportsAnalyzer = new ExportsAnalyzer(`
        function sum(uint[] memory _arr) pure returns (uint s) {
            for (uint i = 0; i < _arr.length; i++)
                s += _arr[i];
        }
      `);

      const exports = exportsAnalyzer.analyzeExports();

      assert.deepEqual(exports, [
        {
          name: 'sum',
          type: ExportType.function,
          body: `function sum(uint[] memory _arr) pure returns (uint s) {
            for (uint i = 0; i < _arr.length; i++)
                s += _arr[i];
        }`,
        },
      ]);
    });
  });
});
