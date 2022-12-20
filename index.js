//const { ethers } = require("ethers");

//args 1  deposit
let provider = new ethers.providers.Web3Provider(window.ethereum, "any")
let chainId
let signer
let contract
let contract_NFT
let contractAddress
let contractAddress_NFT


document.addEventListener("DOMContentLoaded", async ()=>{
	await provider.send("eth_requestAccounts", [])
	
	signer = provider.getSigner()
	console.log(signer)
	let network = await signer.provider.getNetwork()
	chainId = network.chainId
	console.log(chainId)
	
  //chainId=  await provider.getNetwork().then(network => network.chainId)
if(chainId === 44787){
	contractAddress = "0x15bBBf19ac5d451e47777D6242869e0e8c0E4857";
	}else if(chainId === 137){
		contractAddress = "0xB62E8f490e7e38b7CF9A18Fae03528E626Ec11eb";
    contractAddress_NFT="0x505c7BF089197EB7c2cC62804b155cc094FEB793";
	} else if(chainId === 97){
		contractAddress = "0x890EEEe5884aC5a6Ef578FE6eAB74EB9F033D629";
    contractAddress_NFT="0x787251d16503DeE83fC05B960c5D1FCd3F22CCED";
	} else if(chainId === 80001){
		contractAddress = "0x2CA0c00B0219B00C9163f965f04b6B70B42d8D89";
    contractAddress_NFT="0x3Ef15a3e11bA43CE35Cfb13e6F1585CFeAa8C97c";
  }
   //0xB62E8f490e7e38b7CF9A18Fae03528E626Ec11eb - polygon mainnet cardFi
   //0x29198630dd978aE381D00B548df81a6CD53558Ab - polygon mainnet dog cardFi_NFT
   //0x505c7BF089197EB7c2cC62804b155cc094FEB793 - polygon mainnet cardfi_NFT
   // 0x3d4b41EA6bF4A8bDEFcDD02A2eE28101C99cee8D -remix
   // 0x2CA0c00B0219B00C9163f965f04b6B70B42d8D89 muumbai cardfi

  
	contract = new ethers.Contract(contractAddress, abi, signer)
  contract_NFT = new ethers.Contract(contractAddress_NFT, abi, signer)
  console.log("contractAddress_NFT", contractAddress_NFT)
  console.log("contractAddress", contractAddress)
})


provider.on("network", (newNetwork, oldNetwork)=>{
	if(oldNetwork){
		console.log("New network selected:", newNetwork)
		setTimeout(()=>{
			window.location.reload()
		}, 3000)
	}
})



const abi =[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "signer",
        "type": "address"
      }
    ],
    "name": "Signer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable",
        "name": "token_added",
        "type": "address"
      }
    ],
    "name": "currencyAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC721Upgradeable",
        "name": "nftAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable",
        "name": "currency",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "royalty",
        "type": "uint256"
      }
    ],
    "name": "deposit_ERC20Event",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC721Upgradeable",
        "name": "nftAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "royalty",
        "type": "uint256"
      }
    ],
    "name": "deposit_nativeEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "deposit",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "withdraw",
        "type": "uint8"
      }
    ],
    "name": "newRoyalty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC721Upgradeable",
        "name": "nftAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "redeemAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "royalty",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable",
        "name": "currency",
        "type": "address"
      }
    ],
    "name": "redeemEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC721Upgradeable",
        "name": "nftAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Upgradeable",
        "name": "currency",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "ERC20Added",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      }
    ],
    "name": "tokenToNftEvent",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "",
        "type": "address"
      }
    ],
    "name": "Royalties",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "deposit",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "withdraw",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_paytoken",
        "type": "address"
      }
    ],
    "name": "addCurrency",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allowedCrypto",
    "outputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "cardInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "currencyAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "ERC20Added",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "owner",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "nativeCurrency",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_currency",
        "type": "address"
      }
    ],
    "name": "contractBalance_ERC20",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractBalance_native",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_currency",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_depositAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newTime",
        "type": "uint256"
      }
    ],
    "name": "deposit_ERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_depositAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newTime",
        "type": "uint256"
      }
    ],
    "name": "deposit_native",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_redeemAmount",
        "type": "uint256"
      }
    ],
    "name": "redeem",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "royaltyAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "name": "seeRoyalty_ERC20",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "seeRoyalty_native",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint8",
        "name": "depositFee",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "withdrawFee",
        "type": "uint8"
      }
    ],
    "name": "setRoyalty_ERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "depositFee",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "withdrawFee",
        "type": "uint8"
      }
    ],
    "name": "setRoyalty_native",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "showAllowedCrypto",
    "outputs": [
      {
        "internalType": "contract IERC20Upgradeable[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "tokenAddress",
        "type": "address"
      }
    ],
    "name": "tokenExist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "ifExist",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "_contractAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "_currency",
        "type": "address"
      }
    ],
    "name": "tokenToNft",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC721Upgradeable",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "vaultBox",
    "outputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "ERC20Added",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "nativeCurrency",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "cards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cardTypeNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "URI",
        "type": "string"
      }
    ],
    "name": "mintNft",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_cardFi",
        "type": "address"
      }
    ],
    "name": "setCardFiAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_cardTypeNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_lockTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_currentCount",
        "type": "uint256"
      }
    ],
    "name": "setNftType",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "newRoyaltyAddress",
        "type": "address"
      }
    ],
    "name": "setRoyaltyAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "topUpBalance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewCardFiAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewCurrency",
    "outputs": [
      {
        "internalType": "contract IERC20Upgradeable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cardTypeNumber",
        "type": "uint256"
      }
    ],
    "name": "viewNftType",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxLimit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentCount",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "viewRoyaltyAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "cardTypeNumber",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "URI",
        "type": "string"
      }
    ],
    "name": "mintNftCustom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cardFiAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "lockTime",
        "type": "uint256"
      }
    ],
    "name": "mintedNft",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "viewTokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
//   const contract = new ethers.Contract(contractAddress, abi, signer)

 

  async function switchNetwork(){
	if(chainId === 80001){
		console.log("loading...")
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{chainId: '0xAEF3'}]
		})
	}else if( chainId === 44787){
		await ethereum.request({
			method: 'wallet_switchEthereumChain',
			params: [{chainId: '0x13881'}]
		})
	}
  }

  // async function switchNetwork(){
	// if(contractAddress="0x31251987EF86d1436aD5a8558f558Ff54A40f492"){
	// 	contractAddress="0x8E3a95c9f40c5B93eFBf194042Abb1E519174d8b";
	// 	contract = new ethers.Contract(contractAddress, abi, signer)
	// 	console.log("STAS1", contractAddress)
	// }
		
  // }

  async function setRoyaltyAddress_cardFi(){
    var new_Royalty_Address = document.getElementById("cardfi_royalty_address").value;
    console.log(new_Royalty_Address);
    let tx=await contract.setRoyaltyAddress(new_Royalty_Address);
    console.log(tx);
    
  }

   

  	//showAllowedCryptoJS
  async function showAllowedCryptoJS(){
	let tx=await contract.showAllowedCrypto();
	
	console.log(JSON.stringify(tx))
   
  }
  
  // addCurrency
  async function addCurrencyJS(){
	currencyVal = $("#addCurrencyVal").val();
	let tx = await contract.addCurrency(currencyVal)
	tx = await tx.wait()

	let tx_event={
		TOKEN_ADDED:tx.events[0].args.token_added		
	}
	let bubble_tx=JSON.stringify(tx_event)
	console.log((bubble_tx))
	 console.log(tx)
   
  }

  // seeRoyalty
  async function seeRoyaltyJS(){	
  var ERC20 = document.getElementById("seeRoyaltyVal").value;
	const tx = await contract.seeRoyalty_ERC20(ERC20)
  
	let bubble_tx={
		deposit:tx[0].toNumber(),
		withdraw:tx[1].toNumber()
	}
	console.log(bubble_tx)
 
 }


// setRoyalty
async function setRoyaltyJS(){
  var ERC20 = document.getElementById("setRoyalty_ERC20").value;
  var depos = document.getElementById("setRoyalty_depos").value;
  var withd = document.getElementById("setRoyalty_withd").value;
  
	let tx = await contract.setRoyalty_ERC20(ERC20, depos, withd)
	
  console.log(tx)		
  
  
}

// tokenToNft
// async function tokenToNftJS(){
//   var contractTo = document.getElementById("contractTo").value;
//   var cardTo = document.getElementById("cardIdTo").value;
//   var tokenTo = document.getElementById("erc20To").value;
  
// 	let okenTo = await contract.tokenToNft(contractTo, cardTo, tokenTo )
// 	okenTo = await okenTo.wait()
	
	
// 	let tx_event={
// 		nft_address:okenTo.events[0].args.NFT_ADDRESS,
// 		token_id:okenTo.events[0].args.TOKEN_ID.toNumber(),
// 		currency:okenTo.events[0].args.CURRENCY,
// 		isAdded:okenTo.events[0].args.ERC20_added,

// 	}
// 	let bubble_tx=JSON.stringify(tx_event)
// 	console.log((bubble_tx))
//    // bubble_fn__setRoyaltyJS((bubble_tx);
// }

// cardInfo
async function cardInfoJS(){
  var contractADR = document.getElementById("cardfi_contractaddress").value;
  var tokenid = document.getElementById("cardfi_tokenid").value;
	
	const cardInfovar = await contract.cardInfo(contractADR, tokenid)
	console.log("stas", cardInfovar)
  x=cardInfovar[2];
  if(x){
    let txObject={balance:cardInfovar[0].toString(),
      ERC20Address:cardInfovar[1],
      ERC20Added:cardInfovar[2],
Owner:cardInfovar[3],
timeLeft:Number(cardInfovar[4]),
nativeCurrency:cardInfovar[5]}

console.log(txObject)
}
 }
 
async function cardInfoJS2() {
  var contractADR = document.getElementById("ERC721").value;
  var tokenid = document.getElementById("idOfCard").value;
  const cardInfovar = await contract.cardInfo(contractADR, tokenid)
      var txObject = {
          balance: cardInfovar[0].toString(),
          ERC20Added: cardInfovar[2].toString(),
          ERC20Address: cardInfovar[1].toString(),
          Owner: cardInfovar[3].toString(),
          timeLeft: Number(cardInfovar[4]).toString(),
          nativeCurrency: cardInfovar[5].toString()
      }
      console.log(JSON.stringify(txObject));
      bubble_fn_cardInfo(JSON.stringify(txObject));  

  
}
  

// sendTokens
async function deposit_ERC20(){
	let contractADR = $("#ERC721").val();
	let  tokenid = $("#idOfCard").val();
  let  currency = $("#currencyOF").val();
	let  amount = $("#amountOF").val();
	let  time = $("#LOCK_TIME").val();
  
	const ERC20_ABI = ["function approve(address pender, uint256 amount) returns (bool)"]

	const erc20Instance = new ethers.Contract(currency, ERC20_ABI, signer)

	await erc20Instance.approve(contractAddress, amount);
  

	let tx = await contract.deposit_ERC20(contractADR, tokenid, currency, amount, time)
	tx = await tx.wait();
  console.log(tx);
   
	 
}

async function deposit_nativeJS(){
	let contractADR = $("#ERC721_native").val();
	let  tokenid = $("#idOfCard_native").val();
  
	let  amount = $("#amountOF_native").val();
	let  time = $("#LOCK_TIME_native").val();
  console.log(contractADR)
  console.log(tokenid)
  console.log(amount)
  console.log(time)

	let tx = await contract.deposit_native(contractADR, tokenid, amount, time, {value:amount})
	tx = await tx.wait()
  console.log(tx)
     
}

// contractBalance
async function contractBalanceJS(){
	let  erc20 = $("#erc20Balance").val();
	const balance = await contract.contractBalance(erc20)

	
	bubble_x= JSON.stringify(balance)
	console.log("The amount of this ERC20 inside of this contract is", Number(balance._hex), "wei")
}

// takeSomeMoney
async function redeem(){
   var contractSome = document.getElementById("contract_redemption").value;
   var cardIdSome = document.getElementById("cardId_redemption").value;
   var amountSome = document.getElementById("money_redemption").value;
   console.log("STASSSSSSSSSSSSSSSSSSSS",contractSome)
   console.log("STASSSSSSSSSSSSSSSSSSSS",cardIdSome)
   console.log("STASSSSSSSSSSSSSSSSSSSS",amountSome)
	let tx = await contract.redeem(contractSome, cardIdSome, amountSome)
	tx = await tx.wait()
  console.log("STASSSSSSSSSSSSSSSSSSSS",tx)		

//   let tx_event={
//	transactionHash:tx.blockHash,
// 	nftAddress:tx.events[2].args.nftAddress,
// 	currency:tx.events[2].args.currency,
// 	redeemAmount:tx.events[2].args.redeemAmount,
// 	royalty:tx.events[2].args.ROYALTY.

// }
// 	 let bubble_tx=JSON.stringify(tx_event)
//  	console.log((bubble_tx))
// 	bubble_fn_cardfi_sendTokens(bubble_tx);

} 


async function mint(){
  var cardType = document.getElementById("cardType").value;
  var URI = document.getElementById("URI").value;
  nftTypeInfo=await contract_NFT.viewNftType(cardType)
  var price=BigInt(nftTypeInfo[2])
  console.log(price);
	let tx = await contract_NFT.mintNft(cardType, URI, {value:price});
  tx = await tx.wait()

  console.log(tx);
  
}

async function addCardFiBalance(){
  var amount = document.getElementById("cardFi_amount").value;
  const ERC20_ABI = ["function approve(address pender, uint256 amount) returns (bool)"]
  var cardFiToken=(await contract_NFT.viewCurrency()).toString();
  console.log(cardFiToken);
  const erc20Instance = new ethers.Contract(cardFiToken, ERC20_ABI, signer)
  //0xA0A8A718A1813f1012dE86705F150E7ed8b16c42
  await erc20Instance.approve(contractAddress_NFT, amount);
  let tx=await contract_NFT.topUpBalance(amount);
  console.log(tx);
}


async function cardTypeInfo(){
  var type = document.getElementById("cardType_info").value;
  console.log(type);
  let tx=await contract_NFT.viewNftType(type);
  console.log(tx);
  let txObject={Amount_of_cardFi_wei:Number(tx.amount),
                Minted_cards:Number(tx.currentCount),
                Max_Limit:Number(tx.maxLimit),
                price:Number(tx.price),
                Lock_time:Number(tx.time)
  }
  console.log(txObject);
  
  
}



async function changeAddress(){
  var address = document.getElementById("new_cardfi_address").value;
  console.log(address);
  let tx=await contract_NFT.setCardFiAddress(address);
  console.log(tx);
  
}


async function setCardType(){
  
  let tx=await contract_NFT.setNftType(923600, 0, 0, 0, 999999, 0);
  console.log("SETCARD", tx);
  //setNftType(1, 1000000000000000000, 7776000, 1000000000000000000, 2, 0);   //1-Bronze  32
}
// contract name 
// symbol 
// prices

async function mintCustom(){
  var cardType = document.getElementById("cardType_custom").value;
  var URI = document.getElementById("URI_custom").value;
  nftTypeInfo=await contract_NFT.viewNftType(cardType)
  var price=BigInt(nftTypeInfo[2])
  console.log(price);
	let tx = await contract_NFT.mintNftCustom(cardType, URI, {value:price});
  tx = await tx.wait()

  console.log(tx);
   for(let i=0; i<=tx.events.length; i++){
	 	if(tx.events[i].hasOwnProperty('event')){
      if(tx.events[i].event==="mintedNft"){
          let tx_event={
        transactionHash:tx.blockHash,
        amount:Number(tx.events[i].args.cardFiAmount._hex),
          tokenId:Number(tx.events[i].args.tokenId._hex)
          }
         let bubble_tx=JSON.stringify(tx_event);
         console.log("mintedNFT!", bubble_tx); 
         break;   
      }
    }
	 }
}


async function NFTcontractBalance(){
  
  let tx=await contract_NFT.contractBalance();
  console.log("contractBalance", BigInt(tx));
 
}


// async function deposit(){

//   var contractADR = document.getElementById("ERC721").value;
//   var tokenid  = document.getElementById("idOfCard").value;
//   var amount = document.getElementById("amountOF").value;  
//   var time;
//   var currency;
     
//   const cardInfo = await contract.cardInfo(contractADR, tokenid)
//     if (cardInfo.ERC20Added){    
//     currency = cardInfo.currencyAddress
//     console.log("ERcadde", cardInfo)
//       }else{
//         currency = listedToken;
//       }
//     if (cardInfo.owner){
//        time=document.getElementById("lock_time").value;
//     console.log("owner", cardInfo.owner)
//       }else {
//     time=1;
//      }
   
//     const ERC20_ABI = ["function approve(address pender, uint256 amount) returns (bool)"]
//     const erc20Instance = new ethers.Contract(currency, ERC20_ABI, signer)
  
//     await erc20Instance.approve(contractAddress, amount);
//     let tx = await contract.deposit_ERC20(contractADR, tokenid, currency, amount,  Number(time))
//     tx = await tx.wait()
//     console.log(tx)
//        for(let i=0; i<=tx.events.length; i++){
//           if(tx.events[i].hasOwnProperty('event')){
//             if(tx.events[i].event==="deposit_ERC20Event"){
//               let tx_event={
//                 transactionHash:tx.blockHash,
//                 nftAddress:tx.events[i].args.nftAddress,
//                 currency:tx.events[i].args.currency,
//                 depositAmount:Number(tx.events[i].args.depositAmount._hex),			
//                 tokenId:Number(tx.events[i].args.tokenId._hex),
//                 balance:Number(tx.events[i].args.balance._hex), 
//                 lockTime:time }
//                 let bubble_tx=JSON.stringify(tx_event);
              
//               bubble_fn_deposit(bubble_tx);
//              console.log("Bubble_fn_deposit", bubble_tx);
//              break;   
//           }
         
//       }
//     }
    
// }
  


// async function depositNative() {
//   var contractADR = document.getElementById("ERC721").value;
//   var tokenid = document.getElementById("idOfCard").value;
//   var amount = document.getElementById("amountOF").value;

//   var time = document.getElementById("lock_time").value;

//   let tx = await contract.deposit_native(contractADR, tokenid, amount, time, {
//       value: amount
//   })
//   tx = await tx.wait()
//   console.log("DEPOSIT NATIVE", tx)
//   for (let i = 0; i <= tx.events.length; i++) {
//       if (tx.events[i].hasOwnProperty("args")) {
//           let tx_event = {
//               transactionHash: tx.blockHash,
//               nftAddress: tx.events[i].args.nftAddress,
//               currency: tx.events[i].args.currency,
//               depositAmount: Number(tx.events[i].args.depositAmount._hex),
//               tokenId: Number(tx.events[i].args.tokenId._hex),
//               balance: Number(tx.events[i].args.balance._hex),

//               lockTime: time
//           }
//           let bubble_tx = JSON.stringify(tx_event);

//           bubble_fn_deposit(bubble_tx);
//           console.log("Bubble_fn_deposit_native", bubble_tx);
//       }
//   }

// }
