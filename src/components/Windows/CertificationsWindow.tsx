import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { achievementsData } from '../../data/achievements';

export const CertificationsWindow: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Achievements</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Competitive hackathon rankings and official recognitions
          </p>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between"
          >
            <div>
              <div className="mb-1.5">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>

              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                {item.organization}
              </div>

              {item.projectOrNote && (
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.projectOrNote}
                </p>
              )}
            </div>

            {item.link && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
