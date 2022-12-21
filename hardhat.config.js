// require()
// The require() function is used to include modules from other files and libraries into a program. It takes a single parameter which is the name of the module to be included.

// @nomiclabs/hardhat-ethers
// This is an npm package that allows developers to use the Ethers.js library within the Hardhat development environment. It provides a unified interface for interacting with Ethereum networks, wallets and smart contracts.

// @openzeppelin/hardhat-upgrades
// This is an npm package that allows developers to use the OpenZeppelin library within the Hardhat development environment. It provides a collection of upgradable smart contracts that are used to build secure and reliable decentralized applications on Ethereum.

// @nomiclabs/hardhat-etherscan
// This is an npm package that allows developers to use the Etherscan API in their Hardhat development environment. It provides an easy way to interact with the Etherscan API, allowing users to quickly and easily access data from the Ethereum blockchain.

// dotenv
// This is an npm package that allows developers to load environment variables from a .env file into their program. It is used to store sensitive information such as API keys, private keys, and other secure data.

// module.exports
// This is a special object in a JavaScript program that is used to export functions and variables from one module to another. It is used to make objects, functions, and variables available to other modules in a program.

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { RPC_API_KEY, PRIV_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `${RPC_API_KEY}`,
      accounts: [PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
