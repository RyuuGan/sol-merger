pragma solidity ^0.4.11;
pragma experimental ABIEncoderV2;

import "./imports/ownableWithSPDX.sol";

/*
SPDX-License-Identifier: MIT
*/
contract MyOwned is Ownable {
  string public constant name = "My Owned";

  function MyOwned() {}
}
