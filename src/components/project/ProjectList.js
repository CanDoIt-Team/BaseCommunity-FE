import styled from '../../styles/project/ProjectShow.module.scss'
import { BiCommentDetail } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import ProjectItem from './ProjectItem'

export const ProjectList = ({ data }) => {

  return (
    <div className={styled.container}>
      <ul className={styled.boardWrap}>
        {data?.content.map((item, idx) => (
          <ProjectItem item={item} key={`list_${item.id}`}/>
        ))}
      </ul>
    </div>
  )
}

export default ProjectList
