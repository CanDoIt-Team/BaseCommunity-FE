import styled from '../../../styles/boardStyles/Board.module.scss'

export const BoardHeader = () => {
  return (
    <>
      <div className={styled.boardHeader}>{'게시판 > 자유게시판'}</div>
    </>
  )
}

export default BoardHeader
