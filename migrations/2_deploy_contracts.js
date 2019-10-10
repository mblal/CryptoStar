const StarNotary = artifacts.require("StarNotary");

module.exports = function(deployer) {
  deployer.deploy(StarNotary, "BLAL Crypto Star Token", "MBLTOK");
};
