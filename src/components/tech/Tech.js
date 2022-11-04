import { useCallback, useEffect, useState } from 'react'
import styled from '../../styles/MypageUserInfo.module.scss'
import { techstacks } from '../../utils/techStack'
import modalShow from '../Modal'
import TechInput from './TechInput'
import TechList from './TechList'

export const Tech = ({ techValue, setTechValue }) => {
  const [techList, setTechList] = useState(techstacks)
  const [techSearch, setTechSearch] = useState('')
  const [filterTech, setFilterTech] = useState(null)

  const handleTechCancel = (tech) => {
    setTechValue(techValue.filter((t) => t !== tech))
  }

  const handleTechSearchChange = useCallback((e) => {
    setTechSearch(e.target.value)
  }, [])

  const handleTechClick = (tech) => {

    const duplicateValues = techValue.map(itme => itme.value)

    if(duplicateValues.indexOf(tech) !== -1) {
      modalShow({
        title: "해당 스킬은 이미 선택되어 있습니다."
      })
      setTechSearch('');
      return
    }
    setTechValue((techValue) => [...techValue, {value: tech}])
    setTechSearch('')
  }

  useEffect(() => {
    setFilterTech(
      techList.filter((t) => {
        return t
          .replace(' ', '')
          .toLocaleLowerCase()
          .includes(techSearch.toLocaleLowerCase().replace(' ', ''))
      }),
    )
  }, [techList, techSearch, techValue])

  return (
    <>
      <div className={styled.techContainer}>
        <TechInput
          handleTechCancel={handleTechCancel}
          handleTechSearchChange={handleTechSearchChange}
          techValue={techValue}
          techSearch={techSearch}
        />
        {techSearch !== '' && (
          <TechList
            techSearch={techSearch}
            filterTech={filterTech}
            handleTechClick={handleTechClick}
          />
        )}
      </div>
    </>
  )
}

export default Tech
