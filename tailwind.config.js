/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require("tailwindcss/defaultTheme");

console.log(defaultTheme.screens);
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        asidebox: "0 3px 30px rgba(0, 0, 0, 0.5)",
        asideboxLight: "0 2px 10px rgba(0, 0, 0, 0.15)",
      },
      backgroundImages: {
        qaArrow: "url('/img/detail-arrow.png')",
      },
      colors: {
        black: "#2B2B2B",
        orange: {
          DEFAULT: "#ffaf43",
          dark: "#ff6823",
          medium: "#FDE4AD",
          light: "#ffefdb",
          lightest: "#fffcf8",
        },
        purple: "#D0278A",
        pink: "#ff49db",
        green: "#13ce66",
        gray: {
          default: "#9A9A9A",
          dark: "#273444",
          light: "#d3dce6",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};