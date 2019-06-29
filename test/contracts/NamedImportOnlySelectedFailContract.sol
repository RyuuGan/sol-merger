pragma solidity ^0.4.11;

import { BasicToken } from "./imports/SafeMathBasicTokenERC20Basic.sol";

contract MyAwesomeToken is BasicToken {
  using SafeMath for uint256;

  function totalSupply() public view returns (uint256) {
    return totalSupply_;
  }

}