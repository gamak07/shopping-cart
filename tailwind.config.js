/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      mb:{max: '420px'}
    },
    extend: {},
  },
  plugins: [],
}

