/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Parisienne: ['Parisienne', 'cursive'],
        Tangerie: ['Tangerine', 'cursive']
      },
      colors: {
        gold: '#FFEA00',
      },
    },
  },
  plugins: [],
}

