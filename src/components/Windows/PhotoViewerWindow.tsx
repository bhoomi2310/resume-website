import React, { useState } from 'react';
import { Download, Image as ImageIcon } from 'lucide-react';
import { profileData } from '../../data/profile';

export const PhotoViewerWindow: React.FC = () => {
  const [frameStyle, setFrameStyle] = useState<'polaroid' | 'circle' | 'clean'>('polaroid');

  return (
    <div className="flex flex-col h-full min-h-[500px]">
      {/* Top Toolbar */}
      <div className="px-5 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-amber-500" />
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            profile.jpg
          </span>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          {/* Frame Style toggle */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-200/60 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setFrameStyle('polaroid')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                frameStyle === 'polaroid' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              Polaroid
            </button>
            <button
              onClick={() => setFrameStyle('circle')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                frameStyle === 'circle' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              Circle
            </button>
            <button
              onClick={() => setFrameStyle('clean')}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                frameStyle === 'clean' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500'
              }`}
            >
              Clean
            </button>
          </div>

          <a
            href={profileData.photoUrl}
            download="Bhoomi_Gupta.jpg"
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
            title="Download Image"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Image Canvas */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center overflow-hidden bg-neutral-900/5 dark:bg-black/20 relative">
        <div className="transition-transform duration-300 flex items-center justify-center">
          {frameStyle === 'polaroid' && (
            <div className="bg-white dark:bg-slate-800 p-4 pb-6 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700 max-w-xs sm:max-w-sm text-center">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 font-display font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5">
                <span className="text-rose-500">❤</span>
                <span>{profileData.name}</span>
                <span className="text-xs text-slate-400 font-normal">• NSUT Delhi</span>
              </div>
            </div>
          )}

          {frameStyle === 'circle' && (
            <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-inner">
                <img
                  src={profileData.photoUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {frameStyle === 'clean' && (
            <div className="max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
              <img
                src={profileData.photoUrl}
                alt={profileData.name}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
