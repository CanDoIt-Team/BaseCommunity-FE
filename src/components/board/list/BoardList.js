import { useEffect, useState } from 'react'
import BoardBody from './BoardBody'
import BoardCategory from './BoadrCategory'
import BoardSearchBar from './BoardSearchBar'
import BoardAddBtn from './BoardAddBtn'
import { useRecoilState } from 'recoil'
import { loginState } from '../../../store/store'
import Paginaition from '../../Paginaition'
import { useGetBoardList } from '../../../hooks/useGetBoard'
import styled from '../../../styles/boardStyles/Board.module.scss'

export const BoardList = () => {
  const [category, setCategory] = useState('전체')
  const [login, setLogin] = useRecoilState(loginState)
  const [boardSearch, setBoardSearch] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [boardList, setBoardList] = useState('')

  const { loading, data } = useGetBoardList(category, page, 10, searchValue)

  const [loginCheck, setLoginCheck] = useState(login.id === '')

  const handleChange = (e) => {
    setBoardSearch(e.target.value)
  }

  const handleSearchClick = () => {
    setSearchValue(boardSearch)
  }

  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  const handleClick = (category) => {
    setCategory(category)
  }

  useEffect(() => {
    setBoardSearch('')
    setSearchValue('')
  }, [category])

  useEffect(() => {
    if (data) {
      setBoardList(data.content)
      setTotal(data.totalPages)
    }
  }, [data])

  return (
    <>
      <div className={styled.boardBody}>
        <BoardCategory category={category} handleClick={handleClick} />
        <BoardSearchBar
          handleChange={handleChange}
          boardSearch={boardSearch}
          handleSearchClick={handleSearchClick}
          handleEnterClick={handleEnterClick}
        />
        <BoardAddBtn loginCheck={loginCheck} />
        <BoardBody loading={loading} boardList={boardList} />
        <Paginaition
          totalPage={data?.totalPages}
          page={page}
          setPage={setPage}
        />
      </div>
    </>
  )
}

export default BoardList
