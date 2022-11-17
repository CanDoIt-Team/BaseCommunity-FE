import { useState } from 'react'
import { addComment } from '../../../apis/boardApi'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'
import Image from '../../common/Image'
import modalShow from '../../Modal'

export const BoardDetailComment = ({ data, id, token, user, loginCheck }) => {
  let count = data.comments.length
  const [commentValue, setCommentValue] = useState('')

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value)
    console.log(commentValue)
  }

  const handleCommentAddBtn = async (id, data, token) => {
    const comment = { content: data }

    if (loginCheck === false) {
      modalShow({
        title:
          '로그인이 필요한 기능입니다.<br><br> 로그인 후 이용해주세요.<br>',
      })
      return
    }

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
              <Image
                size={40}
                src={user?.urlFilename}
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
