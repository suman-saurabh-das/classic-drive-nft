/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        gold_100: "#F4EBD0",
        gold_500: "#D6AD61",
        gold_600: "#95753a",
        gold_700: "#876A35",
        gold_800: "#735B2F",
        gold_900: "#6F6C62"
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
