const colors = require('./app/config/tailwind/color.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
