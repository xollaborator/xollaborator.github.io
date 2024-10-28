/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  plugins: [import('@tailwindcss/typography'), import('tailwindcss-animate')],
  theme: {
    extend: {
      maxWidth: {
        content: '600px',
      },
      objectPosition: {
        'bottom-10': '50% 90%',
        'bottom-25': '50% 75%',
        'bottom-40': '50% 60%',
        'top-10': '50% 10%',
        'top-25': '50% 25%',
        'top-40': '50% 40%',
      },
      screens: {
        xs: '450px',
      },
      transitionProperty: {
        'max-h': 'max-height, transform',
      },
    },
  },
}
