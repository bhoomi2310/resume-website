import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, MessageSquare } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const ChatbotWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'assistant',
      text: "Hi there! I am Bhoomi's AI assistant. Ask me anything about her projects, internships at Genpact or RITES, technical skills, or education at NSUT.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What projects has Bhoomi built?",
    "Tell me about her Genpact internship",
    "What are her skills?",
    "Where does she study?",
    "How can I contact her?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Intelligent local keyword fallback matching verified resume facts
  const getLocalAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('genpact') || q.includes('intern') || q.includes('experience') || q.includes('work')) {
      if (q.includes('rites')) {
        return "At RITES Ltd. (May 2026 to Jul 2026), Bhoomi built a full-stack Executive Health Checkup system using React.js, Node.js, and SQL Server with SAP integration and production-grade REST APIs.";
      }
      return "Bhoomi interned at Genpact as an Agentic AI Intern (Jun 2026 to Aug 2026) in Gurugram. She developed a multi-agent Balance Sheet Reconciliation System and contributed to a production-grade Agentic Failure Monitoring & Auto-Triage System using Azure OpenAI GPT-5.5, ArcadeDB Knowledge Graphs, and SQL Server.";
    }

    if (q.includes('project') || q.includes('built') || q.includes('apps') || q.includes('dsabuddy') || q.includes('wajah') || q.includes('workmark')) {
      return "Bhoomi has built several notable platforms: DSABuddy (PERN placement prep platform serving 1000+ users), Wajah (serverless AWS SAM pollution control room with closed-loop verification and AI assistant), WorkMark (MERN micro-internship platform with Azure OpenAI scoring), and Epsilon (Adobe Express AI compliance tool, Grand Finalist).";
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('tech') || q.includes('react') || q.includes('python')) {
      return "Her core technical skills include Languages (C, C++, JavaScript, TypeScript, Python), Frontend (React.js, Tailwind CSS, shadcn/ui), Backend (Node.js, Express.js, REST APIs, JWT), Databases (MongoDB, PostgreSQL, MySQL, SQL Server, ArcadeDB), and Tools/Cloud/AI (AWS, Azure OpenAI, Git, Linux, Postman).";
    }

    if (q.includes('education') || q.includes('college') || q.includes('nsut') || q.includes('school') || q.includes('study')) {
      return "Bhoomi is a third-year undergraduate pursuing B.Tech in Instrumentation and Control Engineering at Netaji Subhas University of Technology (NSUT), Delhi (2024 to 2028). She completed Class XII at Amity International School Pushp Vihar (94.4%) and Class X at Amity Sec 46 Gurugram (99.4%).";
    }

    if (q.includes('achievement') || q.includes('award') || q.includes('hackathon') || q.includes('rank')) {
      return "Her key achievements include Grand Finalist in Adobe Express Add-ons Hackathon (Epsilon), Semi-Finalist in DTU brAInwave'24 (Medeliver), Top 75 Coders in Amazon Hack On 2026, and Semi-Finalist in Flipkart GRID 8.0.";
    }

    if (q.includes('role') || q.includes('target') || q.includes('analyst') || q.includes('sde') || q.includes('hiring') || q.includes('looking for')) {
      return "Bhoomi is open to Software Development Engineer (SDE), Data Analyst, and Cloud / AI roles. She brings hands-on experience in full-stack architecture, data analytics, SQL/NoSQL databases, and autonomous AI agents.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire')) {
      return "You can reach Bhoomi via email at imbhoomigupta@gmail.com, or connect on LinkedIn (linkedin.com/in/bhoomi23) and GitHub (github.com/bhoomi2310).";
    }

    if (q.includes('leadership') || q.includes('debugging') || q.includes('ieee') || q.includes('tedx')) {
      return "Bhoomi serves as Joint General Secretary at The Debugging Society NSUT, Joint Secretary at IEEE NSUT, and Core Member at TEDxNSUT, leading technical project teams and organizing flagship hackathons.";
    }

    return "I don't have that info, you can email Bhoomi directly at imbhoomigupta@gmail.com.";
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.sender, content: m.text })),
        }),
      });

      const data = await response.json();

      let replyText = '';
      if (response.ok && data.reply && !data.fallback) {
        replyText = data.reply;
      } else {
        replyText = getLocalAnswer(text);
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now()}-reply`,
            sender: 'assistant',
            text: replyText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
      }, 400);

    } catch (err) {
      console.error('Chat error:', err);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now()}-fallback`,
            sender: 'assistant',
            text: getLocalAnswer(text),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col h-full min-h-[500px]">
      {/* Top Messages Bar */}
      <div className="px-5 py-3 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="font-display font-bold text-xs text-slate-900 dark:text-slate-100">
              Ask Bhoomi AI
            </div>
            <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Verified Resume Context</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            setMessages([
              {
                id: 'msg-reset',
                sender: 'assistant',
                text: "Chat refreshed. What else would you like to know about Bhoomi?",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              },
            ]);
          }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages History List */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center text-xs flex-shrink-0 mb-1">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[80%] sm:max-w-[70%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none'
                }`}
              >
                <p className="select-text">{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 text-right ${
                    isUser ? 'text-blue-100' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>

              {isUser && (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs flex-shrink-0 mb-1">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-bl-none flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Question Chips */}
      <div className="px-5 py-2 overflow-x-auto no-scrollbar flex items-center gap-2 border-t border-slate-200/80 dark:border-slate-800">
        <MessageSquare className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-600 dark:hover:text-sky-400 transition-all whitespace-nowrap flex-shrink-0 shadow-xs"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-4 bg-slate-50/70 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
      >
        <input
          type="text"
          placeholder="Ask a question about Bhoomi..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isTyping}
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 transition-all shadow-xs cursor-pointer"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
