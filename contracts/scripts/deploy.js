const hre = require("hardhat");

async function main() {
  const HEEToken = await hre.ethers.getContractFactory("HEEToken");
  const heeToken = await HEEToken.deploy();
  console.log("HEEToken deployed to:", heeToken.target);
  console.log("Add to Metamask:");
  console.log("Token Address:", heeToken.target);
  console.log("Token Symbol: HEE");
  console.log("Decimals: 18");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 