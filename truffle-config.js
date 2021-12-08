const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
	contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
	networks: {
		development: {
			host: '127.0.0.1', // Localhost (default: none)
			port: 8545, // Standard Ethereum port (default: none)
			network_id: '*', // Any network (default: none)
		},
		ropsten: {
			provider: () =>
				new HDWalletProvider(
					`${process.env.MNEMONIC}`,
					`https://ropsten.infura.io/v3/${process.env.INFURA_ID}`,
					1
				),
			network_id: 3,
			// gas: 5500000, // Ropsten has a lower block limit than mainnet
			// confirmations: 2, // # of confs to wait between deployments. (default: 0)
			// timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
			// skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
		},
	},
	mocha: {
		timeout: 100000,
	},
	compilers: {
		solc: {
			version: '0.8.10', // Fetch exact version from solc-bin (default: truffle's version)
			settings: {
				// See the solidity docs for advice about optimization and evmVersion
				optimizer: {
					enabled: true,
					runs: 200,
				},
			},
		},
	},
};
