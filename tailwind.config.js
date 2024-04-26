/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  blocklist: [
    'grid', /* conflicting with grid class in base.css */
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "990px",
    },
    extend: {},
  },
  plugins: [],
};
