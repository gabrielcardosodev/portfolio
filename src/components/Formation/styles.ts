import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
  color: '$secondary',
  textAlign: 'center',
  padding: '2rem',

  h1: {
    padding: '2rem'
  }
})

export const Ignite = styled('div', {
  marginTop: '2rem',
  paddingBottom: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  '.study-icon': {
    display: 'none'
  },

  '.course-description': {
    h2: {
      fontSize: '2rem',
      paddingBottom: '$5',
      borderBottom: '1px solid $secondary'
    },

    p: {
      marginTop: '0.5rem',
      fontWeight: '700',
      fontSize: '$light',
      color: '$tertiary'
    }
  },

  '@m': {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'right',
    '.study-icon': {
      display: 'block',
      svg: {
        width: '80px',
        height: '80px',
        marginRight: '10rem'
      }
    }
  }
})

export const College = styled('div', {
  marginTop: '4rem',
  paddingBottom: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  '.course-description': {
    h2: {
      fontSize: '2rem',
      paddingBottom: '$5',
      borderBottom: '1px solid $secondary'
    },

    p: {
      marginTop: '0.5rem',
      fontWeight: '700',
      fontSize: '$light',
      color: '$tertiary'
    }
  },

  '.study-icon': {
    display: 'none'
  },

  '@m': {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'left',
    '.study-icon': {
      display: 'block',
      svg: {
        width: '80px',
        height: '80px'
      }
    }
  }
})
