import express from "express";
import loaders from "./core/loaders";

async function main() {
  const app = express(),
    port: number = 3000;

  await loaders(app);

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received.');
    console.log('Express app closed.');
    process.exit(0);
  });
}

main();