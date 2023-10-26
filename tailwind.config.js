/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin') //need to add text-shadow

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Parisienne: ['Parisienne', 'cursive'],
        Tangerie: ['Tangerine', 'cursive']
      },
      colors: {
        gold: '#FDD017',
        burgundy: '#8C001A',
        bleach_almond: '#FFEBCD',
        navy_blue: '#000080'
      },
      textShadow: { // needed for text-shadow
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    // needed for text-shadow
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

