import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetUser } from '../../hooks/useGetUser'
import styled from '../../styles/ProjectDetail.module.scss'
import CommentItem from './CommentItem'

export const CommentList = ({ token, id, data, pages }) => {
  const params = useParams()
  const [modify, setModify] = useState()
  const { data: user } = useGetUser(token)
  console.log(data)

  return (
    <>
      <div className={styled.commentList}>
        {data &&
          data.map((item, idx) => (
            <CommentItem
              key={idx}
              item={item}
              idx={idx}
              user={user}
              token={token}
              id={id}
              setModify={setModify}
              isSelected={modify === idx ? true : false}
              pages={pages}
            />
          ))}
      </div>
    </>
  )
}

export default CommentList
