import styled from '../styles/Job.module.scss'
import Pagination from 'react-js-pagination'
import { EmploymentsAPI } from '../apis/employmentsApi'
import { useEffect, useState } from 'react'
import modalShow from '../components/Modal'

import Loading from '../components/Loading'

export default function Job() {
  const [employments, SetEmployments] = useState({})
  const [page, SetPage] = useState(1)
  const [totalItem, SetTotalItem] = useState(0)

  useEffect(() => {
    const getEmployments = async () => {
      try {
        const result = await EmploymentsAPI(page)
        SetTotalItem(result.data.totalElements - 20)
        SetEmployments(result.data.content)
      } catch {
        modalShow({
          title: '데이터를 가져올 수 없습니다.',
        })
      }
    }

    getEmployments()
  }, [page])

  const handlePageChange = (page) => {
    SetPage(page)
  }

  const handleClick = (wantedInfoUrl) => {
    window.open(wantedInfoUrl, '_blank')
  }

  return (
    <>
      {employments.length > 0 && totalItem > 0 ? (
        <>
          <section className={styled.container}>
            <ul className={styled.items}>
              {employments.map((employment, index) => (
                <li className={styled.item} key={index}>
                  <div className={styled.first}>
                    <div className={styled.company}>{employment.company}</div>
                  </div>
                  <div className={styled.mid}>
                    <div className={styled.top}>
                      <div
                        className={styled.title}
                        onClick={() => handleClick(employment.wantedInfoUrl)}
                      >
                        {employment.title}
                      </div>
                    </div>
                    <div className={styled.btm}>
                      <div className={styled.career}>{employment.career}</div>
                      <div className={styled.minEdubg}>
                        {employment.minEdubg}
                      </div>
                      <div className={styled.region}>{employment.region}</div>
                      <div className={styled.holidayTpNm}>
                        {employment.holidayTpNm}
                      </div>
                      <div className={styled.sal}>{employment.sal}</div>
                    </div>
                  </div>
                  <div className={styled.last}>
                    <div className={styled.closeDt}>~{employment.closeDt}</div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
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
              itemsCountPerPage={20}
              totalItemsCount={totalItem}
              pageRangeDisplayed={10}
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
