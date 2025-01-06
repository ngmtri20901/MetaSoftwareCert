const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  flowbite.content(),
],
  theme: {
    extend: {
      animation: {
        slowspin: 'spin 10s linear infinite', 
      },
      fontFamily: {
        sacramento: ['"Sacramento"', 'cursive'],
        tiro: ['"Tiro Kannada"', 'serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

