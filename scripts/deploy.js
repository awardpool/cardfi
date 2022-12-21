// This code is an example of how to use the ethers and upgrades functions from the hardhat library. The ethers.getContractFactory function creates a contract factory from a given contract name. The upgrades.deployProxy function deploys a proxy contract with a given initializer. The fi.deployed() function deploys the proxy contract and logs the address of the contract to the console.

const { ethers, upgrades } = require("hardhat");

async function main() {
  const cardFi = await ethers.getContractFactory("cardFi");
  const fi = await upgrades.deployProxy(cardFi, { initializer: "initialize" });
  await fi.deployed();
  console.log("cardFi deployed here", fi.address);
}
main();
