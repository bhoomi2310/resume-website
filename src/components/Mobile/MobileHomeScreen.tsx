import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Wifi,
  Battery,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profileData } from '../../data/profile';
import { WindowId } from '../../types';
import {
  MacFinderIcon,
  MacSafariIcon,
  MacProjectsIcon,
  MacBriefcaseIcon,
  MacTerminalIcon,
  MacBooksIcon,
  MacAppStoreIcon,
  MacMusicIcon,
  MacMessagesIcon,
  MacMailIcon,
  MacPreviewIcon,
  MacSquircle,
  MacPhotoFileIcon,
} from '../Desktop/MacIcons';

interface MobileHomeScreenProps {
  onOpenApp: (id: WindowId) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

interface AppIconConfig {
  id: WindowId | 'github' | 'linkedin';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  externalUrl?: string;
  badge?: string;
}

const MobileGithubIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={className}>
    <MacSquircle gradient="from-[#2D333B] to-[#1C2128]">
      <FaGithub className="w-[58%] h-[58%] text-white" />
    </MacSquircle>
  </div>
);

const MobileLinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={className}>
    <MacSquircle gradient="from-[#0A66C2] to-[#004182]">
      <FaLinkedin className="w-[58%] h-[58%] text-white" />
    </MacSquircle>
  </div>
);

const MobilePhotoIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={className}>
    <MacSquircle gradient="from-[#FFFFFF] to-[#F1F5F9]">
      <div className="w-[82%] h-[82%] rounded-xl overflow-hidden bg-gradient-to-b from-sky-400 via-rose-300 to-amber-200 relative flex flex-col justify-between shadow-xs border border-black/10">
        {/* Sun */}
        <div className="absolute top-1.5 right-2 w-3.5 h-3.5 rounded-full bg-amber-100/90 shadow-xs" />
        {/* Scenic Mountains */}
        <div className="w-full h-full flex items-end">
          <svg viewBox="0 0 50 28" className="w-full h-6 fill-indigo-800/85">
            <polygon points="0,28 14,10 28,28" />
            <polygon points="18,28 34,6 50,28" fill="#3730A3" />
          </svg>
        </div>
        {/* JPG Badge at bottom right */}
        <span className="absolute bottom-0.5 right-1 text-[7px] font-extrabold text-white/95 drop-shadow-sm tracking-tight">
          JPG
        </span>
      </div>
    </MacSquircle>
  </div>
);

export const MobileHomeScreen: React.FC<MobileHomeScreenProps> = ({
  onOpenApp,
  isDark,
  onToggleTheme,
}) => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTimeStr(
        new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const apps: AppIconConfig[] = [
    {
      id: 'about',
      label: 'About Me',
      icon: MacFinderIcon,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: MacSafariIcon,
      badge: '7',
    },
    {
      id: 'experience',
      label: 'Experience',
      icon: MacBriefcaseIcon,
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: MacTerminalIcon,
    },
    {
      id: 'education',
      label: 'Education',
      icon: MacBooksIcon,
    },
    {
      id: 'certifications',
      label: 'Achievements',
      icon: MacAppStoreIcon,
    },
    {
      id: 'chat',
      label: 'Ask AI',
      icon: MacMessagesIcon,
      badge: 'AI',
    },
    {
      id: 'music',
      label: 'Music Box',
      icon: MacMusicIcon,
    },
    {
      id: 'mail',
      label: 'Mail',
      icon: MacMailIcon,
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: MacPreviewIcon,
      badge: 'PDF',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: MacMailIcon,
    },
    {
      id: 'photo',
      label: 'My Picture',
      icon: MobilePhotoIcon,
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: MobileGithubIcon,
      isExternal: true,
      externalUrl: 'https://github.com/bhoomi2310',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: MobileLinkedinIcon,
      isExternal: true,
      externalUrl: 'https://www.linkedin.com/in/bhoomi23/',
    },
  ];

  const handleAppClick = (app: AppIconConfig) => {
    if (app.isExternal && app.externalUrl) {
      window.open(app.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenApp(app.id as WindowId);
    }
  };

  return (
    <div className="w-full h-full min-h-[100dvh] flex flex-col justify-start px-3 pt-1 pb-28 sm:pb-32 overflow-y-auto overscroll-contain select-none">
      {/* Top Mobile Status Bar */}
      <div className="flex items-center justify-between text-xs font-semibold px-2 py-1 text-slate-800 dark:text-slate-100 select-none flex-shrink-0">
        <span>{timeStr || '9:41 AM'}</span>
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4" />
          <button
            onClick={onToggleTheme}
            className="p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <div className="flex items-center gap-1">
            <span className="text-[10px]">100%</span>
            <Battery className="w-5 h-5 text-emerald-500 fill-emerald-500" />
          </div>
        </div>
      </div>

      {/* Main Responsive Layout Wrapper (Stack on portrait, side-by-side on landscape) */}
      <div className="flex-1 flex flex-col landscape:flex-row landscape:items-center landscape:justify-center landscape:gap-6 landscape:py-2">
        {/* Hero Info Card */}
        <div className="mt-1 mb-2.5 sm:mb-3.5 landscape:my-0 text-center landscape:text-left space-y-1 sm:space-y-1.5 flex-shrink-0 landscape:max-w-[210px]">
          <div className="relative inline-block">
            <img
              src="/profile.jpg"
              alt={profileData.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto object-cover border-2 border-white/80 dark:border-slate-800 shadow-md"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              {profileData.name}
            </h1>
            <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
              {profileData.title}
            </p>
          </div>

          <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 max-w-[280px] mx-auto landscape:mx-0 leading-tight line-clamp-1 sm:line-clamp-none">
            {profileData.subtitle}
          </p>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-300 text-[10px] sm:text-[11px] font-medium border border-slate-200/50 dark:border-slate-700/50 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span>Tap any app to explore my info</span>
          </div>
        </div>

        {/* App Grid (4 cols in portrait, 7 cols in landscape) */}
        <div className="grid grid-cols-4 landscape:grid-cols-7 gap-y-3.5 sm:gap-y-4 gap-x-2 sm:gap-x-3 max-w-sm landscape:max-w-xl mx-auto w-full pt-1 sm:pt-2">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.id}
                onClick={() => handleAppClick(app)}
                className="flex flex-col items-center gap-1 group focus:outline-none"
              >
                <div className="w-13 h-13 sm:w-14 sm:h-14 relative active:scale-90 transition-transform">
                  {app.badge && (
                    <span className="absolute -top-1 -right-1 px-1.5 py-0.2 bg-red-500 text-white text-[8px] font-bold rounded-full border border-white z-10 shadow-sm">
                      {app.badge}
                    </span>
                  )}
                  <div className="w-full h-full drop-shadow-[0_3px_6px_rgba(0,0,0,0.22)]">
                    <Icon className="w-full h-full" />
                  </div>
                </div>

                <span className="text-[10px] sm:text-[11px] font-medium text-slate-900 dark:text-slate-100 text-center leading-tight max-w-[76px] sm:max-w-[80px] px-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                  {app.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Sticky Quick Dock (hidden in landscape to maximize vertical view) */}
      <div className="fixed bottom-3 left-4 right-4 z-40 max-w-xs sm:max-w-sm mx-auto landscape:hidden pb-[env(safe-area-inset-bottom,0px)]">
        <div className="mac-dock-glass p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl flex items-center justify-around shadow-2xl border border-white/30 dark:border-white/10">
          <button
            onClick={() => onOpenApp('about')}
            className="w-11 h-11 sm:w-12 sm:h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="About Me"
          >
            <MacFinderIcon className="w-full h-full" />
          </button>
          <button
            onClick={() => onOpenApp('projects')}
            className="w-11 h-11 sm:w-12 sm:h-12 active:scale-90 transition-transform drop-shadow-md relative"
            aria-label="Projects"
          >
            <MacSafariIcon className="w-full h-full" />
            <span className="absolute -top-1 -right-1 px-1.5 py-0.2 bg-red-500 text-white text-[8px] font-bold rounded-full border border-white z-10 shadow-xs">
              7
            </span>
          </button>
          <button
            onClick={() => onOpenApp('chat')}
            className="w-11 h-11 sm:w-12 sm:h-12 active:scale-90 transition-transform drop-shadow-md relative"
            aria-label="Ask AI"
          >
            <MacMessagesIcon className="w-full h-full" />
            <span className="absolute -top-1 -right-1 px-1 py-0.2 bg-red-500 text-white text-[8px] font-bold rounded-full border border-white z-10 shadow-xs">
              AI
            </span>
          </button>
          <button
            onClick={() => onOpenApp('mail')}
            className="w-11 h-11 sm:w-12 sm:h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="Mail"
          >
            <MacMailIcon className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};
