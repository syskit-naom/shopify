/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  important: "#tw-wrapper",
  blocklist: [
    'grid', /* conflicting with grid class in base.css */
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "750px",
      lg: "990px",
      xl: "1440px",
    },
    fontFamily: {
      gotham: "var(--font-gotham), sans-serif",
      schabo: "var(--font-schabo), sans-serif",
    },
    fontSize: {
      xs: [
        "0.625rem", // 10px
        {
          lineHeight: "120%",
          letterSpacing: "0.02em",
        },
      ],
      sm: [
        "0.75rem", // 12px
        "120%",
      ],
      md: [
        "0.875rem", // 14px
        "139%"
      ],
      base: [
        "1rem", // 16px
        "120%",
      ],
      lg: [
        "1.75rem", // 28px
        "105%"
      ],
      xl: [
        "2.625rem", // 42px
        "104%",
      ],
      "2xl": [
        "4.5rem", // 72px
        ".89",
      ],
      "3xl": [
        "10.375rem", // 166px
        ".89",
      ],
    },
    colors: {
      transparent: "transparent",
      "primary-copy": "rgb(var(--primary-copy) / 1)",
      "secondary-copy": "rgb(var(--secondary-copy) / 1)",
      "alternative-copy": "rgb(var(--alternative-copy) / 1)",
      "primary-bg": "rgb(var(--primary-bg) / 1)",
      "alternative-bg": "rgb(var(--alternative-bg) / 1)",

      white: "rgb(var(--white) / 1)",
      black: "rgb(var(--almost-black) / 1)",
    },
    extend: {},
  },
  plugins: [],
};
