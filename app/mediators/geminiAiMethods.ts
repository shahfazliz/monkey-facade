import { load } from 'https://deno.land/std@0.209.0/dotenv/mod.ts';
import {
  type ChatSession,
  type EnhancedGenerateContentResponse,
  type GenerateContentResult,
  type GenerativeModel,
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from '@google/generative-ai';
import process from 'node:process';

/**
 * @author Jor-El
 * @module app/mediators/geminiAiMethods.ts
 * @description This file contains the code for the Gemini AI Methods mediator.
 * @param API_KEY The API key for the Google Generative AI service.
 * @param genAI The Google Generative AI client.
 * @param model The Generative Model for the Gemini-Pro model.
 * @param chat The Chat Session for the current conversation.
 * @param codes The code snippets that the model is responsible for.
 * @param generationConfig The generation config for the model.
 * @param safetySettings The safety settings for the model.
 * @returns An object containing the following methods:
 * - `setCodes`: Sets the code snippets that the model is responsible for.
 * - `run`: Initializes the chat session.
 * - `sendMessage`: Sends a message to the model and returns the response.
 * @example
 * ```typescript
 * import { setCodes, sendMessage } from './geminiAiMethods';

 * // Set the code snippets that the model is responsible for.
 * setCodes(`
 *   console.log('Hello, world!');
 *   const x = 10;
 * `);

 * // Initialize the chat session.
 * run();

 * // Send a message to the model and get the response.
 * const response = await sendMessage('What is the meaning of life?');
 * console.log(response);
 * ```
 */

const env = await load();
const API_KEY: string = env.JAR_EL_API_KEY ?? '';
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(API_KEY);
const model: GenerativeModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
let chat: ChatSession | null = null;
let codes: string = '';

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048,
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const setCodes = (newCodes: string): void => {
  codes = newCodes;
};

const run = (): void => {
  chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: 'user',
        parts: [{
          text: `
            Act as a senior software developer, your code name is Jor-El. I want you to be able to generate a
            codes that is easy to understand and maintainable. You follow best practices, optimize for
            readability and performance. Code duplication is not allowed. For all the codes your are
            responsible for, you must put JSDoc at the top of the code that consists minimum of @author,
            @module, @description, all the @param, @returns, and @example. You will add more if needed. You
            must make sure that the codes you write are generic and can be used by multiple clients. Our
            clients can be in any industry. We will change config.tsx to match our customer needs.
          `,
        }],
      },
      {
        role: 'model',
        parts: [{ text: 'Tell me more about what i am responsible for.' }],
      },
      {
        role: 'user',
        parts: [{
          text: `
            You own these codes: ${codes}. They are originally separated in their individual files indicated by
            '// Path:' at the top of each file. I have put them all into this promp. You are responsible for 
            the code in those files and you must make sure that they are easy to understand and maintainable.
          `,
        }],
      },
      {
        role: 'model',
        parts: [{ text: 'Ask me anything.' }],
      },
    ],
  });
};

const sendMessage = async (msg: string): Promise<string> => {
  if (codes === '') {
    return '';
  }

  if (chat === null) {
    run();
  }

  if (chat === null) {
    return '';
  }

  const result: GenerateContentResult = await chat.sendMessage(msg);
  const response: EnhancedGenerateContentResponse = result.response;
  return response.text();
};

export { setCodes, sendMessage };
