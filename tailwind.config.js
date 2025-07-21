/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lg: '0 10px 25px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
