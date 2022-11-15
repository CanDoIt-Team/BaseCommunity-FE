import MainEmploymentsList from './MainEmploymentsList'
import MainProjectList from './MainProjectList'
import styled from '../../styles/Main.module.scss'
import MainBoardList from './MainBoardList'

export const MainContainer = () => {
  return (
    <div className={styled.mainContainer}>
      <div className={styled.projectAndBoardWrap}>
        <MainProjectList />
        <MainBoardList />
        <MainEmploymentsList />
      </div>
    </div>
  )
}
