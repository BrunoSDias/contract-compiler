// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract ERC721Tradable is Ownable, ERC721URIStorage {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;

  constructor() ERC721("MPTradable", "Trl") {}
  
  function mint(address _to, string memory tokenURI) external onlyOwner returns(uint256) {
    _tokenIdTracker.increment();

    uint256 currentTokenId = _tokenIdTracker.current();
    super._mint(_to, currentTokenId);
    _setTokenURI(currentTokenId, tokenURI);

    return currentTokenId;
  }

  function contractURI() public pure returns (string memory) {
    return "https://jikf07b4s6bv.usemoralis.com/metadata.json";
  }

}
