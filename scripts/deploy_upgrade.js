// This function upgrades a Proxy contract to a cardFi_Upgrade contract. 
// The proxy contract is passed in as the first argument. 
// The function uses the ethers.getContractFactory() to get the cardFi_Upgrade contract. 
// Then it uses the upgrades.upgradeProxy() method to upgrade the proxy to the cardFi_Upgrade contract. 
// Finally, it logs out a message to the console to indicate that the upgrade has been successful.const { ethers, upgrades } = require("hardhat");

const PROXY = "your proxy contract";

async function main() {
  const cardFi_Upgrade = await ethers.getContractFactory("cardFi_Upgrade");
  await upgrades.upgradeProxy(PROXY, cardFi_Upgrade);
  console.log("cardFi upgraded");
}
main();
