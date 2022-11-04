import styled from '../../../styles/boardStyles/BoardWrite.module.scss'

export const BoardWriteTitleGroup = () => {
  return (
    <>
      <div className={styled.boardWriteTitleGroup}>
        <h1 className={styled.boardWriteMainTitle}>새로운 글 작성</h1>
        <span className={styled.boardWriteSubTitle}>
          게시글을 자유롭게 작성해보세요
        </span>
      </div>
    </>
  )
}

export default BoardWriteTitleGroup
