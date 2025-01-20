/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1d1d',
        background2: '#3b3636',
        primary: '#c8abff',
        secondary: '#bebbbb',
      },

      height: {
        'screen-minus-10': 'calc(100vh - 2.5rem)', // Ajuste comme nécessaire
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}