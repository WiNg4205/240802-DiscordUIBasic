/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#313338',
      secondary: '#2b2d31',
      tertiary: '#1e1f22',
      hover: '#5a66ef'
      },
    },
  },
  plugins: [],
}

