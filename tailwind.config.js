/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        scale: "scale 5s ease-in-out infinite",
        floating: "floating 5s ease-in-out infinite",
        floatingSmall: "floatingSmall 3s ease-in-out infinite",
        "steam-one": "steamOne 6s ease-out infinite",
        "steam-two": "steamTwo 8s ease-out 0.5s infinite",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 50px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        floatingSmall: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(-30px, -30px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        steamOne: {
          "0%": {
            transform: "translateY(0) translateX(0) scale(0.25); opacity: 0.8;",
          },
          "100%": {
            transform:
              "translateY(-200px) translateX(-20px) scale(2.2); opacity: 0;",
          },
        },
        steamTwo: {
          "0%": {
            transform: "translateY(0) translateX(0) scale(0.3); opacity: 0.9;",
          },
          "100%": {
            transform:
              "translateY(-200px) translateX(20px) scale(2.5); opacity: 0;",
          },
        },
      },
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
          DEFAULT: "#9A9A9A",
          dark: "#273444",
          light: "#d3dce6",
        },
      },
      fontFamily: {
        sans: [
          "SVN-Gilroy",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
