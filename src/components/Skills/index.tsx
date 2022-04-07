import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaGit,
  FaGithub,
  FaReact
} from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiStyledcomponents } from 'react-icons/si'

import * as S from './styles'

const Skills = () => {
  return (
    <>
      <S.Container>
        <h1>Habilidades</h1>
        <S.SkillsCards>
          <S.Skill>
            <FaHtml5 />
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              target="_blank"
            >
              HTML5
            </a>
          </S.Skill>

          <S.Skill>
            <FaCss3 />
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              target="_blank"
            >
              CSS3
            </a>
          </S.Skill>

          <S.Skill>
            <SiJavascript />
            <a
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              target="_blank"
            >
              JavaScript
            </a>
          </S.Skill>

          <S.Skill>
            <SiTypescript />
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>
          </S.Skill>

          <S.Skill>
            <FaSass />
            <a href="https://sass-lang.com/" target="_blank">
              Sass
            </a>
          </S.Skill>

          <S.Skill>
            <SiStyledcomponents />
            <a href="https://styled-components.com/" target="_blank">
              Styled Components
            </a>
          </S.Skill>

          <S.Skill>
            <FaGit />
            <a href="https://git-scm.com/" target="_blank">
              Git
            </a>
          </S.Skill>

          <S.Skill>
            <FaGithub />
            <a href="https://github.com/" target="_blank">
              Github
            </a>
          </S.Skill>

          <S.Skill>
            <FaReact />
            <a href="https://pt-br.reactjs.org/" target="_blank">
              ReactJS
            </a>
          </S.Skill>
        </S.SkillsCards>
      </S.Container>
    </>
  )
}

export default Skills
