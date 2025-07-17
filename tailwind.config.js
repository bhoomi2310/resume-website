// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(45deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
    },
  },
  plugins: [],
}
