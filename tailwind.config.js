/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          sky: {
            50: '#F0F9FF',
            100: '#E0F2FE',
            200: '#BAE6FD',
            400: '#38BDF8',
            600: '#0284C7',
          },
          mint: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            200: '#BBF7D0',
            400: '#4ADE80',
            600: '#16A34A',
          },
          rose: {
            50: '#FFF1F2',
            100: '#FFE4E6',
            200: '#FECDD3',
            400: '#FB7185',
            600: '#E11D48',
          },
          amber: {
            50: '#FFFBEB',
            100: '#FEF3C7',
            200: '#FDE68A',
            400: '#FBBF24',
            600: '#D97706',
          },
          lavender: {
            50: '#F5F3FF',
            100: '#EDE9FE',
            200: '#DDD6FE',
            400: '#A78BFA',
            600: '#7C3AED',
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            400: '#94A3B8',
            800: '#1E293B',
            900: '#0F172A',
            950: '#0B0F19',
          }
        }
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'mac-window': '0 20px 48px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.6) inset',
        'mac-window-dark': '0 24px 56px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
        'mac-dock': '0 16px 36px -6px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
