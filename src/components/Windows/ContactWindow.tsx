import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/BrandIcons';
import confetti from 'canvas-confetti';
import { profileData } from '../../data/profile';
import { WindowId } from '../../types';

interface ContactWindowProps {
  onOpenApp: (id: WindowId) => void;
}

export const ContactWindow: React.FC<ContactWindowProps> = ({ onOpenApp }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#34D399', '#F43F5E', '#A78BFA'],
    });
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactItems = [
    {
      key: 'email',
      label: 'Email Address',
      value: profileData.email,
      icon: Mail,
      iconColor: 'text-sky-600 dark:text-sky-400',
      actionUrl: `mailto:${profileData.email}`,
      actionLabel: 'Open Mail Client',
    },
    {
      key: 'github',
      label: 'GitHub Profile',
      value: profileData.github,
      icon: GithubIcon,
      iconColor: 'text-slate-800 dark:text-slate-200',
      actionUrl: profileData.github,
      actionLabel: 'Visit GitHub',
      isExternal: true,
    },
    {
      key: 'linkedin',
      label: 'LinkedIn Profile',
      value: profileData.linkedin,
      icon: LinkedinIcon,
      iconColor: 'text-[#0A66C2]',
      actionUrl: profileData.linkedin,
      actionLabel: 'Connect on LinkedIn',
      isExternal: true,
    },
  ];

  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>Get in Touch</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Reach out directly for SDE roles, collaborations, or tech discussions
          </p>
        </div>

        <button
          onClick={() => onOpenApp('mail')}
          className="px-3.5 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Open Mailer</span>
        </button>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const isCopied = copiedKey === item.key;

          return (
            <div
              key={item.key}
              className="p-5 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 transition-all space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className={item.iconColor}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{item.label}</span>
                </div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 break-all select-text font-mono">
                  {item.value}
                </div>
              </div>

              {/* Actions: Copy + Open */}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => copyToClipboard(item.value, item.key)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
                  }`}
                  aria-label={`Copy ${item.label}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={item.actionUrl}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="py-1.5 px-3 rounded-lg bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-xs font-medium transition-all flex items-center justify-center gap-1"
                >
                  <span>Open</span>
                  {item.isExternal ? <ExternalLink className="w-3 h-3" /> : null}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Friendly Bottom Banner */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
        <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Prefer using the in-app Mail composer? Click <button onClick={() => onOpenApp('mail')} className="font-bold underline text-teal-600 dark:text-teal-400">Mailer</button> on the dock to send a direct message without leaving the portfolio.
        </p>
      </div>
    </div>
  );
};
