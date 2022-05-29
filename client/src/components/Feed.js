import React, { useContext } from "react";
import { format } from "timeago.js";

import GlobalContext from "../context/GlobalContext";
import { getExplorer } from "../utils/chainDetails";

const Feed = ({ message }) => {
  const { chainId } = useContext(GlobalContext);

  const getBlockExplorer = getExplorer(chainId);

  if (!getBlockExplorer) {
    return;
  }
  return (
    <div className="feed-container">
      {/* Desktop */}
      <div className="hidden sm:inline-block card">
        <div className="card-header">
          <a
            href={`${getBlockExplorer}/address/${message.sender}`}
            target="_blank"
            className="card-title"
            rel="noopener noreferrer"
          >
            {message.sender}
          </a>
          <div>{format(new Date(message.time * 1000))}</div>
        </div>
        <div className="card-body">{message.message}</div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden card">
        <div className="card-header">
          <a
            href={`https://ropsten.etherscan.io/address/${message.sender}`}
            target="_blank"
            className="card-title"
            rel="noopener noreferrer"
          >
            {`${message.sender.substring(0, 6)}...${message.sender.substring(
              36,
              42
            )}`}
          </a>
          <div>{format(new Date(message.time * 1000))}</div>
        </div>
        <div className="card-body">{message.message}</div>
      </div>
    </div>
  );
};

export default Feed;
