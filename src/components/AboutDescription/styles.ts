import { styled } from '../../UI/Stitches/index'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  margin: '4rem auto',
  color: '$secondary',

  h1: {
    fontSize: '3rem',
    fontWeight: '700',
    margin: '0'
  },

  h2: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '$tertiary',
    marginTop: '$4'
  },

  '.contact': {
    '&:after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '1px',
      backgroundColor: '$secondary',
      margin: '$16 0'
    },

    p: {
      fontSize: '$default',
      fontWeight: '500'
    }
  },

  span: {
    fontSize: '$default',
    display: 'block',
    fontWeight: '500',
    maxWidth: '400px',
    width: 'fit-content'
  },

  '.socials': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '$16',

    a: {
      color: '$secondary',
      textDecoration: 'underline',
      margin: '0 $8',
      border: '1px solid $secondary',
      padding: '0.65rem 0.75rem',
      borderRadius: '0.50rem',
      transition: 'all 0.3s ease-in-out',

      '&:hover': {
        color: '$black',
        backgroundColor: '$secondary',
        border: '1px solid $black'
      }
    }
  }
})