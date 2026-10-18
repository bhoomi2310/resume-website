import React, { useEffect, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { WindowTrafficLights } from '../UI/WindowTrafficLights';
import { WindowId } from '../../types';

interface WindowFrameProps {
  id: WindowId;
  title: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  isFocused: boolean;
  defaultPosition?: { x: number; y: number };
  defaultWidth?: number | string;
  defaultHeight?: number | string;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  children: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  isFocused,
  defaultPosition = { x: 80, y: 50 },
  defaultWidth = 720,
  defaultHeight = 520,
  onFocus,
  onClose,
  onMinimize,
  onMaximize,
  children,
}) => {
  const dragControls = useDragControls();
  const windowRef = useRef<HTMLDivElement>(null);

  // Close with Esc key when focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFocused && isOpen && !isMinimized) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused, isOpen, isMinimized, onClose]);

  if (!isOpen || isMinimized) {
    return null;
  }

  return (
    <motion.div
      ref={windowRef}
      drag={!isMaximized}
      dragListener={false}
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.05}
      onMouseDown={onFocus}
      onPointerDown={(e) => {
        onFocus();
        const target = e.target as HTMLElement;
        // Don't drag if user is clicking buttons, links, form inputs or interactive tags
        if (target.closest('button, a, input, textarea, select, [data-no-drag]')) {
          return;
        }
        if (!isMaximized) {
          dragControls.start(e);
        }
      }}
      initial={
        isMaximized
          ? { opacity: 0, scale: 0.98 }
          : {
              opacity: 0,
              scale: 0.92,
              x: defaultPosition.x,
              y: defaultPosition.y,
            }
      }
      animate={
        isMaximized
          ? {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 28,
              width: '100vw',
              height: 'calc(100vh - 90px)',
            }
          : {
              opacity: 1,
              scale: 1,
              width: typeof defaultWidth === 'number' ? `${defaultWidth}px` : defaultWidth,
              height: typeof defaultHeight === 'number' ? `${defaultHeight}px` : defaultHeight,
            }
      }
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      style={{
        zIndex,
        position: 'fixed',
        maxWidth: isMaximized ? '100vw' : '96vw',
        maxHeight: isMaximized ? 'calc(100vh - 90px)' : 'calc(100vh - 100px)',
      }}
      className={`mac-glass rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-shadow ${
        isFocused
          ? 'shadow-[#5B2EA6]/25 dark:shadow-black/70 ring-1 ring-[#9B6DFF]/30'
          : 'shadow-[#5B2EA6]/10 dark:shadow-black/40 opacity-95'
      }`}
      role="dialog"
      aria-labelledby={`window-title-${id}`}
      aria-modal="false"
    >
      {/* Window Title Bar / Drag Handle */}
      <div
        onPointerDown={(e) => {
          if (!isMaximized) {
            dragControls.start(e);
          }
        }}
        onDoubleClick={onMaximize}
        className="h-10 px-4 bg-white/40 dark:bg-[#1E1030]/60 border-b border-[#C9B3F5]/30 dark:border-[#9B6DFF]/20 flex items-center justify-between cursor-move select-none flex-shrink-0"
      >
        {/* Left: Traffic Lights */}
        <div className="flex items-center gap-3">
          <WindowTrafficLights
            onClose={onClose}
            onMinimize={onMinimize}
            onMaximize={onMaximize}
            isMaximized={isMaximized}
          />
        </div>

        {/* Center: Title and optional Icon */}
        <div
          id={`window-title-${id}`}
          className="flex items-center gap-2 font-display text-xs sm:text-sm font-semibold text-[#1E1030] dark:text-[#E9DDFB] truncate px-2"
        >
          {icon && <span className="opacity-80 flex-shrink-0">{icon}</span>}
          <span className="truncate">{title}</span>
        </div>

        {/* Right side spacer to keep title perfectly centered */}
        <div className="w-14" />
      </div>

      {/* Window Body / Content Area */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden text-[#1E1030] dark:text-[#E9DDFB]">
        {children}
      </div>
    </motion.div>
  );
};
