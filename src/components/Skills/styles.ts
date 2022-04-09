import { styled } from '../../UI/Stitches'

export const Container = styled('section', {
  backgroundColor: '$primary',
  color: '$secondary',
  textAlign: 'center',
  padding: '2rem'
})

export const SkillsCards = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Skill = styled('a', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$black',
  color: '$secondary',
  width: '12rem',
  height: '12rem',
  border: '1px solid $secondary',
  borderRadius: '1rem',
  transition: 'all $medium ease-in-out',
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontWeight: '500',

  svg: {
    width: '3rem',
    height: '3rem'
  },

  '&:hover': {
    backgroundColor: '$primary',
    border: '1px solid $black',
    boxShadow: '0 0.625rem 1.5625rem rgb(0 0 0 / 80%)',
    textDecoration: 'underline',
    transform: 'scale(1.05)',

    a: {
      color: '$secondary'
    }
  }
})
