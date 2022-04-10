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
      <S.Container id="techs">
        <h1>Habilidades</h1>
        <S.SkillsCards>
          <S.Skill
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
          >
            <FaHtml5 />
            HTML5
          </S.Skill>

          <S.Skill
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
          >
            <FaCss3 />
            CSS3
          </S.Skill>

          <S.Skill
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
          >
            <SiJavascript />
            JavaScript
          </S.Skill>

          <S.Skill href="https://www.typescriptlang.org/" target="_blank">
            <SiTypescript />
            TypeScript
          </S.Skill>

          <S.Skill href="https://pt-br.reactjs.org/" target="_blank">
            <FaReact />
            ReactJS
          </S.Skill>

          <S.Skill href="https://sass-lang.com/" target="_blank">
            <FaSass />
            Sass
          </S.Skill>

          <S.Skill href="https://styled-components.com/" target="_blank">
            <SiStyledcomponents />
            Styled Components
          </S.Skill>

          <S.Skill href="https://git-scm.com/" target="_blank">
            <FaGit />
            Git
          </S.Skill>

          <S.Skill href="https://github.com/" target="_blank">
            <FaGithub />
            Github
          </S.Skill>
        </S.SkillsCards>
      </S.Container>
    </>
  )
}

export default Skills
