import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { loginState, authToken } from '../store/store'

import styles from '../styles/Header.module.scss'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import Image from './common/Image'
import { useGetUser } from '../hooks/useGetUser'

export default function Header() {
  const token = useRecoilValue(authToken)
  const { data } = useGetUser(token)

  const [showMypage, setShowMypage] = useState(false)
  const [login, setLogin] = useRecoilState(loginState)

  const [navs, setNavs] = useState([
    { id: 'project', title: '프로젝트', state: false },
    { id: 'board', title: '게시판', state: false },
    { id: 'job', title: '채용공고', state: false },
  ])

  const handleClick = ({ target }) => {
    const textValue = target.innerHTML
    setNavs(
      navs.map((nav) =>
        nav.title === textValue
          ? { ...nav, state: true }
          : { ...nav, state: false },
      ),
    )
  }

  const handleLogoClick = () => {
    setNavs(navs.map((nav) => ({ ...nav, state: false })))
  }

  const handleMypageClick = () => {
    setShowMypage(!showMypage)
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/" onClick={handleLogoClick}>
          <Logo size={'small'} />
        </Link>
      </div>
      <div className={styles.navItmes}>
        {navs.map((nav) => (
          <div key={nav.id} className={`${styles.item}`}>
            <Link
              to={`/${nav.id}`}
              className={nav.state ? styles.current : undefined}
              onClick={(e) => handleClick(e)}
            >
              {nav.title}
            </Link>
          </div>
        ))}
        {login.isLoading ? (
          <>
            <div className={styles.mypageAndAlarm} onClick={handleMypageClick}>
              <Image
                size={40}
                src={data?.urlFilename}
              />
              {showMypage && (
                <div className={styles.mypageList}>
                  <div className={styles.pb10}>
                    <Link
                      to="/mypage"
                      className={styles.mypageLink}
                      onClick={handleMypageClick}
                    >
                      마이페이지
                    </Link>
                  </div>
                  <div className={styles.pb10}>
                    <Link
                      to="/login"
                      className={styles.mypageLink}
                      onClick={() => setLogin({ id: '', isLoading: false })}
                    >
                      로그아웃
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/login" className={styles.login}>
            로그인
          </Link>
        )}
      </div>
    </div>
  )
}
