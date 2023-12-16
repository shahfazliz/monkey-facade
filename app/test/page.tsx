/**
 * @file TestPage.js
 * @author Shahfazliz Shahron
 * @since 2023-12-13
 *
 * This component retrieves and displays the contents of the first file found within the `app` directory. It supports files with extensions `.js`, `.jsx`, `.ts`, `.tsx`, and `.json`.
 *
 * @returns {React.ComponentElement} A React component that renders the contents of the first found file in the `app` directory.
 */

'use server';
import { getListOfFiles, getFileContents, writeFileContents } from '../mediators/localFileManagerMethods';
import { sendMessage, setCodes } from '../mediators/geminiAiMethods';
import path from 'path';
import React from 'react';

const ROOT_FOLDER = './app';

const TestPage = async (): Promise<JSX.Element> => {
  const fileNames: string[] = getListOfFiles(ROOT_FOLDER);
  console.log(fileNames);
  // const filePath: string = path.join(ROOT_FOLDER, fileNames[3]);
  // const fileContents: string = getFileContents(filePath);

  // setCodes(fileContents);
  // const firstResponse: string = await sendMessage('re write the codes you own by adding the JSDoc at the top to describe your components. updating the JSDoc when there is code changes. add `` at the end of the file. when output your response remove ``` at the top and ``` at the bottom so that i can easily use it to copy.');
  // console.log(firstResponse);
  // writeFileContents(filePath, firstResponse);
  // const secondResponse: string = await sendMessage('tell me about the code you own. what does it do?');
  // console.log(secondResponse);

  // return <textarea style={{ width: 800, height: 600 }} defaultValue={fileContents} />;
};

export default TestPage;
