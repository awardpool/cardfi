// This function will create a new Provider instance using the Web3Provider class using ethers.js, and then use the setNetwork() method to switch to the specified blockchain.
// Note that, like in the previous example, this function assumes that the user has MetaMask installed and enabled in their browser, and that the window.ethereum object is available.
// switchBlockchain is an async function that takes in a newNetwork string as a parameter. The function sets the provider's network to the newNetwork parameter and then prints a success message to the console. To use this function, pass in a valid Ethereum network string as the parameter, for example 'rinkeby'.

// Import the ethers.js library
import { ethers } from 'ethers';
// Create a new provider instance
const provider = new ethers.providers.Web3Provider(window.ethereum);
// Define the function to switch blockchains
async function switchBlockchain(newNetwork) {
  // Switch to the specified blockchain
  await provider.setNetwork(newNetwork);
  // Confirm that the blockchain has been changed
  console.log(`Successfully switched to ${newNetwork} network.`);
}
// Call the function to switch to the Rinkeby testnet
switchBlockchain('rinkeby');
