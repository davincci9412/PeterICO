import { utils } from 'ethers';
import TokenConfig from './TokenConfig';

// Update the following array if you change the constructor arguments...

const TokenContractArguments = [
  TokenConfig.tokenName,
  TokenConfig.tokenSymbol,
  TokenConfig.initialSupply,
  
] as const;

export default TokenContractArguments;