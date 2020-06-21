pragma solidity ^0.4.11;


contract RenamedOwnable {
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

contract MyOwned is RenamedOwnable {
  string public constant name = "My Owned";

  function MyOwned() {}
}