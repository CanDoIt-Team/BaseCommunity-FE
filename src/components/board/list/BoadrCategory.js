import { useState } from 'react'
import styled from '../../../styles/boardStyles/Board.module.scss'
import categoryList from '../../../utils/category'

export const BoardCategory = ({ handleClick }) => {
  const [category, setCategory] = useState(categoryList)

  const handleActionClick = (item) => {
    const val = item
    setCategory(
      category.map((item) =>
        item.kor === val
          ? { ...item, active: true }
          : { ...item, active: false },
      ),
    )
  }

  return (
    <>
      <div className={styled.boardCategory}>
        {category.map((item) => (
          <div
            className={
              item.active
                ? `${styled.category} ${styled.active}`
                : styled.category
            }
            key={item.kor}
            onClick={() => {
              handleClick(item.kor)
              handleActionClick(item.kor)
            }}
          >
            {item.kor}
          </div>
        ))}
      </div>
    </>
  )
}

export default BoardCategory
