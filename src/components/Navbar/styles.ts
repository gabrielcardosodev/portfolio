import { keyframes } from '@stitches/react'
import { styled } from '../../UI/Stitches'

export const NavContainer = styled('nav', {
  width: '100%',
  backgroundColor: '$primary',
  display: 'flex',
  flexDirection: 'column',

  '@m': {
    height: '120px !important'
  },

  variants: {
    height: {
      true: {
        height: '100vh'
      },
      false: {
        height: '120px'
      }
    }
  }
})

export const NavLogoContainer = styled('div', {
  flex: '30%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px'
})

export const NavLinksContainer = styled('div', {
  display: 'flex',
  flex: '70%',
  justifyContent: 'flex-end',
  paddingRight: '20px',

  '@m': {
    alignItems: 'center'
  }
})

export const NavbarInnerContainer = styled('div', {
  width: '100%',
  height: '120px',
  display: 'flex'
})

export const NavLinks = styled('div', {
  display: 'none',

  '@m': {
    display: 'flex'
  }
})

export const NavLink = styled('a', {
  color: '$secondary',
  fontSize: '$large',
  fontWeight: '$bold',
  textDecoration: 'none',
  marginRight: '20px',
  transition: 'all $medium ease-in-out',
  position: 'relative',

  '&::after': {
    content: '""',
    width: '0',
    height: '2px',
    backgroundColor: '$tertiary',
    position: 'absolute',
    left: '0',
    bottom: '-1rem',
    transition: 'width $medium ease-in-out'
  },

  '&:hover': {
    color: '$tertiary',

    '&::after': {
      width: '100%',
      backgroundColor: '$tertiary'
    }
  }
})

export const NavOpenLinks = styled('a', {
  color: '$secondary',
  fontSize: '$large',
  fontWeight: '$bold',
  textDecoration: 'none',
  marginRight: '20px',
  transition: 'all $medium ease-in-out',
  position: 'relative',

  '&::after': {
    content: '""',
    width: '0',
    height: '2px',
    backgroundColor: '$tertiary',
    position: 'absolute',
    left: '0',
    bottom: '-1rem',
    transition: 'width $medium ease-in-out'
  },

  '&:hover': {
    color: '$tertiary',

    '&::after': {
      width: '100%',
      backgroundColor: '$tertiary'
    }
  }
})

export const Logo = styled('img', {
  margin: '10px',
  width: '180px',
  height: 'auto'
})

export const OpenLinksButton = styled('button', {
  margin: '3rem',
  backgroundColor: '$primary',
  border: 'none',
  outline: 'none',
  color: '$secondary',
  fontSize: '$large',
  cursor: 'pointer',

  '@m': {
    display: 'none'
  }
})

export const NavOpenContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 'auto',
  gap: '3rem',

  '@m': {
    display: 'none'
  }
})
