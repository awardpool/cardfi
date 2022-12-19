const { ethers, upgrades } = require("hardhat");

async function main() {
  const cardFi = await ethers.getContractFactory("cardFi");
  const fi = await upgrades.deployProxy(cardFi, { initializer: "initialize" });
  await fi.deployed();
  console.log("cardFi deployed here", fi.address);
}
main();
