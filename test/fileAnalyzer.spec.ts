import { assert } from 'chai';
import { FileAnalyzer } from '../lib/fileAnalyzer';

describe('FileAnalyzer', () => {
  describe('analyzeImport', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should throw an exception if import is incorrect', () => {
      assert.throws(
        () => fileAnalyzer.analyzeImport('import "filename.sol;'),
        Error,
        'Unknown import statement',
      );
    });

    it('should analyze global imports', () => {
      const result = fileAnalyzer.analyzeImport('import "filename.sol";');
      assert.deepEqual(result, {
        file: 'filename.sol',
        globalRenameImport: null,
        namedImports: null,
      });
    });

    it('should analyze global rename', () => {
      let result = fileAnalyzer.analyzeImport(
        'import "filename.sol" as myName;',
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        'solidity as syntax',
      );

      result = fileAnalyzer.analyzeImport(
        'import * as myName from "filename.sol";',
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        '* as syntax',
      );
    });

    it('should analyze named imports', () => {
      const result = fileAnalyzer.analyzeImport(
        'import { A, B as Bingo, C as C1, D } from "filename.sol";',
      );
      assert.deepEqual(result, {
        file: 'filename.sol',
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
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should analyze all imports', () => {
      const imports = fileAnalyzer.analyzeImports(`
        import "filename.sol";
        import "filename1.sol" as myName;
        import * as myName from "filename2.sol";
        import { A, B as Bingo, C as C1, D } from "filename3.sol";

        Some contract text that is not required here
      `);

      assert.deepEqual(imports, [
        {
          file: 'filename.sol',
          globalRenameImport: null,
          namedImports: null,
        },
        {
          file: 'filename1.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        {
          file: 'filename2.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        {
          file: 'filename3.sol',
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
      const imports = fileAnalyzer.analyzeImports(`
        Some contracts without imports

        Some contract text that is not required here
      `);

      assert.deepEqual(imports, []);
    });
  });

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
        Some contracts without exports

        Some contract text that is not required here
      `);

      assert.deepEqual(exports, []);
    });
  });

  describe('trySkipComment', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should return the same idx if it is not at comment', () => {
      const idx = fileAnalyzer.trySkipComment('Some // string', 2);

      assert.equal(idx, 2);
    });

    it('skip single line comment till the end of contents', () => {
      const str = '1 //Some string';

      const idx = fileAnalyzer.trySkipComment(str, 2);

      assert.equal(idx, str.length);
    });

    it('skip single line comment till the end of the line', () => {
      const str = '1 //Some string\nSome other content';
      const strWin = '1 //Some string\r\nSome other content';
      const idx = fileAnalyzer.trySkipComment(str, 2);
      const idxWin = fileAnalyzer.trySkipComment(strWin, 2);
      assert.equal(idx, str.indexOf('\n') + 1, 'Linux like file');
      assert.equal(idxWin, strWin.indexOf('\n') + 1, 'Windows like file');

      assert.equal(str.charAt(idx), 'S');
      assert.equal(strWin.charAt(idxWin), 'S');
    });

    it('skip multiline comment till the end of the string', () => {
      const str = '1 /* Some comment\nSome more contents';

      const idx = fileAnalyzer.trySkipComment(str, 2);

      assert.equal(idx, str.length);
    });

    it('skip multiline comment till the end if it is single line', () => {
      const str = '1 /* Some comment */Some more contents';

      const idx = fileAnalyzer.trySkipComment(str, 2);

      assert.equal(idx, str.indexOf('*/') + 2);
    });

    it('skip multiline comment till the end if it is multi line', () => {
      const str = '1 /* Some \n\r\n\ncomment */Some more contents';

      const idx = fileAnalyzer.trySkipComment(str, 2);

      assert.equal(idx, str.indexOf('*/') + 2);
    });
  });
});
