import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = process.env.BUNDLE_CONTRACT;
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Skunk #10209",
        description: "A super nice skunk nft",
        image: readFileSync("./assets/generated10209.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Skunk #10210",
        description: "A super nice skunk nft",
        image: readFileSync("./assets/generated10210.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Skunk #10211",
        description: "A super nice skunk nft",
        image: readFileSync("./assets/generated10211.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 9,
        },
      },
      supply: 30,
    },
    {
      metadata: {
        name: "Skunk #10212",
        description: "A super nice skunk nft",
        image: readFileSync("./assets/generated10212.png"),
        properties: {
          rarity: "a bit rare",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
