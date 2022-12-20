/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
        mono: ['monospace'],
        cursive: ['Caveat', 'cursive'],
      },
      colors: {
        waferWhite: '#e7d9d9',
        dawnPink: '#F2E5E5',
        contessaRed: '#CE7777',
      },
      screens: {
        xs: '475px',
      },
      animation: {
        spin: 'spin 4s ease-in-out infinite',
        ping: 'ping 3s ease-in-out infinite',
        wiggle: 'wiggle 0.15s ease-in-out 3',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(-12deg)' },
          '90%': { transform: 'rotate(-12deg)' },
          '100%': { transform: 'rotate(348deg)' },
        },
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px) translateY(-5px)' },
          '50%': { transform: 'translateX(0) translateY(5px)' },
          '75%': { transform: 'translateX(10px) translateY(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
