import { createStitches, globalCss } from '@stitches/react'

export const { styled, css } = createStitches({
  media: {
    s: '(max-width: 767px)', // Small
    m: '(min-width: 768px)', // Medium
    l: '(min-width: 992px)', // Large
    xl: '(min-width: 1200px)' // Extra large
  },

  theme: {
    colors: {
      primary: '#1E1E1E',
      secondary: '#F5F5F5',
      tertiary: '#c2c2c4',
      black: '#0A0E14',
      white: '#FFFFFF'
    },

    space: {
      1: '0.125rem', // 2
      2: '0.25rem', // 4
      3: '0.375rem', // 6
      4: '0.5rem', // 8
      5: '0.625rem', // 10
      6: '0.75rem', // 12
      7: '0.875rem', // 14
      8: '1rem', // 16
      9: '1.125rem', // 18
      10: '1.25rem', // 20
      11: '1.375rem', // 22
      12: '1.5rem', // 24
      13: '1.625rem', // 26
      14: '1.75rem', // 28
      15: '1.875rem', // 30
      16: '2rem' // 32
    },

    fontSizes: {
      mini: '12px',
      light: '14px',
      default: '16px',
      medium: '18px',
      large: '20px',
      xlarge: '24px'
    },

    transitions: {
      fast: '0.1s',
      medium: '0.2s',
      slow: '0.3s',
      verySlow: '0.4s',
      ultraSlow: '1s'
    },

    fonts: {
      mono: '"Montserrat", monospace'
    }
  }
})

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    scrollPaddingTop: '4.5rem'
  },

  html: {
    lineHeight: 1.15,
    webkitTextSizeAdjust: '100%',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '$default',
    scrollBehavior: 'smooth',
    '::-webkit-scrollbar': {
      width: '0.5rem'
    },

    '::-webkit-scrollbar-track': {
      backgroundColor: '#black',
      borderRadius: '0.25rem'
    },

    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#c2c2c4',
      borderRadius: '0.25rem'
    }
  },

  body: {
    backgroundColor: '$black'
  },

  main: {
    display: 'block'
  },

  h1: {
    fontSize: '2em',
    margin: '0.67em 0'
  },

  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible'
  },

  pre: {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  },

  a: {
    backgroundColor: 'transparent',
    textDecoration: 'none'
  },

  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted'
  },

  'b, strong': {
    fontWeight: 'bolder'
  },

  'code, kbd, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  },

  small: {
    fontSize: '80%'
  },

  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline'
  },

  sub: {
    bottom: '-0.25em'
  },

  sup: {
    top: '-0.5em'
  },

  img: {
    borderStyle: 'none'
  },

  button: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    WebkitAppearance: 'button'
  },

  'button, input, optgroup, select, textarea': {
    margin: 0
  },

  'button,input': {
    overflow: 'visible'
  },

  'button, select': {
    textTransform: 'none'
  },

  'button::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0
  },

  'button:-moz-focusring': {
    outline: '1px dotted ButtonText'
  },

  fieldset: {
    border: '1px solid silver',
    margin: 0,
    padding: '0.35em 0.625em 0.75em'
  },

  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  },

  progress: {
    verticalAlign: 'baseline'
  },

  textarea: {
    overflow: 'auto'
  },

  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0
  },

  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button':
    {
      height: 'auto'
    },

  '[type="search"]': {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  },

  '[type="search"]::-webkit-search-decoration': {
    WebkitAppearance: 'none'
  },

  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit'
  },

  details: {
    display: 'block'
  },

  summary: {
    display: 'list-item'
  },

  template: {
    display: 'none'
  },

  ul: {
    listStyle: 'none'
  },

  '[hidden]': {
    display: 'none'
  }
})
