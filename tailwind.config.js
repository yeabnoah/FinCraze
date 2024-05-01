/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1f192f",
        secondary: "#0ef5e3",
        third: "#38304c",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
        poppinsExtraBold: ["PoppinsExtraBold", "sans-serif"],
        poppinsMedium: ["PoppinsMedium", "sans-serif"],
      },
    },
  },
  experimental: {
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [],
};
