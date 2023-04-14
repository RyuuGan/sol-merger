import { assert } from 'chai';
import path from 'path';
import { merge, Merger } from '../lib/index';
import { plugins } from '../lib/plugins';
import { assertWithFile, testFile } from './utils';

describe('Solidity Merger', () => {
  it('should set default options', function () {
    const merger = new Merger();
    assert.equal(
      merger.delimeter,
      '\n\n',
      'Delimeter must be set to 2 new lines',
    );

    assert.strictEqual(merger.removeComments, false);
  });

  it('should import relative files', async () => {
    await testFile('LocalImports');
  });

  it('should allow basic named imports', async () => {
    await testFile('NamedImports');
  });

  it('should allow basic renamed imports', async () => {
    await testFile('RenamedImports');
  });

  it('should allow basic global renamed imports', async () => {
    await testFile('GlobalRenamedImports');
  });

  it('should not import twice same ', async () => {
    await testFile('MultiImports', { removeComments: true });
  });

  it('should import only selected exports from file', async () => {
    await testFile('DoubleNamedImports', { removeComments: true });
  });

  it('should import only selected exports from file even if it breaks the contract', async () => {
    await testFile('NamedImportOnlySelectedFailContract', {
      removeComments: true,
    });
  });

  it('should import relative files using merge function', async () => {
    const file = path.join(__dirname, '/contracts/LocalImports.sol');
    const result = await merge(file);
    assertWithFile(result, 'LocalImports.sol');
  });

  it('should not find keywords in strings', async () => {
    await testFile('ReservedWordsInString');
  });

  it('should compile extended class with default parameters', async () => {
    await testFile('DefaultParamentersInheritance', { removeComments: true });
  });

  it('should compile contacts with keywords inside strings and comments', async () => {
    await testFile('ContactWithKeywordsInsideString');
  });

  it('should compile file leaving the comments inside exports', async () => {
    await testFile('LocalImportsWithComments');
  });

  it('should compile while having circular dependencies', async () => {
    await testFile('circular/Circular1');
  });

  it('should compile while having struct', async () => {
    await testFile('Struct');
  });

  it('should compile while having enum', async () => {
    await testFile('Enum');
  });

  it('should compile while when importing the struct', async () => {
    await testFile('ImportStruct');
  });

  it('should compile while when importing the struct', async () => {
    await testFile('GlobalComments');
  });

  it('should compile abstract contracts', async () => {
    await testFile('AbstractContract');
  });

  it('should compile use plugins correctly', async () => {
    if (!plugins.SPDXLicenseRemovePlugin) {
      assert.fail('SPDXLicenseRemovePlugin is not defined');
      return;
    }
    await testFile('LocalImportsWithSPDX', {
      exportPlugins: [plugins.SPDXLicenseRemovePlugin],
    });
  });

  it('should compile file without imports and exports (empty content)', async () => {
    const merger = new Merger();
    const file = path.join(__dirname, `/contracts/EmptyFile.sol`);
    const merged = await merger.processFile(file, true);
    assert.equal(merged, '');
  });

  it('should compile file with checked/unckecked arithmetic operations (0.8 support)', async () => {
    await testFile('CheckedUnchecked');
  });

  it('should compile file with errors', async () => {
    await testFile('ContractsWithErrors');
  });

  it('should compile file with events', async () => {
    await testFile('ContractWithEvents');
  });

  it('should compile file with constants at root level (0.8 support)', async () => {
    await testFile('ContractWithConstants');
  });

  it('should compile file with functions at root level (0.8 support)', async () => {
    await testFile('ContractWithTopLevelFunction');
  });

  it('should compile file with user defined types at root level (0.8 support)', async () => {
    await testFile('ContractWithUserDefinitionType');
  });

  it('should compile file with using directive at root level (0.8.13 support)', async () => {
    await testFile('UsingDirectiveContract');
  });

  it('should compile file with block.prevrandao in body (0.8.18 support)', async () => {
    await testFile('PrevrandaoContract');
  });

  it('should compile file with user defined operators (0.8.19 support)', async () => {
    await testFile('UserDefinedOperators');
  });

  it('should compile file with additional roots defined', async () => {
    await testFile('ImportWithAdditionalRoot', {
      additionalRoots: ['./test/contracts/imports'],
    });
  });

  it('should not compile file without additional roots defined', async () => {
    try {
      await testFile('ImportWithAdditionalRoot', {});
      assert.equal(true, false, 'Should never happen');
    } catch (e) {
      assert.isOk(e);
    }
  });
});
