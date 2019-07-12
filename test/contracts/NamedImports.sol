pragma solidity ^0.4.11;

import {Ownable} from "./imports/ownable.sol";

contract MyOwned is Ownable {
  string public constant name = "My Owned";

  function MyOwned() {}
}
