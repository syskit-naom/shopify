/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  blocklist: [
    'grid', /* conflicting with grid class in base.css */
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
