import { useState } from 'react'
import { deleteBoard, deleteComment } from '../../../apis/boardApi'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'
import BoardDetailCommentItem from './BoardDetailCommentItem'

export const BoardDetailCommentList = ({ data, token, user, id }) => {
  const [modify, setModify] = useState()
  
  return (
    <>
      <div className={styled.commentList}>
        {data.comments &&
          data.comments.map((item, idx) => (
            <BoardDetailCommentItem
              key={idx}
              item={item}
              idx={idx}
              user={user}
              token={token}
              id={id}
              setModify={setModify}
              isSelected={modify === idx ? true : false}
            />
          ))}
      </div>
    </>
  )
}

export default BoardDetailCommentList
