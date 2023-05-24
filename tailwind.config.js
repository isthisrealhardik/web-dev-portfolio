/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0b',
        secondary: '#fff',
        tertiary: '#2e3038',
        quaternery: '#fbe850',
      },
      fontFamily: {
        inter: 'Inter',
        prata: 'Prata',
      }
    },
  },
  plugins: [],
}

