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
import BoardSearchBar from './BoardSearchBar'

export const BoardBody = ({
  category,
}) => {
  let navigate = useNavigate()
  const [login, setLogin] = useRecoilState(loginState)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [boardList, setBoardList] = useState('')
  const [boardSearch, setBoardSearch] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const { loading, data } = useGetBoardList(category, page, searchValue)
  const [loginCheck, setLoginCheck] = useState(login.id === '')

  const handleChange = (e) => {
    setBoardSearch(e.target.value)
  }

  const handleWriteClick = () => {
    if (loginCheck) {
      modalShow({
        title: '로그인 후 작성이 가능합니다.',
      })
    } else {
      navigate('/board/write')
    }
  }

  const handleSearchClick = () => {
    setSearchValue(boardSearch);
  }

  const handleEnterClick = (e) => {
    if(e.key === 'Enter') {
      handleSearchClick()
    }
  }

  useEffect(() => {
    if (data) {
      setBoardList(data.content)
      setTotal(data.totalPages)
    }
  }, [data])

  useEffect(() => {
    setBoardSearch('')
    setSearchValue('')
  }, [category])

  if (loading) return null
  if (data) {
    return (
      <>
        <BoardSearchBar
          handleChange={handleChange}
          boardSearch={boardSearch}
          handleSearchClick={handleSearchClick}
          handleEnterClick={handleEnterClick}
        />
        <div className={styled.boardBody}>
          <div className={styled.writeBoard}>
            <button className={styled.writeBtn} onClick={handleWriteClick}>
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
