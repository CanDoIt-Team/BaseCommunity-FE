import styled from '../../styles/boardStyles/Board.module.scss'
import { Outlet } from 'react-router-dom'

export const BoardContainer = () => {
  return (
    <>
      <div className={styled.boardContainer}>
        <Outlet/>
      </div>
    </>
  )
}

export default BoardContainer
