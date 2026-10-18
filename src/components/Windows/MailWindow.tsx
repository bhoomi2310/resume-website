import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';

export const MailWindow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_hp: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          hp: formData.website_hp,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Your message was sent successfully!');
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#38BDF8', '#34D399', '#FB7185', '#A78BFA'],
        });
        setFormData({ name: '', email: '', subject: '', message: '', website_hp: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to deliver message. Please use the direct mailto button below.');
      }
    } catch (err) {
      console.error('Mail submit error:', err);
      setStatus('error');
      setStatusMessage('Network error occurred. You can use the direct email button below.');
    }
  };

  const mailtoFallbackUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `From: ${formData.name || 'Visitor'} (${formData.email || 'Email'})\n\n${formData.message}`
  )}`;

  return (
    <div className="flex flex-col h-full min-h-[500px]">
      {/* Top Mail Header Bar */}
      <div className="px-6 py-3 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
          <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>New Message</span>
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400">
          To: <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{profileData.email}</span>
        </div>
      </div>

      {/* Compose Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3.5">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_hp}
              onChange={handleChange}
            />
          </div>

          {/* From Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Alex Sharma"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              required
              placeholder="SDE Opportunity / Full-stack Collaboration"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Message Body */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Hi Bhoomi, I came across your portfolio and wanted to connect about..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Status Message */}
          {status === 'success' && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{statusMessage}</span>
              </div>
              <a
                href={mailtoFallbackUrl}
                className="underline font-semibold flex-shrink-0"
              >
                Use mailto:
              </a>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            href={mailtoFallbackUrl}
            className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:underline flex items-center gap-1 font-medium"
          >
            <span>Open in default email client</span>
          </a>

          <div className="flex items-center gap-2">
            {status === 'success' && (
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-3 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Write Another</span>
              </button>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
