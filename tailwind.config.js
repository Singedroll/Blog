/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Adjust if needed from "selector" to a valid mode like "class" or "media"
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#4b6bfb",
      },
      backgroundColor: {
        "custom-blue-light": "rgba(75, 107, 251, 0.05)", // Adjust the RGBA value to match the desired opacity
      },
      fontSize: {
        sm1: ["12px", "25px"],
        sm2: ["24px", "28px"],
      },
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
