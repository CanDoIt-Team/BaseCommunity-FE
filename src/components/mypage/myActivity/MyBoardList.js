import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { getMyBoardList, getMyHeartList } from '../../../apis/boardApi'
import { authToken } from '../../../store/store'
import styled from '../../../styles/mypage/myBoard.module.scss'
import Paginaition from '../../Paginaition'
import MyBoardItems from './MyBoardItems'

export const MyBoardList = ({ name }) => {
  const token = useRecoilValue(authToken)
  const [boardList, setBoardList] = useState('')
  const [page, setPage] = useState(1)

  const getMyBoard = async (token, page, size) => {
    try {
      if (name === '게시글') {
        const result = await getMyBoardList(token, page - 1, size)

        if (result.status === 200) {
          setBoardList(result.data)
        }
      } else {
        const result = await getMyHeartList(token, page - 1, size)

        if (result.status === 200) {
          setBoardList(result.data)
          console.log(result)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getMyBoard(token, page, 10)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, page])

  if (boardList)
    return (
      <>
        {boardList.content &&
          boardList.content.map((item) => (
            <MyBoardItems item={item} key={item.id} />
          ))}
        <Paginaition
          totalPage={boardList?.totalPages}
          page={page}
          setPage={setPage}
        />
      </>
    )
}
