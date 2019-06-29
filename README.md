### Build status
[![Build status](https://travis-ci.org/RyuuGan/sol-merger.svg?branch=master)](https://travis-ci.org/RyuuGan/sol-merger)

### Quick Usage

```javascript
const { merge } = require('sol-merger');

// Get the merged code as a string
const mergedCode = await merge("./contracts/MyContract.sol");
// Print it out or write it to a file etc.
console.log(mergedCode);
```

### CLI Usage

Right now it only works with solidity files that are in `node_modules`
or relative to your solidity file.

Simple usage:

```
npm i --save-dev sol-merger
```

Then add following line to your `package.json`.

```
{
  "scripts": {
    "build-contracts": "sol-merger \"./contracts/*.sol\" ./build"
  },
}
```

This will allow you to use `npm run build-contracts` in your project directory.

Note that contracts glob should be surrounded with `"`

If no output file specified then output file will be created at the same
directory and appended with `_merged` (by default), i.e. `MyContract_merged.sol`. You can also
change this behaviour by specifying `--append` option:

```
sol-merger --append _me "./contracts/*.sol"
sol-merger -a _me "./contracts/*.sol"
```
You may need to use `npm run` to invoke the program standalone, as in `npm run sol-merger`.

You can also get help via `--help` command

```
sol-merger -h
sol-merger --help
```

More info about `glob` available at [node-glob repository](https://github.com/isaacs/node-glob)

# Known Issues

Currently if you use named imports from the file that have multiple exports
(contacts, libraries, interfaces) it only imports the ones that are requested
without analyzing the dependencies inside file. That means you should NOT use
named imports for multiple exports OR import all the required exports.

See tests for more examples.

# Plugin for VSCode

I created a plugin for `VSCode` so you can use it instead of `sol-merger`: [Solidity Contracts Merger](https://marketplace.visualstudio.com/items?itemName=RyuuGan.sol-merger-vscode).

Hope you will like it.
