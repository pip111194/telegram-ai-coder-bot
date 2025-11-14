# 🤖 AI Coder Bot (Powered by Google Gemini)

AI-powered Telegram bot for code generation, debugging, and programming assistance using Google Gemini AI with a beautiful web dashboard.

## ✨ Features

- 💻 **Code Generation** - Generate code in any programming language
- 🐛 **Debug Assistant** - Find and fix bugs in your code
- 📖 **Code Explanation** - Understand complex programming concepts
- 🔧 **Code Optimization** - Improve code performance
- 📝 **Documentation** - Generate code documentation
- 📊 **Web Dashboard** - Monitor bot activity in real-time
- 🚀 **Powered by Google Gemini** - Fast and accurate AI responses

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Telegram Bot Token
- Google Gemini API Key

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
GEMINI_API_KEY=AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4
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

## 💡 Usage Examples

**Generate Code:**
```
/code Write a Python function to reverse a string
```

**Debug Code:**
```
/debug 
def add(a, b):
    return a + b
print(add(1, "2"))
```

**Explain Concept:**
```
/explain What is recursion in programming?
```

## 🌐 Web Dashboard

Access the dashboard at: `http://localhost:3000`

Features:
- Real-time statistics
- Active users count
- Request tracking
- Beautiful responsive UI

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `PORT` | Server port (default: 3000) | No |

### Get Gemini API Key

1. Visit: https://makersuite.google.com/app/apikey
2. Create a new API key
3. Add it to your `.env` file

## 📦 Deployment

### Deploy on Render

1. Push code to GitHub
2. Go to https://dashboard.render.com
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `GEMINI_API_KEY`
7. Deploy!

### Deploy on Heroku

```bash
heroku create your-bot-name
heroku config:set TELEGRAM_BOT_TOKEN=your_token
heroku config:set GEMINI_API_KEY=your_key
git push heroku main
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express
- **Bot Framework**: node-telegram-bot-api
- **AI**: Google Gemini API
- **Frontend**: HTML, CSS, JavaScript

## 🎯 Features in Detail

### Code Generation
Ask the bot to generate code in any language:
- Python, JavaScript, Java, C++, Go, Rust
- Web development (HTML, CSS, React, Vue)
- Database queries (SQL, MongoDB)
- Algorithms and data structures

### Debug Assistant
Send your buggy code and get:
- Error identification
- Fix suggestions
- Explanation of issues
- Corrected code

### Code Explanation
Learn programming concepts:
- Language features
- Design patterns
- Best practices
- Algorithm explanations

## 📝 License

MIT License

## 👨‍💻 Author

Created with ❤️ by Bhindi Team

## 🤝 Contributing

Contributions welcome! Feel free to open issues and pull requests.

## 🔒 Security

- Never commit your `.env` file
- Keep your API keys secure
- Use environment variables for sensitive data

---

**Powered by Google Gemini AI** 🚀