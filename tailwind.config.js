/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cc_dark_text: "#FFFFFF",
        cc_dark_background: "#1E1E1E",
        cc_dark_primary: "#FF9124",
        cc_dark_secondary: "#090934",
        cc_dark_accent: "#6A0C0C",
        cc_text: "#000000",
        cc_background: "#E0E0E0",
        cc_primary: "#DB6E00",
        cc_secondary: "#CBCBF6",
        cc_accent: "#F39595",
      },
      fontFamily: {
        pixelify: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
