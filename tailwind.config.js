/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: 'var(--c1)',
        c2: 'var(--c2)',
        c3: 'var(--c3)',
        c4: 'var(--c4)',
      },
    },
    fontFamily: {
      heading: ['Josefin Sans', 'sans-serif'],
      para: ['Open Sans', 'sans-serif']
    }
  },
  plugins: [],
}