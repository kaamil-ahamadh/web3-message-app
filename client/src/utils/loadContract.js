import { ethers } from "ethers";

import {
  CHAINID_AVAX_FUJI,
  CHAINID_BSC_TESTNET,
  CHAINID_FTM_TESTNET,
  CHAINID_POLYGON_MUMBAI,
  CHAINID_RINKEBY,
  CHAINID_ROPSTEN,
} from "./chainDetails";
import {
  DMessage_AVAX_FUJI,
  DMessage_BSC_TESTNET,
  DMessage_FTM_TESTNET,
  DMessage_POLYGON_MUMBAI,
  DMessage_RINKEBY,
  DMessage_ROPSTEN,
} from "./contractAddress";

import DMessageAbi from "../contracts/abis/DMessage.json";
import getMessages from "./getMessages";

const loadContract = async (signer, setContract, setAllMessages, chainId) => {
  const address = getAddress(chainId);

  if (address) {
    const _contract = new ethers.Contract(address, DMessageAbi.abi, signer);
    setContract(_contract);
    getMessages(_contract, setAllMessages);
  }
};

const getAddress = (chainId) => {
  if (chainId === CHAINID_RINKEBY) {
    return DMessage_RINKEBY;
  } else if (chainId === CHAINID_FTM_TESTNET) {
    return DMessage_FTM_TESTNET;
  } else if (chainId === CHAINID_AVAX_FUJI) {
    return DMessage_AVAX_FUJI;
  } else if (chainId === CHAINID_BSC_TESTNET) {
    return DMessage_BSC_TESTNET;
  } else if (chainId === CHAINID_POLYGON_MUMBAI) {
    return DMessage_POLYGON_MUMBAI;
  } else if (chainId === CHAINID_ROPSTEN) {
    return DMessage_ROPSTEN;
  }
};

export default loadContract;
