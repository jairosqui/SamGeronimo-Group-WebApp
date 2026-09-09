/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        charcoal: "#15161A",
        line: "#26272C",
        off: "#F7F6F4",
        muted: "#A5A3A0",
        accent: "#FF6B00",
        bar1: "#4A4845",
        bar2: "#8C8A87",
        "bar1-light": "#C2BFBA",
        "bar2-light": "#6E6C69",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm2: "4px",
        md2: "8px",
      },
    },
  },
  plugins: [],
};
