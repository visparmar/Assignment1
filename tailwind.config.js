/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_blue:'#7393FE',
        light_black:'#202028'
      },  boxShadow: {
        // 'custom-purple': '0 4px 6px -1px rgba(128, 0, 128, 0.5), 0 2px 4px -1px rgba(128, 0, 128, 0.5)',
        // 'custom-green': '0 4px 6px -1px rgba(0, 128, 0, 0.5), 0 2px 4px -1px rgba(0, 128, 0, 0.5)',
        'custom-purple': 'inset 10px 40px 60px rgba(128, 0, 128, 0.8)',
        'custom-green': 'inset 0 4px 6px rgba(0, 128, 0, 0.5)',
        // Add more custom shadows as needed
      },
    },
  },
  plugins: [],
}

