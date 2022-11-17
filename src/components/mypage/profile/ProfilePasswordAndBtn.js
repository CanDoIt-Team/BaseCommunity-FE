import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { changePassword, withdraw } from '../../../apis/userApi'
import { loginState } from '../../../store/store'
import styled from '../../../styles/mypage/Profile.module.scss'
import modalShow from '../../Modal'
import { Label } from '../../sign/Sign'

export const ProfilePasswordAndBtn = ({ token }) => {
  const navigate = useNavigate()
  const [login, setLogin] = useRecoilState(loginState)
  const [changePasswordCheck, setChangePasswordCheck] = useState(false)
  const [clickState, setClickState] = useState(false)
  const [changePasswordValue, setChangePasswordValue] = useState({
    password: '',
    newPassword: '',
  })

  const handlePasswordValueChange = (e) => {
    setChangePasswordValue({
      ...changePasswordValue,
      [e.target.name]: e.target.value,
    })
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()

    if (changePasswordValue.password.length <= 0) {
      modalShow({
        title: '변경하실 비밀번호를 입력해주세요.',
      })
      return
    }

    if (changePasswordValue.newPassword.length <= 0) {
      modalShow({
        title: '변경하실 비밀번호를 입력해주세요.',
      })
      return
    }

    if (changePasswordValue.password !== changePasswordValue.newPassword) {
      modalShow({
        title: '비밀번호가 일치하지 않습니다.',
      })
      return
    }

    try {
      const result = await changePassword(token, {
        newPassword: changePasswordValue.newPassword,
      })

      if (result.status === 200) {
        setChangePasswordCheck(false)
        modalShow({
          title: '비밀번호 변경 완료<br><br> 다시 로그인 해주세요.',
        })
        setLogin({ id: '', isLoading: false })
        navigate('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleWithDraw = async (token) => {
    try {
      const result = await withdraw(token)

      if (result.status === 200) {
        modalShow({
          title: '정상적으로 회원탈퇴가 되었습니다.',
        })
        setLogin({ id: '', isLoading: false })
        navigate('/')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styled.btnContainer}>
      <div className={styled.passwordAndBtnContainer}>
        {changePasswordCheck ? (
          <div className={styled.passwordChangeInputGroup}>
            <Label className={styled.userLabel} title={'새 비밀번호'} />
            <input
              className={styled.userInput}
              type="password"
              id="password"
              name="password"
              onChange={handlePasswordValueChange}
            />
            <Label className={styled.userLabel} title={'새 비밀번호 확인'} />
            <input
              className={styled.userInput}
              type="password"
              id="newPassword"
              name="newPassword"
              onChange={handlePasswordValueChange}
            />
          </div>
        ) : null}
        <div className={styled.btnGroup}>
          {changePasswordCheck ? (
            <button
              type="button"
              className={`${styled.profileChangeBtn} ${styled.green}`}
              onClick={handlePasswordChange}
            >
              비밀번호 변경
            </button>
          ) : (
            <button
              type="button"
              className={`${styled.profileChangeBtn}`}
              onClick={() => setChangePasswordCheck(true)}
            >
              비밀번호 변경
            </button>
          )}
          <button className={styled.profileChangeBtn} type="submit">
            개인정보 변경
          </button>
        </div>
      </div>
      <button
        type="button"
        className={styled.withdraw}
        onClick={() => setClickState(!clickState)}
      >
        회원탈퇴
      </button>
      {clickState && (
        <div className={styled.modalbg}>
          <div className={styled.successModal}>
            <h3 className={styled.mainTitle}>회원 탈퇴</h3>
            <span className={styled.subTitle}>회원 탈퇴 하시겠습니까?</span>
            <span className={styled.descript}>
              작성하신 게시글, 프로젝트, 댓글등
            </span>
            <span className={styled.descript}>
              모두 초기화 되며 복구하실 수 없습니다.
            </span>
            <div className={styled.modalBtnGroup}>
              <button
                type="button"
                className={styled.mainBtn}
                onClick={() => handleWithDraw(token)}
              >
                회원탈퇴
              </button>
              <button
                type="button"
                className={styled.cancelBtn}
                onClick={() => setClickState(!clickState)}
              >
                창 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfilePasswordAndBtn
