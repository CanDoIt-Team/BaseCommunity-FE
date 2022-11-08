import { useEffect, useRef, useState } from 'react'
import Pagination from 'react-js-pagination'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useGetBoardList } from '../../../hooks/useGetBoard'
import { loginState } from '../../../store/store'
import styled from '../../../styles/boardStyles/Board.module.scss'
import modalShow from '../../Modal'
import BoardItemList from './BoardItemList'
import BoardPaginaition from './BoardPaginaition'

export const BoardBody = ({ category, boardSearch }) => {
  let navigate = useNavigate()
  const [login, setLogin] = useRecoilState(loginState)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [boardList, setBoardList] = useState('')

  const { loading, data } = useGetBoardList(category, page)
  console.log(login.id)
  const [loginCheck, setLoginCheck] = useState(login.id === '')

  console.log(loginCheck)

  const handleWriteClick = () => {
    if (loginCheck) {
      modalShow({
        title: '로그인 후 작성이 가능합니다.',
      })
    } else {
      navigate('/boards/write')
    }
  }

  useEffect(() => {
    if (boardList.length !== 0) {
      if (boardSearch !== '') {
        const filterList = boardList.filter((b) => {
          return b.title
            .replace(' ', '')
            .toLowerCase()
            .includes(boardSearch.toLowerCase().replace(' ', ''))
        })
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
  }, [data])

  if (loading) return null
  if (data) {
    return (
      <>
        <div className={styled.boardBody}>
          <div className={styled.writeBoard}>
            <button
              className={styled.writeBtn}
              onClick={handleWriteClick}
            >
              작성하기
            </button>
          </div>
          <BoardItemList boardList={boardList} />
          <BoardPaginaition
            totalPage={data?.totalPages}
            page={page}
            setPage={setPage}
          />
        </div>
      </>
    )
  }
}

export default BoardBody
