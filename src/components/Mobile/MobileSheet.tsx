import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { WindowId } from '../../types';

interface MobileSheetProps {
  id: WindowId | null;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const MobileSheet: React.FC<MobileSheetProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Full Screen Sheet Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="relative w-full h-[92vh] mac-glass rounded-t-3xl flex flex-col overflow-hidden shadow-2xl border-t border-[#C9B3F5]/40"
          >
            {/* Top Sheet Drag/Header Bar */}
            <div className="pt-3 pb-2 px-5 flex flex-col items-center border-b border-[#C9B3F5]/30 dark:border-[#9B6DFF]/20 bg-white/40 dark:bg-[#1E1030]/60 flex-shrink-0">
              {/* Sheet Grab Handle */}
              <div className="w-12 h-1.5 rounded-full bg-[#9B6DFF]/40 mb-3" />

              <div className="w-full flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-gray-500 hover:text-black dark:hover:text-white"
                  aria-label="Close"
                >
                  <ChevronDown className="w-5 h-5 text-[#5B2EA6] dark:text-[#C9B3F5]" />
                </button>

                <h2 className="font-display font-bold text-sm text-[#1E1030] dark:text-[#E9DDFB] truncate px-2">
                  {title}
                </h2>

                <button
                  onClick={onClose}
                  className="w-7 h-7 rounded-full bg-[#5B2EA6]/20 flex items-center justify-center text-[#5B2EA6] dark:text-[#C9B3F5]"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sheet Scrollable Body */}
            <div className="flex-1 overflow-y-auto overscroll-contain">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
