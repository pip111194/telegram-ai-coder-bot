const axios = require('axios');

async function generateAIResponse(prompt) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  if (!GEMINI_API_KEY) {
    return '❌ Please configure GEMINI_API_KEY in environment variables.';
  }

  try {
    // Correct Gemini API endpoint
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    if (response.data && response.data.candidates && response.data.candidates[0]) {
      const content = response.data.candidates[0].content;
      if (content && content.parts && content.parts[0]) {
        return content.parts[0].text;
      }
    }
    
    return '❌ No response from Gemini AI. Please try again.';
    
  } catch (error) {
    console.error('Gemini API error:', error.response?.data || error.message);
    
    // Handle different error types
    if (error.response) {
      const status = error.response.status;
      const errorData = error.response.data;
      
      if (status === 404) {
        return '❌ API endpoint error. Please check if Gemini API key is valid.\n\nGet your key from: https://makersuite.google.com/app/apikey';
      } else if (status === 429) {
        return '⚠️ API rate limit reached. Please try again in a moment.';
      } else if (status === 400) {
        return '❌ Invalid request. Please try a different question.';
      } else if (status === 403) {
        return '❌ API key is invalid or doesn\'t have permission.\n\nVerify your key at: https://makersuite.google.com/app/apikey';
      }
      
      return `❌ API Error (${status}): ${errorData?.error?.message || 'Unknown error'}`;
    }
    
    if (error.code === 'ECONNABORTED') {
      return '⏱️ Request timeout. Please try again.';
    }
    
    return `❌ Error: ${error.message}. Please try again.`;
  }
}

module.exports = { generateAIResponse };