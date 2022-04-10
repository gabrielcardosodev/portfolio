import { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import logoImg from '../../assets/images/logo.svg'

import * as S from './styles'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleNav = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseNav = () => {
    setIsOpen(false)
  }

  return (
    <S.Header>
      <a href="/">
        <img src={logoImg} alt="Logo" />
      </a>
      <S.NavContainer className={isOpen ? 'responsive_navbar' : ''}>
        <S.NavLinks href="#about" onClick={handleCloseNav}>
          Sobre
        </S.NavLinks>
        <S.NavLinks href="#projects" onClick={handleCloseNav}>
          Projetos
        </S.NavLinks>
        <S.NavLinks href="#formation" onClick={handleCloseNav}>
          Formação
        </S.NavLinks>
        <S.NavLinks href="#techs" onClick={handleCloseNav}>
          Habilidades
        </S.NavLinks>
        <S.NavButton closeNavButton onClick={handleToggleNav}>
          <FaTimes />
        </S.NavButton>
      </S.NavContainer>
      <S.NavButton onClick={handleToggleNav}>
        <FaBars />
      </S.NavButton>
    </S.Header>
  )
}

export default Navbar
