import { assert } from 'chai';
import { ImportsAnalyzer } from '../lib/importsAnalyzer';

describe('ImportsAnalyzer', () => {
  describe('analyzeImport', () => {
    const importsAnalyzer = new ImportsAnalyzer('');

    it('should throw an exception if import is incorrect', () => {
      assert.throws(
        () => importsAnalyzer.analyzeImport('import "filename.sol;'),
        Error,
        'Unknown import statement',
      );
    });

    it('should analyze global imports', () => {
      const result = importsAnalyzer.analyzeImport('import "filename.sol";');
      assert.deepEqual(result, {
        file: 'filename.sol',
        importStatement: 'import "filename.sol";',
        globalRenameImport: null,
        namedImports: null,
      });
    });

    it('should analyze global rename', () => {
      let result = importsAnalyzer.analyzeImport(
        'import "filename.sol" as myName;',
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          importStatement: 'import "filename.sol" as myName;',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        'solidity as syntax',
      );

      result = importsAnalyzer.analyzeImport(
        'import * as myName from "filename.sol";',
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          importStatement: 'import * as myName from "filename.sol";',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        '* as syntax',
      );
    });

    it('should analyze named imports', () => {
      const result = importsAnalyzer.analyzeImport(
        'import { A, B as Bingo, C as C1, D } from "filename.sol";',
      );
      assert.deepEqual(result, {
        file: 'filename.sol',
        importStatement:
          'import { A, B as Bingo, C as C1, D } from "filename.sol";',
        globalRenameImport: null,
        namedImports: [
          {
            name: 'A',
            as: null,
          },
          {
            name: 'B',
            as: 'Bingo',
          },
          {
            name: 'C',
            as: 'C1',
          },
          {
            name: 'D',
            as: null,
          },
        ],
      });
    });
  });

  describe('analyzeImports', () => {
    it('should analyze all imports', () => {
      const importsAnalyzer = new ImportsAnalyzer(
        `
        import "filename.sol";
        import "filename1.sol" as myName;
        import * as myName from "filename2.sol";
        import { A, B as Bingo, C as C1, D } from "filename3.sol";

        // Some contract text that is not required here`,
      );
      const imports = importsAnalyzer.analyzeImports();

      assert.deepEqual(imports, [
        {
          file: 'filename.sol',
          importStatement: 'import "filename.sol";',
          globalRenameImport: null,
          namedImports: null,
        },
        {
          file: 'filename1.sol',
          importStatement: 'import "filename1.sol" as myName;',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        {
          file: 'filename2.sol',
          importStatement: 'import * as myName from "filename2.sol";',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        {
          file: 'filename3.sol',
          importStatement:
            'import { A, B as Bingo, C as C1, D } from "filename3.sol";',
          globalRenameImport: null,
          namedImports: [
            {
              name: 'A',
              as: null,
            },
            {
              name: 'B',
              as: 'Bingo',
            },
            {
              name: 'C',
              as: 'C1',
            },
            {
              name: 'D',
              as: null,
            },
          ],
        },
      ]);
    });

    it('should return empty array if there are no imports', () => {
      const importsAnalyzer = new ImportsAnalyzer(
        `
        // Some contracts without imports

        contract A {}

        // Some contract text that is not required here
        `,
      );
      const imports = importsAnalyzer.analyzeImports();

      assert.deepEqual(imports, []);
    });

    it('should not import from comments', () => {
      const importsAnalyzer = new ImportsAnalyzer(
        `
        // Dummy contract only used to emit to end-user they are using wrong solc
        contract solcChecker {
        /* INCOMPATIBLE SOLC: import the following instead: "github.com/oraclize/ethereum-api/oraclizeAPI_0.4.sol" */ function f(bytes calldata x) external;
        }
        `,
      );
      const imports = importsAnalyzer.analyzeImports();

      assert.deepEqual(imports, []);
    });
  });
});
