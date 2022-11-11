import styled from '../../../styles/mypage/myBoard.module.scss'
import { MyBoardList } from './MyBoardList'

export const MyActivity = () => {
  return (
    <>
      <h1 className={styled.mainTitle}>내 활동</h1>
      <div className={styled.contentsContainer}>
        <div className={styled.contentsWrap}>
          <h2 className={styled.contentsTitle}>게시글</h2>
          <div className={styled.contents}>
            <MyBoardList name={"게시글"}/>
          </div>
        </div>
        <div className={styled.contentsWrap}>
          <h2 className={styled.contentsTitle}>좋아요</h2>
          <div className={styled.contents}>
            <MyBoardList name={"좋아요"}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyActivity
