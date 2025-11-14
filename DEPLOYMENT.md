# 🚀 Deployment Guide

## Deploy on Render (Recommended)

### Step 1: Prepare Repository
✅ Repository is ready at: https://github.com/pip111194/telegram-ai-coder-bot

### Step 2: Deploy on Render

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Sign in with your GitHub account

2. **Create New Web Service**
   - Click "New +" button
   - Select "Web Service"

3. **Connect Repository**
   - Connect your GitHub account if not already connected
   - Select repository: `pip111194/telegram-ai-coder-bot`
   - Click "Connect"

4. **Configure Service**
   ```
   Name: ai-coder-bot
   Region: Oregon (US West) or closest to you
   Branch: main
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

5. **Add Environment Variables**
   Click "Advanced" and add these environment variables:
   
   ```
   TELEGRAM_BOT_TOKEN=8543254684:AAHc8PCVmxL5pSC2Tg2o9p0my1uu4GuZKu4
   GEMINI_API_KEY=AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4
   NODE_ENV=production
   PORT=3000
   ```

6. **Select Plan**
   - Choose "Free" plan (sufficient for testing)
   - Or "Starter" plan for production use

7. **Create Web Service**
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)

### Step 3: Verify Deployment

Once deployed, you'll get a URL like:
```
https://ai-coder-bot.onrender.com
```

**Test the bot:**
1. Open Telegram
2. Search for your bot
3. Send `/start` command
4. Try generating code with `/code Write a hello world in Python`

**Check Dashboard:**
- Visit your Render URL to see the web dashboard
- Monitor real-time statistics

---

## Alternative: Deploy on Heroku

### Prerequisites
- Heroku account
- Heroku CLI installed

### Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create Heroku App**
```bash
heroku create ai-coder-bot
```

3. **Set Environment Variables**
```bash
heroku config:set TELEGRAM_BOT_TOKEN=8543254684:AAHc8PCVmxL5pSC2Tg2o9p0my1uu4GuZKu4
heroku config:set GEMINI_API_KEY=AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4
heroku config:set NODE_ENV=production
```

4. **Deploy**
```bash
git push heroku main
```

5. **Open App**
```bash
heroku open
```

---

## Alternative: Deploy on Railway

1. Visit: https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose `pip111194/telegram-ai-coder-bot`
5. Add environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `GEMINI_API_KEY`
   - `NODE_ENV=production`
6. Deploy!

---

## Local Development

### Run Locally

1. **Clone Repository**
```bash
git clone https://github.com/pip111194/telegram-ai-coder-bot.git
cd telegram-ai-coder-bot
```

2. **Install Dependencies**
```bash
npm install
```

3. **Create .env File**
```bash
TELEGRAM_BOT_TOKEN=8543254684:AAHc8PCVmxL5pSC2Tg2o9p0my1uu4GuZKu4
GEMINI_API_KEY=AIzaSyCHNzZmCkB6FO4WVG-gpSTlo9g7D4Meyh4
PORT=3000
NODE_ENV=development
```

4. **Start Bot**
```bash
npm start
```

5. **Access Dashboard**
```
http://localhost:3000
```

---

## Troubleshooting

### Bot Not Responding
- Check if TELEGRAM_BOT_TOKEN is correct
- Verify bot is running (check Render logs)
- Make sure you've started the bot with `/start` command

### AI Not Working
- Verify GEMINI_API_KEY is correct
- Check Gemini API quota: https://makersuite.google.com/app/apikey
- Review logs for API errors

### Dashboard Not Loading
- Check if PORT is set correctly
- Verify service is running
- Check Render deployment logs

### View Logs on Render
1. Go to your service dashboard
2. Click "Logs" tab
3. Monitor real-time logs

---

## Environment Variables Explained

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token from @BotFather | Yes |
| `GEMINI_API_KEY` | Google Gemini API key | Yes |
| `PORT` | Server port (auto-set by Render) | No |
| `NODE_ENV` | Environment (production/development) | No |

---

## Post-Deployment Checklist

- ✅ Bot responds to `/start` command
- ✅ Code generation works with `/code`
- ✅ Debug feature works with `/debug`
- ✅ Explanation works with `/explain`
- ✅ Web dashboard is accessible
- ✅ Statistics are updating
- ✅ No errors in logs

---

## Support

If you face any issues:
1. Check Render logs
2. Verify environment variables
3. Test Gemini API key separately
4. Ensure bot token is valid

**Your bot is ready to use!** 🎉