import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logoImg from '../../assets/images/logo.svg'
import * as S from './styles'

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null)

  function handleToggle() {
    navRef.current?.classList.toggle('active')
  }

  return (
    <S.Header>
      <a href="/">
        <img
          src={logoImg}
          alt="Logo de um quadrado com Gabriel escrito dentro desse quadrado"
        />
      </a>
      <S.Nav ref={navRef}>
        <a href="/">Sobre</a>
        <a href="/projects">Projetos</a>
        <a href="/formation">Formação</a>
        <a href="/techs">Habilidades</a>
        <button onClick={handleToggle} className="nav-button nav-close-button">
          <FaTimes size={'1.5rem'} />
        </button>
      </S.Nav>
      <button onClick={handleToggle} className="nav-button">
        <FaBars size={'1.5rem'} />
      </button>
    </S.Header>
  )
}

export default Navbar
