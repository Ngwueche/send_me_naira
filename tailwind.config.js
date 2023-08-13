/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dela-gothic': ['"Dela Gothic One"', 'sans-serif',"cursive", ],
        'lexend' : ['"Lexend"', 'sans-serif']
      },
    },
  },
  plugins: [],
}