import { ethers } from 'hardhat';
import TokenConfig from '../config/TokenConfig';
import TokenContractArguments from '../config/TokenContractArguments';
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
/*
  const name = "Made in SEEU";
  const symbol = "MDSE";
  const initialSupply = 50000000;
  */
  const tokenContract = await ethers.getContractFactory(TokenConfig.contractName);

  console.log('Deploying contract...');

  const contract = await tokenContract.deploy(...TokenContractArguments);

  await contract.deployed();

  console.log('Contract deployed to:', contract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
