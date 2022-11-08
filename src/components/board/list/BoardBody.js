import { useEffect, useRef, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Link } from 'react-router-dom'
import { useGetBoardList } from '../../../hooks/useGetBoard'
import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardItemList from './BoardItemList'
import BoardPaginaition from './BoardPaginaition'

export const BoardBody = ({ category, boardSearch }) => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const { loading, data } = useGetBoardList(category, page)

  console.log(data)

  const [boardList, setBoardList] = useState('')

  useEffect(() => {
    console.log(boardList)
    if (boardList.length !== 0) {
      if (boardSearch !== '') {
        console.log(boardList)
        const filterList = boardList.filter((b) => {
          return b.title
            .replace(' ', '')
            .toLowerCase()
            .includes(boardSearch.toLowerCase().replace(' ', ''))
        })
        console.log(filterList)
        setBoardList(filterList)
      } else {
        setBoardList(data.board)
      }
    }
  }, [boardSearch, category])

  useEffect(() => {
    if (data) {
      setBoardList(data.content)
      setTotal(data.totalPages)
    }

    console.log(total)
  }, [data])

  if (loading) return null
  if (data) {
    return (
      <>
        <div className={styled.boardBody}>
          <div className={styled.writeBoard}>
            <Link to="/board/write">
              <button className={styled.writeBtn}>작성하기</button>
            </Link>
          </div>
          <BoardItemList boardList={boardList} />
          <BoardPaginaition totalPage={data?.totalPages} page={page} setPage={setPage}/>
        </div>
      </>
    )
  }
}

export default BoardBody
