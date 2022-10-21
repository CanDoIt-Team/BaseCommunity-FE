import logo from '../asset/Logo.png'
import styled from '../styles/Logo.module.css'

export function LogoAndTitle() {
  return (
    <div className={styled.logoContainer}>
      <img className={styled.logo} src={logo} alt="Logo" />
      <div className={styled.logoTitleGroup}>
        <p className={styled.logoTitle}>BASE</p>
        <p className={styled.logoTitle}>COMMUNITY</p>
      </div>
    </div>
  )
}

export function Logo({ size }) {
  return (
    <div className={styled.logoContainer}>
      <img
        className={size === 'small' ? styled.small : styled.big}
        src={logo}
        alt="Logo"
      />
    </div>
  )
}
