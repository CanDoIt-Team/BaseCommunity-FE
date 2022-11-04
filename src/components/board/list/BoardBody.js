import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetBoardList } from '../../../hooks/useGetBoard'
import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardCategory from './BoadrCategory'
import BoardItemList from './BoardItemList'
import BoardSearchBar from './BoardSearchBar'

export const BoardBody = ({ category, boardSearch }) => {
  console.log(category)
  const { loading, data } = useGetBoardList(category)

  const [boardList, setBoardList] = useState('')
  // const [boardSearch, setBoardSearch] = useState('')

  // const handleChange = (e) => {
  //   setBoardSearch(e.target.value)
  // }

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
    if (data) setBoardList(data.board)
  }, [data])

  if (loading) return null
  if (data) {
    return (
      <>
        <div className={styled.boardBody}>
          <div className={styled.writeBoard}>
            <Link to="/board/Write">
              <button className={styled.writeBtn}>작성하기</button>
            </Link>
          </div>
          <BoardItemList boardList={boardList} />
        </div>
      </>
    )
  }
}

export default BoardBody
