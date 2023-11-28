/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Didact Gothic', 'serif'],
    },
    colors: {
      'black': '#0A0F13',
      'pink': '#E31C5F',
      'gray': '#707070',
      'white': '#FFFFFF',
      'link-pink': '#EF709A'
    },
    borderProperty: {
      'border': '1px solid '
    },
    extend: {},
  },

  plugins: [],
}

