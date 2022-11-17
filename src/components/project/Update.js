import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { deleteSkillAPI, updateAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'

import { Input, DateInput, TextArea } from '../common/Input'
import { SubmitButton } from '../common/Button'

import styled from '../../styles/project/Write.module.scss'

import Tech from '../tech/Tech'

const dateFormat = (d) => {
  return (
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1 > 9
      ? (d.getMonth() + 1).toString()
      : '0' + (d.getMonth() + 1)) +
    '-' +
    (d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate().toString())
  )
}

export default function Update() {
  const location = useLocation()
  const [startDate, setStartDate] = useState('')
  const [skill, setSkill] = useState([])
  const [projectInputs, setProjectInputs] = useState({
    id: location.state.data.id,
    content: location.state.data.content,
    developPeriod: location.state.data.developPeriod,
    startDate: location.state.data.startDate,
    title: location.state.data.title,
    maxTotal: location.state.data.maxTotal,
  })
  const token = useRecoilValue(authToken)
  const navigate = useNavigate()

  // useEffect(() => {
  //   skillChange(skill)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [skill])

  useEffect(() => {
    const skillValue = location.state.data.projectSkills.map((item) => ({
      value: item.name,
    }))
    setSkill(skillValue)
  }, [location.state.data.projectSkills])

  const handleDateChange = (date) => {
    setStartDate(date)
    const dateString = dateFormat(date)
    setProjectInputs({ ...projectInputs, startDate: dateString })
  }

  // const skillChange = (skill) => {
  //   // let skillChange = JSON.stringify(skill)
  //   setProjectInputs({ ...projectInputs, projectSkills: skill })
  // }

  const handleChange = (e) => {
    setProjectInputs({ ...projectInputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const skillString = JSON.stringify(skill)
    const encodeSkill = encodeURIComponent(`${skillString}`)

    try {
      const result = await updateAPI(projectInputs, token, encodeSkill)
      if (result.status === 200) {
        navigate(`/project/${location.state.data.id}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <>
      {projectInputs && (
        <div className={styled.Container}>
          <div>
            <h2 className={styled.updateTitle}>프로젝트 수정</h2>
          </div>
          <form
            className={styled.Group}
            onSubmit={handleSubmit}
            autocomplete="off"
          >
            <div className={styled.labelAndInput}>
              <label className={styled.writeLabel}>프로젝트 명</label>
              <Input
                type="text"
                name="title"
                value={projectInputs.title}
                onChange={handleChange}
              />
            </div>
            <div className={styled.labelAndInput}>
              <label className={styled.writeLabel}>시작 예정</label>
              <DateInput
                type="text"
                name="startDate"
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                value={projectInputs.startDate}
              />
            </div>
            <div className={styled.labelAndInput}>
              <label className={styled.writeLabel}>
                예상 기간
                <span className={styled.textSmall}>
                  ( 개월 단위 - 최대 12개월 )
                </span>
              </label>
              <Input
                type="number"
                name="developPeriod"
                className={styled.inputBox}
                onChange={handleChange}
                value={projectInputs.developPeriod}
                max={12}
                min={1}
              />
            </div>
            <div className={styled.labelAndInput}>
              <label className={styled.writeLabel}>
                모집 인원
                <span className={styled.textSmall}>( 최대 12명 )</span>
              </label>
              <input
                type="number"
                name="maxTotal"
                className={styled.inputBox}
                onChange={handleChange}
                value={projectInputs.maxTotal}
                max={12}
                min={1}
              />
            </div>
            <div className={styled.techLabelAndInput}>
              <label className={styled.writeLabel}>프로젝트 기술</label>
              <Tech techValue={skill} setTechValue={setSkill} />
            </div>
            <div className={styled.labelAndInput}>
              <label className={styled.writeLabel}>내용</label>
              <TextArea
                name="content"
                placeholder="상세 내용"
                onChange={handleChange}
                value={projectInputs.content}
              />
            </div>

            <div className={styled.btnGroup}>
              <SubmitButton
                title="뒤로가기"
                type="button"
                style={{ backgroundColor: '#c4c4c4' }}
                onClick={handleBackClick}
              />
              <SubmitButton title="수정하기" type="submit" />
            </div>
          </form>
        </div>
      )}
    </>
  )
}
