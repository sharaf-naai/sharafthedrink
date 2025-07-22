/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        'y-180': '180deg',
      },
      transform: ['hover'],
      fontFamily: {
        rocksalt: ['RockSalt', 'cursive'],
        saira: ['Saira', 'cursive'],
        quicksand: ['Saira', 'cursive'],
      },
    },
  },
  plugins: [],
}

