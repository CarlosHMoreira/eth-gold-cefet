const GoldCoin = artifacts.require("./GoldCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(GoldCoin);
};
