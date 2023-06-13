import { writeFile } from "node:fs/promises";

async function main() {
  let filePath = "D:\CDAC_23\M6_WPT\day11\op.txt";
  let fileData = `Asynchronously writes dDesktopata to a file, 
                replacing the file if it already exists. 
                data can be a string, a buffer, an <AsyncIterable>, 
                or an <Iterable> object.`;
  await writeFile(filePath, fileData);
  console.log("Write Success");
}

main();
