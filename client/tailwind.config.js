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
     serif: ['Roboto', 'sans-serif'],
     sans: ['Didact Gothic', 'sans-serif']
    },
    colors: {
      primary: '#E31C5F',
      black: {
        100: '#1A252F',
        200: '#0A0F13',
      },
      white: '#FFFFFF',
      grey: '#707070',
      gray: '#33373A',
      pink: '#EF709A',
    },
    extend: {
      boxShadow: {
        xl: '1px 2px 8px 0px #ADAFB0',
      }
    },
  },
  plugins: [],
}

