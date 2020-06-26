# [3.1.0](https://github.com/RyuuGan/sol-merger/compare/v3.0.1...v3.1.0) (2020-06-26)


### Features

* **cli:** add support for export plugins in cli ([663bb8a](https://github.com/RyuuGan/sol-merger/commit/663bb8a092d6c78d3907f5e73df6cbce8dc5ffdb))
* **exports:** add plugins to post process exports ([4553fb7](https://github.com/RyuuGan/sol-merger/commit/4553fb7dcc0d2a1f53e90ae79412981a3c804dc6)), closes [#37](https://github.com/RyuuGan/sol-merger/issues/37)
* **plugins:** add support for plugins shortcuts ([68e0301](https://github.com/RyuuGan/sol-merger/commit/68e030175f28185df8df29cb928930d2063ae6bd))



## [3.0.1](https://github.com/RyuuGan/sol-merger/compare/v3.0.0...v3.0.1) (2020-05-17)


### Features

* **abstract:** add support for abstract class ([555ffaf](https://github.com/RyuuGan/sol-merger/commit/555ffaf79f7d4871e5baa5247de67b7334ed2643))
* **comments:** add global comments as exports ([bf0b6e4](https://github.com/RyuuGan/sol-merger/commit/bf0b6e41bd2984e183e41f988710a328eaeda4c3))
* **comments:** add support for comments delimeter ([1db6cda](https://github.com/RyuuGan/sol-merger/commit/1db6cdabc3a0790023fd835d5fd8ed88d09ab4f3))



# [3.0.0](https://github.com/RyuuGan/sol-merger/compare/v2.0.1...v3.0.0) (2020-05-17)


### Features

* **solidity:** add support for new solidity grammar ([0d530c0](https://github.com/RyuuGan/sol-merger/commit/0d530c0ad29f99aba617cc0ec73afb52b4890934)), closes [#32](https://github.com/RyuuGan/sol-merger/issues/32) [rkalis/truffle-plugin-verify#28](https://github.com/rkalis/truffle-plugin-verify/issues/28)


### BREAKING CHANGES

* **solidity:** ImportsAnalyzer analizeImport is now private



## [2.0.1](https://github.com/RyuuGan/sol-merger/compare/v2.0.0...v2.0.1) (2020-02-07)


### Bug Fixes

* **imports:** change analyzer for imports statements ([3b31a00](https://github.com/RyuuGan/sol-merger/commit/3b31a00a468ef5205bca4be52a469d2ae4bf4dff))



# [2.0.0](https://github.com/RyuuGan/sol-merger/compare/v1.2.2...v2.0.0) (2020-02-05)


### Features

* **import-registry:** extract import registry from FileAnalyzer, make removeComments false by default ([65bc4e6](https://github.com/RyuuGan/sol-merger/commit/65bc4e6dad5a63c9e9cba9860deade7c10eb2122))
* **Merger:** add support for circular dependencies ([a7dd280](https://github.com/RyuuGan/sol-merger/commit/a7dd28004c5b7ae8049f00cd60829fff08cb882f)), closes [#27](https://github.com/RyuuGan/sol-merger/issues/27)
* **nodejs:** update minimum version to node 10 ([95179e0](https://github.com/RyuuGan/sol-merger/commit/95179e0f3a3458f5f52b2f58e50ed20265b0a589))


### BREAKING CHANGES

* **import-registry:** removeComments false by default
* **nodejs:** update minimum version of nodejs supported to node 10



## [1.2.2](https://github.com/RyuuGan/sol-merger/compare/v1.2.1...v1.2.2) (2020-01-07)


### Bug Fixes

* **bin:** don't use package.json, so it will not be copied ([d7e7d5e](https://github.com/RyuuGan/sol-merger/commit/d7e7d5e072be93e30c7405af680914aad3aff86b))



## [1.2.1](https://github.com/RyuuGan/sol-merger/compare/v1.2.0...v1.2.1) (2020-01-07)



# [1.2.0](https://github.com/RyuuGan/sol-merger/compare/v1.1.1...v1.2.0) (2020-01-05)


### Bug Fixes

* **FileAnalyzer:** remove global from regex, remove contract if it is analyzed ([685bdc3](https://github.com/RyuuGan/sol-merger/commit/685bdc3a94ef399d77b6e66acc69143bf35b59ce)), closes [#24](https://github.com/RyuuGan/sol-merger/issues/24)


### Features

* **comments:** add comments support to CLI tool ([3f4ad12](https://github.com/RyuuGan/sol-merger/commit/3f4ad12bb662b544d0bd9243107de5fcb07b1c3f))
* **comments:** add support for comments inside exports ([776d053](https://github.com/RyuuGan/sol-merger/commit/776d053ef2e2f9140cb21970b554e4cfe8dac6fa)), closes [#19](https://github.com/RyuuGan/sol-merger/issues/19)
* **FileAnalyzer:** use external library to parse contracts. ([cbee328](https://github.com/RyuuGan/sol-merger/commit/cbee3284ec17402ec49d520396d24d49a2eb7cea)), closes [#24](https://github.com/RyuuGan/sol-merger/issues/24)
* **merge:** add support for optional options in merge function ([06c428a](https://github.com/RyuuGan/sol-merger/commit/06c428a8f3c49bddd6fa56df15527b5de86df1fc))



## [1.1.1](https://github.com/RyuuGan/sol-merger/compare/v1.1.0...v1.1.1) (2019-10-22)


### Bug Fixes

* **FileAnalyzer:** update regex for inheriting from more than two contracts ([b09483b](https://github.com/RyuuGan/sol-merger/commit/b09483b6a99d3ac35ec6e37be6cbd43b100ef6f0))



# [1.1.0](https://github.com/RyuuGan/sol-merger/compare/v1.0.1...v1.1.0) (2019-10-20)


### Bug Fixes

* **command:** update promise all then. ([c570da0](https://github.com/RyuuGan/sol-merger/commit/c570da0cccff1737ad892a2036b22111cea19b48))


### Features

* **fileAnalyzer:** add support to use parameters in `is` clause ([423adb1](https://github.com/RyuuGan/sol-merger/commit/423adb1d4c0f25ad5d62552d24f9fca62a2d2a10)), closes [#21](https://github.com/RyuuGan/sol-merger/issues/21)



## [1.0.1](https://github.com/RyuuGan/sol-merger/compare/v1.0.0...v1.0.1) (2019-09-10)


### Bug Fixes

* **FileAnalyzer:** update regex to find top level keywords ([c85a443](https://github.com/RyuuGan/sol-merger/commit/c85a4438cb977077ab18202d5732af0ea220e808)), closes [rkalis/truffle-plugin-verify#13](https://github.com/rkalis/truffle-plugin-verify/issues/13)



# [1.0.0](https://github.com/RyuuGan/sol-merger/compare/v0.1.3...v1.0.0) (2019-07-18)


### Bug Fixes

* **build:** update zeppelin-solidity to be compiled in latest node ([2cfd913](https://github.com/RyuuGan/sol-merger/commit/2cfd91303be4b8bb2bacf158c598f8e755a8a562))


### Features

* **core:** allow basic named imports ([4e82f8d](https://github.com/RyuuGan/sol-merger/commit/4e82f8dfbbfcbb20f70f78b9b2eebf37c67d0ee7))
* **deps:** remove bluebird from deps, update deps ([9f7b0f5](https://github.com/RyuuGan/sol-merger/commit/9f7b0f542248c68f36e158b9462cfc8641fffd91))
* **FileAnalyzer:** add support for analyzing solidity files ([b9ee308](https://github.com/RyuuGan/sol-merger/commit/b9ee3080b53b49c415ac4ed5759df7a4ab42e93d))
* **GlobalRename:** add support for global renames ([8f43b8e](https://github.com/RyuuGan/sol-merger/commit/8f43b8e3b42511d46fa520f5170a98980778419c))
* **imports:** add basic named imports support ([a42c11e](https://github.com/RyuuGan/sol-merger/commit/a42c11e79611aa5b3558cb6a77a4ac6d39b5ffe9))
* **pragma:** add support for experemental pragma. Ref [#18](https://github.com/RyuuGan/sol-merger/issues/18) ([3229f89](https://github.com/RyuuGan/sol-merger/commit/3229f89d328ea46bf3032ea987743ecb968c8470))
* **ts:** migrated to TypeScript ([9313ac0](https://github.com/RyuuGan/sol-merger/commit/9313ac01085b95a3a23b83e74d7fcd11927ebd99))



## [0.1.3](https://github.com/RyuuGan/sol-merger/compare/5a922838fe73fd8b7ebfa56b266ab202e8ebafbd...v0.1.3) (2018-12-13)


### Bug Fixes

* **nodeModulesRoot:** now node modules resolves only once, but not for every file ([5a92283](https://github.com/RyuuGan/sol-merger/commit/5a922838fe73fd8b7ebfa56b266ab202e8ebafbd))



