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
  }

  const handleCommentAddBtn = async (id, data, token) => {
    const comment = { content: data }

    if (loginCheck === false) {
      modalShow({
        title:
          '로그인 후 이용하실 수 있습니다.',
      })
      return;
    }

    if(comment.content.length === 0) {
      modalShow({
        title:
          '댓글을 입력해주세요.',
      })
      return;
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
              placeholder={loginCheck ? null : '로그인 후 댓글을 작성하실 수 있습니다.'}
              readOnly={!loginCheck}
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
