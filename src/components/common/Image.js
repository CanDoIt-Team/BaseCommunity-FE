import defaultImg from '../../asset/Logo.png'
import styled from '../../styles/Image.module.scss'

export const Image = ({size, src}) => {

  const onErrorImg = (e) => {
    e.target.src = defaultImg;
  }

  return (
    <img
      className={size === 40 ? styled.size40 : styled.size20}
      src={src === null ? defaultImg : src}
      onError={onErrorImg}
      alt="이미지"
    />
  )
}

export default Image
