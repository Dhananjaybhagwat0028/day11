// How to read a file using NodeJS?
// this is a internal module.
import { readFileSync } from "node:fs";


let filePath = "D:\CDAC_23\M6_WPT\day11\package.json"
//  let filedata = readFileSync(filePath);
let fileData = readFileSync(filePath, { encoding: "utf-8" });
console.log(filedata);