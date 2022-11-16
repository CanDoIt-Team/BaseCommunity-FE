import styled from '../styles/boardStyles/Board.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'

export const SearchBar = ({
  setSearchValue, category
}) => {
  
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    console.log(value)
    setValue(e.target.value)
  }

  const handleSearchClick = () => {
    setSearchValue(value)
  }

  const handleEnterClick = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick()
    }
  }

  useEffect(() => {
    setValue('')
  }, [category])

  return (
    <>
      <div className={styled.boardSearchBar}>
        <input
          className={styled.searchBar}
          type="text"
          onChange={handleChange}
          onKeyPress={handleEnterClick}
          value={value}
          placeholder="검색하실 내용을 입력하세요"
        />
        <div className={styled.searchBtn}>
          <button onClick={handleSearchClick}>
            <AiOutlineSearch className={styled.searchIcon} />
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar
