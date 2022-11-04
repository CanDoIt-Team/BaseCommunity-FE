import React, { useEffect, useState } from 'react'
import { writeAPI } from '../../apis/projectsApi'
import { useRecoilValue } from 'recoil'
import { authToken } from '../../store/store'

import { Input, DateInput, TextArea } from '../common/Input'
import { SubmitButton } from '../common/Button'
import modalShow from '../../components/Modal'

import styled from '../../styles/project/Write.module.scss'

import skiils from '../../skills.json'

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
  // const [skill, setSkill] = useState([])
  const [projectInputs, setProjectInputs] = useState({
    content: '',
    developPeriod: '',
    startDate: '',
    title: '',
    projectSkills: [],
  })

  const token = useRecoilValue(authToken)

  const handleDateChange = (date) => {
    setStartDate(date)
    const dateString = dateFormat(date)
    setProjectInputs({ ...projectInputs, startDate: dateString })
  }

  const skillChange = (e) => {
    console.log(skiils)
    const newItem = {
      name: e.target.value,
    }
    setProjectInputs({ ...projectInputs, projectSkills: newItem })
  }

  const handleChange = (e) => {
    console.log(e)
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

  useEffect(() => {
    console.log(projectInputs)
  }, [projectInputs])

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
          <Input
            type="text"
            name="projectSkills"
            placeholder="개발 사용 언어"
            onChange={skillChange}
          />
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
