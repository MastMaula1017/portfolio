/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-yellow': '#Fdf6cc',
        'mint-green': '#A1E8AF',
        'bubblegum': '#FFB7B2',
        'sky-blue': '#95B8D1',
        'comic-text': '#1f2937',
      },
      fontFamily: {
        'fredoka': ['"Fredoka"', 'sans-serif'],
        'nunito': ['"Nunito"', 'sans-serif'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px rgba(0,0,0,1)',
        'comic-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}
