/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '0px',
      sm: '400px',
      md: '600px',
      'md-2': '700px',
      xm: '960px',
      lg: '1280px',
      xl: '1920px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      borderWidth: {
        1: '1px',
      },
      backgroundColor: {
        primary: 'white',
        'primary-dark': '#181818',
        // secondary: '#F8FAFC',
        // 'secondary-dark': '#202020',
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
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
}
