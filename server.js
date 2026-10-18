const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');

// Automatically load local .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key] && val) {
          process.env[key] = val;
        }
      }
    }
  });
}

const chatHandler = require('./api/chat.js');
const mailHandler = require('./api/send-mail.js');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Bhoomi Gupta Portfolio Backend',
    llmConfigured: Boolean(
      process.env.GROQ_API_KEY ||
      process.env.GEMINI_API_KEY ||
      process.env.DEEPSEEK_API_KEY ||
      process.env.OPENAI_API_KEY
    ),
    mailConfigured: Boolean(
      process.env.RESEND_API_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      (process.env.SMTP_HOST && process.env.SMTP_USER)
    ),
  });
});

// Serverless function wrappers for Express
app.post('/api/chat', async (req, res) => {
  try {
    await chatHandler(req, res);
  } catch (err) {
    console.error('Express /api/chat error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/send-mail', async (req, res) => {
  try {
    await mailHandler(req, res);
  } catch (err) {
    console.error('Express /api/send-mail error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend API server running at http://localhost:${PORT}`);
  console.log(`  - Health Check: http://localhost:${PORT}/api/health`);
  console.log(`  - Chat API:     http://localhost:${PORT}/api/chat`);
  console.log(`  - Mail API:     http://localhost:${PORT}/api/send-mail`);
});
