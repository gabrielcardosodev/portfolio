import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { ImUserTie } from 'react-icons/im'

import * as S from './styles'

const AboutDescription = () => {
  return (
    <S.Container>
      <div>
        <h1>Gabriel Cardoso</h1>
        <h2>Desenvolvedor Frontend</h2>
        <p>Rio de Janeiro · Brasil</p>
        <p>(21) 98326-4747</p>
        <p className="contact">gabrielcardosodeveloper@gmail.com</p>
      </div>

      <div>
        <span>
          Bem vindo ao meu portfólio! Meu nome é Gabriel, tenho 22 anos sou e
          carioca da gema. Estudante de desenvolvimento web há um ano,
          apaixonado por tecnologia e conhecimento.
        </span>

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
          <a
            className="cv"
            href="https://www.canva.com/design/DAE9D16diyY/DfXdSsomZDjRmmBqARHLGQ/view?utm_content=DAE9D16diyY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
          >
            <ImUserTie size={'1.2rem'} />
          </a>
        </div>
      </div>
    </S.Container>
  )
}

export default AboutDescription
