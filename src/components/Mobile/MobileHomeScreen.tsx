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
    <MacPhotoFileIcon className="w-full h-full" />
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
      icon: MacProjectsIcon,
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
    <div className="flex-1 flex flex-col justify-between p-4 pb-24 overflow-y-auto min-h-screen">
      {/* Top Mobile Status Bar */}
      <div className="flex items-center justify-between text-xs font-semibold px-2 pt-1 text-slate-800 dark:text-slate-100 select-none">
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

      {/* Hero Info Card */}
      <div className="my-6 text-center space-y-2">
        <div className="relative inline-block">
          <img
            src="/profile.jpg"
            alt={profileData.name}
            className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white/80 dark:border-slate-800 shadow-lg"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {profileData.name}
          </h1>
          <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
            {profileData.title}
          </p>
        </div>

        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
          {profileData.subtitle}
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/50 dark:border-slate-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
          <span>Tap any app to explore my info</span>
        </div>
      </div>

      {/* App Grid (4 columns) */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-3 max-w-sm mx-auto w-full">
        {apps.map((app) => {
          const Icon = app.icon;
          return (
            <button
              key={app.id}
              onClick={() => handleAppClick(app)}
              className="flex flex-col items-center gap-1.5 group focus:outline-none"
            >
              <div className="w-14 h-14 relative active:scale-90 transition-transform">
                {app.badge && (
                  <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 bg-red-500 text-white text-[8px] font-bold rounded-full border border-white z-10 shadow-sm">
                    {app.badge}
                  </span>
                )}
                <div className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                  <Icon className="w-full h-full" />
                </div>
              </div>

              <span className="text-[11px] font-medium text-slate-900 dark:text-slate-100 truncate max-w-[68px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                {app.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom Sticky Quick Dock */}
      <div className="fixed bottom-3 left-4 right-4 z-40 max-w-sm mx-auto">
        <div className="mac-dock-glass p-2.5 rounded-3xl flex items-center justify-around shadow-xl">
          <button
            onClick={() => onOpenApp('about')}
            className="w-12 h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="About Me"
          >
            <MacFinderIcon className="w-full h-full" />
          </button>
          <button
            onClick={() => onOpenApp('projects')}
            className="w-12 h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="Projects"
          >
            <MacProjectsIcon className="w-full h-full" />
          </button>
          <button
            onClick={() => onOpenApp('chat')}
            className="w-12 h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="Ask AI"
          >
            <MacMessagesIcon className="w-full h-full" />
          </button>
          <button
            onClick={() => onOpenApp('mail')}
            className="w-12 h-12 active:scale-90 transition-transform drop-shadow-md"
            aria-label="Mail"
          >
            <MacMailIcon className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};
