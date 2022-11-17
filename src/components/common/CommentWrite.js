import { useState } from 'react'
import { addComment } from '../../apis/comment'
import { useGetUser } from '../../hooks/useGetUser'
import styled from '../../styles/common/CommentWrite.module.scss'
import modalShow from '../Modal'
import Image from './Image'

export const CommentWrite = ({ id, token, data, count, loginCheck, pages }) => {
  const [commentValue, setCommentValue] = useState()
  const { data: user } = useGetUser(token)

  const handleCommentChange = (e) => {
    if (pages === 'projects') {
      setCommentValue({ projectId: id, content: e.target.value })
    } else {
      setCommentValue(e.target.value)
    }
  }

  const handleCommentAddBtn = async (id, comment, token) => {

    if(!loginCheck) {
      modalShow({
        title:"로그인 후 이용하실 수 있습니다."
      })

      return;
    }

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
    <>
      <div className={styled.Comment}>
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
              placeholder={loginCheck ? null : '로그인 후 댓글을 작성하실 수 있습니다.'}
              readOnly={!loginCheck}
              value={
                commentValue?.content || commentValue
                  ? commentValue.content
                  : commentValue
              }
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
    </>
  )
}

export default CommentWrite
