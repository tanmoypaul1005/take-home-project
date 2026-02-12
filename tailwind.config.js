/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0069F7',
        'primary-15': '#F4F6FA',
      }
    },
  },
  plugins: [],
}