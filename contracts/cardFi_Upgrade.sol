// SPDX-License-Identifier: GPL

pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract cardFi_Upgrade is Initializable, OwnableUpgradeable {
  using SafeMathUpgradeable for uint256;

  //This is the royalty address
  address payable public royaltyAddress;

  //royalty % for native currency
  uint8 deposit;
  uint8 withdraw;

  // % that goes to royalty's owner when paying with a custom token
  struct Fee {
    uint8 deposit;
    uint8 withdraw;
  }

  //mapping from custom token address to its fee
  mapping(IERC20Upgradeable => Fee) public Royalties;

  // This stores all the added currencies(custom ERC20 tokens)
  IERC20Upgradeable[] public allowedCrypto;

  // Initializes the contract
  function initialize() public initializer {
    //Initializes the owner
    __Ownable_init();
    
  }

  //This points from NFT contract to its ID to the info about the NFT
  mapping(IERC721Upgradeable => mapping(uint256 => Card)) public vaultBox;

  // these are the parameters that a NFT will have
  struct Card {
    //This shows the currency the NFT stores
    IERC20Upgradeable token;
    //This shows the amount of the currency the NFT stores
    uint256 balance;
    //This shows how much time you have to wait before you can redeem your funds
    uint256 lockTime;
    //This shows if the NFT has a currency stored
    bool ERC20Added;
    //This shows if the NFT has a native currency stored
    bool nativeCurrency;
  }

  // Emitted when new royalty is set(for native currency)
  event newRoyalty(uint8 deposit, uint8 withdraw);
  //Emitted when new currency is added
  event currencyAdded(IERC20Upgradeable token_added);
  // Emitted when a currency is assigned to the NFT
  event tokenToNftEvent(
    IERC721Upgradeable nftAddress,
    uint256 tokenId,
    IERC20Upgradeable currency,
    bool ERC20Added,
    uint256 lockTime
  );
  // Emitted when native currency is deposited
  event deposit_nativeEvent(
    IERC721Upgradeable nftAddress,
    uint256 tokenId,
    uint256 depositAmount,
    uint256 balance,
    uint256 lockTime,
    uint256 royalty
  );
  // Emitted when ERC20 custom token is deposited
  event deposit_ERC20Event(
    IERC721Upgradeable nftAddress,
    uint256 tokenId,
    uint256 depositAmount,
    uint256 balance,
    IERC20Upgradeable currency,
    uint256 lockTime,
    uint256 royalty
  );
  // Emitted when the funds are redeemed
  event redeemEvent(
    IERC721Upgradeable nftAddress,
    uint256 tokenId,
    uint256 redeemAmount,
    uint256 royalty,
    uint256 balance,
    IERC20Upgradeable currency
  );

  //This sets the royalty address for this contract
  function setRoyaltyAddress(
    address payable _newRoyaltyAddress
  ) public onlyOwner {
    royaltyAddress = _newRoyaltyAddress;
  }

  // This sets the royalty fee for a native currency.
  function setRoyalty_native(
    uint8 depositFee,
    uint8 withdrawFee
  ) public onlyOwner {
    require(
      depositFee <= 100 && withdrawFee <= 100,
      "royalties must be lower than 100%"
    );
    deposit = depositFee;
    withdraw = withdrawFee;

    emit newRoyalty(deposit, withdraw);
  }

  // This sets the royalty fee for an ERC20 token upgradeable.
  function setRoyalty_ERC20(
    IERC20Upgradeable tokenAddress,
    uint8 depositFee,
    uint8 withdrawFee
  ) public onlyOwner {
    require(
      depositFee <= 100 && withdrawFee <= 100,
      "royalties must be lower than 100%"
    );
    Fee storage _royaltyArray = Royalties[tokenAddress];
    _royaltyArray.deposit = depositFee;
    _royaltyArray.withdraw = withdrawFee;

    emit newRoyalty(_royaltyArray.deposit, _royaltyArray.withdraw);
  }

  //This allows the owner of the contract to view the royalty fee for a native currency
  function seeRoyalty_native()
    public
    view
    onlyOwner
    returns (uint256, uint256)
  {
    return (deposit, withdraw);
  }

  //This allows the owner of the contract to view the royalty fee for a given ERC20 upgradeable token
  function seeRoyalty_ERC20(
    IERC20Upgradeable tokenAddress
  ) public view onlyOwner returns (uint256, uint256) {
    Fee memory _royaltyArray = Royalties[tokenAddress];
    return (_royaltyArray.deposit, _royaltyArray.withdraw);
  }

  //This tells you if the token is added to this contract
  function tokenExist(
    IERC20Upgradeable tokenAddress
  ) public view returns (bool ifExist) {
    for (uint256 i = 0; i < allowedCrypto.length; i++) {
      if (allowedCrypto[i] == tokenAddress) {
        return true;
      }
    }
    return false;
  }

  //This returns all the ERC20 token addresses that this contract can store
  function showAllowedCrypto()
    public
    view
    returns (IERC20Upgradeable[] memory)
  {
    return allowedCrypto;
  }

  //This adds a new ERC20 token to be used as a currency in a contract.
  function addCurrency(IERC20Upgradeable _paytoken) public {
    require(!tokenExist(_paytoken), "THIS CURRENCY IS ALREADY ADDED");
    allowedCrypto.push(_paytoken);
    Fee storage _royaltyArray = Royalties[_paytoken];
    _royaltyArray.deposit = 3;
    _royaltyArray.withdraw = 5;
    emit currencyAdded(_paytoken);
  }

  /**
   * This assigns a currency token to a NFT
   *
   * _contractAddress  - contract address of the NFT.
   * _tokenId - The ID of the NFT.
   * _currency - The address of the currency to be assigned to the NFT.
   */
  function tokenToNft(
    IERC721Upgradeable _contractAddress,
    uint256 _tokenId,
    IERC20Upgradeable _currency
  ) public {
    Card storage _Card = vaultBox[_contractAddress][_tokenId];
    require(!_Card.nativeCurrency, "native currency is already assigned");
    require(!_Card.ERC20Added, "this token already has currency assigned");
    if (!tokenExist(_currency)) {
      addCurrency(_currency);
    }

    _Card.token = _currency;
    _Card.balance = 0;
    _Card.ERC20Added = true;
    _Card.lockTime = 0;
    _Card.nativeCurrency = false;

    emit tokenToNftEvent(
      _contractAddress,
      _tokenId,
      _currency,
      _Card.ERC20Added,
      _Card.lockTime
    );
  }

  /**
   * This allows a user to deposit ERC20 tokens to a certain NFT.
   *
   *  _contractAddress - contract address to add to
   * _tokenId The token ID to add to
   * _currency - Type of ERC20 token
   * _depositAmount - Amount of ERC20 token to deposit
   * newTime - The amount of time to lock the deposit
   */
  function deposit_ERC20(
    IERC721Upgradeable _contractAddress,
    uint256 _tokenId,
    IERC20Upgradeable _currency,
    uint256 _depositAmount,
    uint256 newTime
  ) public {
    require(_depositAmount >= 100, "100 wei is minimum");
    Card storage _Card = vaultBox[_contractAddress][_tokenId];
    require(!_Card.nativeCurrency, "native currency is already assigned");
    if (!_Card.ERC20Added) {
      tokenToNft(_contractAddress, _tokenId, _currency);
    }

    uint256 royalty = (_depositAmount * Royalties[_currency].deposit) / 100;
    uint256 amount = _depositAmount - royalty;
    _Card.balance = _Card.balance + amount;

    bool succeeded = _currency.transferFrom(msg.sender, address(this), amount);
    bool succeededRoyalty = _currency.transferFrom(
      msg.sender,
      royaltyAddress,
      royalty
    );
    require(succeeded, "transfer failed");
    require(succeededRoyalty, "transfer failed");
    //this address is an exception and allowed to set the lock time as well
    address cardFi_NFT = (0x787251d16503DeE83fC05B960c5D1FCd3F22CCED);

    if (
      _contractAddress.ownerOf(_tokenId) == msg.sender &&
      block.timestamp >= _Card.lockTime
    ) {
      _Card.lockTime = block.timestamp + newTime;
    } else if (msg.sender == cardFi_NFT) {
      _Card.lockTime = block.timestamp + newTime;
    }
    emit deposit_ERC20Event(
      _contractAddress,
      _tokenId,
      amount,
      _Card.balance,
      _currency,
      _Card.lockTime,
      royalty
    );
  }

  /**
   * This allows a user to add a native currency (e.g. Ether) to a certain NFT.
   *
   * _contractAddress The contract address to add to
   * _tokenId The token ID to add to
   * _depositAmount The amount of native currency to add
   * newTime The amount of time to lock the deposit
   */
  function deposit_native(
    IERC721Upgradeable _contractAddress,
    uint256 _tokenId,
    uint256 _depositAmount,
    uint256 newTime
  ) public payable {
    require(_depositAmount >= 100, "100 wei is minimum");
    Card storage _Card = vaultBox[_contractAddress][_tokenId];
    require(!_Card.ERC20Added, "this NFT has ERC20 attached");
    if (!_Card.nativeCurrency) {
      _Card.nativeCurrency = true;
      _Card.balance = 0;
      _Card.ERC20Added = false;
      _Card.lockTime = 0;
    }
    uint256 royalty = (_depositAmount * deposit) / 100;
    uint256 amount = _depositAmount - royalty;
    _Card.balance = _Card.balance + amount;
    require(msg.value == _depositAmount);
    royaltyAddress.transfer(royalty);

    if (
      _contractAddress.ownerOf(_tokenId) == msg.sender &&
      block.timestamp >= _Card.lockTime
    ) {
      _Card.lockTime = block.timestamp + newTime;
    }

    emit deposit_nativeEvent(
      _contractAddress,
      _tokenId,
      amount,
      _Card.balance,
      _Card.lockTime,
      royalty
    );
  }

  // This shows the balance of a particular ERC20 token.
  function contractBalance_ERC20(
    IERC20Upgradeable _currency
  ) public view onlyOwner returns (uint256) {
    require(tokenExist(_currency));
    return _currency.balanceOf(address(this));
  }

  // This shows the native balance this contract
  function contractBalance_native() public view onlyOwner returns (uint256) {
    return address(this).balance;
  }

  /**
   * cardInfo()
   *
   * _contractAddress - address of the contract
   * _tokenId - token ID of the card
   * returns - an object containing the card details
   *
   * This function returns the card details associated with a given contract address and token ID.
   * These details include the balance, currency address, ERC20 status, owner(boolean shows if the funds are accessible), time left and native currency status.
   */
  function cardInfo(
    IERC721Upgradeable _contractAddress,
    uint256 _tokenId
  )
    public
    view
    returns (
      uint256 balance,
      IERC20Upgradeable currencyAddress,
      bool ERC20Added,
      bool owner,
      uint256 time,
      bool nativeCurrency
    )
  {
    Card memory _Card = vaultBox[_contractAddress][_tokenId];
    uint256 timeLeft;
    if (
      _contractAddress.ownerOf(_tokenId) == msg.sender &&
      block.timestamp >= _Card.lockTime
    ) {
      owner = true;
      timeLeft = 0;
    } else {
      owner = false;
      if (block.timestamp <= _Card.lockTime) {
        timeLeft = _Card.lockTime - block.timestamp;
      } else {
        timeLeft = 0;
      }
    }

    return (
      _Card.balance,
      _Card.token,
      _Card.ERC20Added,
      owner,
      timeLeft,
      _Card.nativeCurrency
    );
  }

  /**
   * redeem() is a public function that allows the owner of an NFT to redeem funds from a card.
   *
   * _contractAddress - the address of the card.
   * _tokenId - the NFT being used to redeem funds.
   * _redeemAmount - the amount of funds to be redeemed.
   * */

  function redeem(
    IERC721Upgradeable _contractAddress,
    uint256 _tokenId,
    uint256 _redeemAmount
  ) public {
    require(_redeemAmount >= 100, "100 wei is minimum");
    require(
      _contractAddress.ownerOf(_tokenId) == msg.sender,
      "You are not the owner of this NFT"
    );
    Card storage _Card = vaultBox[_contractAddress][_tokenId];
    require(block.timestamp >= _Card.lockTime, "You have to wait");
    require(_redeemAmount <= _Card.balance, "Not enough funds on the card");

    if (_Card.nativeCurrency) {
      require(
        address(this).balance >= _redeemAmount,
        "the Vault doesn't have enough funds to pay you"
      );
    } else {
      require(
        _Card.token.balanceOf(address(this)) >= _redeemAmount,
        "the Vault doesn't have enough funds to pay you"
      );
    }
    _Card.balance = _Card.balance - _redeemAmount;
    IERC20Upgradeable currency = vaultBox[_contractAddress][_tokenId].token;

    uint royalty;
    if (_Card.nativeCurrency) {
      royalty = (_redeemAmount * withdraw) / 100;
    } else {
      royalty = (_redeemAmount * Royalties[currency].withdraw) / 100;
    }

    uint256 amount = _redeemAmount - royalty;
    if (_Card.nativeCurrency) {
      royaltyAddress.transfer(royalty);
      payable(msg.sender).transfer(amount);
    } else {
      bool succeeded = currency.transfer(msg.sender, amount);
      bool succeededRoyalty = currency.transfer(royaltyAddress, royalty);
      require(succeeded, "succeeded transfer failed");
      require(succeededRoyalty, "succeededRoyalty transfer failed");
    }

    emit redeemEvent(
      _contractAddress,
      _tokenId,
      amount,
      royalty,
      _Card.balance,
      currency
    );
  }
}
