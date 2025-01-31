// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
contract MetaMint is ERC721URIStorage {

    uint256 listingPrice = 0.0025 ether;

    uint256 private counter;
    uint256 private _tokenIds;
    uint256 private _itemsSold;
    address payable owner;

    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    mapping (uint256 => MarketItem) private idMarketItem;

    event MarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner{
        require(msg.sender == owner, "Only owner of the marketplace can change the listing price");
        _;
    }
    constructor() ERC721("Alena Token", "AT") {
        owner = payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) public payable onlyOwner{
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }
}