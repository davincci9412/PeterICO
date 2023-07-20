import { utils } from 'ethers';
import ICOConfig from './ICOConfig';

// Update the following array if you change the constructor arguments...

const ICOContractArguments = [
    ICOConfig.MDSEAddress,
    ICOConfig.startTime,
    ICOConfig.endTime,
  
] as const;

export default ICOContractArguments;