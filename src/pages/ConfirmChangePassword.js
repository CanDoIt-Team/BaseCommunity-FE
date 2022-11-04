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
  const [findSuccess, setFindSuccess] = useState(false)

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    console.log(inputValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const uuid = window.location.search
    const filteredUUID = uuid.slice(6)

    if (inputValue.password !== inputValue.confirmPassword) {
      console.log('비밀번호가 일치하지 않습니다.')
      return
    }

    try {
      const result = await newPassword(
        { password: inputValue.password },
        filteredUUID,
      )

      if (result.status === 200) {
        console.log(result.data)
        setFindSuccess(true)
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
            {findSuccess && (
              <div className={styled.modalbg}>
                <div className={styled.successModal}>
                  <h3 className={styled.mainTitle}>인증 완료</h3>
                  <span className={styled.subTitle}>
                    비밀번호가 재설정 되었습니다.
                  </span>
                  <span className={styled.descript}>
                    변경된 비밀번호로 로그인 해주세요.
                  </span>
                  <button className={styled.mainBtn} onClick={() => window.close()}>
                    창 닫기
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default ConfirmChangePassword
