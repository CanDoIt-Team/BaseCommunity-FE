import styled from '../../../styles/boardStyles/Board.module.scss'

export const BoardSearchBar = ({ handleChange, boardSearch }) => {
  return (
    <>
      <div className={styled.boardSearchBar}>
        <input
          className={styled.searchBar}
          type="text"
          onChange={handleChange}
          value={boardSearch}
          placeholder="검색하실 내용을 입력하세요"
        />
      </div>
    </>
  )
}

export default BoardSearchBar
