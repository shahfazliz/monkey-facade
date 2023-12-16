import { ALLOWED_APP_FILES_EXTENSIONS } from '../config';
import { glob } from 'glob';
import fs from 'fs';

const getListOfFiles = (folderName: string): string[] => glob
  .sync(`${folderName}/**`, { dot: true })
  .sort()
  .filter((fileName: string) => {
    const splitFileName = fileName.split('.');
    return ALLOWED_APP_FILES_EXTENSIONS.includes(splitFileName[splitFileName.length - 1]);
  })
  // drop the app/ prefix
  .map((fileName) => fileName.slice(4));

const getFileContents = (filePath: string): string => {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    return '';
  }
};

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
  writeFileContents
};
