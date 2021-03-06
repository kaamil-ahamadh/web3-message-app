// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

contract DMessage {

    string public name = "Decentralized Message";
    string public nameInShort = "DMessage";

    //Message Count
    uint public messageCount;

    //Message
    struct Message{
        uint id;
        address sender;
        string message;
        uint time;
    }

    //All Messages
    mapping(uint => Message) private _messages;

    //Events
    event MessageSent(
        uint id,
        address indexed sender,
        string message,
        uint time);

    //Send Message
    function sendMessage(string memory _message) external {
        require(bytes(_message).length > 0, "_message can't be empty");
        _messages[messageCount] = Message(messageCount,msg.sender,_message,block.timestamp);

        emit MessageSent(messageCount,msg.sender,_message,block.timestamp);
        messageCount++;
        
    }

    //Get Message
    function getMessage(uint _id) external view returns (Message memory) {
        require(_id < messageCount, "Message doesn't exist");
        return _messages[_id];
    }
    
}