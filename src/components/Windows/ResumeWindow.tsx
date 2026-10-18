import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ResumeWindow: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-[540px]">
      {/* Top Toolbar */}
      <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-rose-500" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            Bhoomi_Gupta_Resume.pdf
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
            Single Page PDF
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Open in new tab button */}
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-200 dark:border-slate-700"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Tab</span>
          </a>

          {/* Download button */}
          <a
            href={profileData.resumePdfUrl}
            download="Bhoomi_Gupta_Resume.pdf"
            className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold transition-all shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* PDF Viewer Frame */}
      <div className="flex-1 w-full h-[calc(100%-48px)] bg-neutral-900/10 dark:bg-black/40 relative">
        <object
          data={`${profileData.resumePdfUrl}#view=FitH`}
          type="application/pdf"
          className="w-full h-full min-h-[500px]"
          aria-label="Bhoomi Gupta Resume PDF"
        >
          {/* Fallback if browser PDF plugin is blocked or on mobile Safari */}
          <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xs">
              <FileText className="w-8 h-8 text-rose-500" />
            </div>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-slate-100">
              Bhoomi Gupta Resume
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Your browser may not support inline PDF previews. You can view or download the resume directly.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={profileData.resumePdfUrl}
                download="Bhoomi_Gupta_Resume.pdf"
                className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold shadow-xs flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <a
                href={profileData.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                Open in Full View
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
};
