/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["JetBrains Mono", "monospace"],
      },
      colors: {
        base: "#08070E",
        surface: "#0F0D1A",
        elevated: "#161226",
        border: "#1E1A2E",
        primary: "#7B3FF5",
        "primary-hover": "#9B6BFF",
        accent: "#C084FC",
        "text-primary": "#F0EEF8",
        "text-muted": "#9B97B0",
      },
      screens: {
        xs: "426px",
        "2xs": "320px",
      },
      boxShadow: {
        "glow-primary": "0 0 24px rgba(123, 63, 245, 0.4)",
        "glow-card": "0 0 32px rgba(123, 63, 245, 0.15)",
      },
    },
  },
  plugins: [],
};
