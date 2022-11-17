import { Link } from 'react-router-dom'
import styled from '../../../styles/boardStyles/Board.module.scss'
import { useGetTime } from '../../../lib/useTime'
import { BiCommentDetail } from 'react-icons/bi'

import defaultImg from '../../../asset/Logo.png'
import Image from '../../common/Image'

export const BoardItem = ({ item, main }) => {
  console.log(item)
  console.log(main)
  const wrtieTime = useGetTime(item?.createdAt)

  return (
    <>
      <div className={styled.boardItem}>
        <div className={styled.itemHeader}>
          <div className={styled.writerInfo}>
            <div className={styled.imgAndTitle}>
              <Image
                size={20}
                src={item.member.urlFilename}
              />
              <div className={styled.writerName}>{item.member.nickname}</div>
            </div>
            <div className={styled.wirteTime}>{wrtieTime}</div>
          </div>
        </div>
        <div className={styled.itembottom}>
          <Link to={`/board/${item.id}`} className={styled.maxWidth}>
            <div className={styled.itemTitle}>{item.title}</div>
          </Link>
        </div>
        {!main && (
          <div className={styled.categoryAndcomment}>
            <span className={styled.itemCategory}>{item.category}</span>
            <div className={styled.commentCountArea}>
              <BiCommentDetail />
              <span className={styled.commentCount}>
                {item.comments.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BoardItem
