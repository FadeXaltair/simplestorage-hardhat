require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

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

    // }
  },
  solidity: "0.8.8",
  etherscan: {
    apiKey: API_KEY,
  }
};
