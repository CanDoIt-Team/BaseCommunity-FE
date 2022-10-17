import React from 'react'
import { Link } from 'react-router-dom'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/ChangePassword.module.css'

export function ConfirmChangePassword() {
  return (
    <>
      <div className={styled.loginContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup}>
          <h4 className={styled.title}>비밀번호</h4>
          <input className={styled.inputArea} type="password" />
          <h4 className={styled.title}>비밀번호 확인</h4>
          <input className={styled.inputArea} type="password" />
          <div className={styled.btnGroup}>
            <Link to="/login">
              <button className={styled.beforeBtn} type="button">
                취소
              </button>
            </Link>
            <button className={styled.signinBtn} type="submit">
              완료
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ConfirmChangePassword
