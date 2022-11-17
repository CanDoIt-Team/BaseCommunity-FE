import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardItemList from './BoardItemList'

export const BoardBody = ({ loading, boardList, main }) => {
  if (loading) return null
  if (boardList) {
    return (
      <>
        <div className={styled.boardBody}>
          <BoardItemList boardList={boardList} main={main} />
        </div>
      </>
    )
  }
}

export default BoardBody
