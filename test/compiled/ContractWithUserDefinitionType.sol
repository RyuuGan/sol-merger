pragma solidity ^0.8.8;


type Decimal18 is uint256;

interface MinimalERC20 {
    function transfer(address to, Decimal18 value) external;
}
