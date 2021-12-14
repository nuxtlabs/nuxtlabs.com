import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import tokens from './design-token.json'

const colorTokens = Object.entries(tokens).reduce((acc, [key, value]) => {
  acc[key] = Object.entries(value).reduce((color, [weight, hex]) => {
    color[weight] = hex.value
    return color
  }, {})

  return acc
}, {})

export default defineConfig({
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#080808',
      white: '#fff',
      blue: colors.sky,
      green: colors.emerald,
      rose: colors.rose,
      yellow: colors.amber,
      gray: colors.gray,
      primary: {
        '50': '#ededee',
        '100': '#bfbfc5',
        '200': '#94949e',
        '300': '#7f7f8b',
        '400': '#6b6b76',
        '500': '#585860',
        '600': '#44444b',
        '700': '#313136',
        '800': '#1d1d20',
        '900': '#0a0a0b',
      },
      ...colorTokens,
    },
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      spacing: {
        'double-screen': '200vw',
        'fill-available': '-webkit-fill-available',
      },
    },
  },
  shortcuts: {
    'h-blur': 'filter blur-8',
    'text-display-6': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
    },
    'text-display-5': {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
    },
    'text-display-4': {
      fontSize: '3rem',
      lineHeight: '3rem',
    },
    'text-display-3': {
      fontSize: '3.75rem',
      lineHeight: '3.75rem',
    },
    'text-display-2': {
      fontSize: '4.5rem',
      lineHeight: '4.5rem',
    },
    'text-display-1': {
      fontSize: '6rem',
      lineHeight: '6rem',
    },
    'text-body-xs': {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    'text-body-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    'text-body-base': {
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
    'text-body-lg': {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    'text-body-xl': {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
    },
    'text-body-2xl': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
})
