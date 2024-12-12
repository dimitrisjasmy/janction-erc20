// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OWNER_ADDRESS = "0xe57E4777E0342a857b9232CBfddCC5Ba8b08e0c8"

export default buildModule("JanctionBuildModule", (m) => {
  const ownerAddress = m.getParameter("initialOwner", OWNER_ADDRESS);

  // pass the owner address to the contract
  const janction = m.contract("Janction", [ownerAddress]);

  return { janction };
});

