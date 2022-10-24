/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#3576A7',
        dark: 'rgba(49, 49, 49, 0.95)',
        Piorange: '#F07F4E',
        Pigreen: '#1F942B',
        Pired: '#CC6464E5',
      },
      letterSpacing: {
        tight: '0.004em',
      },
      fontFamily: {
        Lora: "'Lora', serif",
        Nunito: "'Nunito Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
