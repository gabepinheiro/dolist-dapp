module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*',
    },
  },
  contracts_directory: './contracts',
  compilers: {
    solc: {
      version: '^0.8.6',
      optimizer: {
        enable: true,
        runs: 200,
      },
    },
  },

  db: {
    enabled: false,
  },
}
