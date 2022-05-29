import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ethers } from "ethers";
import millify from "millify";

import { LoginScreen, HomeScreen } from "./screens";

import GlobalContext from "./context/GlobalContext";
import { loadContract, getMessages } from "./utils";

function App() {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  //Smart contracts Related Global Context
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("");
  const [contract, setContract] = useState(null);
  const [chainId, setChainId] = useState("");

  const [allMessages, setAllMessages] = useState(null);

  const handleWalletConnect = async () => {
    if (window.ethereum) {
      //Set Account
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);

      //Get Provider
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      //Get Balance
      const _balance = await provider.getBalance(accounts[0]);
      setBalance(millify(ethers.utils.formatEther(_balance), { precision: 4 }));

      //ChainId
      const { chainId } = await provider.getNetwork();
      setChainId(chainId);

      //Signer
      const signer = provider.getSigner();

      if (
        chainId === 4 ||
        chainId === 4002 ||
        chainId === 3 ||
        chainId === 97 ||
        chainId === 43113 ||
        chainId === 80001
      ) {
        loadContract(signer, setContract, setAllMessages, chainId);
      } else {
        window.alert(
          "DMessage Contract is not deployed to a detected network."
        );
      }

      //Metamask Events
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("accountsChanged", () => {
        handleWalletConnect();
      });
    }
  };

  return (
    <div className="app-wrapper">
      <GlobalContext.Provider
        value={{
          showModal,
          setShowModal,
          account,
          setAccount,
          contract,
          setContract,
          balance,
          setBalance,
          allMessages,
          setAllMessages,
          handleWalletConnect,
          getMessages,
          chainId,
        }}
      >
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => setShowModal(false)}
        >
          <Routes location={location} key={location.key}>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
          </Routes>
        </AnimatePresence>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
