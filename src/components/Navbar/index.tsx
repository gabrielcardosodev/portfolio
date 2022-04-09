import { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import logoImg from '../../assets/images/logo.svg'

import * as S from './styles'

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  return (
    <S.NavContainer height={navIsOpen ? true : false}>
      <S.NavbarInnerContainer>
        <S.NavLogoContainer>
          <a href="/">
            <S.Logo src={logoImg} alt="Logo" />
          </a>
        </S.NavLogoContainer>
        <S.NavLinksContainer>
          <S.NavLinks>
            <S.NavLink href="#about">Sobre</S.NavLink>
            <S.NavLink href="#projects">Projetos</S.NavLink>
            <S.NavLink href="#formation">Formação</S.NavLink>
            <S.NavLink href="#techs">Habilidades</S.NavLink>
          </S.NavLinks>
        </S.NavLinksContainer>
        <S.OpenLinksButton onClick={() => setNavIsOpen(!navIsOpen)}>
          {navIsOpen ? <FaTimes /> : <FaBars />}
        </S.OpenLinksButton>
      </S.NavbarInnerContainer>
      {navIsOpen && (
        <S.NavOpenContainer>
          <S.NavOpenLinks href="#about">Sobre</S.NavOpenLinks>
          <S.NavOpenLinks href="#projects">Projetos</S.NavOpenLinks>
          <S.NavOpenLinks href="#formation">Formação</S.NavOpenLinks>
          <S.NavOpenLinks href="#techs">Habilidades</S.NavOpenLinks>
        </S.NavOpenContainer>
      )}
    </S.NavContainer>
  )
}

export default Navbar
