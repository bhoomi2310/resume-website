import React from 'react';
import { Briefcase, Calendar, MapPin, Building, Users } from 'lucide-react';
import { experiencesData } from '../../data/experience';

export const ExperienceWindow: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-rose-500" />
            <span>Work and Leadership Experience</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Chronological journey across enterprise internships and engineering leadership
          </p>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-7 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-rose-400 before:via-sky-400 before:to-emerald-400">
        {experiencesData.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-6 sm:-left-8 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center shadow-xs group-hover:scale-115 transition-transform">
              <div className="w-2 h-2 rounded-full bg-sky-500" />
            </div>

            {/* Experience Card */}
            <div className="p-5 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-slate-100">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                    <span className="flex items-center gap-1 text-slate-800 dark:text-slate-200">
                      {item.category === 'internship' ? (
                        <Building className="w-3.5 h-3.5 text-sky-600" />
                      ) : (
                        <Users className="w-3.5 h-3.5 text-rose-600" />
                      )}
                      {item.company}
                    </span>
                    <span className="opacity-40">•</span>
                    <span className="flex items-center gap-1 font-normal text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.period}
                  </span>
                </div>
              </div>

              {item.tag && (
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-[11px] font-semibold">
                  {item.tag}
                </div>
              )}

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1 font-bold text-sm leading-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {item.skills && item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[10px] font-medium border border-slate-200/60 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
