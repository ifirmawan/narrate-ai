'use server';
import { Mistral } from '@mistralai/mistralai';

export const createStory = (story) =>
  new Promise(async (resolve, reject) => {
    try {
      let prompt =
        "I'd like you to act as a professional blogger, spelling corrector, and editor.";
      prompt +=
        "I will tell you a story in any language, and you'll enhance, expand, and correct it to make it more elegant, polished, and expressive, using refined language and advanced vocabulary.";
      prompt += `Please respond using the following JSON structure: { "output": "string", "created_at": "current_time", "duration": "time" }. Avoid formatting in Markdown and respond in plain JSON only.
`;
      prompt += `Here is my story: <<${story}>>.`;
      const apiKey = process.env.MISTRAL_API_KEY;
      const client = new Mistral({ apiKey: apiKey });
      const chatResponse = await client.chat.complete({
        model: 'mistral-small-latest',
        messages: [{ role: 'system', content: prompt }],
        response_format: { type: 'json_object' }
      });
      resolve(chatResponse.choices[0].message.content);
    } catch (error) {
      reject(error);
    }
  });
