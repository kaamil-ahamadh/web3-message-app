const getMessages = async (_contract, setAllMessages) => {
  //Get Message
  let messageCount = await _contract.messageCount();

  const data = [];

  //for loop to get all messages
  for (let i = 0; i < messageCount.toString(); i++) {
    const _message = await _contract.getMessage(i);
    let obj = Object.assign({}, _message);
    obj = {
      id: obj.id.toString(),
      message: obj.message,
      sender: obj.sender,
      time: obj.time.toString(),
    };
    data.push(obj);
  }

  setAllMessages(data.reverse());
};

export default getMessages;
