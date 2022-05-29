const { expectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const DMessage = artifacts.require("DMessage");

contract("DMessage", (accounts) => {
  let dMessage;

  //Deploying new contract instance before each tests
  beforeEach(async () => {
    dMessage = await DMessage.new();
  });

  it("deploy - Should deploy correctly", () => {
    assert.notStrictEqual(dMessage.address, "");
  });

  it("name - Should have a name", async () => {
    const name = await dMessage.name();
    assert.strictEqual(name, "DMessage");
  });

  it("messageCount - Should have a messageCount", async () => {
    let messageCount = await dMessage.messageCount();
    const result = messageCount.toString();

    assert.equal(result, "0");
  });

  it("sendMessage - Should emit a MessageSent event during a successful message sent", async () => {
    const receipt = await dMessage.sendMessage("Hello");
    const event = receipt.logs[0].args;

    expectEvent(receipt, "MessageSent", {
      id: "0",
      sender: accounts[0],
      message: "Hello",
      time: event.time.toString(),
    });
  });

  it("sendMessage - Should increase messageCount by 1 during a successful message sent", async () => {
    await dMessage.sendMessage("Hello");
    const messageCount = await dMessage.messageCount();
    const result = messageCount.toString();

    assert.strictEqual(result, "1");
  });

  it("getMessage - Should revert in case of invalid ID", async () => {
    await expectRevert(dMessage.getMessage(0), "Message doesn't exist");
  });

  it("getMessage - Should return a Message", async () => {
    const receipt = await dMessage.sendMessage("Hello");
    const time = receipt.logs[0].args.time;
    const message = await dMessage.getMessage(0);

    assert.strictEqual(message.id, "0");
    assert.strictEqual(message.sender, accounts[0]);
    assert.strictEqual(message.message, "Hello");
    assert.strictEqual(message.time, time.toString());
  });
});
