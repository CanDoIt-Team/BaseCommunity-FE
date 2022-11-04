import { Link } from 'react-router-dom'
import { useGetBoardDetail } from '../../../hooks/useGetBoard'
import styled from '../../../styles/boardStyles/Board.module.scss'

export const BoardItem = ({ item }) => {

  return (
    <>
      <div className={styled.boardItem}>
        <div className={styled.itemHeader}>
          <div className={styled.writerInfo}>
            <img
              className={styled.wirterImg}
              src="https://via.placeholder.com/30"
              alt="이미지"
            />
            <div className={styled.writerName}>{item.nickname}</div>
          </div>
          <div className={styled.wirteTime}>3시간 전</div>
        </div>
        <div className={styled.itemCategory}>{item.category}</div>
        <div className={styled.itembottom}>
          <Link to={`/board/${item.boardId}`}>
            <div className={styled.itemTitle}>{item.title}</div>
          </Link>
          <div className={styled.comment}>댓글 수 </div>
        </div>
      </div>
    </>
  )
}

export default BoardItem
