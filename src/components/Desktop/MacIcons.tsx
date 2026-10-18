import React from 'react';

// ==========================================
// macOS Continuous Squircle Clip & Base
// ==========================================
interface MacSquircleProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
  shadow?: boolean;
}

export const MacSquircle: React.FC<MacSquircleProps> = ({
  children,
  className = '',
  gradient = 'from-blue-500 to-blue-600',
  shadow = true,
}) => {
  return (
    <div
      className={`relative w-full h-full rounded-[22.5%] overflow-hidden flex items-center justify-center bg-gradient-to-b ${gradient} ${
        shadow ? 'shadow-[0_4px_12px_rgba(0,0,0,0.28),0_1px_3px_rgba(0,0,0,0.2)]' : ''
      } border border-white/25 select-none ${className}`}
    >
      {/* Top subtle 3D specular highlight */}
      <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 via-white/10 to-transparent pointer-events-none rounded-t-[22.5%]" />
      {/* Bottom subtle rim shade */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

// ==========================================
// 1. Authentic macOS Finder Icon
// (In macOS Big Sur / Monterey, the entire squircle IS the two-tone face)
// ==========================================
export const MacFinderIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="finderLeft" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55BAFF" />
            <stop offset="1" stopColor="#1E86FE" />
          </linearGradient>
          <linearGradient id="finderRight" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#156EE5" />
            <stop offset="1" stopColor="#0545BE" />
          </linearGradient>
          <clipPath id="finderSquircle">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        {/* Squircle base with two-tone face fill */}
        <g clipPath="url(#finderSquircle)">
          {/* Left half: bright sky blue */}
          <rect x="0" y="0" width="50" height="100" fill="url(#finderLeft)" />
          {/* Right half: rich royal blue */}
          <rect x="50" y="0" width="50" height="100" fill="url(#finderRight)" />

          {/* Center Dividing Nose Line */}
          <path
            d="M 50 0 L 50 56 C 50 60.5 45.5 63.5 38 64"
            stroke="#002456"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Left Eye */}
          <ellipse cx="32" cy="39" rx="3.6" ry="5.6" fill="#002456" />
          {/* Right Eye */}
          <ellipse cx="68" cy="39" rx="3.6" ry="5.6" fill="#002456" />

          {/* Warm Authentic Finder Smile */}
          <path
            d="M 23 63.5 C 34 80.5 66 80.5 77 63.5"
            stroke="#002456"
            strokeWidth="4.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Smile Dimples at Cheeks */}
          <path d="M 21 61.5 C 22.5 58 25 59.5 25.5 62.5" stroke="#002456" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 79 61.5 C 77.5 58 75 59.5 74.5 62.5" stroke="#002456" strokeWidth="2.8" strokeLinecap="round" />

          {/* Top 3D Specular Highlight */}
          <path
            d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z"
            fill="white"
            fillOpacity="0.22"
          />
        </g>

        {/* Continuous Inset Bezel Rim */}
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 2. Authentic macOS Safari Compass Icon
// ==========================================
export const MacSafariIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="safariBase" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="safariDial" x1="50" y1="12" x2="50" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25A5F5" />
            <stop offset="1" stopColor="#0B6CD9" />
          </linearGradient>
          <linearGradient id="needleRed" x1="50" y1="20" x2="68" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF453A" />
            <stop offset="1" stopColor="#D70015" />
          </linearGradient>
          <linearGradient id="needleWhite" x1="50" y1="80" x2="32" y2="62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
          <clipPath id="safariSquircle">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#safariSquircle)">
          <rect width="100" height="100" fill="url(#safariBase)" />

          {/* Compass Dial Bezel */}
          <circle cx="50" cy="50" r="38" fill="url(#safariDial)" />
          <circle cx="50" cy="50" r="37.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

          {/* Compass Dial Ticks */}
          <g stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="50"
                y1="14"
                x2="50"
                y2={deg % 90 === 0 ? '20' : '17'}
                transform={`rotate(${deg} 50 50)`}
                stroke={deg % 90 === 0 ? 'white' : 'rgba(255,255,255,0.7)'}
                strokeWidth={deg % 90 === 0 ? '2' : '1.2'}
              />
            ))}
          </g>

          {/* Compass Needle (rotated 45deg to North-East) */}
          <g transform="rotate(45 50 50)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
            {/* North Red Needle */}
            <polygon points="50,16 57,50 50,47 43,50" fill="url(#needleRed)" />
            {/* South White Needle */}
            <polygon points="50,84 57,50 50,53 43,50" fill="url(#needleWhite)" />
            {/* Center Brass Pivot */}
            <circle cx="50" cy="50" r="4.5" fill="#FFFFFF" stroke="#0B6CD9" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="1.5" fill="#D70015" />
          </g>

          {/* Specular curved reflection */}
          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 3. Authentic macOS Xcode / Projects Blueprint Icon
// ==========================================
export const MacProjectsIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="xcodeBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1A7CF8" />
            <stop offset="1" stopColor="#0545C6" />
          </linearGradient>
          <linearGradient id="steelHead" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#E5E7EB" />
            <stop offset="0.7" stopColor="#9CA3AF" />
            <stop offset="1" stopColor="#4B5563" />
          </linearGradient>
          <linearGradient id="woodHandle" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F59E0B" />
            <stop offset="0.5" stopColor="#D97706" />
            <stop offset="1" stopColor="#78350F" />
          </linearGradient>
          <clipPath id="xcodeClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#xcodeClip)">
          <rect width="100" height="100" fill="url(#xcodeBg)" />

          {/* Blueprint Grid Lines */}
          <g stroke="rgba(255,255,255,0.16)" strokeWidth="0.8">
            <line x1="20" y1="0" x2="20" y2="100" />
            <line x1="35" y1="0" x2="35" y2="100" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
            <line x1="65" y1="0" x2="65" y2="100" />
            <line x1="80" y1="0" x2="80" y2="100" />

            <line x1="0" y1="20" x2="100" y2="20" />
            <line x1="0" y1="35" x2="100" y2="35" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.28)" strokeWidth="1.2" />
            <line x1="0" y1="65" x2="100" y2="65" />
            <line x1="0" y1="80" x2="100" y2="80" />

            {/* Blueprint Circles */}
            <circle cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="18" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" />
          </g>

          {/* 3D Xcode Developer Hammer */}
          <g transform="rotate(-38 50 50) translate(0, -2)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))">
            {/* Wood Handle */}
            <rect x="46" y="26" width="8" height="56" rx="3.5" fill="url(#woodHandle)" stroke="#451A03" strokeWidth="0.8" />
            {/* Grip accent */}
            <rect x="46" y="66" width="8" height="16" rx="2" fill="#1F2937" />

            {/* Steel Hammer Head */}
            <path
              d="M 28 20 L 72 20 C 74 20 75 22 75 24 L 73 34 C 73 36 71 37 69 37 L 31 37 C 29 37 27 36 27 34 L 25 24 C 25 22 26 20 28 20 Z"
              fill="url(#steelHead)"
              stroke="#1F2937"
              strokeWidth="1"
            />
            {/* Claw curve */}
            <path d="M 25 22 C 18 24 16 33 22 37 L 29 34" fill="#9CA3AF" stroke="#374151" strokeWidth="0.8" />
            {/* Top highlight */}
            <line x1="28" y1="21.5" x2="72" y2="21.5" stroke="white" strokeWidth="1" strokeOpacity="0.8" />
          </g>

          {/* Top Glass Gloss */}
          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.2" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 4. Authentic macOS Terminal / Skills Icon
// ==========================================
export const MacTerminalIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="termBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#323236" />
            <stop offset="1" stopColor="#18181A" />
          </linearGradient>
          <clipPath id="termClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#termClip)">
          <rect width="100" height="100" fill="url(#termBg)" />

          {/* Inner Terminal Display Frame */}
          <rect x="12" y="14" width="76" height="72" rx="9" fill="#0C0D0E" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

          {/* Title Bar */}
          <path d="M 12 23 C 12 18 16 14 21 14 L 79 14 C 84 14 88 18 88 23 L 88 28 L 12 28 Z" fill="#1C1D20" />
          <line x1="12" y1="28" x2="88" y2="28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

          {/* Window Traffic Lights */}
          <circle cx="21" cy="21" r="2.5" fill="#FF5F56" />
          <circle cx="28.5" cy="21" r="2.5" fill="#FFBD2E" />
          <circle cx="36" cy="21" r="2.5" fill="#27C93F" />

          {/* Terminal Command Prompt `>_` */}
          <path
            d="M 23 44 L 37 53.5 L 23 63"
            stroke="#F3F4F6"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing Green Apple Terminal Block Cursor */}
          <rect
            x="44"
            y="60"
            width="16"
            height="4.5"
            rx="1.5"
            fill="#30D158"
            filter="drop-shadow(0 0 4px rgba(48,209,88,0.7))"
          />

          {/* Specular Highlight */}
          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.14" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 5. Authentic macOS Saddle Leather Briefcase / Experience Icon
// ==========================================
export const MacBriefcaseIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="briefBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="saddleLeather" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#854D0E" />
            <stop offset="0.6" stopColor="#713F12" />
            <stop offset="1" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="brassGold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FEF08A" />
            <stop offset="0.5" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#92400E" />
          </linearGradient>
          <clipPath id="briefClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#briefClip)">
          <rect width="100" height="100" fill="url(#briefBg)" />

          {/* Leather Case Shadow & Geometry */}
          <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))">
            {/* Handle Arch */}
            <path
              d="M 38 29 C 38 21 62 21 62 29"
              stroke="url(#brassGold)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Main Leather Briefcase */}
            <rect x="17" y="31" width="66" height="50" rx="8" fill="url(#saddleLeather)" stroke="#270F03" strokeWidth="1" />

            {/* Fine Edge Stitching */}
            <rect
              x="20"
              y="34"
              width="60"
              height="44"
              rx="6"
              stroke="#FDE68A"
              strokeOpacity="0.4"
              strokeWidth="0.8"
              strokeDasharray="2 1.5"
              fill="none"
            />

            {/* Front Leather Flap */}
            <path
              d="M 17 33 L 83 33 L 83 50 C 83 50 65 57 50 57 C 35 57 17 50 17 50 Z"
              fill="#9A3412"
              stroke="#270F03"
              strokeWidth="1"
            />

            {/* Brass Center Buckle */}
            <rect x="45" y="49" width="10" height="13" rx="2.5" fill="url(#brassGold)" stroke="#78350F" strokeWidth="0.8" />
            <circle cx="50" cy="55.5" r="1.5" fill="#451A03" />

            {/* Side Brass Corner Plates */}
            <rect x="26" y="50" width="5" height="10" rx="1.5" fill="url(#brassGold)" />
            <rect x="69" y="50" width="5" height="10" rx="1.5" fill="url(#brassGold)" />
          </g>

          {/* Specular curved reflection */}
          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 6. Authentic Apple Books / Education Icon
// ==========================================
export const MacBooksIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="booksBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF9500" />
            <stop offset="0.6" stopColor="#FF5E3A" />
            <stop offset="1" stopColor="#FF2D55" />
          </linearGradient>
          <clipPath id="booksClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#booksClip)">
          <rect width="100" height="100" fill="url(#booksBg)" />

          {/* Apple Books Open Pages */}
          <g filter="drop-shadow(0 5px 10px rgba(0,0,0,0.28))">
            {/* Left Page Wing */}
            <path
              d="M 50 32 C 40 28 27 30 20 36 L 20 71 C 28 65 42 64 50 67 Z"
              fill="#FFFFFF"
            />
            {/* Right Page Wing */}
            <path
              d="M 50 32 C 60 28 73 30 80 36 L 80 71 C 72 65 58 64 50 67 Z"
              fill="#F3F4F6"
            />
            {/* Spine Crease */}
            <path d="M 50 32 L 50 67" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

            {/* Subtle Page Lines */}
            <line x1="26" y1="45" x2="43" y2="43" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="52" x2="43" y2="50" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="59" x2="38" y2="57" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />

            <line x1="57" y1="43" x2="74" y2="45" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="57" y1="50" x2="74" y2="52" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="57" y1="57" x2="69" y2="59" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.25" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 7. Authentic Apple App Store / Achievements Icon
// ==========================================
export const MacAppStoreIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="appStoreBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B75F7" />
            <stop offset="1" stopColor="#054AD7" />
          </linearGradient>
          <clipPath id="appStoreClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#appStoreClip)">
          <rect width="100" height="100" fill="url(#appStoreBg)" />

          {/* Authentic App Store "A" with crossing rounded tool rods */}
          <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))">
            {/* Left ruler rod (runs up-right) */}
            <line x1="26" y1="74" x2="47" y2="26" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" />
            {/* Right pencil rod (runs up-left) */}
            <line x1="74" y1="74" x2="53" y2="26" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" />
            {/* Crossbar paintbrush rod (runs horizontal) */}
            <line x1="22" y1="58" x2="78" y2="58" stroke="#FFFFFF" strokeWidth="7.5" strokeLinecap="round" />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 8. Authentic Apple Music Icon
// ==========================================
export const MacMusicIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="musicBg" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FC3C44" />
            <stop offset="0.5" stopColor="#F94C57" />
            <stop offset="1" stopColor="#EE2A7B" />
          </linearGradient>
          <clipPath id="musicClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#musicClip)">
          <rect width="100" height="100" fill="url(#musicBg)" />

          {/* Authentic 3D Musical Beamed Notes */}
          <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.28))" fill="#FFFFFF">
            {/* Left Notehead */}
            <ellipse cx="37" cy="67" rx="8" ry="6" transform="rotate(-22 37 67)" />
            {/* Right Notehead */}
            <ellipse cx="65" cy="59" rx="8" ry="6" transform="rotate(-22 65 59)" />
            {/* Left Stem */}
            <rect x="41" y="29" width="4.5" height="39" rx="2" />
            {/* Right Stem */}
            <rect x="69" y="21" width="4.5" height="39" rx="2" />
            {/* Top Connecting Beam */}
            <polygon points="41,29 73.5,21 73.5,30 41,38" />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.25" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 9. Authentic Apple Messages / Bhoomi AI Icon
// ==========================================
export const MacMessagesIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="msgBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3CD564" />
            <stop offset="1" stopColor="#25A848" />
          </linearGradient>
          <clipPath id="msgClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#msgClip)">
          <rect width="100" height="100" fill="url(#msgBg)" />

          {/* Apple Messages Speech Bubble */}
          <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.25))">
            <path
              d="M 22 47 C 22 33 34.5 22 50 22 C 65.5 22 78 33 78 47 C 78 61 65.5 71 50 71 C 44 71 38.5 69.5 33.5 67 L 22 71 L 25 61 C 23 57 22 52 22 47 Z"
              fill="#FFFFFF"
            />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 10. Authentic Apple Mail Icon
// ==========================================
export const MacMailIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="mailBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2998FF" />
            <stop offset="1" stopColor="#055CD9" />
          </linearGradient>
          <clipPath id="mailClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#mailClip)">
          <rect width="100" height="100" fill="url(#mailBg)" />

          {/* 3D Flying Apple Mail Envelope */}
          <g filter="drop-shadow(0 5px 10px rgba(0,0,0,0.3))" transform="rotate(-6 50 52)">
            <rect x="18" y="32" width="64" height="42" rx="4" fill="#FFFFFF" />
            <path d="M 18 74 L 43 49" stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M 82 74 L 57 49" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Top Flap */}
            <polygon points="18,32 82,32 50,56" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 11. Authentic Apple Preview / Resume PDF Icon
// ==========================================
export const MacPreviewIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="prevBg" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#30B4F8" />
            <stop offset="1" stopColor="#0B6CDD" />
          </linearGradient>
          <linearGradient id="loupeRim" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.5" stopColor="#9CA3AF" />
            <stop offset="1" stopColor="#4B5563" />
          </linearGradient>
          <clipPath id="prevClip">
            <rect width="100" height="100" rx="22.5" />
          </clipPath>
        </defs>

        <g clipPath="url(#prevClip)">
          <rect width="100" height="100" fill="url(#prevBg)" />

          {/* Overlapping Photo Cards */}
          <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.25))">
            {/* Back Photo */}
            <rect x="23" y="24" width="40" height="32" rx="2.5" fill="#FFFFFF" transform="rotate(-12 43 40)" />
            <rect x="25" y="26" width="36" height="24" rx="1.5" fill="#38BDF8" transform="rotate(-12 43 40)" />

            {/* Front Photo */}
            <rect x="36" y="34" width="44" height="36" rx="2.5" fill="#FFFFFF" />
            <rect x="38" y="36" width="40" height="26" rx="1.5" fill="#0284C7" />
            <polygon points="40,58 52,44 62,56 70,48 76,58" fill="#38BDF8" />
            <circle cx="68" cy="42" r="3.5" fill="#FDE047" />
          </g>

          {/* Magnifying Glass Loupe */}
          <g filter="drop-shadow(0 5px 8px rgba(0,0,0,0.35))">
            <line x1="61" y1="61" x2="82" y2="82" stroke="#78350F" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="61" y1="61" x2="82" y2="82" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="48" cy="48" r="18" fill="rgba(255,255,255,0.15)" stroke="url(#loupeRim)" strokeWidth="4.5" />
            <path d="M 38 42 C 43 36 52 36 57 42" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.8" />
          </g>

          <path d="M 0 0 L 100 0 L 100 36 C 70 46 30 46 0 36 Z" fill="white" fillOpacity="0.22" />
        </g>
        <rect x="0.5" y="0.5" width="99" height="99" rx="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      </svg>
    </div>
  );
};

// ==========================================
// 12. Authentic macOS Monterey 3D Blue Desktop Folder
// ==========================================
export const MacDesktopFolder: React.FC<{
  badge?: React.ReactNode;
  className?: string;
}> = ({ badge, className = 'w-16 h-14' }) => {
  return (
    <div className={`relative ${className} select-none transition-transform group-hover:scale-105 active:scale-95`}>
      <svg viewBox="0 0 100 84" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="folderBack" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#55BAFF" />
            <stop offset="1" stopColor="#1C84FD" />
          </linearGradient>
          <linearGradient id="folderFront" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#6BCBFF" />
            <stop offset="0.3" stopColor="#3BA0FF" />
            <stop offset="1" stopColor="#0B6CD9" />
          </linearGradient>
          <linearGradient id="folderRim" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#C4E8FF" />
            <stop offset="1" stopColor="#7CC3FF" />
          </linearGradient>
        </defs>

        {/* Folder Back Tab */}
        <g filter="drop-shadow(0 3px 6px rgba(0,0,0,0.22))">
          <path
            d="M 6 16 C 6 11 10 7 15 7 L 38 7 C 42 7 46 9 49 13 L 53 17 L 85 17 C 90 17 94 21 94 26 L 94 72 C 94 77 90 81 85 81 L 15 81 C 10 81 6 77 6 72 Z"
            fill="url(#folderBack)"
          />
          {/* Inner Pocket Shadow */}
          <rect x="12" y="24" width="76" height="12" fill="#003884" fillOpacity="0.25" rx="3" />
        </g>

        {/* Paper Insert Peeking Out */}
        <rect x="18" y="16" width="64" height="20" rx="3" fill="#FFFFFF" fillOpacity="0.92" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.12))" />

        {/* Folder Front Flap */}
        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.26))">
          <path
            d="M 6 32 C 6 28 9 25 13 25 L 87 25 C 91 25 94 28 94 32 L 94 72 C 94 77 90 81 85 81 L 15 81 C 10 81 6 77 6 72 Z"
            fill="url(#folderFront)"
          />
          {/* Beveled Top Rim Light */}
          <path
            d="M 6 32 C 6 28 9 25 13 25 L 87 25 C 91 25 94 28 94 32"
            stroke="url(#folderRim)"
            strokeWidth="1.5"
          />
        </g>
      </svg>

      {/* Embossed Badge on Front Flap */}
      {badge && (
        <div className="absolute inset-x-0 bottom-3.5 flex items-center justify-center text-white/90 drop-shadow-[0_1px_2px_rgba(0,35,110,0.6)] pointer-events-none">
          {badge}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 13. Authentic macOS PDF Document File
// ==========================================
export const MacPdfFileIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-16' }) => {
  return (
    <div className={`relative ${className} select-none transition-transform group-hover:scale-105 active:scale-95`}>
      <svg viewBox="0 0 76 96" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="paperBg" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="pdfBanner" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#EF4444" />
            <stop offset="1" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="foldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          {/* Main Paper Body with Top-Right Fold Corner */}
          <path
            d="M 6 10 C 6 5.5 9.5 2 14 2 L 54 2 L 72 20 L 72 86 C 72 90.5 68.5 94 64 94 L 14 94 C 9.5 94 6 90.5 6 86 Z"
            fill="url(#paperBg)"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />

          {/* Folded Dog-Ear Flap */}
          <path
            d="M 54 2 L 54 18 C 54 19.5 55.5 20 57 20 L 72 20 Z"
            fill="url(#foldGrad)"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.8"
          />

          {/* Faint Text Lines on Page */}
          <line x1="16" y1="26" x2="44" y2="26" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="34" x2="62" y2="34" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="41" x2="58" y2="41" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="48" x2="62" y2="48" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

          {/* Red "PDF" Badge */}
          <rect x="6" y="62" width="66" height="20" fill="url(#pdfBanner)" />
          <text
            x="39"
            y="76"
            fill="#FFFFFF"
            fontSize="11"
            fontWeight="bold"
            letterSpacing="0.8"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', Roboto, sans-serif"
          >
            PDF
          </text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 14. Authentic macOS Text Document (About Me)
// ==========================================
export const MacTextDocumentIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-16' }) => {
  return (
    <div className={`relative ${className} select-none transition-transform group-hover:scale-105 active:scale-95`}>
      <svg viewBox="0 0 76 96" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="docPaper" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="docFold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          {/* Main Paper */}
          <path
            d="M 6 10 C 6 5.5 9.5 2 14 2 L 54 2 L 72 20 L 72 86 C 72 90.5 68.5 94 64 94 L 14 94 C 9.5 94 6 90.5 6 86 Z"
            fill="url(#docPaper)"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />

          {/* Dog-Ear Fold */}
          <path
            d="M 54 2 L 54 18 C 54 19.5 55.5 20 57 20 L 72 20 Z"
            fill="url(#docFold)"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.8"
          />

          {/* Ruled Text Lines */}
          <line x1="16" y1="26" x2="42" y2="26" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
          <line x1="16" y1="36" x2="62" y2="36" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="44" x2="56" y2="44" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="52" x2="60" y2="52" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="60" x2="52" y2="60" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="68" x2="58" y2="68" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

          {/* Subtle profile icon on document */}
          <circle cx="23" cy="79" r="4" fill="#3B82F6" />
          <path d="M 15 89 C 15 85 19 84 23 84 C 27 84 31 85 31 89 Z" fill="#3B82F6" />
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 15. Authentic macOS Airmail Document (Contact Me)
// ==========================================
export const MacAirmailIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-16' }) => {
  return (
    <div className={`relative ${className} select-none transition-transform group-hover:scale-105 active:scale-95`}>
      <svg viewBox="0 0 76 96" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="mailDocPaper" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F8FAFC" />
          </linearGradient>
          <linearGradient id="mailDocFold" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>

        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.22))">
          {/* Main Paper */}
          <path
            d="M 6 10 C 6 5.5 9.5 2 14 2 L 54 2 L 72 20 L 72 86 C 72 90.5 68.5 94 64 94 L 14 94 C 9.5 94 6 90.5 6 86 Z"
            fill="url(#mailDocPaper)"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />

          {/* Dog-Ear Fold */}
          <path
            d="M 54 2 L 54 18 C 54 19.5 55.5 20 57 20 L 72 20 Z"
            fill="url(#mailDocFold)"
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.8"
          />

          {/* Postage Stamp on Top Right */}
          <rect x="36" y="24" width="18" height="22" rx="2" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M 45 31 L 49 35 L 41 35 Z" fill="#EF4444" />
          <circle cx="45" cy="38" r="2" fill="#EF4444" />

          {/* Flying Envelope Graphic in Center */}
          <g transform="translate(18, 52)">
            <rect width="40" height="26" rx="3" fill="#3B82F6" />
            <polygon points="0,0 40,0 20,15" fill="#60A5FA" />
            <path d="M 0 26 L 15 13" stroke="#2563EB" strokeWidth="1.2" />
            <path d="M 40 26 L 25 13" stroke="#2563EB" strokeWidth="1.2" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 16. Authentic macOS Scenic Photo File (My Picture)
// ==========================================
export const MacPhotoFileIcon: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  return (
    <div
      style={{ width: 56, height: 68 }}
      className={`relative select-none transition-transform group-hover:scale-105 active:scale-95 flex-shrink-0 w-14 h-[68px] max-w-[56px] max-h-[68px] ${className}`}
    >
      <div className="w-full h-full bg-white dark:bg-slate-100 rounded-md p-1 shadow-[0_4px_10px_rgba(0,0,0,0.25)] border border-black/15 flex flex-col items-center overflow-hidden">
        {/* Scenic Landscape Photo */}
        <div className="w-full h-11 rounded-xs overflow-hidden bg-gradient-to-b from-sky-400 via-rose-300 to-amber-200 relative flex-shrink-0 flex items-end justify-center">
          {/* Sun */}
          <div className="absolute top-1.5 right-2 w-3.5 h-3.5 rounded-full bg-amber-100 shadow-xs" />
          {/* Mountains */}
          <svg viewBox="0 0 50 30" className="w-full h-7 fill-indigo-800/80">
            <polygon points="0,30 15,12 28,30" />
            <polygon points="20,30 35,8 50,30" fill="#3730A3" />
          </svg>
        </div>
        {/* Bottom Preview Strip with JPG Badge */}
        <div className="w-full flex-1 flex items-center justify-between px-1">
          <div className="w-3 h-0.5 bg-slate-300 rounded-full" />
          <span className="text-[7.5px] font-bold tracking-tight text-slate-600">JPG</span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 17. Authentic macOS Trash Can Icon
// ==========================================
export const MacTrashIcon: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none">
        <defs>
          <linearGradient id="trashMesh" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.5" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.3))">
          {/* Outer Translucent Mesh Trash Body */}
          <path
            d="M 28 26 L 33 80 C 33.5 85 38 88 44 88 L 56 88 C 62 88 66.5 85 67 80 L 72 26 Z"
            fill="url(#trashMesh)"
            fillOpacity="0.85"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          {/* Metallic Vertical Rib Lines */}
          <g stroke="#94A3B8" strokeWidth="1.5" opacity="0.6">
            <line x1="38" y1="30" x2="41" y2="78" />
            <line x1="50" y1="30" x2="50" y2="78" />
            <line x1="62" y1="30" x2="59" y2="78" />
          </g>
          {/* Top Oval Metal Rim */}
          <ellipse cx="50" cy="26" rx="23" ry="5.5" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.8" />
          <ellipse cx="50" cy="26" rx="20" ry="3.8" fill="#1E293B" fillOpacity="0.2" />
        </g>
      </svg>
    </div>
  );
};
