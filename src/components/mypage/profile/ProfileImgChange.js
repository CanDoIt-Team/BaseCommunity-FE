import { uploadImg } from '../../../apis/userApi'
import styled from '../../../styles/mypage/Profile.module.scss'

export const ProfileImgChange = ({ data, token }) => {
  
  const handleChangeFile = async (e) => {
    const files = e.target.files[0]

    const formData = new FormData()
    formData.append('file', files)
    try {
      const result = await uploadImg(token, formData)
      console.log(result.data)
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <div className={styled.profileImgArea}>
        <label htmlFor="file" className={styled.profileLabel}>
          <img src={`${data.urlFilename}`} className={styled.img} alt="프로필" />
          {/* <img  src={'data:image/png;base64,' + PhotoImage} className={styled.img} alt="프로필" /> */}
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
    </>
  )
}

export default ProfileImgChange
