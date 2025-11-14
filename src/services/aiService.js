const axios = require('axios');

async function generateAIResponse(prompt) {
  // Using a simple AI response for demo
  // You can integrate OpenAI, Gemini, or any other AI service
  
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  
  if (!OPENAI_API_KEY) {
    return generateFallbackResponse(prompt);
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert programming assistant. Provide clear, concise code with explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('AI API error:', error.message);
    return generateFallbackResponse(prompt);
  }
}

function generateFallbackResponse(prompt) {
  // Fallback responses when AI API is not available
  if (prompt.toLowerCase().includes('python')) {
    return `\`\`\`python
# Python code example
def example_function():
    """
    This is a sample function.
    Configure OPENAI_API_KEY for AI-powered responses.
    """
    print("Hello from AI Coder Bot!")
    return True

# Usage
example_function()
\`\`\`

💡 *Tip:* Add your OpenAI API key to get AI-powered code generation!`;
  }
  
  return `🤖 *AI Response:*

To get AI-powered responses, please configure your OPENAI_API_KEY in the environment variables.

For now, here's a basic template:

\`\`\`javascript
// Your code here
function solution() {
  // Implementation
  return result;
}
\`\`\`

Visit: https://platform.openai.com/api-keys`;
}

module.exports = { generateAIResponse };