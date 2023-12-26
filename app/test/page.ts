import { getListOfFiles, getFileContents } from '../mediators/localFileManagerMethods.ts';
// import { sendMessage, setCodes } from '../mediators/geminiAiMethods.ts';
import { sendMessage, setCodes } from '../mediators/dolphinMixtralAiMethods.ts';
import path from 'node:path';

const ROOT_FOLDER = './app';

/**
 * @author Shahfazliz Shahron
 * @module app/test/page.tsx
 * @description This component retrieves and displays the contents of the first file found within the `app` directory. It supports files with extensions `.js`, `.jsx`, `.ts`, `.tsx`, and `.json`.
 * @returns {React.ComponentElement} A React component that renders the contents of the first found file in the `app` directory.
 */
const TestPage = async (): Promise<void> => {
  const fileNames: string[] = getListOfFiles(ROOT_FOLDER);
  console.log(fileNames);
  console.log(fileNames.length);

  /* Test modify files */
  // const filePath: string = path.join(ROOT_FOLDER, fileNames[0]);
  // const fileContents: string = getFileContents(filePath);
  // setCodes(fileContents);
  // const firstResponse: string = await sendMessage(`re write the file with Path:${filePath} you own by adding the JSDoc at the top of your component. update the JSDoc if there is code change. please do not remove imports. respond with only the codes`);
  // console.log(firstResponse);
  // writeFileContents(filePath, firstResponse);

  /* Test knowledge of the files */
  const fileContents: string = fileNames
    .map((fileName) => getFileContents(path.join(ROOT_FOLDER, fileName)))
    .join('\n\n/* End of file */\n\n');
  setCodes(fileContents);
  // const firstResponse: string = await sendMessage('how many files are you responsible for?');
  // console.log(firstResponse);
  // const secondResponse: string = await sendMessage('what are their file paths?');
  // console.log(secondResponse);

  while (true) {
    const question: string | null = prompt('\nQ: ');
    if (question === null) {
      continue;
    } else if (question === 'exit') {
      console.log('Bye!');
      break;
    }
    const response: string = await sendMessage(question);
    console.log(`A:\n${response}\n`);
  }

  /* Test write new file */
  /* Test Research */
  /* Test Task generation */
  /* Test UAT */
  /* Test Automation */
  /* Test Manual Test */
  /* Test work flow */
};

await TestPage();
