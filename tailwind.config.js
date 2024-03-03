/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#a550b3",
        secondary: "#c2a6c3",
        tertiary: "#5c1c5c",
        "black-100": "#250d24",
        "black-200": "#250321",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/pastelbg.jpg')",
      },
    },
  },
  plugins: [],
};