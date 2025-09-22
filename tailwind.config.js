/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#67a22d",
          50: "#f2f9ec",
          100: "#e6f3d9",
          200: "#c0e29b",
          300: "#99d35d",
          400: "#73c41f",
          500: "#67a22d",
          600: "#5b8e25",
          700: "#4c741e",
          800: "#3d5a17",
          900: "#2e400f",
        },
        gray: {
          DEFAULT: "#e8e8eb",
          50: "#f9f9fa",
          100: "#f3f3f5",
          200: "#e0e0e5",
          300: "#ccccd4",
          400: "#b9b9c3",
          500: "#a6a6b2",
          600: "#83838f",
          700: "#60606c",
          800: "#3d3d49",
          900: "#1a1a26",
        },
      },
    },
  },
  plugins: [],
};
