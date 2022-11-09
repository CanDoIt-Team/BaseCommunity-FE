import { Link } from 'react-router-dom'
import styled from '../../styles/MypageUserInfo.module.scss'

export const MypageCategory = () => {
  return (
    <>
      <div className={styled.linkContainer}>
        <ul className={styled.linkGroup}>
          <li className={styled.linkToPrifile}>
            <Link to="/mypage">내 프로필</Link>
          </li>
          <li className={styled.linkToMyProject}>내 프로젝트</li>
          <li className={styled.linkToMyBoard}>내가 쓴 게시글</li>
        </ul>
      </div>
    </>
  )
}

export default MypageCategory
