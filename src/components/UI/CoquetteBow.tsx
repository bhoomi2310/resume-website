import React from 'react';

interface CoquetteBowProps {
  className?: string;
  size?: number;
}

export const CoquetteBow: React.FC<CoquetteBowProps> = ({
  className = '',
  size = 48,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none transform rotate-[18deg] filter drop-shadow-[0_2px_4px_rgba(225,29,72,0.25)] ${className}`}
      aria-label="Coquette ribbon bow"
    >
      {/* Left Ribbon Loop */}
      <path
        d="M38 38 C24 16 8 22 10 38 C12 48 26 44 37 41 Z"
        fill="#FDA4AF"
        stroke="#E11D48"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Left loop inner fold depth */}
      <path
        d="M18 34 C24 32 30 36 36 39"
        stroke="#F43F5E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Right Ribbon Loop */}
      <path
        d="M42 38 C56 16 72 22 70 38 C68 48 54 44 43 41 Z"
        fill="#FDA4AF"
        stroke="#E11D48"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Right loop inner fold depth */}
      <path
        d="M62 34 C56 32 50 36 44 39"
        stroke="#F43F5E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Left Cascading Ribbon Tail */}
      <path
        d="M36 43 C29 55 22 66 16 74 C23 70 29 72 34 67 C37 60 38 52 39 44 Z"
        fill="#FB7185"
        stroke="#E11D48"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Right Cascading Ribbon Tail */}
      <path
        d="M44 43 C51 55 58 66 64 74 C57 70 51 72 46 67 C43 60 42 52 41 44 Z"
        fill="#FB7185"
        stroke="#E11D48"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Center Ribbon Knot */}
      <ellipse
        cx="40"
        cy="40"
        rx="5.5"
        ry="6.5"
        fill="#F43F5E"
        stroke="#BE123C"
        strokeWidth="2.5"
      />
      {/* Center knot highlight */}
      <path
        d="M38.5 37.5 Q40 39.5 38.5 42"
        stroke="#FFF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
