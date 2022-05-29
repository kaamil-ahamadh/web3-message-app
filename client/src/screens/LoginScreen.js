import React, { useContext } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { WrapperStartScreen, Button } from "../components";
import GlobalContext from "../context/GlobalContext";

const LoginScreen = () => {
  const navigate = useNavigate();

  const { handleWalletConnect } = useContext(GlobalContext);

  const handleConnectButton = () => {
    handleWalletConnect();
    navigate("/home");
  };

  return (
    <WrapperStartScreen>
      <motion.div
        className="login-container"
        animate={{
          y: "35vh",
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 3,
        }}
      >
        <div className="title-container">
          <BiMessageRoundedDetail size={30} color="#0ea5e9" className="mt-1" />
          <div className="title-text">Message App</div>
        </div>

        <motion.div
          className="mt-6"
          initial={{ x: "-100vw" }}
          animate={{ x: 0, transition: { delay: 1 } }}
        >
          <Button onClick={handleConnectButton}>Connect Wallet</Button>
        </motion.div>
      </motion.div>
    </WrapperStartScreen>
  );
};

export default LoginScreen;
