import { useRecoilValue } from 'recoil'
import { addBoard, updateBoard } from '../../../apis/boardApi'
import { authToken } from '../../../store/store'
import styled from '../../../styles/boardStyles/BoardWrite.module.scss'

export const BoardModifyBtnGroup = ({ inputValue, boardId, param }) => {
  const token = useRecoilValue(authToken)
  const handleSubmit = async (token, boardId, data) => {
    try {
      const result = await updateBoard(token, boardId, data)

      if (result.status === 200) {
        window.location.replace(`/board/${param.id}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCancel = () => {
    window.location.replace(`/board/${param.id}`)
  }

  return (
    <>
      <div className={styled.btnGroup}>
        <button
          className={styled.submitBtn}
          onClick={() => handleSubmit(token, boardId, inputValue)}
        >
          작성
        </button>
        <button className={styled.cancelBtn} onClick={handleCancel}>
          취소
        </button>
      </div>
    </>
  )
}

export default BoardModifyBtnGroup
