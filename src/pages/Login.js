import React from 'react'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/Login.module.css'
import { Link } from 'react-router-dom'

export function Login() {
  return (
    <>
      <div className={styled.loginContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup}>
          <input
            className={styled.inputArea}
            type="text"
            placeholder="ID"
          ></input>
          <input
            className={styled.inputArea}
            type="password"
            placeholder="PASSWORD"
            autoComplete="on"
          ></input>
          <button className={styled.loginBtn} type="submit">
            LOGIN
          </button>
          <ul className={styled.linkGroup}>
            <li className={styled.link}>
              <Link to="/signup">회원가입</Link>
            </li>
            <li className={styled.link}>
              <Link to="/changePassword">비밀번호 찾기</Link>
            </li>
          </ul>
        </form>
      </div>
    </>
  )
}

export default Login
