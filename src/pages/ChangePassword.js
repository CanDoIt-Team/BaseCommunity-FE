import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/ChangePassword.module.scss'
import { findPassword } from '../apis/signupApi'

export function ChangePassword() {
  const [inputValue, setInputValue] = useState({
    email: '',
    name: '',
  })
  const [findSuccess, setFindSuccess] = useState(false)

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    console.log(inputValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await findPassword(inputValue)

      if (result.status === 200) {
        console.log(result.data)
        setFindSuccess(true)
      } else if (result.data === 500) {
        console.log('잘못된 값입니다.')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log(findSuccess)
  }, [findSuccess])

  return (
    <>
      <div className={styled.loginContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup} onSubmit={handleSubmit}>
          <h4 className={styled.title}>이메일</h4>
          <input
            className={styled.inputArea}
            type="email"
            onChange={handleChange}
            name="email"
            value={inputValue.email}
          />
          <h4 className={styled.title}>이름</h4>
          <input
            className={styled.inputArea}
            type="text"
            onChange={handleChange}
            name="name"
            value={inputValue.name}
          />
          <div className={styled.btnGroup}>
            <Link to="/login">
              <button className={styled.beforeBtn} type="button">
                이전
              </button>
            </Link>
            {/* <Link to="/ConfirmChangePassword"> */}
            <button className={styled.signinBtn} type="submit">
              인증
            </button>
            {/* </Link> */}
            {findSuccess && (
              <div className={styled.modalbg}>
                <div className={styled.successModal}>
                  <h3 className={styled.mainTitle}>인증 완료</h3>
                  <span className={styled.subTitle}>비밀번호 재설정 링크를 보내드립니다.</span>
                  <span className={styled.descript}>
                    회원님의 이메일로 비밀번호 재설정 링크를 보냈습니다.
                  </span>
                  <span className={styled.descript}>확인 후 비밀번호를 새로 설정할 수 있습니다.</span>
                  <Link to="/" className={styled.mainBtn}>메인으로</Link>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default ChangePassword
