import styled from '../../../styles/boardStyles/BoardWrite.module.scss'

export const BoardModifyInputGroup = ({ inputValue, handleChange }) => {
  return (
    <>
      <div className={styled.boardWriteInputContainer}>
        <div className={styled.writeInputWrap}>
          <label className={styled.writeLabel}>카테고리</label>
          <select
            name="category"
            value={inputValue.category}
            onChange={handleChange}
            className={styled.selectArea}
          >
            <option value="자유">자유</option>
            <option value="질문">질문</option>
            <option value="면접팁">면접팁</option>
            <option value="면접후기">면접후기</option>
          </select>
        </div>
        <div className={styled.writeInputWrap}>
          <label className={styled.writeLabel}>제목</label>
          <input
            name="title"
            value={inputValue.title}
            onChange={handleChange}
            className={styled.selectArea}
            type="text"
          />
        </div>
        <div className={styled.writeInputWrap}>
          <label className={styled.writeLabel}>내용</label>
          <textarea
            name="content"
            value={inputValue.content}
            onChange={handleChange}
            className={styled.contentArea}
          />
        </div>
      </div>
    </>
  )
}

export default BoardModifyInputGroup
