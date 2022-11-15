import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardItemList from './BoardItemList'

export const BoardBody = ({ loading, data, boardList }) => {
  if (loading) return null
  if (data) {
    return (
      <>
        <div className={styled.boardBody}>
          <BoardItemList boardList={boardList} />
        </div>
      </>
    )
  }
}

export default BoardBody
