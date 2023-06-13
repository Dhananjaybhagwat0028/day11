import { readFile } from "node:fs/promises";
async function main() {
  let filePath = "package.json";
  let fileData = await readFile(filePath);
  console.log(fileData);
}
main();