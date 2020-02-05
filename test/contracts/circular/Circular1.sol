pragma solidity >=0.4.21 <0.6.0;

import "./Circular2.sol";

contract Circular1 {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}
