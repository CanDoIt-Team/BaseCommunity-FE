import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addHearts, deleteBoard } from '../../../apis/boardApi'
import { useGetTime } from '../../../hooks/useTime'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export const BoardDetailInfo = ({ id, data, heart, user, token }) => {
  const [moreInfo, setMoreInfo] = useState(false)

  const [heartState, setHeartState] = useState(false)

  const wrtieTime = useGetTime(data?.updateAt)

  const handleMoreInfoClick = () => {
    setMoreInfo(!moreInfo)
  }

  const handleDeleteClick = async (token, boardId) => {
    try {
      const result = await deleteBoard(token, boardId)

      if (result.status === 200) {
        window.location.replace(`/board`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleHeartClick = async (token, boardId) => {
    try {
      const result = await addHearts(token, boardId)

      if (result.status === 200) {
        console.log(result)
        setHeartState(result.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const heartNum = heart?.content.map((item) => item.id)
    const heartIdxState = heartNum?.indexOf(Number(id)) !== -1

    setHeartState(heartIdxState)
  }, [heart?.content, id])

  if (data)
    return (
      <div className={styled.boardInfo}>
        <div className={styled.categoryAndheart}>
          <div className={styled.category}>{data.category}</div>
          <div className={styled.iconArea}>
            {heartState ? (
              <button onClick={() => handleHeartClick(token, data.boardId)}>
                <AiFillHeart className={styled.redicon} />
              </button>
            ) : (
              <button onClick={() => handleHeartClick(token, data.boardId)}>
                <AiOutlineHeart className={styled.icon} />
              </button>
            )}
          </div>
        </div>
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
              <div className={styled.writerTime}>{wrtieTime}</div>
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
                    <Link to={`/board/modify/${data.id}`}>
                      <button className={styled.btn}>수정</button>
                    </Link>
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
        <div className={styled.boardTitle}>
          <h1 className={styled.title}>{data.title}</h1>
        </div>
        <div className={styled.boardContents}>
          <div>{data.content}</div>
        </div>
      </div>
    )
}

export default BoardDetailInfo
