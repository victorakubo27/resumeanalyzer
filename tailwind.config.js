/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // IMPORTANT for your ThemeProvider
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}