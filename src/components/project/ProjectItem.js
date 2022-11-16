import styled from '../../styles/project/ProjectShow.module.scss'
import { BiCommentDetail, BiSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const ProjectItem = ({ item }) => {
  const skillList = item.projectSkills.map((item) => item.name)
  if (item)
    return (
      <li className={styled.boardContents}>
        <Link to={`/project/${item.id}`}>
          <div className={styled.startDate}>
            <span>시작 예정일 :</span>
            <span>{item.startDate}</span>
          </div>
          <h2 className={styled.projectTitle}>{item.title}</h2>
          <ul className={styled.techList}>
            {item.projectSkills.map((skill, idx) => (
              <li key={`skill_${idx}`} className={styled.skill}>
                {skill.name}
              </li>
            ))}
          </ul>
          <ul className={styled.skillList}>
            {skillList.map((skill, idx) => (
              <li key={`${idx}_skill`} className={styled.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div>{item.projectComments}</div>
          <div className={styled.writer}>
            <span>{item.leader.nickname}</span>
            <div className={styled.commentCountArea}>
              <div className={styled.commentWrap}>
                <BiSmile />
                <span className={styled.commentCount}>
                  {item.projectMembers.length}
                </span>
              </div>
              <div className={styled.commentWrap}>
                <BiCommentDetail />
                <span className={styled.commentCount}>
                  {item.projectComments.length}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default ProjectItem
