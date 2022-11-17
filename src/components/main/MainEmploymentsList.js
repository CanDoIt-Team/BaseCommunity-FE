import styled from '../../styles/Main.module.scss'
import { Link } from 'react-router-dom'
import { useGetEmployments } from '../../hooks/useGetEmployments'

export const MainEmploymentsList = () => {
  const { data: employmentsList } = useGetEmployments(1, 10)

  const handleClick = (wantedInfoUrl) => {
    window.open(wantedInfoUrl, '_blank')
  }

  return (
    <div className={styled.containerWrap}>
      <div className={styled.containerTitleGroup}>
        <h3 className={styled.containerTitle}>채용공고</h3>
        <Link to="/job">
          <span className={styled.containerMore}>더보기</span>
        </Link>
      </div>
      <ul className={styled.employmentContainer}>
        <div className={styled.employmentWrap}>
          {employmentsList?.content &&
            employmentsList?.content.map((employment) => (
              <li
                key={employment.wantedAuthNo}
                className={styled.employmentContent}
                onClick={() => handleClick(employment.wantedInfoUrl)}
              >
                <div className={styled.companyNameContainer}>
                  <p className={styled.companyName}>{employment.company}</p>
                </div>
                <div className={styled.employmentTitle}>{employment.title}</div>
                <div className={styled.employmentInfo}>
                  <p className={styled.region}>{employment.region}</p>
                  <p className={styled.minEdubg}>{employment.minEdubg}</p>
                  <p className={styled.holidayTpNm}>{employment.holidayTpNm}</p>
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
  )
}

export default MainEmploymentsList
