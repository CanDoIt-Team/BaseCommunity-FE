import React from "react";
import { Link } from "react-router-dom";
import { LogoAndTitle } from "../components/Logo";
import styled from "../styles/ChangePassword.module.css";

export function ChangePassword() {
  return (
    <>
      <div className={styled.loginContainer}>
      <Link to={'/'}>
          <LogoAndTitle />
        </Link>
        <form className={styled.inputGroup}>
        <h4 className={styled.title}>이메일</h4>
          <input
            className={styled.inputArea}
            type="email"
          />
          <h4 className={styled.title}>이름</h4>
          <input
            className={styled.inputArea}
            type="text"
          />
          <div className={styled.btnGroup}>
            <Link to="/login">
              <button className={styled.beforeBtn} type="button">
                이전
              </button>
            </Link>
            <Link to="/ConfirmChangePassword">
            <button className={styled.signinBtn} type="submit">
              인증
            </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default ChangePassword;
