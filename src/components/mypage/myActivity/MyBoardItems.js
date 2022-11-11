import { Link } from 'react-router-dom'
import { useGetTime } from '../../../hooks/useTime'
import styled from '../../../styles/mypage/myBoard.module.scss'

export const MyBoardItems = ({ item }) => {
  const wrtieTime = useGetTime(item?.createdAt)
  return (
    <>
      <div className={styled.itemContainer}>
        <div className={styled.title}>
          {/* <Link to={`/board/${item.id}`}>{item.title}</Link> */}
          <Link to={`/board/${item.id}`}>{item.title}</Link>
        </div>

        <div className={styled.categoryAndDate}>
          <div className={styled.category}>{item.category}</div>
          <div className={styled.date}>{wrtieTime}</div>
        </div>
      </div>
    </>
  )
}

export default MyBoardItems
