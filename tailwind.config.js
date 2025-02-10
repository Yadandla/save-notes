/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md': '800px',
      'lg': '1240px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        "light": `0 0 20px #2dd4bf`,
        "light-2": `2px 0px 6px #2dd4bf`,
      }
    },
  },
  plugins: [],
}