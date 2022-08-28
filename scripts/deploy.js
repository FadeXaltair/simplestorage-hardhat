//imports
const { ethers, run, network } = require("hardhat")


//async main function
async function main(){
   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("deployin contract ..")

const simpleStorage = await SimpleStorageFactory.deploy()
 await simpleStorage.deployed()

 console.log(`contract deployed to ${simpleStorage.address}`)
//  console.log(network.config)

 // checking network chan i 
//  if(network.config.chainId === 4 && process.env.API_KKEY){   // 4 is the chainid ,, which i m no using... just a conditon 
//   await simpleStorage.deployTransaction.wait(6)
//   await verify( contractAddress, [])
// }


//interacting with our smrt contract 
const number = await simpleStorage.retrieve();
console.log(`fave number is ${number}`);

const transResponse = await simpleStorage.store(7);
await transResponse.wait(1);
const updated = await simpleStorage.retrieve()
console.log(`new value store is ${updated}`);
}


async function verify(contractAddress , args){
  console.log("veryfying contract ..")
  try{
    await run("verify:verify",{
      address: contractAddress,
      constructorArgs: args,
    }); 
  } catch(e){
    if(e.message.toLowercase().includes("alredy verified")){
      console.log("successfully verified")
    } else{
      console.log(e)
    }
  }


}
//main

main().then(()=> process.exit(0)).catch((error)=>{
  console.log(error);
  process.exit(1);
});