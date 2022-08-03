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
        black: "#171717",
        white: "#F8FAFC",
        grey: "#AEAEAE",
        greyLight: "#DBDBDB",
        greyDark: "#373737",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// Colors
// primary: "#F472B6", pink
// secondary: "#38BDF8", blue
// black: "#171717",
// white: "#F8FAFC",
// grey: "#94A3B8",
