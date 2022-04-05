import { styled } from '../../UI/Stitches/index'

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
  padding: '0 $16',
  backgroundColor: '$primary',

  img: {
    width: '130px',
    height: '130px',
    cursor: 'pointer'
  },

  '.nav-button': {
    padding: '$2',
    cursor: 'pointer',
    visibility: 'visible',
    opacity: 1,
    backgroundColor: 'transparent',
    color: '$secondary',
    border: 'none',
    outline: 'none'
  },

  '@m': {
    height: '130px',

    img: {
      width: '180px',
      height: '130px',
      cursor: 'pointer'
    },

    '.nav-button': {
      visibility: 'hidden',
      opacity: '0'
    }
  },

  '@l': {
    height: '130px',

    img: {
      width: '180px',
      height: '130px',
      cursor: 'pointer'
    },

    '.nav-button': {
      visibility: 'hidden',
      opacity: '0'
    }
  },

  '@xl': {
    height: '130px',

    img: {
      width: '180px',
      height: '130px',
      cursor: 'pointer'
    },

    '.nav-button': {
      visibility: 'hidden',
      opacity: '0'
    }
  }
})

export const Nav = styled('nav', {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$16',
  backgroundColor: '$primary',
  transition: '0.2s',
  transform: 'translateY(-100%)',

  '&.active': {
    transform: 'none'
  },

  a: {
    color: '$secondary',
    fontWeight: '500',
    transition: 'filter 0.3s',
    fontSize: '$large',

    '&:hover': {
      filter: 'brightness(0.8)',
      textDecoration: 'underline'
    }
  },

  '.nav-close-button': {
    position: 'absolute',
    top: '$16',
    right: '$14'
  },

  '@m': {
    position: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$12',
    transform: 'none',

    a: {
      fontSize: '$medium'
    }
  },

  '@l': {
    position: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$12',
    transform: 'none',

    a: {
      fontSize: '$medium'
    }
  },

  '@xl': {
    position: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '$12',
    transform: 'none',

    a: {
      fontSize: '$medium'
    }
  }
})
