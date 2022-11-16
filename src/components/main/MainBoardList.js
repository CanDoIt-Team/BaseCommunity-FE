import styled from '../../styles/Main.module.scss'
import { Link } from 'react-router-dom'
import BoardBody from '../board/list/BoardBody'
import { useGetBoardList } from '../../hooks/useGetBoard'
import { useEffect, useState } from 'react'
import { getBoardList } from '../../apis/boardApi'

export const MainBoardList = () => {
  const [boardFree, setBoardFree] = useState('')
  const [boardQuestions, setBoardQuestionse] = useState('')
  const [boardReview, setBoardReview] = useState('')
  const [boardTip, setBoardTip] = useState('')

  const getBoard = async () => {
    try {
      const Free = await getBoardList('자유', 0, 5, '')
      const Questions = await getBoardList('질문', 0, 5, '')
      const Review = await getBoardList('면접후기', 0, 5, '')
      const Tip = await getBoardList('면접팁', 0, 5, '')

      setBoardFree(Free.data.content)
      setBoardQuestionse(Questions.data.content)
      setBoardReview(Review.data.content)
      setBoardTip(Tip.data.content)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getBoard()
  }, [])

  return (
    <>
      <div className={styled.containerWrap}>
        <div className={styled.containerTitleGroup}>
          <h3 className={styled.containerTitle}>최근 올라온 게시글</h3>
          <Link to="/board">
            <span className={styled.containerMore}>더보기</span>
          </Link>
        </div>
        <div className={styled.boardContainer}>
          <div className={styled.boardListWrap}>
            <h2 className={styled.boardTitle}>자유</h2>
            {boardFree && (
              <BoardBody loading={false} boardList={boardFree} main={true} />
            )}
          </div>
          <div className={styled.boardListWrap}>
            <h2 className={styled.boardTitle}>질문</h2>
            {boardQuestions && (
              <BoardBody
                loading={false}
                boardList={boardQuestions}
                main={true}
              />
            )}
          </div>
        </div>
        <div className={styled.boardContainer}>
          <div className={styled.boardListWrap}>
            <h2 className={styled.boardTitle}>면접후기</h2>
            {boardReview && (
              <BoardBody loading={false} boardList={boardReview} main={true} />
            )}
          </div>
          <div className={styled.boardListWrap}>
            <h2 className={styled.boardTitle}>면접팁</h2>
            {boardTip && (
              <BoardBody loading={false} boardList={boardTip} main={true} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBoardList
