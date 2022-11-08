import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useGetBoardDetail } from '../../../hooks/useGetBoard'
import { useGetUser } from '../../../hooks/useGetUser'
import { authToken } from '../../../store/store'
import styled from '../../../styles/boardStyles/BoardDetail.module.scss'
import BoardDetailComment from './BoardDetailCommentWrite'
import BoardDetailCommentList from './BoardDetailCommentList'
import BoardDetailInfo from './BoardDetailInfo'
import { useGetHeartList } from '../../../hooks/useGetHeartList'

export const BoardDetail = () => {
  const token = useRecoilValue(authToken)

  const { id } = useParams()
  const { loading, data } = useGetBoardDetail(id)
  const { data: heart } = useGetHeartList(token)
  const { data: user } = useGetUser(token)



  const [boardData, setBoardData] = useState(null)
  
  useEffect(() => {
    if (data) {
      setBoardData(data)
    }
  }, [boardData, data, heart])

  if (loading) return null
  if (boardData)
    return (
      <>
        <div className={styled.boardDetailContainer}>
          <BoardDetailInfo
            id={id}
            data={boardData}
            user={user}
            heart={heart}
            token={token}
          />
          <BoardDetailComment
            id={id}
            token={token}
            data={boardData}
            user={user}
          />
          <BoardDetailCommentList
            id={id}
            token={token}
            user={user}
            data={data}
          />
        </div>
      </>
    )
}

export default BoardDetail
