import { useFetch } from '../../hooks/useFetch'
import * as S from './styles'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
}

const ProjectsCards = () => {
  const { data: repositories } = useFetch<Repository[]>(
    'https://api.github.com/users/gabrielcardosodev/repos?sort=created&direction=desc'
  )

  console.log(repositories)
  return (
    <S.Container id="projects">
      <h1>Projetos Recentes</h1>
      <S.Cards>
        {repositories?.map(repo => {
          return (
            <S.Card key={repo.id}>
              <h2>{repo.name}</h2>
              <p>
                {repo.description}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
              >
                <button className="fix-button">Acessar</button>
              </a>
            </S.Card>
          )
        })}
      </S.Cards>

      <a href="https://www.github.com/gabrielcardosodev" target="_blank">
        <button>Acessar mais projetos</button>
      </a>
    </S.Container>
  )
}

export default ProjectsCards
