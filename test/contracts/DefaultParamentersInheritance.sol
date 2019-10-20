pragma solidity ^0.5.1;

import "openzeppelin-solidity/contracts/token/ERC777/ERC777.sol";

contract ERC777Test is ERC777(
  "Test",
  "TSX",
  new address[](0)
) {
  constructor() public {
    _mint(
      msg.sender,
      0x476Bb28Bc6D0e9De04dB5E19912C392F9a76535d,
      100000000000 * 10 ** uint256(decimals()),
      "",
      ""
    );
  }
}