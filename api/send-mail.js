const nodemailer = require('nodemailer');

// In-memory rate limiting map for basic protection
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const records = rateLimitMap.get(ip) || [];
  const validRecords = records.filter((time) => now - time < windowMs);

  if (validRecords.length >= maxRequests) {
    return true;
  }

  validRecords.push(now);
  rateLimitMap.set(ip, validRecords);
  return false;
}

module.exports = async (req, res) => {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, hp } = req.body || {};

    // 1. Honeypot check (Spam bot trap)
    if (hp) {
      // Silently discard spam and return fake success
      return res.status(200).json({ success: true, message: 'Message sent successfully.' });
    }

    // 2. Rate limiting check
    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: 'Too many requests. Please try again in 15 minutes.' });
    }

    // 3. Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Please enter your name.' });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }
    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      return res.status(400).json({ error: 'Please enter a subject.' });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ error: 'Message must be at least 5 characters long.' });
    }

    const targetRecipient = 'imbhoomigupta@gmail.com';
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RESEND_API_KEY, WEB3FORMS_ACCESS_KEY } = process.env;

    // 4a. Send via Resend API (Recommended)
    if (RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: [targetRecipient],
          reply_to: email,
          subject: `[Portfolio] ${subject} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error('Resend error:', errText);
        throw new Error('Failed to send email via Resend');
      }

      return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    }

    // 4b. Send via Web3Forms API (Free, zero-config key)
    if (WEB3FORMS_ACCESS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: `[Portfolio] ${subject}`,
          message,
          to: targetRecipient,
        }),
      });

      if (!response.ok) {
        throw new Error('Web3Forms failed to deliver message');
      }

      return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    }

    // 4c. Send via Standard SMTP / Nodemailer (Gmail / Outlook / Custom SMTP)
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${SMTP_USER}>`,
        replyTo: email,
        to: targetRecipient,
        subject: `[Portfolio Contact] ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
      });

      return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    }

    // 4d. Preview mode (when credentials haven't been added to Vercel/env yet)
    return res.status(200).json({
      success: true,
      simulated: true,
      message: 'Email service preview: add RESEND_API_KEY or SMTP credentials in your environment variables to deliver live inbox messages.',
    });
  } catch (error) {
    console.error('Mail error:', error);
    return res.status(500).json({ error: 'Failed to send message. Please click the mailto button to send directly.' });
  }
};
