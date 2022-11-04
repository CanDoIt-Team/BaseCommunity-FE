import { useState } from 'react'
import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardItem from './BoardItem'

export const BoardItemList = ({ boardList }) => {
  
  if(boardList)
  return (
    <>
      <div className={styled.boardContentsList}>
        {boardList.map((item, idx) => (
          <BoardItem key={idx} item={item} />
        ))}
      </div>
    </>
  )
}

export default BoardItemList
