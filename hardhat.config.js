require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-gas-reporter");
require("solidity-coverage");

const API_KEY = process.env.API_KEYY

// const URL = process.env.RINKY_BY

// const Private = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    // rinkeby:{
    //   url: URL,
    //   account: Private,
  localhost: {
    url : "http://127.0.0.1:8545/",
    chainId: 31337,
  }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: API_KEY,
  },
  gasReporter:{
    enabled: true,
    outputFile: "gas-reportError.txt",
    noColors :true,
  },
};
