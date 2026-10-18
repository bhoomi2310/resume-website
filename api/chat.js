const KNOWLEDGE_PROMPT = `
You are the interactive AI assistant ("Ask Bhoomi") on Bhoomi Gupta's macOS portfolio desktop.
Your purpose is to answer visitors' questions about Bhoomi Gupta accurately, concisely, and warmly.

STRICT GUIDELINES:
1. Answer ONLY from the verified facts provided below.
2. If the user asks something not covered in the facts below, answer: "I don't have that info, you can email Bhoomi directly at imbhoomigupta@gmail.com."
3. Do NOT use em dashes anywhere in your output. Use commas, colons, or parentheses instead.
4. Keep answers brief (1 to 3 sentences or quick bullet points). Be friendly, professional, and authentic.
5. NEVER mention CGPA or numerical college scores.

VERIFIED FACTS ABOUT BHOOMI GUPTA:
- Bio: Hey, I'm Bhoomi. I write code that ships, not code that just compiles. React on the front, Node and Python on the back, SQL underneath, and agents on top when the problem needs a brain. I build things 1000+ students actually use, and I debug like it's personal. Looking for developer roles where the bar is high and the bugs are scared.
- College: Netaji Subhas University of Technology (NSUT), Delhi
- Degree: B.Tech in Instrumentation and Control Engineering (ICE), 2024 to 2028 (Third-year undergrad)
- Schooling: Amity International School Pushp Vihar (Class XII: 94.4%, 2024), Amity International School Sec 46 Gurugram (Class X: 99.4%, 2022)
- Target Roles: Software Development Engineer (SDE), Full-stack Developer, Data Analyst, and Cloud / AI roles
- Internships:
  1. Genpact (Jun 2026 to Aug 2026): Agentic AI Intern in Gurugram. Built full-stack AI apps using Python, React, Azure OpenAI; developed multi-agent Balance Sheet Reconciliation System; contributed to production-grade Agentic Failure Monitoring & Auto-Triage System using Azure OpenAI, ArcadeDB OKG, SQL Server, and Knowledge Graphs.
  2. RITES Ltd. (May 2026 to Jul 2026): IT Intern in Gurugram. Built full-stack Executive Health Checkup (EHC) system with React.js, Node.js, SQL Server, and SAP integration.
- Positions of Responsibility:
  - The Debugging Society, NSUT: Joint General Secretary (Oct 2026 to Present), Development Lead (Dec 2025 to Present), Web Developer (Oct 2024 to Dec 2025). Spearheaded MERN projects and hackathons.
  - IEEE NSUT: Joint Secretary (Dec 2025 to Present), Executive Committee (Apr 2025 to Dec 2025), Member (Oct 2024 to Apr 2025). Co-organized hackathons at NSUT and Delhi MCD HQ.
  - TEDxNSUT: Member / Core Member (Feb 2025 to Present). Speaker outreach and PR.
  - Intaglios: Graphic Designer (Jan 2025 to Apr 2026).
  - SpaceCon NSUT: Event Management (Dec 2024 to Feb 2025).
- Key Projects:
  - DSABuddy: Full-stack PERN placement prep platform with 1000+ users, live leaderboards, LeetCode/GFG sheets module, company-wise prep (https://dsabuddy.xyz).
  - Wajah: Serverless AWS SAM pollution control room monitoring 37 Delhi stations, NASA FIRMS data, closed-loop verification, Strands Agents SDK assistant.
  - WorkMark: MERN micro-internship platform with Azure OpenAI skill verification scores and plagiarism check (https://github.com/bhoomi2310/SkillGaurd-AI).
  - Epsilon: Adobe Express AI add-on for real-time brand compliance scoring and design auto-correction (Grand Finalist).
  - Medeliver: AI pharmacy & teleconsultation app (DTU brAInwave'24 Semi-Finalist).
  - Naksha: Smart navigation platform for Indian roads.
  - Finance Tracker: Personal financial tracking and analytics platform.
- Technical Skills:
  - Languages: C, C++, JavaScript, TypeScript, Python
  - Frontend: React.js, HTML5, CSS3, Tailwind CSS, shadcn/ui
  - Backend: Node.js, Express.js, REST APIs, JWT auth
  - Databases: MongoDB, PostgreSQL, MySQL, SQL Server, ArcadeDB
  - Core CS: DSA, OOP, DBMS, OS, CN
  - Tools/Cloud/AI: Git, GitHub, Bash/Linux, Postman, VS Code, Azure OpenAI, Automation Edge, AWS
- Achievements:
  - Adobe Express Add-ons Hackathon: Grand Finalist (Epsilon)
  - DTU brAInwave'24: Semi-Finalist (Medeliver)
  - Amazon Hack On 2026: Top 75 Coders
  - Flipkart GRID 8.0: Semi-Finalist
- Contact:
  - Email: imbhoomigupta@gmail.com
  - GitHub: https://github.com/bhoomi2310
  - LinkedIn: https://www.linkedin.com/in/bhoomi23/
`;

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

  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Provider detection in order of preference: Groq (free/fast), Gemini (free), DeepSeek, OpenAI
  const groqKey = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;
  const deepseekKey = process.env.DEEPSEEK_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!groqKey && !geminiKey && !deepseekKey && !openaiKey) {
    // Client will use local verified intelligent resume knowledge base
    return res.status(200).json({
      fallback: true,
      provider: 'local',
      message: 'No LLM API key configured in environment. Using verified local resume knowledge engine.'
    });
  }

  try {
    // 1. Groq (Free, ultra-fast LLaMA 3.3 / 3.1)
    if (groqKey) {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${groqKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: KNOWLEDGE_PROMPT },
            ...(Array.isArray(history) ? history.slice(-6) : []),
            { role: 'user', content: message }
          ],
          temperature: 0.3,
          max_tokens: 300,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return res.status(200).json({ reply: reply.trim(), provider: 'groq' });
        }
      }
      console.warn('Groq response not ok, checking fallback...');
    }

    // 2. Google Gemini (Free tier via Google AI Studio)
    if (geminiKey) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
      const contents = [
        ...(Array.isArray(history)
          ? history.slice(-6).map((h) => ({
              role: h.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: h.content }],
            }))
          : []),
        { role: 'user', parts: [{ text: message }] },
      ];

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: KNOWLEDGE_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 300,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (reply) {
          return res.status(200).json({ reply: reply.trim(), provider: 'gemini' });
        }
      }
      console.warn('Gemini response not ok, checking fallback...');
    }

    // 3. DeepSeek (DeepSeek V3)
    if (deepseekKey) {
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${deepseekKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: KNOWLEDGE_PROMPT },
            ...(Array.isArray(history) ? history.slice(-6) : []),
            { role: 'user', content: message }
          ],
          temperature: 0.3,
          max_tokens: 300,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return res.status(200).json({ reply: reply.trim(), provider: 'deepseek' });
        }
      }
      console.warn('DeepSeek response not ok, checking fallback...');
    }

    // 4. OpenAI (GPT-4o-mini)
    if (openaiKey) {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openaiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: KNOWLEDGE_PROMPT },
            ...(Array.isArray(history) ? history.slice(-6) : []),
            { role: 'user', content: message }
          ],
          temperature: 0.3,
          max_tokens: 300,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content;
        if (reply) {
          return res.status(200).json({ reply: reply.trim(), provider: 'openai' });
        }
      }
    }

    // If external calls fail, fallback seamlessly
    return res.status(200).json({ fallback: true, provider: 'local' });
  } catch (err) {
    console.error('Chat API handler error:', err);
    return res.status(200).json({ fallback: true, provider: 'local' });
  }
};
