import styled from '../../../styles/boardStyles/Board.module.scss'
import modalShow from '../../Modal'
import { useNavigate } from 'react-router-dom'

export const BoardAddBtn = ({ loginCheck }) => {

  let navigate = useNavigate()
  const handleWriteClick = () => {
    if (loginCheck) {
      modalShow({
        title: '로그인 후 작성이 가능합니다.',
      })
    } else {
      navigate('/board/write')
    }
  }

  return (
    <div className={styled.writeBoard}>
      <button className={styled.writeBtn} onClick={handleWriteClick}>
        작성하기
      </button>
    </div>
  )
}

export default BoardAddBtn
