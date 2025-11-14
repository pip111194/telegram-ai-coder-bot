require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const path = require('path');
const { handleCodeRequest, handleDebugRequest, handleExplainRequest } = require('./handlers/codeHandler');
const { stats, logActivity } = require('./utils/stats');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Express server for frontend
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// API endpoint for stats
app.get('/api/stats', (req, res) => {
  res.json(stats);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Bot commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const welcomeMessage = `
🤖 *Welcome to AI Coder Bot!*

I can help you with:
• 💻 Generate code in any language
• 🐛 Debug your code
• 📖 Explain code concepts
• 🔧 Optimize code
• 📝 Write documentation

*Commands:*
/code - Generate code
/debug - Debug code
/explain - Explain code
/help - Show help
/stats - Show bot statistics

Just send me your coding question!
  `;
  bot.sendMessage(chatId, welcomeMessage, { parse_mode: 'Markdown' });
  logActivity(chatId, 'start');
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpMessage = `
📚 *How to use AI Coder Bot:*

*Generate Code:*
/code Write a Python function to sort a list

*Debug Code:*
/debug \`\`\`python
def add(a, b):
  return a + b
print(add(1, "2"))
\`\`\`

*Explain Code:*
/explain What is recursion?

*Or just ask naturally:*
"How do I reverse a string in JavaScript?"
"Fix this error: TypeError..."
  `;
  bot.sendMessage(chatId, helpMessage, { parse_mode: 'Markdown' });
  logActivity(chatId, 'help');
});

bot.onText(/\/stats/, (msg) => {
  const chatId = msg.chat.id;
  const statsMessage = `
📊 *Bot Statistics:*

Total Requests: ${stats.totalRequests}
Code Generated: ${stats.codeGenerated}
Bugs Debugged: ${stats.bugsDebugged}
Explanations: ${stats.explanations}
Active Users: ${stats.activeUsers.size}
Uptime: ${Math.floor((Date.now() - stats.startTime) / 1000 / 60)} minutes
  `;
  bot.sendMessage(chatId, statsMessage, { parse_mode: 'Markdown' });
});

bot.onText(/\/code (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const request = match[1];
  await handleCodeRequest(bot, chatId, request);
});

bot.onText(/\/debug (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const code = match[1];
  await handleDebugRequest(bot, chatId, code);
});

bot.onText(/\/explain (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const concept = match[1];
  await handleExplainRequest(bot, chatId, concept);
});

// Handle regular messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Skip if it's a command
  if (text && text.startsWith('/')) return;

  if (text) {
    // Detect intent and handle accordingly
    if (text.toLowerCase().includes('debug') || text.toLowerCase().includes('error') || text.toLowerCase().includes('fix')) {
      await handleDebugRequest(bot, chatId, text);
    } else if (text.toLowerCase().includes('explain') || text.toLowerCase().includes('what is') || text.toLowerCase().includes('how does')) {
      await handleExplainRequest(bot, chatId, text);
    } else if (text.toLowerCase().includes('code') || text.toLowerCase().includes('write') || text.toLowerCase().includes('create')) {
      await handleCodeRequest(bot, chatId, text);
    } else {
      // Default to code generation
      await handleCodeRequest(bot, chatId, text);
    }
  }
});

// Error handling
bot.on('polling_error', (error) => {
  console.error('Polling error:', error);
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 Bot is running!`);
  console.log(`📊 Dashboard: http://localhost:${PORT}`);
  console.log(`🤖 Telegram bot is active`);
});

module.exports = { bot, app };