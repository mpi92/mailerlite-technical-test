/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'main-500': '#09C269',
        'main-600': '#079B54',
        'gray-800': '#353537',
        'gray-900': '#181819',
      },
    },
  },
  plugins: [],
  future: {
    // Fixes weird toggled focus behavior in mobile
    hoverOnlyWhenSupported: true,
  },
}