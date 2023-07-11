/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     fontFamily: {
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      'raleway': ['Raleway', 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
    }
  },
  plugins: [],
}