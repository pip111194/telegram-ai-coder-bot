const { generateAIResponse } = require('../services/aiService');
const { logActivity } = require('../utils/stats');

async function handleCodeRequest(bot, chatId, request) {
  try {
    await bot.sendMessage(chatId, '⏳ Generating code...');
    
    const prompt = `You are an expert programmer. Generate clean, well-commented, production-ready code for the following request. Include explanations and best practices.\n\nRequest: ${request}\n\nProvide the code with proper formatting and comments.`;
    const response = await generateAIResponse(prompt);
    
    // Split long messages if needed
    if (response.length > 4000) {
      const chunks = response.match(/[\s\S]{1,4000}/g) || [];
      for (const chunk of chunks) {
        await bot.sendMessage(chatId, chunk);
      }
    } else {
      await bot.sendMessage(chatId, response);
    }
    
    logActivity(chatId, 'code');
  } catch (error) {
    console.error('Code generation error:', error);
    await bot.sendMessage(chatId, '❌ Error generating code. Please try again or rephrase your request.');
  }
}

async function handleDebugRequest(bot, chatId, code) {
  try {
    await bot.sendMessage(chatId, '🔍 Analyzing code for bugs...');
    
    const prompt = `You are an expert debugger. Analyze the following code, identify all bugs, errors, and issues. Provide:\n1. List of bugs found\n2. Explanation of each bug\n3. Fixed code\n4. Best practices to avoid such bugs\n\nCode to debug:\n${code}`;
    const response = await generateAIResponse(prompt);
    
    // Split long messages if needed
    if (response.length > 4000) {
      const chunks = response.match(/[\s\S]{1,4000}/g) || [];
      for (const chunk of chunks) {
        await bot.sendMessage(chatId, chunk);
      }
    } else {
      await bot.sendMessage(chatId, response);
    }
    
    logActivity(chatId, 'debug');
  } catch (error) {
    console.error('Debug error:', error);
    await bot.sendMessage(chatId, '❌ Error debugging code. Please try again.');
  }
}

async function handleExplainRequest(bot, chatId, concept) {
  try {
    await bot.sendMessage(chatId, '📖 Preparing explanation...');
    
    const prompt = `You are an expert programming teacher. Explain the following programming concept in a clear, easy-to-understand way with:\n1. Simple explanation\n2. Real-world analogy\n3. Code examples\n4. Common use cases\n5. Best practices\n\nConcept: ${concept}`;
    const response = await generateAIResponse(prompt);
    
    // Split long messages if needed
    if (response.length > 4000) {
      const chunks = response.match(/[\s\S]{1,4000}/g) || [];
      for (const chunk of chunks) {
        await bot.sendMessage(chatId, chunk);
      }
    } else {
      await bot.sendMessage(chatId, response);
    }
    
    logActivity(chatId, 'explain');
  } catch (error) {
    console.error('Explain error:', error);
    await bot.sendMessage(chatId, '❌ Error explaining concept. Please try again.');
  }
}

module.exports = {
  handleCodeRequest,
  handleDebugRequest,
  handleExplainRequest
};