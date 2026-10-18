import React from 'react';
import { Mail, FileText, MapPin, GraduationCap, Award, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/BrandIcons';
import { profileData } from '../../data/profile';
import { WindowId } from '../../types';

interface AboutWindowProps {
  onOpenApp: (id: WindowId) => void;
}

export const AboutWindow: React.FC<AboutWindowProps> = ({ onOpenApp }) => {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Top Banner / Hero Card */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gradient-to-br from-sky-50/70 via-white/80 to-indigo-50/60 dark:from-slate-900/80 dark:via-slate-800/80 dark:to-slate-900/80 p-5 rounded-2xl border border-sky-100 dark:border-slate-800 shadow-xs">
        <div className="relative group flex-shrink-0">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-slate-700">
            <img
              src={profileData.photoUrl}
              alt={profileData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-slate-100">
                {profileData.name}
              </h2>
              <p className="text-sm font-medium text-sky-700 dark:text-sky-300">
                {profileData.subtitle}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold self-center sm:self-start">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to SDE, Data Analyst & AI Roles</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-600 dark:text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>NSUT Delhi (2024 - 2028)</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Delhi / Gurugram, India</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-2.5">
        <h3 className="text-base font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span>About Me</span>
        </h3>
        <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal">
          {profileData.bio}
        </p>
      </div>

      {/* Actions and Socials */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenApp('resume')}
            className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume PDF</span>
          </button>
          <button
            onClick={() => onOpenApp('mail')}
            className="px-3.5 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>Send Email</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-[#0A66C2] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
