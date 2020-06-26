pragma solidity ^0.4.11;
pragma experimental ABIEncoderV2;

/*
SPDX-License-Identifier: Apache-2.0 AND (MIT OR GPL-2.0-only)
*/
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
