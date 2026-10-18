import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Bot, FolderGit2 } from 'lucide-react';
import { CoquetteBow } from '../UI/CoquetteBow';
import { profileData } from '../../data/profile';
import { WindowId } from '../../types';

interface DesktopGreetingProps {
  onOpenApp: (id: WindowId) => void;
}

export const DesktopGreeting: React.FC<DesktopGreetingProps> = ({ onOpenApp }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4 pt-12 pb-24 select-none">
      <div className="max-w-2xl text-center pointer-events-auto flex flex-col items-center">
        
        {/* Restored Polaroid Profile Picture with Washi Tape and Coquette Ribbon Bow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-5 cursor-pointer group"
          onClick={() => onOpenApp('photo')}
          title="Click to view photo"
        >
          {/* Pastel Peach Washi Tape on top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-200/85 dark:bg-amber-300/60 backdrop-blur-xs shadow-xs rotate-[-2deg] rounded-xs z-20 border border-white/50" />

          {/* Coquette Ribbon Bow pinned on the Polaroid corner */}
          <div className="absolute -top-4 -right-4 z-30 pointer-events-none group-hover:scale-110 transition-transform duration-300">
            <CoquetteBow size={46} className="w-10 h-10 sm:w-11 sm:h-11 drop-shadow-md" />
          </div>

          {/* Polaroid Frame */}
          <div className="p-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/50 border border-slate-200/80 dark:border-slate-800 transform rotate-1 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden relative border border-slate-100 dark:border-slate-800">
              <img
                src={profileData.photoUrl}
                alt={profileData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile.jpg";
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Restored Previous Heading: Hey, this is Bhoomi */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] dark:drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] mb-3"
        >
          {profileData.greeting}
        </motion.h1>

        {/* Restored Subtitle in frosted macOS pill for perfect contrast */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xs sm:text-sm md:text-base font-medium max-w-xl mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/75 dark:bg-slate-900/75 backdrop-blur-md border border-white/50 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-sm">
            {profileData.subtitle}
          </span>
        </motion.p>

        {/* Multi-color Action Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-7"
        >
          {/* Projects - Pastel Sky Blue */}
          <button
            onClick={() => onOpenApp('projects')}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-slate-700/80 border border-sky-200 dark:border-sky-800 text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-300 transition-all shadow-xs flex items-center gap-1.5 group"
          >
            <FolderGit2 className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
            <span>Explore Projects</span>
          </button>

          {/* AI Chatbot - Pastel Mint */}
          <button
            onClick={() => onOpenApp('chat')}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-slate-700/80 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300 transition-all shadow-xs flex items-center gap-1.5 group"
          >
            <Bot className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
            <span>Ask Bhoomi AI</span>
          </button>

          {/* Resume - Pastel Rose / Coral */}
          <button
            onClick={() => onOpenApp('resume')}
            className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-rose-50 dark:hover:bg-slate-700/80 border border-rose-200 dark:border-rose-800 text-xs sm:text-sm font-semibold text-rose-700 dark:text-rose-300 transition-all shadow-xs flex items-center gap-1.5 group"
          >
            <FileText className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
            <span>Resume PDF</span>
          </button>
        </motion.div>

        {/* Tip Note with Subtle Pointing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-xs text-xs text-slate-700 dark:text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span>{profileData.hint}</span>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-slate-400 dark:text-slate-500"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};
