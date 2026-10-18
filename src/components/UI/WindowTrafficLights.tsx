import React, { useState } from 'react';

interface WindowTrafficLightsProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized?: boolean;
}

export const WindowTrafficLights: React.FC<WindowTrafficLightsProps> = ({
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-2 group py-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="group"
      aria-label="Window management buttons"
    >
      {/* Close button - Authentic Red */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF3B30] border border-[#E0443E] flex items-center justify-center transition-all shadow-xs"
        aria-label="Close window"
        title="Close"
      >
        {isHovered && (
          <span className="text-[8px] font-bold text-[#4C0002] leading-none">✕</span>
        )}
      </button>

      {/* Minimize button - Authentic Yellow */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMinimize();
        }}
        className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFB31A] border border-[#DEA123] flex items-center justify-center transition-all shadow-xs"
        aria-label="Minimize window"
        title="Minimize"
      >
        {isHovered && (
          <span className="text-[10px] font-bold text-[#5C3D00] leading-none">−</span>
        )}
      </button>

      {/* Maximize button - Authentic Green */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMaximize();
        }}
        className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-[#20B035] border border-[#1AAB29] flex items-center justify-center transition-all shadow-xs"
        aria-label={isMaximized ? "Restore window" : "Maximize window"}
        title={isMaximized ? "Restore" : "Maximize"}
      >
        {isHovered && (
          <span className="text-[8px] font-bold text-[#0B4010] leading-none">
            {isMaximized ? "⤢" : "+"}
          </span>
        )}
      </button>
    </div>
  );
};
