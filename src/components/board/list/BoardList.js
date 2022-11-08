import { useState } from 'react'
import BoardBody from './BoardBody'
import BoardCategory from './BoadrCategory'
import BoardSearchBar from './BoardSearchBar'

export const BoardList = () => {
  const [category, setCategory] = useState('전체');
  const [boardSearch, setBoardSearch] = useState('')

  const handleChange = (e) => {
    setBoardSearch(e.target.value)
  }

  const handleClick = (category) => {
    setCategory(category)
  }

   return (
    <>
        <BoardCategory category={category} handleClick={handleClick} />
        <BoardSearchBar
            handleChange={handleChange}
            boardSearch={boardSearch}
          />
        <BoardBody category={category} boardSearch={boardSearch} />
    </>
  )
}

export default BoardList