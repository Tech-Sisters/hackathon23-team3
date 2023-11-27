/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'black': '#0A0F13',
      'pink': '#E31C5F',
      'gray': '#707070',
      'white': '#FFFFFF',
    },
    borderProperty: {
      'border': '1px solid '
    },
    extend: {},
  },
  plugins: [],
}

