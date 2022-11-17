import { useState, useEffect } from 'react'
import { deleteComment, updateComment } from '../../apis/comment'
import { useGetTime } from '../../lib/useTime'

import styled from '../../styles/common/CommontItem.module.scss'
import modalShow from '../Modal'
import Image from './Image'

export const CommentItem = ({
  idx,
  item,
  user,
  token,
  setModify,
  isSelected,
  id,
  pages,
}) => {
  const [updateValue, setUpdateValue] = useState()
  const [moreInfo, setMoreInfo] = useState(false)

  const wrtieTime = useGetTime(
    item?.modifiedAt ? item?.modifiedAt : item?.updateAt,
  )

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

    let updateData
    if (pages === 'projects') {
      updateData = {
        content: updateValue,
        id: Number(id),
        projectId: Number(commentid),
      }
    }
    if (pages === 'borad') {
      updateData = { content: data }
    }

    try {
      const result = await updateComment(commentid, token, updateData, pages)

      if (result.status === 200) {
        window.location.replace(`/${pages.slice(0, -1)}/${id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCommentDeleteBtnClick = async (id, commentId, token) => {
    try {
      const result = await deleteComment(commentId, token, pages)

      if (result.status === 200) {
        window.location.replace(`/${pages.slice(0, -1)}/${id}`)
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
              <Image size={40} src={item?.member.urlFilename} />
            </div>
            <div className={styled.userInfo}>
              <div className={styled.userNickName}>{item.member.nickname}</div>
              <div className={styled.writerTime}>{wrtieTime}</div>
            </div>
          </div>
          <div className={styled.moreInfo}>
            {user && item?.member.nickname === user.nickname ? (
              <>
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
                              item.id,
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
                            handleCommentDeleteBtnClick(id, item.id, token)
                          }
                        >
                          삭제
                        </button>
                      </>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
        {isSelected ? (
          <input
            className={styled.updateInput}
            type="text"
            value={updateValue || ''}
            onChange={handleUpdateValueChange}
          />
        ) : (
          <div className={styled.comment}>{item?.content}</div>
        )}
      </div>
    </>
  )
}

export default CommentItem
