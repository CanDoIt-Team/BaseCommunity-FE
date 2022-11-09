import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmploymentsAPI } from '../apis/employmentsApi'
import styled from '../styles/Main.module.scss'
import modalShow from '../components/Modal'

export const Main = () => {
  const [employments, SetEmployments] = useState({})

  useEffect(() => {
    const getEmployments = async () => {
      try {
        const result = await EmploymentsAPI(1, 5)
        SetEmployments(result.data.content)
      } catch {
        modalShow({
          title: '데이터를 가져올 수 없습니다.',
        })
      }
    }

    getEmployments()
  }, [])

  useEffect(() => {
    console.log(employments)
  }, [employments])

  return (
    <div className={styled.mainContainer}>
      <div className={styled.projectAndBoardWrap}>
        <div className={styled.containerWrap}>
          <div className={styled.containerTitleGroup}>
            <h3 className={styled.containerTitle}>최근 올라온 프로젝트</h3>
            <Link to="/project">
              <span className={styled.containerMore}>더보기</span>
            </Link>
          </div>
          <ul className={styled.boardContainer}>
            <div className={styled.boardWrap}>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>시작 예정일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>
                  프로젝트 제목 1asasdasdd
                </h2>
                <ul className={styled.techList}>
                  <li>React</li>
                  <li>SCSS</li>
                </ul>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className={styled.containerWrap}>
          <div className={styled.containerTitleGroup}>
            <h3 className={styled.containerTitle}>게시판</h3>
            <Link to="/board">
              <span className={styled.containerMore}>더보기</span>
            </Link>
          </div>
          <ul className={styled.boardContainer}>
            <div className={styled.boardWrap}>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>카테고리 :</span>
                  <span>자유</span>
                </div>
                <h2 className={styled.projectTitle}>게시글 제목 1asasdasdd</h2>
                <div className={styled.techList}>
                  <span>게시글 내용1231243asdafafaf</span>
                </div>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>카테고리 :</span>
                  <span>자유</span>
                </div>
                <h2 className={styled.projectTitle}>게시글 제목 1asasdasdd</h2>
                <div className={styled.techList}>
                  <span>게시글 내용1231243asdafafaf</span>
                </div>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>카테고리 :</span>
                  <span>면접팁</span>
                </div>
                <h2 className={styled.projectTitle}>게시글 제목 1asasdasdd</h2>
                <div className={styled.techList}>
                  <span>게시글 내용1231243asdafafaf</span>
                </div>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
              <li className={styled.boardContents}>
                <div className={styled.startDate}>
                  <span>작성일 :</span>
                  <span>2022-10-19</span>
                </div>
                <h2 className={styled.projectTitle}>게시글 제목 1asasdasdd</h2>
                <div className={styled.techList}>
                  <span>게시글 내용1231243asdafafaf</span>
                </div>
                <div className={styled.writer}>
                  <span>작성자</span>
                  <span>JYS</span>
                </div>
              </li>
            </div>
          </ul>
        </div>

        <div className={styled.containerWrap}>
          <div className={styled.containerTitleGroup}>
            <h3 className={styled.containerTitle}>채용공고</h3>
            <Link to="/board">
              <span className={styled.containerMore}>더보기</span>
            </Link>
          </div>
          <ul className={styled.employmentContainer}>
            <div className={styled.employmentWrap}>
              {employments.length > 0 &&
                employments.map((employment) => (
                  <li
                    key={employment.wantedAuthNo}
                    className={styled.employmentContent}
                  >
                    <div className={styled.companyNameContainer}>
                      <p className={styled.companyName}>{employment.company}</p>
                    </div>
                    <div className={styled.employmentTitle}>
                      {employment.title}
                    </div>
                    <div className={styled.employmentInfo}>
                      <p className={styled.region}>{employment.region}</p>
                      <p className={styled.minEdubg}>{employment.minEdubg}</p>
                      <p className={styled.holidayTpNm}>
                        {employment.holidayTpNm}
                      </p>
                    </div>
                    {/* <div className={styled.salWrap}>
                  <p className={styled.salTpNm}>연봉 : </p>
                  <p className={styled.sal}>5000만원 ~ 7000만원</p>
                </div> */}
                    <p className={styled.regDt}>등록일 : {employment.regDt}</p>
                  </li>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
