import styled from '../../styles/MypageUserInfo.module.scss'

export const TechList = ({techSearch, filterTech, handleTechClick}) => {
  return (
    <>
      <ul className={styled.techListContainer}>
        {techSearch !== '' && filterTech.length !== 0 ? (
          filterTech.map((tech, idx) => (
            <li
              key={`${tech}_${idx}`}
              className={styled.techList}
              onClick={() => handleTechClick(tech)}
            >
              {tech}
            </li>
          ))
        ) : (
          <div className={styled.techList}>검색된 태그가 없습니다.</div>
        )}
      </ul>
    </>
  )
}

export default TechList
