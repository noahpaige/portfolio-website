/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideDown: "slideDown 1s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": {  opacity: 1 }
        },
        slideDown: {
          "0%": { position: 'absolute', display: 'none', transform: 'translateY(100%)' },
          "100%": { position: 'relative', display: 'block', transform: 'translateY(0%)'}
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  }
}
