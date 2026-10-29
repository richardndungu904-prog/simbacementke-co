/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rebar: {
          50: '#f7f5f0',
          100: '#efe9dd',
          200: '#e0d5bd',
        },
        lion: {
          DEFAULT: '#D2232A',
          dark: '#A31A20',
          light: '#E8595E',
        },
        steel: {
          50: '#f2f3f3',
          100: '#dcdedf',
          300: '#9a9fa3',
          500: '#63686d',
          700: '#43474a',
          800: '#2e3133',
          900: '#1c1e1f',
        },
        char: '#171614',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
