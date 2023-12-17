// Path: app/mediators/geminiAiMethods.ts
import { type ChatSession, type EnhancedGenerateContentResponse, type GenerateContentResult, type GenerativeModel, GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const API_KEY = process.env.JAR_EL_API_KEY ?? '';
const genAI: GoogleGenerativeAI = new GoogleGenerativeAI(API_KEY);
const model: GenerativeModel = genAI.getGenerativeModel({ model: 'gemini-pro' });
let chat: ChatSession | null = null;
let codes: string = '';

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
  }
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
        parts: [{ text: 'Your code name is Jor-El, working as a software developer at Monkey Facade.' }]
      },
      {
        role: 'model',
        parts: [{ text: 'Tell me more about what i am responsible for.' }]
      },
      {
        role: 'user',
        parts: [{ text: `You own these pieces of code: ${codes}` }]
      },
      {
        role: 'model',
        parts: [{ text: 'Tell me more about what i code.' }]
      },
      {
        role: 'user',
        parts: [{ text: 'You always put JSDoc at the top of the codes you own that consists of @author, @description, all the @param, @returns, and @example.' }]
      },
      {
        role: 'model',
        parts: [{ text: 'Ask me anything.' }]
      }
    ]
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
