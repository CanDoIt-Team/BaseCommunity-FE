import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { deleteSkillAPI, updateAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'

import { Input, DateInput, TextArea } from '../common/Input'
import { SubmitButton } from '../common/Button'

import styled from '../../styles/project/Write.module.scss'

import Tech from '../tech/ProjectTech'

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
  console.log(location)
  const [startDate, setStartDate] = useState('')
  const [skill, setSkill] = useState(location.state.data.projectSkills)
  const [projectInputs, setProjectInputs] = useState({
    id: location.state.data.id,
    content: location.state.data.content,
    developPeriod: location.state.data.developPeriod,
    startDate: location.state.data.startDate,
    title: location.state.data.title,
    maxTotal: location.state.data.maxTotal,
    projectSkills: location.state.data.projectSkills,
  })
  const token = useRecoilValue(authToken)
  const navigate = useNavigate()

  useEffect(() => {
    skillChange(skill)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skill])

  useEffect(() => {
    console.log(projectInputs)
  }, [projectInputs])

  const handleDateChange = (date) => {
    setStartDate(date)
    const dateString = dateFormat(date)
    setProjectInputs({ ...projectInputs, startDate: dateString })
  }

  const skillChange = (skill) => {
    console.log(skill)
    // let skillChange = JSON.stringify(skill)
    setProjectInputs({ ...projectInputs, projectSkills: skill })
  }

  const handleChange = (e) => {
    setProjectInputs({ ...projectInputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await deleteSkillAPI(location.state.data.id)
      if (result.status === 200) {
        const result = await updateAPI(projectInputs, token)
        if (result.status === 200) {
          navigate(`/project/${location.state.data.id}`)
        }
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
          <form className={styled.Group} onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder="프로젝트 제목"
              value={projectInputs.title}
              onChange={handleChange}
            />
            <DateInput
              type="text"
              name="startDate"
              selected={startDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="시작 예정일"
              value={projectInputs.startDate}
            />
            <Input
              type="text"
              name="developPeriod"
              placeholder="예상기간"
              onChange={handleChange}
              value={projectInputs.developPeriod}
            />
            <Input
              type="text"
              name="maxTotal"
              placeholder="모집 인원"
              onChange={handleChange}
              value={projectInputs.maxTotal}
            />
            <Tech techValue={skill} setTechValue={setSkill} />

            <TextArea
              name="content"
              placeholder="상세 내용"
              onChange={handleChange}
              value={projectInputs.content}
            />

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
