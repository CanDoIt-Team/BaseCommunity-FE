import styled from '../../styles/project/ProjectShow.module.scss'
import { BiCommentDetail, BiSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const ProjectItem = ({ item, test1, test2 }) => {
  const skillList = item.projectSkills.map((item) => item.name)

  if (item)
    return (
      <Link to={`/project/${item.id}`}>
        <li className={styled.boardContents}>
          <div className={styled.startDate}>
            <span>시작 예정일 :</span>
            <span>{item.startDate}</span>
          </div>
          <h2 className={styled.projectTitle}>{item.title}</h2>
          <ul className={styled.techList}>
            {item.projectSkills.map((skill, idx) => (
              <li key={`skill_${item.id}_${idx}`} className={styled.skill}>
                {skill.name}
              </li>
            ))}
          </ul>
          <ul className={styled.skillList}>
            {skillList.map((skill, idx) => (
              <li key={`${item.id}_${idx}_skill`} className={styled.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styled.writer}>
            <span>{item.leader.nickname}</span>
            <div className={styled.commentCountArea}>
              <div className={styled.commentWrap}>
                <BiSmile />
                <span className={styled.commentCount} key={`${item.id}_member`}>
                  {item.projectMembers.length}
                </span>
              </div>
              <div className={styled.commentWrap}>
                <BiCommentDetail />
                <span
                  className={styled.commentCount}
                  key={`${item.id}_comment`}
                >
                  {item.projectComments.length}
                </span>
              </div>
            </div>
          </div>
        </li>
      </Link>
    )
}

export default ProjectItem
