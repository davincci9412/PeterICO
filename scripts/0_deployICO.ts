import { ethers } from 'hardhat';
import ICOConfig from '../config/ICOConfig';
import ICOContractArguments from '../config/ICOContractArguments';
async function main() {

  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const ICOContract = await ethers.getContractFactory(ICOConfig.contractName);

  console.log('Deploying contract...');

  const contract = await ICOContract.deploy(...ICOContractArguments);

  await contract.deployed();

  console.log('Contract deployed to:', contract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
