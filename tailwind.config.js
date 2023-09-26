/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#081A51',
        'light-white': 'rgba(255,255,255,0.17)'
      }
    }
  },
  plugins: []
}
