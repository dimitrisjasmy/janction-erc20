import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ignition-ethers";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const JANCTION_PRIVATE_KEY = vars.get("JANCTION_PRIVATE_KEY");
const ETHERSCAN_API_KEY = vars.get("ETHERSCAN_API_KEY");

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [JANCTION_PRIVATE_KEY],
    },
    janction: {
      url: "http://3.113.23.136:8545",
      accounts: [JANCTION_PRIVATE_KEY],
    },
  }
};

export default config;
