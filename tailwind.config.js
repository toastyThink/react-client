/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
   "@tailwindcss/aspect-ratio",
  ],
}

