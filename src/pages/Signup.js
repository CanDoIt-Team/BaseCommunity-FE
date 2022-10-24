import React, { useState } from 'react'

import { emailCheck, nicknameCheck, signupSubmit } from '../apis/signApi'

import { Link } from 'react-router-dom'
import { LogoAndTitle } from '../components/Logo'
import { Label, Input } from '../components/sign/Sign'

import styled from '../styles/Signup.module.scss'
import modalShow from '../components/Modal'

/* 컴포넌트 */
const DoubleCheck = (props) => {
  return (
    <>
      <button className={styled.idCheckButton} type="button" {...props}>
        중복확인
      </button>
    </>
  )
}

/* 일반 함수 */
const emailClick = async (email) => {
  if (!email) {
    modalShow({
      title: '이메일을 입력해주세요',
    })
  } else {
    try {
      const res = await emailCheck(email)
      if (res.data === false) {
        modalShow({
          title: '사용할 수 있는 이메일입니다.',
        })
        return true
      } else {
        modalShow({
          title: '중복된 이메일입니다.',
        })
      }
    } catch (err) {
      modalShow({
        title: '에러가 발생했습니다.',
      })
    }
  }

  return false
}

const nicknameClick = async (nickname) => {
  if (!nickname) {
    modalShow({
      title: '닉네임을 입력해주세요',
    })
  } else {
    try {
      const res = await nicknameCheck(nickname)
      if (res.data === false) {
        modalShow({
          title: '사용할 수 있는 닉네임입니다.',
        })
        return true
      } else {
        modalShow({
          title: '중복된 닉네임입니다.',
        })
      }
    } catch (err) {
      modalShow({
        title: '에러가 발생했습니다.',
      })
    }
  }

  return false
}

const submitCheck = (
  { birth, email, name, nickname, password, confirmPassword, phone },
  state,
) => {
  /* 비어있는 Input 검증 */
  let blankString =
    email.length < 1 ||
    nickname.length < 1 ||
    password.length < 1 ||
    confirmPassword.length < 1 ||
    phone.length < 1 ||
    birth.length < 1
  if (blankString) {
    if (email.length < 1) {
      modalShow({
        title: '이메일를 입력해주세요.',
      })
    } else if (nickname.length < 1) {
      modalShow({
        title: '닉네임을 입력해주세요.',
      })
    } else if (name.length < 1) {
      modalShow({
        title: '이름을 입력해주세요.',
      })
    } else if (password.length < 1 || confirmPassword.length < 1) {
      modalShow({
        title: '비밀번호를 입력해주세요.',
      })
    } else if (phone.length < 1) {
      modalShow({
        title: '전화번호를 입력해주세요.',
      })
    } else if (birth.length < 1) {
      modalShow({
        title: '생년월일을 입력해주세요.',
      })
    }

    return false
  }

  /* 이메일 중복확인, 닉네임 중복확인, 비밀번호 일치 검증 */
  if (!state.email || !state.nickname || password !== confirmPassword) {
    if (!state.email) {
      modalShow({
        title: '이메일 중복확인을 진행해주세요.',
      })
    } else if (!state.nickname) {
      modalShow({
        title: '닉네임 중복확인을 진행해주세요.',
      })
    } else if (password !== confirmPassword) {
      modalShow({
        title: '비밀번호가 일치하지 않습니다.',
      })
    }

    return false
  }

  return true
}

export function Signup() {
  /* 유저 정보 */
  const [userInputs, setUserInputs] = useState({
    email: '',
    nickname: '',
    name: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birth: '',
  })

  /* 중복 확인 정보 */
  const [state, setState] = useState({
    email: false,
    nickname: false,
  })

  /* 핸들러 함수 */
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value })

    if (state.email === true && e.target.name === 'email') {
      setState({ ...state, email: false })
    }

    if (state.nickname === true && e.target.name === 'nickname') {
      setState({ ...state, nickname: false })
    }
  }

  const btnClick = async (action, { email, nickname }) => {
    if (action === '이메일') {
      const result = await emailClick(email, setState)
      if (result === true) setState({ ...state, email: true })
    }

    if (action === '닉네임') {
      const result = await nicknameClick(nickname, setState)
      if (result === true) setState({ ...state, nickname: true })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!submitCheck(userInputs, state)) {
      return
    }

    try {
      const result = await signupSubmit(userInputs)
      if (result.status === 200) {
        modalShow(
          {
            title: '회원가입이 성공했습니다.',
            text: '이메일을 확인해주세요',
          },
          () => (window.location.href = 'login'),
        )
      }
    } catch (err) {
      modalShow({
        title: '회원가입을 실패했습니다.',
        text: err.message,
      })
    }
  }

  return (
    <>
      <div className={styled.signUpContainer}>
        <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup} onSubmit={handleSubmit}>
          <Label title={'이메일'} className={styled.title} />
          <div className={styled.inputAndBtnGroup}>
            <Input
              className={styled.inputArea}
              type="text"
              name="email"
              onChange={handleChange}
              value={userInputs.email}
            />
            <DoubleCheck onClick={() => btnClick('이메일', userInputs)} />
          </div>

          <Label title={'닉네임'} className={styled.title} />
          <div className={styled.inputAndBtnGroup}>
            <Input
              className={styled.inputArea}
              type="text"
              name="nickname"
              onChange={handleChange}
              value={userInputs.nickname}
            />
            <DoubleCheck onClick={() => btnClick('닉네임', userInputs)} />
          </div>

          <Label title={'이름'} className={styled.title} />
          <Input
            className={styled.inputArea}
            type="text"
            name="name"
            onChange={handleChange}
            value={userInputs.name}
          />

          <Label title={'비밀번호'} className={styled.title} />
          <Input
            className={styled.inputArea}
            type="password"
            autoComplete="on"
            name="password"
            onChange={handleChange}
            value={userInputs.password}
          />

          <Label title={'비밀번호 확인'} className={styled.title} />
          <Input
            className={styled.inputArea}
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={userInputs.confirmPassword}
          />

          <Label title={'전화번호'} className={styled.title} />
          <Input
            className={styled.inputArea}
            type="phoneNumber"
            placeholder=" '-' 없이 입력해주세요"
            name="phone"
            onChange={handleChange}
            value={userInputs.phone}
          />

          <Label title={'생년월일'} className={styled.title} />
          <Input
            className={styled.inputArea}
            type="date"
            name="birth"
            onChange={handleChange}
            value={userInputs.birth}
          />

          <div className={styled.btnGroup}>
            <Link to="/login">
              <button className={styled.beforeBtn} type="button">
                이전
              </button>
            </Link>
            <button className={styled.signinBtn} type="submit">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signup
