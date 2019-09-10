pragma solidity ^0.5.0;


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

contract Manager is Ownable {
	function mintSupply(address src20, address swmAccount, uint256 swmValue, uint256 src20Value)
        onlyOwner
        external
        returns (bool)
    {
        require(swmAccount != address(0), "SWM account is zero");
        require(swmValue != 0, "SWM value is zero");
        require(src20Value != 0, "SRC20 value is zero");
        require(_registry[src20].owner != address(0), "SRC20 token contract not registered");

        _registry[src20].stake = _registry[src20].stake.add(swmValue);
        _registry[src20]._swm = swmValue;
        _registry[src20]._src = src20Value;

        require(_swmERC20.transferFrom(swmAccount, address(this), swmValue));
        require(ISRC20Managed(src20).mint(_registry[src20].owner, src20Value));

        emit SRC20SupplyMinted(src20, swmAccount, swmValue, src20Value);

        return true;
    }

    function incStake(address src20, address swmAccount, uint256 swmValue)
        external
        onlyTokenOwner(src20)
        returns (bool)
    {
        require(swmAccount != address(0), "SWM account is zero");
        require(swmValue != 0, "SWM value is zero");
        require(_registry[src20].owner != address(0), "SRC20 token contract not registered");
        require(_registry[src20]._swm != 0, "Token not minted");

        _registry[src20].stake = _registry[src20].stake.add(swmValue);

        require(_swmERC20.transferFrom(swmAccount, address(this), swmValue));
        require(ISRC20Managed(src20).mint(_registry[src20].owner, _calcTokens(src20, swmValue)));

        emit SRC20StakeIncreased(src20, swmAccount, swmValue);

        return true;
    }
}