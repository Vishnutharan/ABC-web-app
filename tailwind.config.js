/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // Add this line
  },

  content: [
    "./src/**/*.{html,ts}",
    './src/**/*.ts',

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

