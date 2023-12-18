'use server';
import { getListOfFiles, getFileContents, writeFileContents } from '../mediators/localFileManagerMethods';
import { sendMessage, setCodes } from '../mediators/geminiAiMethods';
import path from 'path';
import React from 'react';

const ROOT_FOLDER = './app';

/**
 * @author Shahfazliz Shahron
 * @module app/test/page.tsx
 * @description This component retrieves and displays the contents of the first file found within the `app` directory. It supports files with extensions `.js`, `.jsx`, `.ts`, `.tsx`, and `.json`.
 * @returns {React.ComponentElement} A React component that renders the contents of the first found file in the `app` directory.
 */
const TestPage = async (): Promise<JSX.Element> => {
  const fileNames: string[] = getListOfFiles(ROOT_FOLDER);
  console.log(fileNames);

  // const filePath: string = path.join(ROOT_FOLDER, fileNames[22]);
  // const fileContents: string = getFileContents(filePath);
  // setCodes(fileContents);
  // const firstResponse: string = await sendMessage(`re write the file with Path:${filePath} you own by adding the JSDoc at the top of your component. update the JSDoc if there is code change. please do not remove imports. respond with only the codes`);
  // console.log(firstResponse);
  // writeFileContents(filePath, firstResponse);

  return <textarea style={{ width: 800, height: 600 }} />;
};

export default TestPage;
