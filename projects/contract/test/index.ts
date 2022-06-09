import { expect } from "chai";
import { ethers } from "hardhat";

describe("Deploy", async function () {
  it("deploy", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    console.log("owner address is", owner.address);
    console.log("addr1 address is", addr1.address);
    console.log("addr2 address is", addr2.address);

    const SampleNFT = await ethers.getContractFactory("SampleNFT");
    const sampleNFT = await SampleNFT.deploy(
      "SampleNFT",
      "SNFT"
    );
    await sampleNFT.deployed();
    console.log("SampleNFT address is", sampleNFT.address);

    describe("Mint", async function () {
      it("mint success", async function () {
        await sampleNFT.mint(addr1.address);
        expect(await sampleNFT.ownerOf(0)).to.equal(addr1.address);
      });
    });
  });
});
