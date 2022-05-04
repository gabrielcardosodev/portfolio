import * as S from './styles'

const ProjectsCards = () => {
  return (
    <S.Container id="projects">
      <h1>Projetos Recentes</h1>
      <S.Cards>
        <S.Card>
          <img
            src="https://i.imgur.com/oY0iupg.png"
            alt="Imagem da página Home do projeto Letmeask"
          />
          <h2>Letmeask</h2>
          <p>
            Letmeask é uma aplicação web de Q&amp;A em tempo real que permite
            que o dono de uma sala interaja com seu público de uma forma mais
            organizada.
          </p>
          <a href="https://letmeask-fdd44.web.app/" target="_blank">
            <button>Acessar</button>
          </a>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/QmILy04.png"
            alt="Imagem da página Home do projeto Grapes Finances"
          />
          <h2>GrapesFinances</h2>
          <p>
            Grapes Finance é uma aplicação web que consiste em te ajudar a
            organizar sua vida financeira.
          </p>
          <a
            href="https://gabrielcardosodev.github.io/GrapesFinances/"
            target="_blank"
          >
            <button className="fix-button">Acessar</button>
          </a>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/wIYLTgP.png"
            alt="Imagem da página Home do projeto Bikcraft"
          />
          <h2>Bikcraft</h2>
          <p>
            Bikcraft é um site que vende bicicletas. Permite que você escolher o
            modelo e a cor da sua bicicleta, e assim, escolher a bicicleta que
            mais se adequa a você.
          </p>

          <a
            href="https://gabrielcardosodev.github.io/bikcraft-project/"
            target="_blank"
          >
            <button>Acessar</button>
          </a>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/9TMvqJs.png"
            alt="Imagem da página Home do projeto nailhealth"
          />
          <h2>nailhealth</h2>
          <p>
            Nailhealth é um site com o objetivo de divulgar o serviço de
            manicure e pedicure de um salão do Rio de Janeiro. O site apresenta
            os serviços e redireciona o cliente para o Whatsapp do salão.
          </p>
          <a
            href="https://gabrielcardosodev.github.io/nailhealth/   "
            target="_blank"
          >
            <button>Acessar</button>
          </a>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/GyAr4Sf.png"
            alt="Imagem da página home do Laletra"
          />
          <h2>Laletra</h2>
          <p>Contribuí no desenvolvimento do Frontend desse E-commerce.</p>
          <a href="https://laletra.com.br/" target="_blank">
            <button className="fix-button">Acessar</button>
          </a>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/vJIKW5a.jpg"
            alt="Imagem de um erro 404 not found"
          />
          <h2>Em produção</h2>
          <p>Aplicação em desenvolvimento.</p>
        </S.Card>
      </S.Cards>
      <a href="https://www.github.com/gabrielcardosodev" target="_blank">
        <button>Acessar mais projetos</button>
      </a>
    </S.Container>
  )
}

export default ProjectsCards
