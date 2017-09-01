USAGE
=====

Right now it only can process one solidity source file at time.

Simple usage:

```
npm i --save-dev sol-merger
```

Then add following line to your `package.json`.


```
{
  "scripts": {
    "build-contracts": "sol-merger ./contracts/MyContract.sol ./build/MyContract.sol"
  },
}
```

If no output file specified then output file will be created at the same
directory and appended with `_merged`, i.e. `MyContract_merged.sol`.
