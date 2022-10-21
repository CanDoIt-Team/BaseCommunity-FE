import styles from '../styles/Header.module.scss'
import { BsBell, BsPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import React, { useState } from 'react'

export default function Header() {
  const [login, setLogin] = useState(false)

  const [showMypage, setShowMypage] = useState(false)

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
        {login ? (
          <div className={styles.mypageAndAlarm}>
            <BsBell className={styles.icon} />
            <BsPersonFill className={styles.icon} onClick={handleMypageClick} />
            {showMypage && (
              <div className={styles.mypageList}>
                <Link to="mypage" onClick={handleMypageClick}>
                  마이페이지
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className={styles.login}>
            로그인
          </Link>
        )}
      </div>
    </div>
  )
}
