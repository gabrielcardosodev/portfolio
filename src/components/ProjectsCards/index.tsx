import * as S from './styles'

const ProjectsCards = () => {
  return (
    <S.Container>
      <h1>Projetos Recentes</h1>
      <S.Cards>
        <S.Card>
          <img
            src="https://i.imgur.com/V1pZgYT.png"
            alt="Imagem da página Home do projeto Letmeask"
          />
          <h2>Letmeask</h2>
          <p>
            Letmeask é uma aplicação web de Q&amp;A em tempo real que permite
            que o dono de uma sala interaja com seu público de uma forma mais
            organizada.
          </p>
          <button>
            <a href="https://letmeask-fdd44.web.app/" target="_blank">
              Acessar
            </a>
          </button>
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
          <button className="fix-button">
            <a
              href="https://gabrielcardosodev.github.io/GrapesFinances/"
              target="_blank"
            >
              Acessar
            </a>
          </button>
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
          <button>
            <a
              href="https://gabrielcardosodev.github.io/bikcraft-project/"
              target="_blank"
            >
              Acessar
            </a>
          </button>
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
          <button>
            <a
              href="https://gabrielcardosodev.github.io/nailhealth/   "
              target="_blank"
            >
              Acessar
            </a>
          </button>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/vJIKW5a.jpg"
            alt="Imagem da página Home do projeto dtmoney"
          />
          <h2>Em produção</h2>
          <p>Aplicação em desenvolvimento.</p>
        </S.Card>

        <S.Card>
          <img
            src="https://i.imgur.com/vJIKW5a.jpg"
            alt="Imagem da página Home do projeto dtmoney"
          />
          <h2>Em produção</h2>
          <p>Aplicação em desenvolvimento.</p>
        </S.Card>
      </S.Cards>
      <button>
        <a href="https://www.github.com/gabrielcardosodev" target="_blank">
          Acessar mais projetos
        </a>
      </button>
    </S.Container>
  )
}

export default ProjectsCards
