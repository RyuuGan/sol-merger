pragma solidity ^0.4.11;


contract GlobalRenamed$Ownable {
  address public owner;

  function Ownable() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }

}

contract MyOwned is GlobalRenamed$Ownable {
  string public constant name = "My Owned";

  function MyOwned() {}
}