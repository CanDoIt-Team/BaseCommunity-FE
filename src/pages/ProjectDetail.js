import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detailAPI } from '../apis/projectsApi'

import styled from '../styles/ProjectDetail.module.scss'

export default function ProjectDetail() {
  const params = useParams()

  useEffect(() => {
    const getProjectDetail = async () => {
      try {
        const result = await detailAPI(params.id)
        if (result.status === 200) {
          console.log(result.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getProjectDetail()
  })

  return (
    <section className={styled.section}>
      <h2 className={styled.title}>제목</h2>
      <div className={styled.expects}>
        <p className={styled.expect}>모집 인원: OO</p>
        <p className={styled.expect}>현재 인원: OO</p>
        <p className={styled.expect}>시작 예정일: OO</p>
        <p className={styled.expect}>기간: OO</p>
      </div>
      <div className={styled.infos}>
        <div className={styled.info}>
          <p>개발 언어</p>
        </div>
        <div className={styled.info}>
          <p>닉네임: </p>
          <p>댓글 수: </p>
        </div>
      </div>
      <div className={styled.content}>
        <textarea readOnly className={styled.textarea}>
          상세 내용
        </textarea>
      </div>
    </section>
  )
}
