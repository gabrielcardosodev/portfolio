import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import * as S from './styles'
const Footer = () => {
  return (
    <S.Container>
      <S.Footer>
        <span>Desenvolvido por Gabriel Cardoso</span>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/gabrielcardosodev/"
            target="_blank"
          >
            <FaLinkedinIn size={'1.2rem'} />
          </a>
          <a href="https://github.com/gabrielcardosodev" target="_blank">
            <FaGithub size={'1.2rem'} />
          </a>
          <a
            href="https://api.whatsapp.com/send?1=pt_BR&phone=5521983264747"
            target="_blank"
          >
            <FaWhatsapp size={'1.2rem'} />
          </a>
        </div>
      </S.Footer>
    </S.Container>
  )
}

export default Footer
