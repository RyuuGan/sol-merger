// Taken from https://raw.githubusercontent.com/ethereum/solidity/fd9ac9abed2049a4b8134d39e178275c8aad75b6/test/libsolidity/syntaxTests/types/magic_block_paris.sol

contract C {
    function f() public view returns (uint) {
        return block.prevrandao;
    }
    function g() public view returns (uint ret) {
        assembly {
            ret := prevrandao()
        }
    }
}
// ====
// EVMVersion: >=paris
// ----
