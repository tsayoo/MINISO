/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.{css,js}"
],

  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

