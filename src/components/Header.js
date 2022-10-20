import React from 'react'
import { Link } from 'react-router-dom'
import styled from '../styles/Header.module.css'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <div className={styled.header}>
      <Link to="/">
        <Logo size={'small'} />
      </Link>
      <div>
        <Link to="/login" className={styled.login}>
          로그인
        </Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </div>
  )
}

export default Header
