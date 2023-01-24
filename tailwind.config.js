/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primaryDark: '#5820CF',
        primary: '#743AF0',
        primaryLight: '#6F5A9A',
        gray: {
          100: '#A7A7A7',
          500: '#3A3939',
          900: '#242424',
        },
        black: {
          900: '#070707',
        },
        red: {
          500: '#FF1B51',
        },
      },
      keyframes: {
        fillAnimation: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1) ' },
        },
      },
      animation: {
        fillAnimation: 'fillAnimation 350ms forwards',
      },
    },
  },
  plugins: [],
}
