import styled from '../../../styles/boardStyles/Board.module.scss'
import modalShow from '../../Modal'
import { useNavigate } from 'react-router-dom'
import { projectConfirm } from '../../../apis/projectsApi'

export const ProjectWriteBtn = ({ loginCheck, token }) => {
  const navigate = useNavigate()
  const projectWriteConfirm = async (token) => {
    try {
      const result = await projectConfirm(token)

      if(result.status === 200) {
        navigate('/project/write')
      }
    } catch (err) {
      if(err.response.status === 400 && err.response.data.errorCode === "ALREADY_PROJECT_REGISTER" ||  err.response.data.errorCode === "ALREADY_PROJECT_CREATE") {
        modalShow({
          title: err.response.data.message
        })
      }
    }
  }

  return (
    <div className={styled.writeBoard}>
      <button
        type="button"
        className={styled.writeBtn}
        onClick={() => projectWriteConfirm(token)}
      >
        작성하기
      </button>
    </div>
  )
}

export default ProjectWriteBtn
