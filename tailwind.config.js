/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'main-500': '#09c269',
        'main-600': '#079b54',
      },
    },
  },
  plugins: [],
}