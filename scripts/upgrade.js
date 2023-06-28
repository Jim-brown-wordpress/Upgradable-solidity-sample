// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

    const ERC20UpgradableV2 = await ethers.getContractFactory(
        "ERC20UpgradableV2"
    );
    console.log("Upgrading ERC20UpgradableV1...");
    await upgrades.upgradeProxy(
        "0xC81cBaB47B1e6D6d20d4742721e29f22C5835dcB",
        ERC20UpgradableV2
    );
    console.log("Upgraded Successfully");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
