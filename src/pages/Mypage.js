import styled from '../styles/Mypage.module.scss'

export const Mypage = () => {
  return(
    <div className={styled.mypageContainer}>
      <div className={styled.mypageList}>
        <h2 className={styled.mainTitle}>프로필</h2>
        <img src='https://via.placeholder.com/100' alt='테스트 이미지' className={styled.myImg}/>
        <span className={styled.subTitle}>nickname</span>
        <span className={styled.subTitle}>E-mail</span>
        <span className={styled.subTitle}>phoneNumber</span>
      </div>
      <div></div>
    </div>
  )
}

export default Mypage