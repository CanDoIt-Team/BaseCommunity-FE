import React from 'react'
import styled from '../../../styles/mypage/Profile.module.scss'
import { authToken } from '../../../store/store'
import { useGetUser } from '../../../hooks/useGetUser'
import { useEffect, useState } from 'react'
import { userUpdate } from '../../../apis/userApi'
import modalShow from '../../Modal'
import { useRecoilValue } from 'recoil'
import ProfileInputGroup from './ProfileInputGroup'
import ProfileImgChange from './ProfileImgChange'
import ProfilePasswordAndBtn from './ProfilePasswordAndBtn'

export const ProfileUserInfo = () => {
  const token = useRecoilValue(authToken)
  const { data } = useGetUser(token)

  const [check, setCheck] = useState(false)
  const [skill, setSkill] = useState(null)
  const [changeInfo, setChangeInfo] = useState({
    nickname: '',
    phone: '',
    birth: '',
  })

    console.log(JSON.stringify(skill))


  const handleValueChange = (e) => {
    setChangeInfo({ ...changeInfo, [e.target.name]: e.target.value })
    console.log(changeInfo)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(skill)

    if (changeInfo.nickname.length <= 0) {
      modalShow({
        title: '닉네임을 입력해주세요',
      })
      return
    }
    if (data.nickname !== changeInfo.nickname) {
      if (check === false) {
        modalShow({
          title: '닉네임 중복 확인을 해주세요',
        })
        return
      }
    }
    if (changeInfo.phone.length <= 0) {
      modalShow({
        title: '전화번호를 입력해주세요',
      })
      return
    }
    if (changeInfo.birth.length <= 0) {
      modalShow({
        title: '생년월일을 입력해주세요',
      })
      return
    }

    const ttt = JSON.stringify(skill)
    const test = encodeURIComponent(`${ttt}`)
    console.log(test)

    try {
      const result = await userUpdate(token, changeInfo, test)

      // if (result.status === 200) {
      //   window.location.replace('/mypage')
      //   setCheck(false)
      // }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (data) {
      setChangeInfo({
        nickname: data.nickname,
        name: data.name,
        phone: data.phone,
        birth: data.birth,
      })

      const skillValue = data.skills.map((item) => ({ value: item.name }))
      setSkill(skillValue)
      console.log(skill)
    }
  }, [data])

  if (data)
    return (
      <>
        <form className={styled.profileContainer} onSubmit={handleSubmit}>
          <h1 className={styled.mainTitle}>회원정보</h1>
          <div className={styled.profileWrap}>
            <ProfileInputGroup
              data={data}
              token={token}
              changeInfo={changeInfo}
              setChangeInfo={setChangeInfo}
              handleValueChange={handleValueChange}
              skill={skill}
              setSkill={setSkill}
            />
            <ProfileImgChange data={data} token={token} />
          </div>
          <ProfilePasswordAndBtn token={token} />
        </form>
      </>
    )
}

export default ProfileUserInfo