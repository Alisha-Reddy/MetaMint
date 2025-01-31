// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";
contract MetaMint is ERC721URIStorage {

    uint256 listingPrice = 0.0025 ether;

    uint256 private counter;
    uint256 private tokenIdsCounter;
    uint256 private itemsSoldCounter;
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
        tokenIdsCounter++;
        uint256 NFTokenId = tokenIdsCounter;

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

    // Function to sell or resell your token
    function sellNFTToken(uint256 tokenId, uint256 price) public payable{
        require(idMarketItem[tokenId].owner == msg.sender, "Only the owner can sell the NFT");
        require(msg.value == listingPrice, "Price must be equal to listing price");

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        itemsSoldCounter--;
        _transfer(msg.sender, address(this), tokenId);
    }

    // Function to create a market sale
    function createSale(uint256 tokenId) public payable{
        uint256 price = idMarketItem[tokenId].price;

        require(msg.value == price, "Please submit the given price");

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        itemsSoldCounter++;

        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    // Getting unsold NFT data
    function getUnsoldNFT() public view returns(MarketItem[] memory){
        uint256 unsoldItemCount = tokenIdsCounter - itemsSoldCounter;
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for(uint256 i =1; i<= tokenIdsCounter; i++){
            if(idMarketItem[i].owner == address(this)){
                items[currentIndex] = idMarketItem[i];
                currentIndex++;
            }
        }
        return items;
    }

    // Function to fetch the particular user NFT
    function getMyNFT() public view returns(MarketItem[] memory){
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=1; i<=tokenIdsCounter; i++){
            if(idMarketItem[i].owner == msg.sender){
                itemCount++;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i=1; i<=tokenIdsCounter; i++){
            if(idMarketItem[i].owner == msg.sender){
                items[currentIndex++] = idMarketItem[i];
            }
        }
        return items;
    }

    // Fetching the items that the user is selling
    function getNFTListed() public view returns(MarketItem[] memory){
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i=1; i<= tokenIdsCounter; i++){
            if(idMarketItem[i].seller == msg.sender){
                itemCount++;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i=1; i<= tokenIdsCounter; i++){
            if(idMarketItem[i].seller == msg.sender){
                items[currentIndex++] = idMarketItem[i];
            }
        }
        return items;
    }

    function getListingPrice() public view returns (uint256){
        return listingPrice;
    }
}