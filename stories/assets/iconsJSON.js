/* eslint no-param-reassign: 0, no-console: 0 */

// Get a list of all files with their sizes for each input directory
// NOTE: this is a simple implementation - for dir with millions of files this will run out of heap

// Run like:
//  node list-files-and-sizes.js <dir> [<dir2 ...]

// This script:
// * recursively walks the file tree to get a list of files in order,
// * stats each file to get the file size,
// and writes the results to a JSON file

import { readdirSync, lstatSync, writeFileSync } from 'fs';
import { join, basename, parse, resolve } from 'path';

// return an ordered list of files in the input dir, with full paths
function listFilesSync(dir) {
  let fileList = [];
  readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    // use lstat so this does not follow dir symlinks
    // (otherwise this will include files from other dirs, which I don't want)
    if (lstatSync(fullPath).isDirectory()) {
      fileList = fileList.concat(listFilesSync(fullPath));
    } else {
      if (fullPath.includes('.svg')) {
        fileList.push(fullPath);
      }
    }
  });
  return fileList;
}

// return an object with the file path and file size
function fileAndSize(file) {
  const fileBaseName = basename(file);
  const fileName = parse(fileBaseName).name;
  return fileName;
}

// remove node and the script name
const dirs = process.argv.slice(2);

dirs.forEach((directory) => {
  const fullDirPath = resolve(directory);
  console.log(`Processing dir '${fullDirPath}'...`);

  const fullFileList = listFilesSync(fullDirPath);
  console.log(`Found ${fullFileList.length} files`);

  const filesAndSizes = fullFileList.map(fileAndSize);

  const outFile = `stories/assets/${basename(directory)}.json`;
  writeFileSync(outFile, JSON.stringify(filesAndSizes, null, 2));
  console.log(`Wrote file ${outFile}`);
});
