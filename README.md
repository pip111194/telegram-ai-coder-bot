# 🤖 AI Coder Bot

AI-powered Telegram bot for code generation, debugging, and programming assistance with a beautiful web dashboard.

## ✨ Features

- 💻 **Code Generation** - Generate code in any programming language
- 🐛 **Debug Assistant** - Find and fix bugs in your code
- 📖 **Code Explanation** - Understand complex programming concepts
- 🔧 **Code Optimization** - Improve code performance
- 📝 **Documentation** - Generate code documentation
- 📊 **Web Dashboard** - Monitor bot activity in real-time

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Telegram Bot Token
- OpenAI API Key (optional, for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pip111194/telegram-ai-coder-bot.git
cd telegram-ai-coder-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
TELEGRAM_BOT_TOKEN=8543254684:AAHc8PCVmxL5pSC2Tg2o9p0my1uu4GuZKu4
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
NODE_ENV=production
```

4. Start the bot:
```bash
npm start
```

## 📱 Bot Commands

- `/start` - Start the bot
- `/code <request>` - Generate code
- `/debug <code>` - Debug code
- `/explain <concept>` - Explain programming concepts
- `/help` - Show help
- `/stats` - Show bot statistics

## 🌐 Web Dashboard

Access the dashboard at: `http://localhost:3000`

Features:
- Real-time statistics
- Active users count
- Request tracking
- Beautiful UI

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token | Yes |
| `OPENAI_API_KEY` | OpenAI API key for AI features | No |
| `PORT` | Server port (default: 3000) | No |

## 📦 Deployment

### Deploy on Render

1. Push code to GitHub
2. Connect Render to your repository
3. Add environment variables
4. Deploy!

### Deploy on Heroku

```bash
heroku create your-bot-name
heroku config:set TELEGRAM_BOT_TOKEN=your_token
heroku config:set OPENAI_API_KEY=your_key
git push heroku main
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Bot Framework**: node-telegram-bot-api
- **AI**: OpenAI API
- **Frontend**: HTML, CSS, JavaScript

## 📝 License

MIT License

## 👨‍💻 Author

Created with ❤️ by Bhindi Team

## 🤝 Contributing

Contributions welcome! Feel free to open issues and pull requests.

---

**Note**: Replace `YOUR_BOT_USERNAME` in the frontend with your actual bot username.