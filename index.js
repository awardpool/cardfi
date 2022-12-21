let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
let chainId;
let signer;
let contract;
let contractAddress;

document.addEventListener("DOMContentLoaded", async () => {
  //await provider.setNetwork("Mumbai");

  await provider.send("eth_requestAccounts", []);

  signer = provider.getSigner();
  console.log(signer);
  let network = await signer.provider.getNetwork();
  chainId = network.chainId;
  console.log(chainId);
  if (chainId != 80001) {
    swal("Please switch to Mumbai testnet");
  }
  contractAddress = "0x4736fbdf9b04aa78840fBD051Dd22E1CB89254F5";

  contract = new ethers.Contract(contractAddress, abi, signer);

  console.log("contractAddress", contractAddress);
});

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "token_added",
        type: "address",
      },
    ],
    name: "currencyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721Upgradeable",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "deposit_ERC20Event",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721Upgradeable",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royalty",
        type: "uint256",
      },
    ],
    name: "deposit_nativeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "deposit",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "withdraw",
        type: "uint8",
      },
    ],
    name: "newRoyalty",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721Upgradeable",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "royalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
    ],
    name: "redeemEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC721Upgradeable",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20Upgradeable",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "ERC20Added",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
    ],
    name: "tokenToNftEvent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    name: "Royalties",
    outputs: [
      {
        internalType: "uint8",
        name: "deposit",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "withdraw",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "_paytoken",
        type: "address",
      },
    ],
    name: "addCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allowedCrypto",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "cardInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "contract IERC20Upgradeable",
        name: "currencyAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "ERC20Added",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "owner",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "nativeCurrency",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "_currency",
        type: "address",
      },
    ],
    name: "contractBalance_ERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance_native",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "contract IERC20Upgradeable",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newTime",
        type: "uint256",
      },
    ],
    name: "deposit_ERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newTime",
        type: "uint256",
      },
    ],
    name: "deposit_native",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_redeemAmount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "seeRoyalty_ERC20",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seeRoyalty_native",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_newRoyaltyAddress",
        type: "address",
      },
    ],
    name: "setRoyaltyAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "depositFee",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "withdrawFee",
        type: "uint8",
      },
    ],
    name: "setRoyalty_ERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "depositFee",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "withdrawFee",
        type: "uint8",
      },
    ],
    name: "setRoyalty_native",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "showAllowedCrypto",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "tokenExist",
    outputs: [
      {
        internalType: "bool",
        name: "ifExist",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "_contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "contract IERC20Upgradeable",
        name: "_currency",
        type: "address",
      },
    ],
    name: "tokenToNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC721Upgradeable",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vaultBox",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "ERC20Added",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "nativeCurrency",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

async function setRoyaltyAddress_cardFi() {
  var new_Royalty_Address = document.getElementById(
    "cardfi_royalty_address"
  ).value;
  console.log(new_Royalty_Address);
  let tx = await contract.setRoyaltyAddress(new_Royalty_Address);
  console.log(tx);
  swal("New address is set");
}

//showAllowedCryptoJS
async function showAllowedCryptoJS() {
  let tx = await contract.showAllowedCrypto();
  console.log(JSON.stringify(tx));
  swal(JSON.stringify(tx));
}

// addCurrency
async function addCurrencyJS() {
  currencyVal = $("#addCurrencyVal").val();
  let tx = await contract.addCurrency(currencyVal);
  tx = await tx.wait();

  let tx_event = {
    token_added: tx.events[0].args.token_added,
  };

  swal(JSON.stringify(tx_event));
  console.table(tx_event);
}

// seeRoyalty_ERC20
async function seeRoyaltyJS() {
  var ERC20 = document.getElementById("seeRoyaltyVal").value;
  const tx = await contract.seeRoyalty_ERC20(ERC20);

  let bubble_tx = {
    deposit: tx[0].toNumber(),
    withdraw: tx[1].toNumber(),
  };
  console.table(bubble_tx);
  swal(JSON.stringify(bubble_tx, null, 4));
}

// setRoyalty_ERC20
async function setRoyaltyJS() {
  var ERC20 = document.getElementById("setRoyalty_ERC20").value;
  var depos = document.getElementById("setRoyalty_depos").value;
  var withd = document.getElementById("setRoyalty_withd").value;

  let tx = await contract.setRoyalty_ERC20(ERC20, depos, withd);

  console.table(tx);
  swal("Success! Here is your hash", tx.hash);
}

// setRoyalty_native
async function setRoyaltyJS_native() {
  var depos = document.getElementById("setRoyalty_native_depos").value;
  var withd = document.getElementById("setRoyalty__native_withd").value;

  let tx = await contract.setRoyalty_native(depos, withd);

  console.table(tx);
  swal("Success! Here is your hash", tx.hash);
}
// seeRoyalty_native
async function seeRoyaltyJS_native() {
  const tx = await contract.seeRoyalty_native();

  let bubble_tx = {
    deposit: tx[0].toNumber(),
    withdraw: tx[1].toNumber(),
  };
  console.table(bubble_tx);
  swal(JSON.stringify(bubble_tx, null, 4));
}

// tokenExist
async function tokenExistJS() {
  var token = document.getElementById("token_exist").value;
  const tx = await contract.tokenExist(token);

  console.table(tx);
  swal(JSON.stringify(tx, null, 4));
}

//tokenToNft;
async function tokenToNftJS() {
  var contractTo = document.getElementById("toNFT_address").value;
  var cardTo = document.getElementById("toNFT_id").value;
  var tokenTo = document.getElementById("toNFT_currency").value;

  let tx = await contract.tokenToNft(contractTo, cardTo, tokenTo);
  await tx.wait();

  swal("Success! Here is your hash", tx.hash);
  console.log(tx);
}

// cardInfo
async function cardInfoJS() {
  var contractADR = document.getElementById("cardfi_contractaddress").value;
  var tokenid = document.getElementById("cardfi_tokenid").value;

  const cardInfovar = await contract.cardInfo(contractADR, tokenid);
  console.log("stas", cardInfovar);
  x = cardInfovar[2];
  if (x) {
    let txObject = {
      balance: cardInfovar[0].toString(),
      ERC20Address: cardInfovar[1],
      ERC20Added: cardInfovar[2],
      Owner: cardInfovar[3],
      timeLeft: Number(cardInfovar[4]),
      nativeCurrency: cardInfovar[5],
    };
    swal(JSON.stringify(txObject, null, 4));

    console.table(txObject);
  }
}

// sendTokens
async function deposit_ERC20() {
  let contractADR = $("#ERC721").val();
  let tokenid = $("#idOfCard").val();
  let currency = $("#currencyOF").val();
  let amount = $("#amountOF").val();
  let time = $("#LOCK_TIME").val();

  const ERC20_ABI = [
    "function approve(address pender, uint256 amount) returns (bool)",
  ];

  const erc20Instance = new ethers.Contract(currency, ERC20_ABI, signer);

  await erc20Instance.approve(contractAddress, amount);

  let tx = await contract.deposit_ERC20(
    contractADR,
    tokenid,
    currency,
    amount,
    time
  );
  tx = await tx.wait();
  swal(
    JSON.stringify("Success! Here is your hash", tx.transactionHash, null, 4)
  );
  console.table(tx.transactionHash);
}

async function deposit_nativeJS() {
  let contractADR = $("#ERC721_native").val();
  let tokenid = $("#idOfCard_native").val();

  let amount = $("#amountOF_native").val();
  let time = $("#LOCK_TIME_native").val();

  let tx = await contract.deposit_native(contractADR, tokenid, amount, time, {
    value: amount,
  });
  tx = await tx.wait();
  console.table(tx);
  swal("Success! Here is your hash", tx.transactionHash);
  console.table(tx.transactionHash);
}

// contractBalance
async function contractBalanceJS() {
  let erc20 = $("#erc20Balance").val();
  const balance = await contract.contractBalance_ERC20(erc20);

  bubble_x = JSON.stringify(balance);
  swalBalance = JSON.stringify(Number(balance._hex));
  console.log(
    "The amount of this ERC20 inside of this contract is",
    Number(balance._hex),
    "wei"
  );
  swal("the balance is", swalBalance);
}
// contractBalance_native
async function contractBalanceNativeJS() {
  const balance = await contract.contractBalance_native();

  bubble_x = JSON.stringify(balance);
  swalBalance = JSON.stringify(Number(balance._hex));
  console.log(
    "The amount of native currency inside of this contract is",
    swalBalance,
    "wei"
  );
  swal("the balance is", swalBalance);
}

// redeem
async function redeem() {
  var contractSome = document.getElementById("contract_redemption").value;
  var cardIdSome = document.getElementById("cardId_redemption").value;
  var amountSome = document.getElementById("money_redemption").value;

  let tx = await contract.redeem(contractSome, cardIdSome, amountSome);
  tx = await tx.wait();
  console.log(tx);
  swal("Success! Here is your hash", tx.transactionHash);
}
