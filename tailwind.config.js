/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4e5798",
          green: "#54b06d",
          lightgreen: "#92c658",
        },
      },
    },
  },
  plugins: [],
};
