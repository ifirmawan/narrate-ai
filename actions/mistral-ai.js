'use server';
import { Mistral } from '@mistralai/mistralai';

export const createStory = (story) =>
  new Promise(async (resolve, reject) => {
    try {
      const prompts = [
        "I'd like you to act as a professional blogger, editor, and spelling corrector.",
        'I will share a story in any language, and your task will be to enhance, expand, and refine it into a comprehensive blog post of at least three paragraphs, using polished language and advanced vocabulary.',
        `Please respond using the following JSON structure: { "output": "string", "created_at": "current_time", "duration": "time" }.`,
        `Avoid formatting in Markdown and respond in plain JSON only. Here is my story: <<${story}>>.`
      ];
      const prompt = prompts.join('');
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
