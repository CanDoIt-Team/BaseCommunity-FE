import { useState } from 'react'
import { addComment } from '../../../apis/boardApi'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'

export const BoardDetailComment = ({
  data,
  id,
  token,
}) => {
  let count = data.comments.length
  const [commentValue, setCommentValue] = useState('')

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value)
    console.log(commentValue)
  }

  const handleCommentAddBtn = async (id, data, token) => {
    const comment = { content: data }

    try {
      const test = await addComment(id, comment, token)

      if (test.status === 200) {
        window.location.replace(`/board/${id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (data)
    return (
      <div className={styled.boardComment}>
        <div className={styled.commentNum}>{count}개의 댓글</div>
        <div className={styled.commentWriteArea}>
          <div className={styled.commentWriterInfo}>
            <div className={styled.userImg}>
              <img
                className={styled.img}
                src="https://via.placeholder.com/50"
                alt="이미지"
              />
            </div>
            <textarea
              className={styled.commentWrite}
              type="text"
              name="comment"
              value={commentValue}
              onChange={handleCommentChange}
            />
          </div>
          <div className={styled.commentWriteBtnArea}>
            <button
              className={styled.commentWriteBtn}
              onClick={() => handleCommentAddBtn(id, commentValue, token)}
            >
              댓글 쓰기
            </button>
          </div>
        </div>
      </div>
    )
}

export default BoardDetailComment
