import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSetRecoilState } from 'recoil'
import { loginState } from '../store/store'

import { signinSubmit } from '../apis/signApi'

import { Input } from '../components/sign/Sign'
import modalShow from '../components/Modal'
import { LogoAndTitle } from '../components/Logo'
import styled from '../styles/Login.module.scss'

export function Login() {
  const [loginInfos, setLoginInfos] = useState({
    email: '',
    password: '',
  })
  const setLogin = useSetRecoilState(loginState)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginInfos({ ...loginInfos, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await signinSubmit(loginInfos)
      if (result.status === 200) {
        setLogin({ id: result.data, isLoading: true })
        navigate('/')
      } else {
        modalShow({
          title: '로그인에 실패했습니다.',
        })
      }
    } catch {
      modalShow({
        title: '로그인에 실패했습니다.',
      })
    }
  }

  return (
    <>
      <div className={styled.loginContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup} onSubmit={handleSubmit}>
          <Input
            className={styled.inputArea}
            type="text"
            name="email"
            placeholder="EMAIL"
            onChange={handleChange}
            value={loginInfos.email}
          />
          <Input
            className={styled.inputArea}
            type="password"
            name="password"
            placeholder="PASSWORD"
            autoComplete="on"
            onChange={handleChange}
            value={loginInfos.password}
          />
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
