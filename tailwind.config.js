/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#030303',
        'dark-secondary': '#0a0a0a',
        'pink-primary': '#ff69b4',
        'purple-primary': '#9370db',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'mono': ['ui-monospace', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}