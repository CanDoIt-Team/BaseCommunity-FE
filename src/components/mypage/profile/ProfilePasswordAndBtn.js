import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changePassword } from '../../../apis/userApi'
import styled from '../../../styles/mypage/Profile.module.scss'
import modalShow from '../../Modal'
import { Label } from '../../sign/Sign'

export const ProfilePasswordAndBtn = ({token, setLogin}) => {

  const navigate = useNavigate()
  const [changePasswordCheck, setChangePasswordCheck] = useState(false)
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

    console.log(changePasswordValue.password.length)

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

  return (
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
  )
}

export default ProfilePasswordAndBtn
