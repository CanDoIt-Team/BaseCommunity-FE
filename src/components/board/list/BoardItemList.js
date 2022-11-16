import { useState } from 'react'
import styled from '../../../styles/boardStyles/Board.module.scss'
import BoardItem from './BoardItem'

export const BoardItemList = ({ boardList, main }) => {
  console.log(main)
  if (boardList)
    return (
      <>
        <div className={!main ? styled.boardContentsList : ''}>
          {boardList.length !== 0 ? (
            boardList.map((item, idx) => <BoardItem key={item.id} item={item} main={main} />)
          ) : (
            <div className={styled.boardListNull}>
              검색하신 내용이 없습니다.
            </div>
          )}
        </div>
      </>
    )
}

export default BoardItemList
