/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{vue,js,ts,jsx,tsx}', // termasuk file .vue, .js, .ts, dll
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}

