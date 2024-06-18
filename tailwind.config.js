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
        sans: ['JetBrains Mono', 'sans-serif'],
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
