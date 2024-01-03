/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
      'tablet': '1024px',
      // => @media (min-width: 1024px) { ... }
      'mobile': '375px'
      // => @media (min-width: 375px) { ... }
     },
    extend: {},
     fontFamily: {
      Oswald: ["Oswald", "sans-serif"]
     }
  },
  plugins: [],
}
