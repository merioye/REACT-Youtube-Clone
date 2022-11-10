/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        primary: '#f9f9f9',
        secondary: 'white',
        'primary-dark': '#181818',
        'secondary-dark': '#202020',
      },
      colors: {
        primary: 'black',
        secondary: '#606060',
        'primary-dark': 'white',
        'secondary-dark': '#aaaaaa',
      },
      borderColor: {
        soft: '#f5f5f5',
        'soft-dark': '#373737',
      },
    },
  },
  plugins: [],
}
