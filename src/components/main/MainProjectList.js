import styled from '../../styles/Main.module.scss'
import { Link } from 'react-router-dom'
import { useGetProject } from '../../hooks/useGetProject'
import Image from '../common/Image'

export const MainProjectList = () => {
  const { data: projectList } = useGetProject(1, 4, '')

  return (
    <div className={styled.containerWrap}>
      <div className={styled.containerTitleGroup}>
        <h3 className={styled.containerTitle}>최근 올라온 프로젝트</h3>
        <Link to="/project">
          <span className={styled.containerMore}>더보기</span>
        </Link>
      </div>
      <ul className={styled.boardContainer}>
        <div className={styled.boardWrap}>
          {projectList?.content &&
            projectList?.content.map((project) => (
              <Link
                to={`/project/${project.id}`}
                className={styled.mgr10}
                key={project.id}
              >
                <li className={styled.boardContents}>
                  <div className={styled.startDate}>
                    <span>시작 예정일 :</span>
                    <span>{project.startDate}</span>
                  </div>
                  <h2 className={styled.projectTitle}>{project.title}</h2>
                  <ul className={styled.techList}>
                    {project.projectSkills.map((skill) => (
                      <li className={styled.skill} key={skill.id}>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                  <div className={styled.writer}>
                    <Image size={40} src={project.leader.urlFilename} />
                    <span>{project.leader.nickname}</span>
                  </div>
                </li>
              </Link>
            ))}
        </div>
      </ul>
    </div>
  )
}

export default MainProjectList
