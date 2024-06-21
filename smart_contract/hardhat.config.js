// https://eth-ropsten.alchemyapi.io/v2/NqRoRHBc5ogmGhtwzh8v0dc3our-L_Y5
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: { 
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/NqRoRHBc5ogmGhtwzh8v0dc3our-L_Y5',
      accounts:['f6a91b8fbf6604af6131e2e0aa728358d0b76c2ce3d92d09b043bc7e0d951e81'] 
    }
  }
}