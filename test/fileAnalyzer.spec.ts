import { assert } from 'chai';
import { FileAnalyzer } from '../lib/fileAnalyzer';

describe('FileAnalyzer', () => {
  describe('analyzeImport', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should throw an exception if import is incorrect', () => {
      assert.throws(
        () => fileAnalyzer.analyzeImport('import "filename.sol;'),
        Error,
        'Unknown import statement'
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
        'import "filename.sol" as myName;'
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        'solidity as syntax'
      );

      result = fileAnalyzer.analyzeImport(
        'import * as myName from "filename.sol";'
      );
      assert.deepEqual(
        result,
        {
          file: 'filename.sol',
          globalRenameImport: 'myName',
          namedImports: null,
        },
        '* as syntax'
      );
    });

    it('should analyze named imports', () => {
      const result = fileAnalyzer.analyzeImport(
        'import { A, B as Bingo, C as C1, D } from "filename.sol";'
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

  describe('findBodyEnd', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');
    it('should find body end', () => {
      const contents = '{{{}{}}{}} {{{}{{}}}}';
      let body = fileAnalyzer.findBodyEnd(contents, 0);
      assert.equal(body, '{{{}{}}{}}');

      body = fileAnalyzer.findBodyEnd(contents, 2);
      assert.equal(body, '{}');

      body = fileAnalyzer.findBodyEnd(contents, 11);
      assert.equal(body, '{{{}{{}}}}');
    });

    it('should not count brackets in string literals', () => {
      let body = fileAnalyzer.findBodyEnd('{ "}" }', 0);
      assert.equal(body, '{ "}" }', 'closing bracket double quoted');

      body = fileAnalyzer.findBodyEnd('{ "{" }', 0);
      assert.equal(body, '{ "{" }', 'opening bracket double quoted');

      body = fileAnalyzer.findBodyEnd("{ '}' }", 0);
      assert.equal(body, "{ '}' }", 'closing bracket single quoted');

      body = fileAnalyzer.findBodyEnd("{ '{' }", 0);
      assert.equal(body, "{ '{' }", 'opening bracket single quoted');

      body = fileAnalyzer.findBodyEnd(`{ '"{"' }`, 0);
      assert.equal(
        body,
        `{ '"{"' }`,
        'opening bracket single quoted with double quote inside'
      );
    });

    it('should correctly process escaped literals', () => {
      const body = fileAnalyzer.findBodyEnd('{ "\\"{\\"" }', 0);
      assert.equal(body, '{ "\\"{\\"" }');
    });
  });

  describe('analyzeExports', () => {
    const fileAnalyzer = new FileAnalyzer('./contracts/LocalImports.sol');

    it('should analyze exports', () => {
      const exports = fileAnalyzer.analyzeExports(`
        contract A { }

        contract B is A {
          some body here...
        }

        library L {
          l...
        }

        interface B {
          i...
        }
      `);

      assert.deepEqual(exports, [
        { type: 'contract', name: 'A', is: '', body: '{ }' },
        {
          type: 'contract',
          name: 'B',
          is: 'is A ',
          body: '{\n          some body here...\n        }',
        },
        {
          type: 'library',
          name: 'L',
          is: '',
          body: '{\n          l...\n        }',
        },
        {
          type: 'interface',
          name: 'B',
          is: '',
          body: '{\n          i...\n        }',
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
});
