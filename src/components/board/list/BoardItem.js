import { Link } from 'react-router-dom'
import { useGetTime } from '../../../hooks/useTime'
import styled from '../../../styles/boardStyles/Board.module.scss'
import { BiCommentDetail } from 'react-icons/bi'

export const BoardItem = ({ item }) => {
  const wrtieTime = useGetTime(item?.createdAt)
  console.log(item.boardId)
  return (
    <>
      <div className={styled.boardItem}>
        <div className={styled.itemHeader}>
          <div className={styled.writerInfo}>
            <div className={styled.imgAndTitle}>
              <img
                className={styled.wirterImg}
                src="https://via.placeholder.com/20"
                alt="이미지"
              />
              <div className={styled.writerName}>{item.member.nickname}</div>
            </div>
            <div className={styled.wirteTime}>{wrtieTime}</div>
          </div>
        </div>
        <div className={styled.itembottom}>
          <Link to={`/board/${item.id}`}>
            <div className={styled.itemTitle}>{item.title}</div>
          </Link>
        </div>
        <div className={styled.categoryAndcomment}>
          <span className={styled.itemCategory}>{item.category}</span>
          <div className={styled.commentCountArea}>
            <BiCommentDetail />
            <span className={styled.commentCount}>{item.comments.length}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardItem
