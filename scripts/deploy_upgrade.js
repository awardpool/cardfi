const { ethers, upgrades } = require("hardhat");

const PROXY = "your proxy contract";

async function main() {
  const cardFi_Upgrade = await ethers.getContractFactory("cardFi_Upgrade");
  await upgrades.upgradeProxy(PROXY, cardFi_Upgrade);
  console.log("cardFi upgraded");
}
main();
