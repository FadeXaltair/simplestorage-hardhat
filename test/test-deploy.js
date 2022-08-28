
const { ethers } =require("hardhat")
const {expect, assert} = require("chai")

let simpleStorageFactory, simpleStorage

describe("SimpleStorage", function (){
this.beforeEach(async function(){
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
})


it(" the fav no should be zero", async function(){
  const curr_value = await simpleStorage.retrieve()
  const expected_value ="0"

  assert.equal(curr_value.toString(), expected_value, "Number is not equal");

  //expect(curr_value.toString()).to.equal(expected_value)    // they both do the same thing
});

it("It should update when we call store option", async function(){
    const expected_value = "7";
    const updating_value = await simpleStorage.store(expected_value);
    await updating_value.wait(1)

    const current_value = await simpleStorage.retrieve()

    assert.equal(current_value.toString(), expected_value, "NUmber is not equal");
});
});