import { useState } from 'react'
import { deleteBoard, deleteComment, updateComment } from '../../../apis/boardApi'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'
import modalShow from '../../Modal'

export const BoardDetailCommentItem = ({
  idx,
  item,
  user,
  token,
  setModify,
  isSelected,
  id,
}) => {
  const [updateValue, setUpdateValue] = useState('')
  const [moreInfo, setMoreInfo] = useState(false)

  const handleMoreInfoClick = () => {
    setMoreInfo(!moreInfo)
  }

  const handleUpdateValueChange = (e) => {
    setUpdateValue(e.target.value)
  }

  const handleModify = () => {
    setModify(idx)
  }

  const handleModifyCancel = () => {
    setModify(-1)
  }

  const handleCommentUpdateBtnClick = async (id, commentid, data, token) => {
    if (data.length === 0) {
      modalShow({
        title: '수정하실 내용을 입력해주세요',
      })
      return
    }

    const updateData = { content: data }
    try {
      const result = await updateComment(commentid, token, updateData)

      if (result.status === 200) {
        window.location.replace(`/board/${id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCommentDeleteBtnClick = async (id, commentId, token) => {
    try {
      const result = await deleteComment(commentId, token)

      if (result.status === 200) {
        window.location.replace(`/board/${id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className={styled.commentItem} key={idx}>
        <div className={styled.writerInfoWrap}>
          <div className={styled.writerInfo}>
            <div className={styled.userImg}>
              <img
                className={styled.img}
                src="https://via.placeholder.com/50"
                alt="이미지"
              />
            </div>
            <div className={styled.userInfo}>
              <div className={styled.userNickName}>{item?.nickname}</div>
              <div className={styled.writerTime}>글작성시간</div>
            </div>
          </div>
          {user && item?.nickname === user?.nickname ? (
            <div className={styled.moreInfo}>
              <button
                className={styled.moreInfoBtn}
                onClick={handleMoreInfoClick}
              >
                ...
              </button>
              {moreInfo && (
                <div className={styled.btnGroup}>
                  {isSelected ? (
                    <>
                      <button
                        className={styled.btn}
                        onClick={() =>
                          handleCommentUpdateBtnClick(
                            id,
                            item.commentId,
                            updateValue,
                            token,
                          )
                        }
                      >
                        수정
                      </button>
                      <button
                        className={styled.btnDeleteAndCancel}
                        type="button"
                        onClick={handleModifyCancel}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={styled.btn} onClick={handleModify}>
                        수정
                      </button>
                      <button
                        className={styled.btnDeleteAndCancel}
                        type="button"
                        onClick={() =>
                          handleCommentDeleteBtnClick(id, item.commentId, token)
                        }
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : null}
        </div>
        {isSelected ? (
          <input
            className={styled.updateInput}
            type="text"
            defaultValue={item?.comment}
            value={updateValue}
            onChange={handleUpdateValueChange}
          />
        ) : (
          <div className={styled.comment}>{item?.content}</div>
        )}
      </div>
    </>
  )
}

export default BoardDetailCommentItem
