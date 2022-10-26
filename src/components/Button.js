import React from 'react'
import styled from '../styles/Button.module.scss'

export default function Button(props) {
  return (
    <div className={styled.container}>
      <button className={styled.btn} {...props}>
        글쓰기
      </button>
    </div>
  )
}
