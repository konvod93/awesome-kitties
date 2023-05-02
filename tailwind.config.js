/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx, md}',
    './components/**/*.{js,ts,jsx,tsx,mdx, md}',
    './app/**/*.{js,ts,jsx,tsx,mdx, md}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl')},
        'h2': { fontSize: theme('fontSize.xl')},
        'h3': { fontSize: theme('fontSize.lg')},
      })
    })
  ],
}
