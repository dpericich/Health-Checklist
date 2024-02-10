import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-background-color': 'var(--primary-background-color)',
        'secondary-background-color': 'var(--secondary-background-color)',
        'primary-font-color': 'var(--primary-font-color)',
        'secondary-font-color': 'var(--secondary-font-color)',
        'tertiary-font-color': 'var(--tertiary-font-color)',
      },
    },
    fontFamily: {
      sans: ['Arial'],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['emerald'],
  },
}
