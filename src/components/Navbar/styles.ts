import { styled } from '../../UI/Stitches'

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  padding: '0 2rem',
  backgroundColor: '$primary',
  position: 'sticky',
  top: 0,

  img: {
    width: '120px',
    height: '120px'
  },

  '@m': {
    height: '100px',

    img: {
      width: '160px',
      height: '160px'
    }
  }
})

export const NavContainer = styled('nav', {
  '@s': {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4rem',
    backgroundColor: '$primary',
    transform: 'translateY(-100vh)',
    transition: 'transform $medium ease-in-out',

    '&.responsive_navbar': {
      transform: 'translateY(0)'
    }
  }
})

export const NavLinks = styled('a', {
  marginRight: '2rem',
  color: '$secondary',
  fontSize: '$large',
  transition: 'color $medium ease-in-out',
  position: 'relative',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '-1.5rem',
    width: '0',
    height: '2px',
    background: '$secondary',
    transition: 'width $medium ease-in-out'
  },

  '&:hover': {
    color: '$tertiary',

    '&::after': {
      width: '100%',
      background: '$tertiary'
    }
  },

  '@m': {}
})

export const NavButton = styled('button', {
  display: 'block',
  padding: '$5',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  color: '$secondary',
  outline: 'none',
  fontSize: '$xlarge',

  '@m': {
    display: 'none'
  },

  variants: {
    closeNavButton: {
      true: {
        position: 'absolute',
        top: '2rem',
        right: '2rem'
      }
    }
  }
})
