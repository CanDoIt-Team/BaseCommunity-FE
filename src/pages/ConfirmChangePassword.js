import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/FindPassword.module.scss'
import { newPassword } from '../apis/signApi'

export function ConfirmChangePassword() {
  const [inputValue, setInputValue] = useState({
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    console.log(inputValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await newPassword(inputValue)

      if (result.status === 200) {
        console.log(result.data)
      } else if (result.status === 500) {
        console.log('잘못된 값입니다.')
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        console.log('데이터 없음')
      }
    }
  }

  return (
    <>
      <div className={styled.loginContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup} onSubmit={handleSubmit}>
          <h4 className={styled.title}>비밀번호</h4>
          <input
            className={styled.inputArea}
            type="password"
            name="password"
            onChange={handleChange}
            value={inputValue.password}
          />
          <h4 className={styled.title}>비밀번호 확인</h4>
          <input
            className={styled.inputArea}
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={inputValue.confirmPassword}
          />
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
