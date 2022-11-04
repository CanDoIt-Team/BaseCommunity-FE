import { upload } from '@testing-library/user-event/dist/upload'
import styled from '../../styles/MypageUserInfo.module.scss'

export const MypageProfileImgChange = ({data, token}) => {

  const handleChangeFile = async (e) => {
    const files = e.target.files[0]

    const formData = new FormData()
    formData.append('file', files)
    try {
      const result = await upload(token, formData)
      console.log(result.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styled.profileImgArea}>
      <label htmlFor="file" className={styled.profileLabel}>
        <img src={data.urlFilename} className={styled.img} alt="프로필" />
        <div className={styled.imageChangeText}>이미지 변경</div>
      </label>
      <input
        className={styled.btnUpload}
        type="file"
        name="file"
        id="file"
        onChange={handleChangeFile}
      />
    </div>
  )
}

export default MypageProfileImgChange
