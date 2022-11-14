import styled from '../../styles/Job.module.scss'

export const EmploymentsItems = ({ employments }) => {
  
  const handleClick = (wantedInfoUrl) => {
    window.open(wantedInfoUrl, '_blank')
  }

  return (
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
                  <div className={styled.minEdubg}>{employment.minEdubg}</div>
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
    </>
  )
}

export default EmploymentsItems
