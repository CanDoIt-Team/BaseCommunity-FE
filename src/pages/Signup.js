import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoAndTitle } from "../components/Logo";
import styled from "../styles/Signup.module.css";

export function Signup() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOn = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <div className={styled.signUpContainer}>
      <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup}>
          <h4 className={styled.title}>이메일</h4>
          <div className={styled.inputAndBtnGroup}>
            <input className={styled.inputCheckArea} type="text" />
            <button className={styled.idCheckButton}>중복확인</button>
          </div>
          <h4 className={styled.title}>닉네임</h4>
          <div className={styled.inputAndBtnGroup}>
            <input className={styled.inputCheckArea} type="text" />
            <button className={styled.idCheckButton}>중복확인</button>
          </div>
          <h4 className={styled.title}>이름</h4>
          <input className={styled.inputArea} type="text" />
          <h4 className={styled.title}>비밀번호</h4>
          <input
            className={styled.inputArea}
            type="password"
            autoComplete="on"
          />
          <h4 className={styled.title}>비밀번호 확인</h4>
          <input className={styled.inputArea} type="password" />
          <h4 className={styled.title}>전화번호</h4>
          <input
            className={styled.inputArea}
            type="phoneNumber"
            placeholder=" '-' 없이 입력해주세요"
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
        </form>W
      </div>
    </>
  );
}

export default Signup;
