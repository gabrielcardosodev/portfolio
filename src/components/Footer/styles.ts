import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
  color: '$secondary',
  textAlign: 'center',
  padding: '3rem'
})

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '$tertiary',
    fontWeight: '500'
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
      transition: 'all $medium ease-in-out',

      '&:hover': {
        color: '$black',
        backgroundColor: '$secondary',
        border: '1px solid $black'
      }
    }
  }
})
