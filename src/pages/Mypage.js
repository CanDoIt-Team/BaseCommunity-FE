import styled from '../styles/mypage/Mypage.module.scss'
import { Outlet } from 'react-router-dom'
import MypageCategory from '../components/mypage/MypageCategory'
import { mypageCategory } from '../utils/category'
import { useState } from 'react'
import ProfileUserInfo from '../components/mypage/profile/ProfileUserInfo'
import MyActivity from '../components/mypage/myActivity/MyActivity'
import MyProject from '../components/mypage/myProject/MyProject'

export const Mypage = () => {
  const [category, setCategory] = useState(mypageCategory)

  const selectCategory = category.filter((item) => item.active === true)

  console.log(selectCategory[0].title === '내 프로필')

  return (
    <div className={styled.mypageContainer}>  
      <MypageCategory category={category} setCategory={setCategory} />
      <div className={styled.mainContainer}>
        {selectCategory[0].title === '내 프로필' && <ProfileUserInfo />}
        {selectCategory[0].title === '내 프로젝트' && <MyProject />}
        {selectCategory[0].title === '내 활동' && <MyActivity />}
      </div>
    </div>
  )
}

export default Mypage
