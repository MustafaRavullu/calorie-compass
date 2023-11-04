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
        cc_background: "#f4f4f0",
        cc_accent: "#ff90e8",
        cc_green: "#0DFF8A",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      filter: {
        grayscale: "grayscale(100%)",
      },
    },
  },
  plugins: [],
};
