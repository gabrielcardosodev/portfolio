import { FaUserGraduate } from 'react-icons/fa'

import * as S from './styles'
const Formation = () => {
  return (
    <S.Container>
      <h1>Formação</h1>
      <S.Ignite>
        <div className="study-icon">
          <FaUserGraduate />
        </div>
        <div className="course-description">
          <h2>Ignite</h2>
          <p>Rocketseat</p>
          <p>Trilha de ReactJS - 2O22</p>
        </div>
      </S.Ignite>
      <S.College>
        <div className="course-description">
          <h2>UNOPAR</h2>
          <p>EAD</p>
          <p>Análise e Desenvolvimento de Sistemas - Pausado</p>
        </div>
        <div className="study-icon">
          <FaUserGraduate />
        </div>
      </S.College>
    </S.Container>
  )
}

export default Formation
