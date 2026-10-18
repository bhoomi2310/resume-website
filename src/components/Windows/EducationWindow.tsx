import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';

export const EducationWindow: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-500" />
            <span>Academic Background</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Formal educational qualifications and institutions
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {educationData.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-white/85 dark:bg-slate-900/85 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-slate-100">
                  {item.degree}
                </h3>
                <p className="text-sm font-semibold text-sky-700 dark:text-sky-300">
                  {item.institution}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Score Badge */}
              {item.score && (
                <div className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 flex items-center gap-2 shadow-xs">
                  <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <div className="text-right">
                    <div className="text-xs font-bold leading-tight">{item.score}</div>
                    <div className="text-[9px] uppercase tracking-wider opacity-75 leading-none">
                      {item.scoreType}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
