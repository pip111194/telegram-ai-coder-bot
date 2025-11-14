// Quick test script to verify Gemini API is working
require('dotenv').config();
const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4';

async function testGemini() {
  console.log('🧪 Testing Gemini API...\n');
  console.log('API Key:', GEMINI_API_KEY.substring(0, 10) + '...\n');
  
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: 'Write a simple Python hello world program with comments'
          }]
        }],
        generationConfig: {
          temperature: 0.9,
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
      console.log('✅ Gemini API is working perfectly!\n');
      console.log('Response:');
      console.log('─'.repeat(60));
      console.log(text);
      console.log('─'.repeat(60));
      console.log('\n🎉 Test successful! Your bot is ready to use.');
      console.log('\n📱 Start your bot with: npm start');
      console.log('🌐 Dashboard will be at: http://localhost:3000');
    } else {
      console.log('❌ Unexpected response format');
      console.log('Response:', JSON.stringify(response.data, null, 2));
    }
  } catch (error) {
    console.error('\n❌ Gemini API Error:');
    console.error('Status:', error.response?.status);
    console.error('Error:', error.response?.data || error.message);
    console.log('\n💡 Troubleshooting:');
    console.log('1. Check if GEMINI_API_KEY is correct');
    console.log('2. Verify API key at: https://makersuite.google.com/app/apikey');
    console.log('3. Make sure API key has Gemini API enabled');
    console.log('4. Check if you have API quota remaining');
    console.log('\n🔑 Current API Key (first 10 chars):', GEMINI_API_KEY.substring(0, 10) + '...');
  }
}

console.log('Starting Gemini API test...\n');
testGemini();