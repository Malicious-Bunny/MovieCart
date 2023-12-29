import 'tailwindcss-dark-mode'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
  variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      width: {
        'spreen' : '90vw',
        'screen-2' : '80vw',
        'screen-3' : '70vw',
        'screen-4' : '60vw',

      },

      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1600px',
        '3xl': '2000px',
      },

      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}

