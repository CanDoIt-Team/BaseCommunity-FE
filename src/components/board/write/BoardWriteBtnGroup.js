import { useRecoilValue } from 'recoil'
import { addBoard } from '../../../apis/boardApi'
import { authToken } from '../../../store/store'
import styled from '../../../styles/boardStyles/BoardWrite.module.scss'
import modalShow from '../../Modal'

export const BoardWriteBtnGroup = ({ inputValue }) => {
  const token = useRecoilValue(authToken)

  const handleSubmit = async (token, data) => {

    console.log(data.title)
    if(data.title.length === 0) {
      modalShow({
        title: '제목을 입력해주세요'
      })
    }

    if(data.content.length === 0) {
      modalShow({
        title: '내용을 입력해주세요'
      })
    }

    try {
      const result = await addBoard(token, data)

      if (result.status === 200) {
        window.location.replace('/board')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleCancel = () => {
    window.location.replace('/board')
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
        <button className={styled.cancelBtn} onClick={handleCancel}>
          취소
        </button>
      </div>
    </>
  )
}

export default BoardWriteBtnGroup
