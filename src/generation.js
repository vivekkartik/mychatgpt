import OpenAI from 'openai';
let apiKey 
export const fetchApiKey = async (apiKeyFromInput)=>{
 apiKey = String(apiKeyFromInput)
    if (!apiKey) {
    console.error('API_KEY is not set. Please check your .env file.');
    }
}


export const generateText = async (promt) => {
    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      });
    const response = await openai.chat.completions.create({
      model: 'gpt-4-0125-preview',
      messages: [
        {
          role: 'user',
          content: promt,
        },
      ],
      max_tokens: 50,
    });

    if (response.choices && response.choices.length > 0) {
      return Promise.resolve(response.choices[0].message.content);
    } 
  } catch (err) {
    console.error('Error generating text:', err.response ? err.response.data : err.message);
  }
}

// generateText('hello that is today date')
// console.log('API Key:', apiKey);

// const listModels = async () => {
//     try {
//       const response = await openai.models.list();
//       console.log('Available Models:', response.data);
//     } catch (err) {
//       console.error('Error listing models:', err.response ? err.response.data : err.message);
//     }
//   };
  
//   listModels();
