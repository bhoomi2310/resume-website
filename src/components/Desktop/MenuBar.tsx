import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Volume2, Sun, Moon, Command } from 'lucide-react';
import { FaApple } from 'react-icons/fa';

interface MenuBarProps {
  activeAppName?: string;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenApp: (id: any) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  activeAppName = "Finder",
  isDark,
  onToggleTheme,
  onOpenApp,
}) => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const dateFormatted = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      const timeFormatted = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setDateStr(dateFormatted);
      setTimeStr(timeFormatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-7 z-50 mac-menu-glass flex items-center justify-between px-3 text-xs text-slate-800 dark:text-slate-200 transition-colors select-none font-medium">
      {/* Left side: Logo, Name, Active App, Menu items */}
      <div className="flex items-center gap-4">
        {/* Apple Logo with menu dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-1.5 px-1.5 py-0.5 rounded hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors focus:outline-none"
            aria-label="System Menu"
          >
            <FaApple className="w-3.5 h-3.5 text-slate-800 dark:text-slate-100" />
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white">
              Bhoomi Gupta
            </span>
          </button>

          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="absolute top-7 left-0 w-52 py-1.5 mac-glass rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-700/70 z-50 animate-in fade-in zoom-in-95 duration-100 text-slate-800 dark:text-slate-200">
                <button
                  onClick={() => {
                    onOpenApp('about');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-sky-500 hover:text-white flex items-center justify-between transition-colors text-xs"
                >
                  <span>About This Portfolio</span>
                  <span className="text-[10px] opacity-60">⌘I</span>
                </button>
                <button
                  onClick={() => {
                    onOpenApp('resume');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-sky-500 hover:text-white flex items-center justify-between transition-colors text-xs"
                >
                  <span>View Resume</span>
                  <span className="text-[10px] opacity-60">⌘R</span>
                </button>
                <div className="my-1 border-t border-slate-200/60 dark:border-slate-700/50" />
                <button
                  onClick={() => {
                    onToggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-sky-500 hover:text-white flex items-center justify-between transition-colors text-xs"
                >
                  <span>Toggle {isDark ? "Light" : "Dark"} Mode</span>
                  <span className="text-[10px] opacity-60">⌘T</span>
                </button>
                <div className="my-1 border-t border-slate-200/60 dark:border-slate-700/50" />
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  className="w-full text-left px-3 py-1.5 hover:bg-sky-500 hover:text-white flex items-center justify-between transition-colors text-xs"
                >
                  <span>Restart Desktop</span>
                  <span className="text-[10px] opacity-60">⌘⇧R</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Active Application / Window Indicator */}
        <span className="font-semibold text-slate-700 dark:text-slate-300 hidden sm:inline-block">
          {activeAppName}
        </span>

        {/* Standard macOS Menu Items */}
        <nav className="hidden md:flex items-center gap-3 opacity-80 text-xs">
          <button onClick={() => onOpenApp('projects')} className="hover:opacity-100 transition-opacity">
            Projects
          </button>
          <button onClick={() => onOpenApp('experience')} className="hover:opacity-100 transition-opacity">
            Experience
          </button>
          <button onClick={() => onOpenApp('skills')} className="hover:opacity-100 transition-opacity">
            Skills
          </button>
          <button onClick={() => onOpenApp('certifications')} className="hover:opacity-100 transition-opacity">
            Achievements
          </button>
          <button onClick={() => onOpenApp('chat')} className="hover:opacity-100 transition-opacity">
            Ask AI
          </button>
        </nav>
      </div>

      {/* Right side: Flavor controls & Live clock */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="p-1 rounded hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors flex items-center text-slate-700 dark:text-slate-300"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
        </button>

        {/* Volume icon */}
        <button
          onClick={() => onOpenApp('music')}
          className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors hidden sm:block"
          title="Music Box"
        >
          <Volume2 className="w-3.5 h-3.5" />
        </button>

        {/* Wi-Fi */}
        <span className="hidden sm:inline-flex items-center" title="Wi-Fi: Connected">
          <Wifi className="w-3.5 h-3.5" />
        </span>

        {/* Battery with percentage */}
        <div className="hidden sm:flex items-center gap-1 opacity-90" title="Battery: 100%">
          <span className="text-[10px]">100%</span>
          <Battery className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        </div>

        {/* Live Date and Time */}
        <div className="flex items-center gap-1.5 font-medium tabular-nums pl-1 border-l border-slate-300/60 dark:border-slate-700/60">
          <span className="hidden lg:inline">{dateStr}</span>
          <span>{timeStr}</span>
        </div>
      </div>
    </header>
  );
};
