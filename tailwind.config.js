/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBold: "Outfit Bold",
        fontExtraBold: "Outfit Extra Bold",
        fontRegular: "Outfit Regular",
        fontMedium: "Outfit Medium",
        fontSemiBold: "Outfit Semi Bold",
      },
    },
  },
  plugins: [],
};
