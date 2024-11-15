/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: "#282B2D",
        secondary: "#907558",
        background: "#ECE3D9",
        secondBackground: "#F7A156",
        accent: "#D4A35E"
      }
    },
  },
  plugins: [],
}

