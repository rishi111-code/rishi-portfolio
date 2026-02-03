/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",     // Dark navy (background)
        secondary: "#38bdf8",   // Sky blue (accent)
        accent: "#22c55e",      // Green highlights
        muted: "#94a3b8",       // Muted text
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui" , "Poppins"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
