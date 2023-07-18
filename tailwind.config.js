/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#050C2A",
      },
      padding: {
        big: "50px",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1028px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
