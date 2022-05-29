//ChainIDS
export const CHAINID_RINKEBY = 4;
export const CHAINID_ROPSTEN = 3;
export const CHAINID_AVAX_FUJI = 43113;
export const CHAINID_BSC_TESTNET = 97;
export const CHAINID_POLYGON_MUMBAI = 80001;
export const CHAINID_FTM_TESTNET = 4002;

//Chain Explorers
export const BLOCK_EXPLORER_RINKEBY = "https://rinkeby.etherscan.io/";
export const BLOCK_EXPLORER_ROPSTEN = "https://ropsten.etherscan.io/";
export const BLOCK_EXPLORER_AVAX_FUJI = "https://testnet.snowtrace.io/";
export const BLOCK_EXPLORER_BSC_TESTNET = "https://testnet.bscscan.com/";
export const BLOCK_EXPLORER_POLYGON_MUMBAI = "https://mumbai.polygonscan.com/";
export const BLOCK_EXPLORER_FTM_TESTNET = "https://testnet.ftmscan.com/";

export const getExplorer = (chainId) => {
  if (chainId === CHAINID_RINKEBY) {
    return BLOCK_EXPLORER_RINKEBY;
  } else if (chainId === CHAINID_FTM_TESTNET) {
    return BLOCK_EXPLORER_FTM_TESTNET;
  } else if (chainId === CHAINID_AVAX_FUJI) {
    return BLOCK_EXPLORER_AVAX_FUJI;
  } else if (chainId === CHAINID_BSC_TESTNET) {
    return BLOCK_EXPLORER_BSC_TESTNET;
  } else if (chainId === CHAINID_POLYGON_MUMBAI) {
    return BLOCK_EXPLORER_POLYGON_MUMBAI;
  } else if (chainId === CHAINID_ROPSTEN) {
    return BLOCK_EXPLORER_ROPSTEN;
  }
};
