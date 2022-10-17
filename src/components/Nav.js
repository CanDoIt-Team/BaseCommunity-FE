import styles from '../styles/Nav.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
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

  console.log(navs)

  return (
    <div className={styles.container}>
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
    </div>
  )
}
