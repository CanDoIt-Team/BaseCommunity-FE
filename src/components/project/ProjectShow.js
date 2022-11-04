import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { showAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'

import styled from '../../styles/project/ProjectShow.module.scss'

export default function ProjectShow() {
  const token = useRecoilValue(authToken)
  const [pageInfos, setPageInfos] = useState([])

  useEffect(() => {
    const getProjectInfos = async () => {
      try {
        const result = await showAPI()
        if (result.status === 200) {
          setPageInfos(result.data.content)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getProjectInfos()
  }, [token])

  return (
    <div className={styled.container}>
      <ul className={styled.boardWrap}>
        {pageInfos.length > 0 &&
          pageInfos.map((info) => (
            <li className={styled.boardContents} key={info.id}>
              <Link to={`/project/${info.id}`} className={styled.link}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>{info.startDate}</span>
                </div>
                <h2 className={styled.projectTitle}>{info.title}</h2>
                <ul className={styled.techList}>
                  {info.projectSkills.map((skill) => (
                    <li key={skill.id}>{skill.name}</li>
                  ))}
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>{info.leader.nickname}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
