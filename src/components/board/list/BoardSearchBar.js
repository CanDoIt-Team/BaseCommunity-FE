import styled from '../../../styles/boardStyles/Board.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

export const BoardSearchBar = ({
  handleChange,
  boardSearch,
  handleSearchClick,
  handleEnterClick,
}) => {
  return (
    <>
      <div className={styled.boardSearchBar}>
        <input
          className={styled.searchBar}
          type="text"
          onChange={handleChange}
          onKeyPress={handleEnterClick}
          value={boardSearch}
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

export default BoardSearchBar
