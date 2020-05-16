pragma solidity 0.6.4;
pragma experimental ABIEncoderV2;


struct Bug {
    uint256 num;
    string str;
}

contract Test {
    function foo() external view returns (Bug memory) {
        return Bug({
            num: 123,
            str: "123"
        });
    }
}