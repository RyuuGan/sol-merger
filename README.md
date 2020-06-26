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

```sh
npm i --save-dev sol-merger
```

Then add following line to your `package.json`.

```json
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

```sh
sol-merger --append _me "./contracts/*.sol"
sol-merger -a _me "./contracts/*.sol"
```
You may need to use `npm run` to invoke the program standalone, as in `npm run sol-merger`.

You can also get help via `--help` command

```sh
sol-merger -h
sol-merger --help
```

More info about `glob` available at [node-glob repository](https://github.com/isaacs/node-glob)

See tests for more examples.

# Post processing support

It is possible right now to write your own plugins to process exports.
Currently state is not used in plugins. To see available plugins
[take a look plugins page](https://github.com/RyuuGan/sol-merger/tree/develop/lib/plugins).

All default plugins are available via shortcut syntax using filename:

```
sol-merger --export-plugin SPDXLicenseRemovePlugin "test/contracts/*.sol" compiled
```

It is also possible to use external plugins via relative path to plugin
or path relative to `node_modules`:

```sh
sol-merger --export-plugin ./dist/lib/plugins/SPDXLicenseRemovePlugin.js "test/contracts/*.sol" compiled

sol-merger --export-plugin sol-merger/lib/plugins/SPDXLicenseRemovePlugin.js "test/contracts/*.sol" compiled
```

Note that file extension is required for plugin to be loaded.

# Debuging

It is possible to setup environment variable to see what is happening under the hood
when contracts are being compiled:

```sh
export DEBUG="sol-merger*"
```

# Plugin for VSCode

I created a plugin for `VSCode` so you can use it instead of `sol-merger`: [Solidity Contracts Merger](https://marketplace.visualstudio.com/items?itemName=RyuuGan.sol-merger-vscode).

Hope you will like it.
