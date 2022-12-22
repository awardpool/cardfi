
// This code is used to connect a wallet to the Matic mainnet blockchain using ethers.js. It uses the ethereum web3 API to call the 
// wallet_addEthereumChain method, which requires an object with the chainId, rpcUrls, chainName, nativeCurrency name, 
// symbol, and decimals, and blockExplorerUrls as parameters. In this case, the chainId is 0x89 for the Matic mainnet, the 
// rpcUrl is the URL of the mainnet node, the chainName is "Matic Mainnet", the nativeCurrency name and symbol are both "MATIC", 
// the decimals are 18, and the blockExplorerUrls is the URL of the block explorer.

window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [{
        chainId: "0x89",
        rpcUrls: ["https://rpc-mainnet.matic.network/"],
        chainName: "Matic Mainnet",
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        },
        blockExplorerUrls: ["https://polygonscan.com/"]
    }]
});
