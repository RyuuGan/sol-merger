pragma solidity ^0.4.11;
pragma experimental ABIEncoderV2;

import "./imports/ownable.sol";

contract MyOwned is Ownable {
  // Super important comment here
  string public constant name = "My Owned";

  /**
   * Super important description here
   */
  function MyOwned() {}
}
