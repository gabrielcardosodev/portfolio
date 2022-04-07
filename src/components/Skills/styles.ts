import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
  backgroundColor: '$primary',
  color: '$secondary',
  textAlign: 'center',
  padding: '2rem'
})

export const SkillsCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  alignItems: 'center',
  justifyItems: 'center'
})

export const Skill = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$black',
  color: '$white',
  width: '12rem',
  height: '12rem',
  border: '1px solid $secondary',
  borderRadius: '1rem',
  transition: 'all $slow ease-in-out',

  '&:hover': {
    backgroundColor: '$primary',
    border: '1px solid $black',
    boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',
    transform: 'scale(1.05)'
  },

  svg: {
    width: '3rem',
    height: '3rem'
  },

  a: {
    color: '$secondary',
    marginTop: '1rem',
    fontSize: '1.5rem',
    fontWeight: '500',
    transition: '$slow ease-in-out',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
})
