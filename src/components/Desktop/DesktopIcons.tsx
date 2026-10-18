import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WindowId } from '../../types';
import {
  MacDesktopFolder,
  MacPdfFileIcon,
  MacTextDocumentIcon,
  MacAirmailIcon,
  MacPhotoFileIcon,
} from './MacIcons';
import { Cpu, Code2 } from 'lucide-react';

interface DesktopIconsProps {
  onOpenApp: (id: WindowId) => void;
}

interface DesktopIconConfig {
  id: WindowId;
  label: string;
  icon: React.ReactNode;
  position: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export const DesktopIcons: React.FC<DesktopIconsProps> = ({ onOpenApp }) => {
  const [selectedId, setSelectedId] = useState<WindowId | null>(null);

  const icons: DesktopIconConfig[] = [
    // Top Left: about me (macOS Text Document with dog-ear fold)
    {
      id: 'about',
      label: 'about me',
      position: { top: '18%', left: '5%' },
      icon: <MacTextDocumentIcon className="w-14 h-16 drop-shadow-md" />,
    },
    // Mid Left: contact me (macOS Airmail Document with stamp and envelope)
    {
      id: 'contact',
      label: 'contact me',
      position: { top: '35%', left: '22%' },
      icon: <MacAirmailIcon className="w-14 h-16 drop-shadow-md" />,
    },
    // Lower Left: skills (Authentic 3D macOS blue folder with skills chip badge)
    {
      id: 'skills',
      label: 'skills',
      position: { top: '62%', left: '13%' },
      icon: (
        <MacDesktopFolder
          className="w-16 h-14"
          badge={<Cpu className="w-5 h-5 text-white/90" />}
        />
      ),
    },
    // Top Right: resume.pdf (Authentic macOS PDF document with folded corner & red PDF badge)
    {
      id: 'resume',
      label: 'resume.pdf',
      position: { top: '19%', right: '11%' },
      icon: <MacPdfFileIcon className="w-14 h-16 drop-shadow-md" />,
    },
    // Mid Right: projects (Authentic 3D macOS blue folder with code badge)
    {
      id: 'projects',
      label: 'projects',
      position: { top: '41%', right: '23%' },
      icon: (
        <MacDesktopFolder
          className="w-16 h-14"
          badge={<Code2 className="w-5 h-5 text-white/90" />}
        />
      ),
    },
    // Lower Right: my picture (Authentic macOS image preview card)
    {
      id: 'photo',
      label: 'my picture',
      position: { top: '62%', right: '13%' },
      icon: <MacPhotoFileIcon className="drop-shadow-md" />,
    },
  ];

  const handleIconClick = (id: WindowId) => {
    setSelectedId(id);
    onOpenApp(id);
  };

  const handleDoubleClick = (id: WindowId) => {
    onOpenApp(id);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSelectedId(null);
        }
      }}
      className="absolute inset-0 pointer-events-none z-20 select-none overflow-hidden"
    >
      {icons.map((item) => {
        const isSelected = selectedId === item.id;
        return (
          <motion.div
            key={item.id}
            drag
            dragMomentum={false}
            dragElastic={0.1}
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              handleIconClick(item.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleDoubleClick(item.id);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onOpenApp(item.id);
              }
            }}
            onTouchEnd={() => {
              onOpenApp(item.id);
            }}
            style={{
              position: 'absolute',
              top: item.position.top,
              bottom: item.position.bottom,
              left: item.position.left,
              right: item.position.right,
            }}
            className={`min-w-[5.5rem] px-2 py-2 rounded-xl flex flex-col items-center text-center cursor-pointer pointer-events-auto group transition-all duration-150 focus:outline-none ${
              isSelected
                ? 'bg-blue-500/15 ring-1 ring-blue-400/40 rounded-xl'
                : 'hover:bg-white/10 dark:hover:bg-white/5'
            }`}
          >
            {/* Icon Graphic Container with strict bounds */}
            <div className="w-16 h-16 flex items-center justify-center relative group-hover:scale-105 group-active:scale-95 transition-transform duration-200">
              {item.icon}
            </div>

            {/* macOS Desktop Icon Label with Authentic Text Shadow & Selection Pill */}
            <span
              className={`mt-1.5 px-2 py-0.5 rounded text-[11px] font-medium tracking-normal leading-tight whitespace-nowrap transition-colors select-none ${
                isSelected
                  ? 'bg-[#0058D0] text-white shadow-sm ring-1 ring-white/30'
                  : 'text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)] [text-shadow:0_1px_2.5px_rgba(0,0,0,0.9),0_0_1px_rgba(0,0,0,0.8)]'
              }`}
            >
              {item.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};
