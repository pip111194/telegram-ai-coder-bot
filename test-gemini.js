// Quick test script to verify Gemini API is working
require('dotenv').config();
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4';

async function testGemini() {
  console.log('🧪 Testing Gemini API...\n');
  
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: 'Write a simple Python hello world program'
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data && response.data.candidates && response.data.candidates[0]) {
      const text = response.data.candidates[0].content.parts[0].text;
      console.log('✅ Gemini API is working!\n');
      console.log('Response:');
      console.log('─'.repeat(50));
      console.log(text);
      console.log('─'.repeat(50));
      console.log('\n🎉 Test successful! Your bot is ready to use.');
    } else {
      console.log('❌ Unexpected response format');
    }
  } catch (error) {
    console.error('❌ Gemini API Error:', error.response?.data || error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Check if GEMINI_API_KEY is correct');
    console.log('2. Verify API key at: https://makersuite.google.com/app/apikey');
    console.log('3. Ensure API key has proper permissions');
  }
}

testGemini();