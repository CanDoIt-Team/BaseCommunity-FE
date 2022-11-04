import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteBoard } from '../../../apis/boardApi'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'

export const BoardDetailInfo = ({ data, user, token }) => {
  const [moreInfo, setMoreInfo] = useState(false)

  let {id} = useParams();

  console.log(id)

  const handleMoreInfoClick = () => {
    setMoreInfo(!moreInfo)
  }

  const handleDeleteClick = async (token, boardId) => {
    try {
      const result = await deleteBoard(token, boardId)

      if(result.status === 200) {
        window.location.replace(`/board`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  console.log(data)

  if (data)
    return (
      <div className={styled.boardInfo}>
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
              <div className={styled.userNickName}>{data.nickname}</div>
              <div className={styled.writerTime}>글작성시간</div>
            </div>
          </div>
          {user && data?.nickname === user?.nickname ? (
            <div className={styled.moreInfo}>
              <button
                className={styled.moreInfoBtn}
                onClick={handleMoreInfoClick}
              >
                ...
              </button>
              {moreInfo && (
                <div className={styled.btnGroup}>
                  <>
                    <button className={styled.btn}>수정</button>
                    <button
                      className={styled.btnDeleteAndCancel}
                      type="button"
                      onClick={() => handleDeleteClick(token, id)}
                    >
                      삭제
                    </button>
                  </>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div className={styled.boardTitleAndCategory}>
          <div className={styled.category}>{data.category}</div>
          <h1 className={styled.title}>{data.title}</h1>
        </div>
        <div className={styled.boardContents}>
          <div>{data.content}</div>
        </div>
      </div>
    )
}

export default BoardDetailInfo
