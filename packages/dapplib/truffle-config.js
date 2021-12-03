require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot dance dash museum upset include private fringe giant'; 
let testAccounts = [
"0x17634236e0f98cf54a6d552af3ffa9f1734db3f0e4dd4349285d78cf48b0cf28",
"0xbbef43e5cd67c420a77f396c64c54f3e8bb49293e23f59365a9d75bcce8fab02",
"0xd660bc0f4ba466c2d2be751ea110bf0e8ea47f2b7405cb668c466242d2b445fd",
"0x10f475045ec69392a1156c7b586e13c14aefc03aeb7d69b4f0c6276f126cb19a",
"0x53d9ef87e1ff0f0ff28394ae445864c5eeeb36038f6a6f8383b9b918ea61db91",
"0xa246404507999b9b6804b9f0e2337406a74603eaca6d467e79515848bdcc26f3",
"0x72a748a10f4277d5e972a8a867c663447229de44ee7c4045870d0cfbf987e670",
"0x2b131e8b8f3cbe3636e99c0b31ebec397972500bca4011df864f185e7eff9679",
"0x6f13b50e50a9b81cbc3e48ba3cd5e19051922fda81f28df86252332d78ff10da",
"0x50a678e5b45d9f6c62ee07969b56b8b50d186d663f18f06100be5e2e1e0091bf"
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
            version: '^0.8.0'
        }
    }
};

