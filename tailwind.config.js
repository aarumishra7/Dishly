/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F3BD59',
        secondary: '#90A583', // Sage green
        background: '#FDF9FD',
        accent: '#FDFCF9',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};