### Build status
[![Build status](https://travis-ci.org/RyuuGan/sol-merger.svg?branch=master)](https://travis-ci.org/RyuuGan/sol-merger)

### USAGE

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
    "build-contracts": "sol-merger './contracts/*.sol' ./build"
  },
}
```

Note that contracts glob should be surrounded with `"`

If no output file specified then output file will be created at the same
directory and appended with `_merged` (by default), i.e. `MyContract_merged.sol`. You can also
change this behaviour by specifying `--append` option:

```
sol-merger --append _me "./contracts/*.sol"
sol-merger -a _me "./contracts/*.sol"
```

You can also get help via `--help` command

```
sol-merger -h
sol-merger --help
```

More info about `glob` available at [node-glob repository](https://github.com/isaacs/node-glob)
