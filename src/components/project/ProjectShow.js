import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { showAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'
import Pagination from 'react-js-pagination'
import styled from '../../styles/project/ProjectShow.module.scss'

import Loading from '../../components/Loading'

export default function ProjectShow() {
  const token = useRecoilValue(authToken)
  const [pageInfos, setPageInfos] = useState([])
  const [page, SetPage] = useState(1)
  const [totalItem, SetTotalItem] = useState(0)

  useEffect(() => {
    const getProjectInfos = async () => {
      try {
        const result = await showAPI(page - 1, 4)
        if (result.status === 200) {
          setPageInfos(result.data.content)
          SetTotalItem(result.data.totalElements)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getProjectInfos()
  }, [page])

  const handlePageChange = (page) => {
    SetPage(page)
  }

  return (
    <>
      {pageInfos.length > 0 && totalItem > 0 ? (
        <>
          <div className={styled.container}>
            <ul className={styled.boardWrap}>
              {pageInfos.map((info) => (
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
          <div className={styled.PaginationBox}>
            <Pagination
              innerClass={styled.pagination}
              activeClass={styled.active}
              itemClass={styled.li}
              linkClass={styled.a}
              prevPageText={'◀'}
              nextPageText={'▶'}
              hideDisabled={true}
              activePage={page}
              itemsCountPerPage={4}
              totalItemsCount={totalItem}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
