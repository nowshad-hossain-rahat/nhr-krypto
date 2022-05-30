require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/ynQdUEBm75J3ea92Os1MNB3wBCfJfKjQ',
      accounts: [ '3c33e20e06f17337bc13bba930a149e6632ea44c34c5a5252e79d779f1e8ee5c' ]
    }
  }
};
