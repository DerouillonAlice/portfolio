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
        primary: '#c8abff',
      },
    },
  },
  plugins: [],
}