import styled from '../styles/Mypage.module.scss'
import { Link, Outlet } from 'react-router-dom'

export const Mypage = () => {
  return (
    <div className={styled.mypageContainer}>
      <div className={styled.linkContainer}>
        <ul className={styled.linkGroup}>
          <li className={styled.linkToPrifile}>
            <Link to="/mypage">내 프로필</Link>
          </li>
          <li className={styled.linkToMyProject}>내 프로젝트</li>
          <li className={styled.linkToMyBoard}>내가 쓴 게시글</li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default Mypage
