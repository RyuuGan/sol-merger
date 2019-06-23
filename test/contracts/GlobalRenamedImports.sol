pragma solidity ^0.4.11;

import * as GlobalRenamed from "./imports/ownable.sol";

contract MyOwned is GlobalRenamed.Ownable {
  string public constant name = "My Owned";

  function MyOwned() {}
}
