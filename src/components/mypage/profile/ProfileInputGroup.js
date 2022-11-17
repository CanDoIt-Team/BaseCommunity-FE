import { useState } from 'react'
import { nicknameCheck } from '../../../apis/signApi'
import styled from '../../../styles/mypage/Profile.module.scss'
import modalShow from '../../Modal'
import { Label } from '../../sign/Sign'
import Tech from '../../tech/Tech'

export const ProfileInputGroup = ({
  data,
  changeInfo,
  handleValueChange,
  setCheck,
  skill,
  setSkill,
}) => {

  const handleNickNameCheck = async (nickname) => {
    if (changeInfo.nickname.length === 0) {
      modalShow({
        title: '닉네임을 입력해주세요.',
      })
      return
    }

    try {
      const result = await nicknameCheck(nickname)

      if (result.data === false) {
        modalShow({
          title: '사용 가능한 닉네임입니다.',
        })
        setCheck(true)
      } else {
        modalShow({
          title: '이미 사용중인 닉네임입니다.',
        })
        setCheck(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (data)
    return (
      <div className={styled.userInfoWrap}>
        <Label className={styled.userLabel} title={'닉네임'} />
        <div className={styled.nicknameArea}>
          <input
            className={styled.userInput}
            type="text"
            id="nickname"
            name="nickname"
            defaultValue={data?.nickname}
            onChange={handleValueChange}
          />
          <button
            type="button"
            className={styled.nicknameCheckBtn}
            onClick={() => handleNickNameCheck(changeInfo.nickname)}
          >
            중복확인
          </button>
        </div>
        <Label className={styled.userLabel} title={'기술 스택'} />
        <Tech techValue={skill} setTechValue={setSkill} />
        <Label className={styled.userLabel} title={'이름'} />
        <input
          className={styled.userInput}
          type="text"
          id="name"
          name="name"
          readOnly={true}
          defaultValue={data.name}
          onChange={handleValueChange}
        />
        <Label className={styled.userLabel} title={'전화번호'} />
        <input
          className={styled.userInput}
          type="phone"
          id="phone"
          name="phone"
          defaultValue={data.phone}
          onChange={handleValueChange}
        />
        <Label className={styled.userLabel} title={'생년월일'} />
        <input
          className={styled.userInput}
          type="text"
          id="birth"
          name="birth"
          defaultValue={data.birth}
          onChange={handleValueChange}
        />
      </div>
    )
}

export default ProfileInputGroup
