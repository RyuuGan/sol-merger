pragma solidity 0.6.4;
pragma experimental ABIEncoderV2;

import { Bug } from "./imports/Structs.sol";

contract Test {
    function foo() external view returns (Bug memory) {
        return Bug({
            num: 123,
            str: "123"
        });
    }
}