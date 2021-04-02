require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random still equip just cloth equal gate'; 
let testAccounts = [
"0x5e458462840907138ded75f13b8aa87905729cd94f2df47c840e17ba9c343e2e",
"0x4e270d60ab329e111eed6a374b986e1cc20ab71236a0b7f033260bdb12977293",
"0xe0e0fd82f88e8e8cde8274d927b7c21b140d7aa4be7a4c1b26e7352f76d4f2b2",
"0x7b32f3047cef3a43b175082edeb11ab4f85548bf1898fa68fe7f77240a7b6065",
"0x7cdc704375dfc2f08aace451409df0dc20a43dbbd649fc95acab33ce8dc0d9e4",
"0x1de333d9036d0b30dfc5dface5864cde28fc3791655f8ea105805df774805414",
"0x5356b5dbea8ecd0881809ec570cdd72138f1b0dd9e8b3a6974a1077d8362f5f9",
"0xc08093268325f52fd8647d15cc69ed809969d6dde201047b1c29d5d9f75972b4",
"0x23d7ffbf05620d4253ae1977758966000104c63943e83092e1857d9cd91bd373",
"0x1c72b7abde1deeff8f7d7285736f259ae4ef0bf92a43cc3f3c431cc5f94a8dea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
