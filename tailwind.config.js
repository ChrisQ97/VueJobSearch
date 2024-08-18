/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Rubik"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#DADCE0',
        'brand-blue-1': '#1967D2',
        'brand-green-1': '#137333'
      }
    }
  },
  plugins: []
}
