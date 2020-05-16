import { assert } from 'chai';
import { ImportsAnalyzer } from '../lib/importsAnalyzer';

describe('ImportsAnalyzer', () => {
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
