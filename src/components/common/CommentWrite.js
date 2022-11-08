import { useState, useEffect } from 'react'
import { addComment } from '../../apis/comment'
import styled from '../../styles/common/CommentWrite.module.scss'

export const CommentWrite = ({ id, token, count, pages }) => {
  const [commentValue, setCommentValue] = useState()

  const handleCommentChange = (e) => {
    if (pages === 'projects') {
      setCommentValue({ projectId: id, content: e.target.value })
    } else {
      setCommentValue(e.target.value)
    }
    console.log(commentValue)
  }

  const handleCommentAddBtn = async (id, comment, token) => {
    console.log(pages)
    try {
      const test = await addComment(id, comment, token, pages)
      if (test.status === 200) {
        window.location.replace(`/${pages.slice(0, -1)}/${id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styled.Comment}>
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
            defalutValue={commentValue}
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

export default CommentWrite
