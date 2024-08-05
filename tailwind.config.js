/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluetheme: "#3f57ff",
        redtheme: "#f85f7b"
      },
      fontFamily: {
        Poppins: "Poppins" 
      }
    },
  },
  plugins: [],
}