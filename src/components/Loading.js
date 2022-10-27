import React from 'react'
import styled from '../styles/Loading.module.scss'
import spinner from '../assets/spinner.gif'

export default function Loading() {
  return (
    <div className={styled.background}>
      <img src={spinner} alt="로딩중" width="5%"></img>
      <div className={styled.LoadingText}>
        데이터를 불러오는 중입니다. 조금만 기다려주세요.
      </div>
    </div>
  )
}
