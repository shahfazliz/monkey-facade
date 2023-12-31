interface StartChatProps {
  history: Message[]
};

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export interface MixtralResponse {
  model: string
  created_at: string
  message: {
    role: 'assistant'
    content: string
  }
  done: boolean
  total_duration: number
  load_duration: number
  prompt_eval_count: number
  prompt_eval_duration: number
  eval_count: number
  eval_duration: number
}

const model = 'dolphin-mixtral:8x7b-v2.6-q3_K_M';

const postRequest = async (messages: Message[]): Promise<globalThis.Response> => {
  return await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      stream: false,
    }),
  });
};

const startChat = async ({ history }: StartChatProps): Promise<MixtralResponse> => {
  const response = await postRequest(history);

  return await response.json();
};

const sendMessage = async (newHistory: Message[]): Promise<MixtralResponse> => {
  const response = await postRequest(newHistory);

  return await response.json();
};

export { sendMessage, startChat };
