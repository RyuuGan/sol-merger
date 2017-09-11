pragma solidity ^0.4.15;

import "zeppelin-solidity/contracts/token/StandardToken.sol";

/**
 * @title ERC20 Token
 * @dev Simpler ERC20 token example.
 */
contract MyToken is StandardToken {
  string public constant name = "My Token";
  string public constant symbol = "MYT";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 1000 * 1000000000000000000;

  function MyToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
