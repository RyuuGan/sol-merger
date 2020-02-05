pragma solidity >=0.4.21 <0.6.0;


contract Circular1 {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}

contract Circular2 {
  address public owner;

  constructor() public {
    owner = msg.sender;
  }
}
