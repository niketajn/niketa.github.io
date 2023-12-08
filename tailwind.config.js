/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(var(--theme-color), <alpha-value>)',
      }
    },
    container: {
      padding: '3rem',
    },
  },
  plugins: [],
}

