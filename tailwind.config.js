/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light theme colors
        orange: {
          DEFAULT: "#FF6900",
          700: "#CC4D00",
        },
        green: {
          DEFAULT: "#44BBA4",
          700: "#309580",
        },
        bonewhite: {
          DEFAULT: "#F9F6EE",
          50: "#FDFCF9",
        },
        black: "#483D3F",
        pastel: "#D3D0CB",
        white: "#E7E5DF",

        // Dark theme colors
        primary: "#1F1B24",
        secondary: "#282A36",
        accent: "#44475A",
        background: "#6272A4",
        text: "#8BE9FD",
        buttons: "#50FA7B",
      },
      fontFamily: {
        inconsolata: ["Quicksand", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
