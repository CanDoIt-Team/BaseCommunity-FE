import styled from '../../styles/mypage/Profile.module.scss'

export const TechInput = ({
  handleTechCancel,
  handleTechSearchChange,
  // myTechList,
  techValue,
  techSearch,
}) => {
  return (
    <>
      <div className={styled.techWrap}>
        {techValue &&
          techValue.map((tech, idx) => (
            <div className={styled.techTitleAndBtn} key={`${tech}_${idx}`}>
              <div className={styled.tech}>
                {tech.value ? tech.value : tech.name}
              </div>
              <button
                className={styled.techCancelBtn}
                onClick={() => handleTechCancel(tech)}
              >
                X
              </button>
            </div>
          ))}
        <input
          className={styled.techInput}
          type="text"
          value={techSearch}
          onChange={handleTechSearchChange}
        />
      </div>
    </>
  )
}

export default TechInput
