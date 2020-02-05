pragma solidity >=0.4.21 <0.6.0;

import "./Circular1.sol";

contract Circular2 {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}
