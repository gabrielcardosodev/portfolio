import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
  backgroundColor: '$primary',
  color: '$secondary',
  textAlign: 'center',
  padding: '2rem',

  h1: {
    padding: '2rem'
  },

  '> button': {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    borderRadius: '.5rem',
    padding: '1rem',
    marginTop: '2rem',
    backgroundColor: '$black',
    transition: 'all $slow ease-in-out',

    a: {
      color: '$secondary',
      fontWeight: '500'
    },

    '&:hover': {
      backgroundColor: '$secondary',
      boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',

      a: {
        color: '$primary'
      }
    }
  }
})

export const Cards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1.5rem',
  gap: '1.5rem',

  button: {
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    borderRadius: '.5rem',
    marginTop: '1.5rem',
    padding: '1rem 4rem',
    backgroundColor: '$secondary',
    transition: 'all $slow ease-in-out',

    a: {
      color: '$primary',
      fontWeight: '500'
    },

    '&:hover': {
      backgroundColor: '$black',
      color: '$secondary',
      boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',

      a: {
        color: '$secondary'
      }
    }
  },

  '.fix-button': {
    marginTop: '2.7rem'
  },

  '@m': {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  }
})

export const Card = styled('div', {
  backgroundColor: '$black',
  width: '20rem',
  height: '30rem',
  padding: '1rem',
  borderBottom: '1px solid transparent',
  borderRadius: '0.5rem',
  transition: 'all $slow ease-in-out',

  '&:hover': {
    backgroundColor: '$primary',
    boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',
    transform: 'scale(1.05)'
  },

  img: {
    maxWidth: '100%',
    height: 'auto',
    borderBottom: '1px solid $secondary',
    paddingBottom: '1rem'
  },

  h2: {
    marginTop: '$8'
  },

  p: {
    marginTop: '$6',
    maxWidth: '75ch',
    textOverflow: 'ellipsis',
    color: '$tertiary',
    textAlign: 'center'
  },

  '@m': {
    width: '26rem',
    height: '32rem',

    img: {
      width: '100%',
      height: '250px'
    }
  }
})
