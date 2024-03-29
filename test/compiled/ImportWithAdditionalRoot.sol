pragma solidity ^0.4.11;
pragma experimental ABIEncoderV2;


contract Ownable {
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

contract MyOwned is Ownable {
  // Super important comment here
  string public constant name = "My Owned";

  /**
   * Super important description here
   */
  function MyOwned() {}
}
