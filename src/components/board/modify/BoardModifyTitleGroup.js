import styled from '../../../styles/boardStyles/BoardWrite.module.scss'

export const BoardModifyTitleGroup = () => {
  return (
    <>
      <div className={styled.boardWriteTitleGroup}>
        <h1 className={styled.boardWriteMainTitle}>글 수정</h1>
        <span className={styled.boardWriteSubTitle}>
          수정하실 내용을 입력해주세요.
        </span>
      </div>
    </>
  )
}

export default BoardModifyTitleGroup
