/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'black': 'rgba(0, 0, 0, 0.701)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

