const { ethers, upgrades } = require("hardhat");

const PROXY = "your upgradeablr roxy contract";

async function main() {
  const cardFi_2 = await ethers.getContractFactory("cardFi_2");
  await upgrades.upgradeProxy(PROXY, cardFi_2);
  console.log("cardFi upgraded");
}
main();
