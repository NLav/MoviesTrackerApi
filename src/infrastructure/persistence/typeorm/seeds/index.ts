import "reflect-metadata";

import fs from "node:fs";
import path from "node:path";

import { AppDataSource } from "../data-source";

async function runSeeds() {
  await AppDataSource.initialize();

  const seedsDirectory = __dirname;

  const seedFiles = fs
    .readdirSync(seedsDirectory)
    .filter(
      (file) =>
        file.endsWith(".js") && file !== "index.js" && file !== "seed.js"
    )
    .sort();

  for (const file of seedFiles) {
    const seedPath = path.join(seedsDirectory, file);
    const { default: SeedClass } = await import(seedPath);

    const seed = new SeedClass();
    await seed.run();

    console.log("Seed executed:", file);
  }
}

runSeeds()
  .then(() => {
    console.log("All seeds executed.");
    return 0;
  })
  // eslint-disable-next-line unicorn/prefer-top-level-await
  .catch((error) => {
    console.error("Error executing seeds:", error);
    return 1;
  });
