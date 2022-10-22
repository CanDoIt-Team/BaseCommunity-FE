import React from 'react'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/Login.module.scss'
import { Link } from 'react-router-dom'
import { signIn } from '../apis/signinApi'

export function Login() {

  const data = {
    email: "test@test",
    password: "test"
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const result = await signIn(data)

      if(result.data === 200) {
        console.log(result.data)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={styled.loginContainer} >
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup} onSubmit={handleSubmit}>
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
              <Link to="/findPassword">비밀번호 찾기</Link>
            </li>
          </ul>
        </form>
      </div>
    </>
  )
}

export default Login
