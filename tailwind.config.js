/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      mdlg: "900px",
      lg: "1024px",
      lgxl: "1150px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        primary: "#1D4ED8", // blue-700 approx
        secondary: "#DB2777", // pink-600 approx
        accent: "#16A34A", // green-600 approx
        darkBlue: "#0B1120", // For footer and dark sections
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
