const { generateAIResponse } = require('../services/aiService');
const { logActivity } = require('../utils/stats');

async function handleCodeRequest(bot, chatId, request) {
  try {
    await bot.sendMessage(chatId, '⏳ Generating code...');
    
    const prompt = `Generate clean, well-commented code for: ${request}. Include explanations.`;
    const response = await generateAIResponse(prompt);
    
    await bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
    logActivity(chatId, 'code');
  } catch (error) {
    console.error('Code generation error:', error);
    await bot.sendMessage(chatId, '❌ Error generating code. Please try again.');
  }
}

async function handleDebugRequest(bot, chatId, code) {
  try {
    await bot.sendMessage(chatId, '🔍 Analyzing code...');
    
    const prompt = `Debug this code and explain the issues:\n${code}`;
    const response = await generateAIResponse(prompt);
    
    await bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
    logActivity(chatId, 'debug');
  } catch (error) {
    console.error('Debug error:', error);
    await bot.sendMessage(chatId, '❌ Error debugging code. Please try again.');
  }
}

async function handleExplainRequest(bot, chatId, concept) {
  try {
    await bot.sendMessage(chatId, '📖 Preparing explanation...');
    
    const prompt = `Explain this programming concept clearly with examples: ${concept}`;
    const response = await generateAIResponse(prompt);
    
    await bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
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