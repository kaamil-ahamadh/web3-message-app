import React, { useContext } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";

import { Button, Modal } from ".";
import GlobalContext from "../context/GlobalContext";

const Header = () => {
  const { account, balance, handleWalletConnect, showModal, setShowModal } =
    useContext(GlobalContext);

  const handleWalletButton = () => {
    if (!account) {
      handleWalletConnect();
    } else {
      setShowModal(true);
    }
  };
  return (
    <div className="header">
      <div className="title-container">
        <BiMessageRoundedDetail size={25} color="#0ea5e9" className="mt-1" />
        <div className="title-text">Message App</div>
      </div>

      <div className="connect-btn-container">
        <Button onClick={handleWalletButton}>
          {!account
            ? "Connect"
            : `${account.substring(0, 6)}......${account.substring(36, 42)}`}
        </Button>
      </div>

      <div className="mobile-connect-btn-container">
        <Button onClick={handleWalletConnect}>
          {!account
            ? "Connect"
            : `${account.substring(0, 6)}...${account.substring(36, 42)}`}
        </Button>
      </div>

      {account && (
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div>
            <h2>Account:</h2>
            <h2>{account}</h2>
          </div>
          <div className="flex justify-center mt-3">
            <h2>Balance: {balance}</h2>
            <FaEthereum className="mt-1" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
