/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'routesyncgreen': '#20463c',
        'routesynclightgreen': '#199675',
      },
      fontFamily:{
        sans: ['Roboto','"Comic Sans MS"', 'sans-serif'],
        "ca": ['OpenDyslexic','"Comic Sans MS"', 'sans-serif'],

      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula"],
  },
}
