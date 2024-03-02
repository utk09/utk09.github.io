/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./tutorials/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
  },
  blocklist: ["container"],
};
