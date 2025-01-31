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

    event idMarketItemCreated(
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

    // Fnction to create an NFT
    function createNFT(string memory tokenURI, uint256 price) public returns(uint256){
        _tokenIds++;
        uint256 NFTokenId = _tokenIds;

        _mint(msg.sender, NFTokenId);
        _setTokenURI(NFTokenId, tokenURI);
        createMarketItem(NFTokenId, price);

        return NFTokenId;
    }

    // Function to create a marketItem 
    function createMarketItem(uint256 tokenId, uint256 price) private{
        require(price > 0, "Price must be grater then 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);
    }

    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }
}