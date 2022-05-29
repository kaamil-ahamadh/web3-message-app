import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { Button, Feed, Header, Wrapper } from "../components";
import GlobalContext from "../context/GlobalContext";
import { displayToast } from "../utils/displayToast";

const HomeScreen = () => {
  const [userMessage, setUserMessage] = useState("");

  const { handleWalletConnect, contract, allMessages, account } =
    useContext(GlobalContext);

  useEffect(() => {
    if (!account) {
      handleWalletConnect();
    }
  }, []);

  //Send Message
  const handleSendMessage = async () => {
    if (userMessage) {
      try {
        const tx = await contract.sendMessage(userMessage);
        displayToast(
          "Message is submitted to miners for verification, we will notify you after confirmation."
        );
        setUserMessage("");

        await tx.wait();
        displayToast("Your Message is successfully added to the blockchain.");
        handleWalletConnect();
      } catch (error) {
        displayToast(error.message, true);
      }
    }
  };

  return (
    <Wrapper>
      <div className="homescreen-container">
        <Header />
        <div className="content-container">
          <textarea
            placeholder="What's your message"
            className="input"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />

          <Button onClick={handleSendMessage}>Send</Button>
          <ToastContainer />

          <div className="mt-6">
            {allMessages?.map((message, index) => {
              return (
                <div key={index} className="">
                  <Feed message={message} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeScreen;
