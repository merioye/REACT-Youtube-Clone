/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      backgroundColor: {
        primary: '#F8FAFC',
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
        soft: '#e5e7eb',
        'soft-dark': '#373737',
      },
    },
  },
  plugins: [],
}
