// SPDX-Licens-Identifier: Unilicense
pragma solidity ^0.8.0;

import "./Token.sol";

contract Crowdsale {
    Token public token;

    // Need code
    // Need address
    constructor(Token _token) {
        token = _token;
    }

    function buyTokens(uint256 _amount) public {
        token.transfer(msg.sender, _amount);
    }
}