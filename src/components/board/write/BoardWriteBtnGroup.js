import { useRecoilValue } from 'recoil'
import { addBoard } from '../../../apis/boardApi'
import { authToken } from '../../../store/store'
import styled from '../../../styles/boardStyles/BoardWrite.module.scss'

export const BoardWriteBtnGroup = ({ inputValue }) => {
  const token = useRecoilValue(authToken)
  const handleSubmit = async (token, data) => {
    try {
      const result = await addBoard(token, data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className={styled.btnGroup}>
        <button
          className={styled.submitBtn}
          onClick={() => handleSubmit(token, inputValue)}
        >
          작성
        </button>
        <button className={styled.cancelBtn}>취소</button>
      </div>
    </>
  )
}

export default BoardWriteBtnGroup
