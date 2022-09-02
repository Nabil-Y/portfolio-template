/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
      },
      colors: {
        primary: "#F56FB5",
        secondary: "#30BAF7",
        primaryDark: "#DB0F79",
        secondaryDark: "#067AAC",
        black: "#171717",
        white: "#F8FAFC",
        grey: "#BBBBBB",
        greyLight: "#EBEBEB",
        greyDark: "#494949",
      },
      animation: {
        appear: "appearance 0.2s linear",
      },
      keyframes: {
        appearance: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
