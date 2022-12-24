// Switch blockchains using web3.js

// Import the web3.js library
import Web3 from "web3";
// Create a new instance of the web3.js library
const web3 = new Web3();
// Define the function to switch blockchains
async function switchBlockchain(newNetwork) {
  // Check if the user has MetaMask installed and enabled
  if (typeof window.ethereum !== "undefined") {
    // Request the user's permission to access their MetaMask account
    await window.ethereum.enable();
    // Set the provider for the web3.js library to the user's MetaMask provider
    web3.setProvider(window.ethereum);
    // Switch to the specified blockchain
    await web3.eth.net.changeNetwork(newNetwork);
    // Confirm that the blockchain has been changed
    console.log(`Successfully switched to ${newNetwork} network.`);
  } else {
    console.log("MetaMask is not installed or enabled.");
  }
}
// Call the function to switch to the Rinkeby testnet
switchBlockchain("rinkeby");
