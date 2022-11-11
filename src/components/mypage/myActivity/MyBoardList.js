import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { getMyBoardList, getMyHeartList } from '../../../apis/boardApi'
import { authToken } from '../../../store/store'
import styled from '../../../styles/mypage/myBoard.module.scss'
import MyBoardItems from './MyBoardItems'

export const MyBoardList = ({ name }) => {
  const token = useRecoilValue(authToken)
  const [boardList, setBoardList] = useState('')

  const getMyBoard = async (token, page) => {
    try {
      if (name === '게시글') {
        const result = await getMyBoardList(token, page)

        if (result.status === 200) {
          setBoardList(result.data.content)
        }
      } else {
        const result = await getMyHeartList(token)

        if (result.status === 200) {
          setBoardList(result.data.content)
          console.log(result)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getMyBoard(token, 1)
    console.log(boardList)
  }, [token])

  if (boardList)
    return (
      <>
        {boardList &&
          boardList.map((item) => <MyBoardItems item={item} key={item.id} />)}
      </>
    )
}
