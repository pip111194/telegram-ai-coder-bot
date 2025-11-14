const axios = require('axios');

async function generateAIResponse(prompt) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  if (!GEMINI_API_KEY) {
    return '❌ Please configure GEMINI_API_KEY in environment variables.';
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.candidates && response.data.candidates[0]) {
      const text = response.data.candidates[0].content.parts[0].text;
      return text;
    } else {
      return '❌ No response from Gemini AI. Please try again.';
    }
  } catch (error) {
    console.error('Gemini API error:', error.response?.data || error.message);
    
    if (error.response?.status === 429) {
      return '⚠️ API rate limit reached. Please try again in a moment.';
    }
    
    return `❌ Error: ${error.message}. Please try again.`;
  }
}

module.exports = { generateAIResponse };