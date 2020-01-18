import { assert } from 'chai';
import path from 'path';
import { merge, Merger } from '../lib/index';
import { assertWithFile, testFile } from './utils';

describe('Solidity Merger', () => {
  it('should set default options', function() {
    const merger = new Merger();
    assert.equal(
      merger.delimeter,
      '\n\n',
      'Delimeter must be set to 2 new lines',
    );
    assert.isDefined(
      merger.importRegistry,
      'Must be initialized initialized by default',
    );
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
});
