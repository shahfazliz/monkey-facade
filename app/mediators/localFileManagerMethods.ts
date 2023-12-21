import { ALLOWED_APP_FILES_EXTENSIONS } from '../config.ts';
import { glob } from 'glob';
import fs from 'node:fs';

/**
 * @author Jor-El
 * @module app/mediators/localFileManagerMethods.ts
 * @description This file contains a collection of utility functions for interacting with the local file system.
 * @param {string} folderName The name of the folder to search for files in.
 * @returns {string[]} An array of file paths.
 * @example
 * ```
 * const files = getListOfFiles('app/data');
 * ```
 */
const getListOfFiles = (folderName: string): string[] =>
  glob
    .sync(`${folderName}/**`, { dot: true })
    .sort()
    .filter((fileName: string) => {
      const splitFileName = fileName.split('.');
      return ALLOWED_APP_FILES_EXTENSIONS.includes(splitFileName[splitFileName.length - 1]);
    })
    // drop the app/ prefix
    .map((fileName) => fileName.slice(4));

/**
 * @author Jor-El
 * @module app/mediators/localFileManagerMethods.ts
 * @description This function reads the contents of a file and returns it as a string.
 * @param {string} filePath The path to the file to read.
 * @returns {string} The contents of the file.
 * @example
 * ```
 * const fileContents = getFileContents('app/data/file.txt');
 * ```
 */
const getFileContents = (filePath: string): string => {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return '';
  }
};

/**
 * @author Jor-El
 * @module app/mediators/localFileManagerMethods.ts
 * @description This function writes the contents of a string to a file.
 * @param {string} filePath The path to the file to write to.
 * @param {string} fileContents The contents to write to the file.
 * @example
 * ```
 * writeFileContents('app/data/file.txt', 'Hello, world!');
 * ```
 */
const writeFileContents = (filePath: string, fileContents: string): void => {
  try {
    fs.writeFileSync(filePath, fileContents.split('\n').slice(1, -1).join('\n'));
  } catch (error) {
    console.error(`Error writing file: ${filePath}`, error);
  }
};

export {
  getFileContents,
  getListOfFiles,
  writeFileContents,
};
