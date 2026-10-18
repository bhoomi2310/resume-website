import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
  MacTrashIcon,
} from './MacIcons';

interface DockProps {
  openWindows: WindowId[];
  onOpenApp: (id: WindowId) => void;
}

interface DockItemConfig {
  id: WindowId | 'github' | 'linkedin' | 'trash';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isExternal?: boolean;
  externalUrl?: string;
}

const GithubDockIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={className}>
    <MacSquircle gradient="from-[#2D333B] to-[#1C2128]">
      <FaGithub className="w-[58%] h-[58%] text-white" />
    </MacSquircle>
  </div>
);

const LinkedinDockIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <div className={className}>
    <MacSquircle gradient="from-[#0A66C2] to-[#004182]">
      <FaLinkedin className="w-[58%] h-[58%] text-white" />
    </MacSquircle>
  </div>
);

const dockItems: DockItemConfig[] = [
  {
    id: 'about',
    label: 'About Me',
    icon: MacFinderIcon,
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: MacProjectsIcon,
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
    id: 'music',
    label: 'Music Box',
    icon: MacMusicIcon,
  },
  {
    id: 'chat',
    label: 'Ask Bhoomi AI',
    icon: MacMessagesIcon,
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
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: GithubDockIcon,
    isExternal: true,
    externalUrl: 'https://github.com/bhoomi2310',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: LinkedinDockIcon,
    isExternal: true,
    externalUrl: 'https://www.linkedin.com/in/bhoomi23/',
  },
  {
    id: 'trash',
    label: 'Trash',
    icon: MacTrashIcon,
  },
];

interface DockIconItemProps {
  item: DockItemConfig;
  isOpen: boolean;
  mouseX: any;
  onOpenApp: (id: WindowId) => void;
  onHover: (item: DockItemConfig, elem: HTMLElement) => void;
  onLeave: () => void;
}

const DockIconItem: React.FC<DockIconItemProps> = ({
  item,
  isOpen,
  mouseX,
  onOpenApp,
  onHover,
  onLeave,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from mouse for smooth macOS magnification
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale: 48px standard, up to 70px on hover
  const widthSync = useTransform(distance, [-120, 0, 120], [48, 70, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 200, damping: 14 });

  const handleClick = () => {
    if (item.id === 'trash') {
      alert("Trash is empty — zero junk code here!");
    } else if (item.isExternal && item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpenApp(item.id as WindowId);
    }
  };

  const IconComponent = item.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) {
          onHover(item, ref.current);
        }
      }}
      onMouseLeave={onLeave}
      className="relative flex flex-col items-center justify-end py-0.5"
    >
      {/* Magnified App Icon */}
      <motion.button
        style={{ width, height: width }}
        onClick={handleClick}
        className="flex items-center justify-center focus:outline-none relative group select-none"
        whileTap={{ scale: 0.88 }}
        aria-label={item.label}
      >
        <div className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.28)] transition-transform group-hover:brightness-105">
          <IconComponent className="w-full h-full" />
        </div>
      </motion.button>

      {/* Running indicator dot */}
      <div className="h-1.5 flex items-center justify-center mt-1">
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-1.5 h-1.5 rounded-full bg-slate-900/80 dark:bg-white/90 shadow-[0_0_2px_rgba(255,255,255,0.6)]"
          />
        )}
      </div>
    </div>
  );
};

export const Dock: React.FC<DockProps> = ({ openWindows, onOpenApp }) => {
  const navRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(Infinity);
  const [activeTooltip, setActiveTooltip] = useState<{
    label: string;
    x: number;
    isExternal?: boolean;
  } | null>(null);

  const handleHover = (item: DockItemConfig, elem: HTMLElement) => {
    const iconRect = elem.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    if (navRect) {
      const centerX = iconRect.left + iconRect.width / 2 - navRect.left;
      setActiveTooltip({
        label: item.label,
        x: centerX,
        isExternal: item.isExternal,
      });
    }
  };

  const handleLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <nav
      ref={navRef}
      aria-label="Application Dock"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-full px-2 pointer-events-auto"
    >
      {/* macOS Sliding Dock Tooltip - Positioned above dock, completely unclipped */}
      {activeTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          style={{
            left: activeTooltip.x,
          }}
          className="absolute -top-11 -translate-x-1/2 px-3 py-1 rounded-lg bg-slate-900/90 text-white dark:bg-slate-800/95 dark:text-slate-100 text-[11px] font-semibold tracking-tight shadow-xl backdrop-blur-md whitespace-nowrap pointer-events-none z-50 border border-white/20 flex items-center gap-1.5"
        >
          <span>{activeTooltip.label}</span>
          {activeTooltip.isExternal && <span className="opacity-70 text-[9px]">↗</span>}
          {/* Authentic bottom caret triangle */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-slate-900/90 dark:border-t-slate-800/95" />
        </motion.div>
      )}

      {/* Authentic macOS Dock Glass Tray */}
      <div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => {
          mouseX.set(Infinity);
          setActiveTooltip(null);
        }}
        className="mac-dock-glass px-3 pt-2 pb-1 rounded-3xl flex items-end gap-2.5 sm:gap-3 overflow-visible max-w-[95vw] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_12px_32px_rgba(0,0,0,0.3)]"
      >
        {dockItems.map((item) => {
          const isOpen = openWindows.includes(item.id as WindowId);
          return (
            <React.Fragment key={item.id}>
              {/* Authentic macOS dock divider separating built-in apps, web shortcuts, and trash */}
              {(item.id === 'github' || item.id === 'trash') && (
                <div className="h-10 w-[1px] bg-black/15 dark:bg-white/20 mx-0.5 mb-3 self-center rounded-full pointer-events-none" />
              )}
              <DockIconItem
                item={item}
                isOpen={isOpen}
                mouseX={mouseX}
                onOpenApp={onOpenApp}
                onHover={handleHover}
                onLeave={handleLeave}
              />
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
