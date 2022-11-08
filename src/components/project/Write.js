import React, { useEffect, useState } from 'react'
import { writeAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'

import { Input, DateInput, TextArea } from '../common/Input'
import { SubmitButton } from '../common/Button'
import modalShow from '../../components/Modal'

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

export default function Write() {
  const [startDate, setStartDate] = useState('')
  const [skill, setSkill] = useState([])
  const [projectInputs, setProjectInputs] = useState({
    content: '',
    developPeriod: '',
    startDate: '',
    title: '',
    maxTotal: 0,
    projectSkills: [],
  })
  const token = useRecoilValue(authToken)

  useEffect(() => {
    skillChange(skill)
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
      const result = await writeAPI(projectInputs, token)
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={styled.Container}>
        <form className={styled.Group} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="프로젝트 제목"
            onChange={handleChange}
          />
          <DateInput
            type="text"
            name="startDate"
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="시작 예정일"
          />
          <Input
            type="text"
            name="developPeriod"
            placeholder="예상기간"
            onChange={handleChange}
          />
          <Input
            type="text"
            name="maxTotal"
            placeholder="모집 인원"
            onChange={handleChange}
          />
          <Tech techValue={skill} setTechValue={setSkill} />

          <TextArea
            name="content"
            placeholder="상세 내용"
            onChange={handleChange}
          />
          <SubmitButton title="게시하기" type="submit" />
        </form>
      </div>
    </>
  )
}
