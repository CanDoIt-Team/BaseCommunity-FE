import Swal from 'sweetalert2'
import styled from '../styles/Modal.module.scss'

/* 모달 라이브러리 */
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: styled.btn,
    cancelButton: styled.cancel,
  },
  buttonsStyling: false,
  confirmButtonColor: '#35b729',
})

const modalShow = (
  { title, confirmButtonText = '확인', ...rest },
  callback,
) => {
  swalWithBootstrapButtons
    .fire({
      title,
      ...rest,
      confirmButtonText, // confirm 버튼 텍스트 지정
    })
    .then(callback)
}

export default modalShow
