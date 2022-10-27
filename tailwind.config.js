/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'silver': '#ecebff',
      'green': '#2E7D32',
      'red': '#ff5722',
      'white': '#ffffff',
      'black': '#000000',
      'soft-black': '#121212',
    },
    backgroundImage: {
      'hero': "url('image not gotten yet')",
    },
    boxShadow: {
      'full': '0 3px 10px rgb(0 0 0 / 0.2)',
    },


  },
  plugins: [],
};
