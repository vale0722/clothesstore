const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'bebas' : ['Bebas Neue', ...defaultTheme.fontFamily.sans],
          'helvetica' : ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
        },
        fontSize: {
            '1xs':  '0.5rem',
        },
        colors: {
            gray: {
                50: '#F4F4F4',
                100: '#EEEEEE',
                200: '#DEDEDE',
                300: '#CECECE',
            },
            purple: {
              400: '#5F27AA',
              600: '#5B17AA',
            }
        }
      }
    },
    plugins: [require("daisyui")],
}
