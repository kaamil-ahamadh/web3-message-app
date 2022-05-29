const fs = require("fs");
const DMessage = artifacts.require("DMessage");

module.exports = async function (deployer) {
  await deployer.deploy(DMessage);

  const dMessage = await DMessage.deployed();

  //For storing newly deployed instance address
  fs.writeFileSync(
    "../client/src/contracts/DMessageAddress.json",
    JSON.stringify(
      {
        address: dMessage.address,
      },
      undefined,
      2
    )
  );
};
