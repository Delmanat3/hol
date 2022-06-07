// https://tailwindcss.com/docs/installation#create-your-configuration-file
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: 'media',
  theme: {
    fontSize: {
      xs: '.5rem', // 10px
      sm: '.625rem', // 10px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.313rem', // 21px
      '2xl': '1.5rem' // 24px
    },
    colors: {
      transparent: 'transparent',
      basilGold: '#85754e',
      black: colors.black,
      green: colors.green,
      blue: colors.blue,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber
    },
    letterSpacing: {
      normal: '0',
      wide: '.025em',
      wider: '.0625em',
      widest: '.1em'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      2.5: '2.5px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px'
    },
    extend: {
      fontFamily: {
        sans: ['garamond-premier-pro'],
        serif: ['garamond-premier-pro'],
        mono: ['garamond-premier-pro'],
        display: ['garamond-premier-pro'],
        body: ['garamond-premier-pro']
      },
      container: {
        center: true,
        margin: 'auto',
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px'
        }
      },
      maxWidth: {
        60: '60%'
      },
      lineHeight: {
        12: '3rem',
        4.5: '1.125rem',
        2: '.625rem'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
