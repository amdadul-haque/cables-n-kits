/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.jpg')",
      },
      fontFamily: {
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'xs': '350px',
        'sm': '540px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1320px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#e41e36',
        secondary: {
          light: '#3b8baa',
          dark: '#285E73',
        },
        text: {
          dark: '#0a0a0a',
          light: '#5a6278',
        }
      }
    },
  },
  plugins: [],
};
