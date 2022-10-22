import Swal from 'sweetalert2'
import styled from '../styles/Modal.module.scss'

/* 모달 라이브러리 */
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: styled.btn,
  },
  buttonsStyling: false,
  confirmButtonColor: '#35b729',
})

export const modalShow = ({ title, ...rest }) => {
  swalWithBootstrapButtons.fire({
    title,
    ...rest,
    confirmButtonText: '확인', // confirm 버튼 텍스트 지정
  })
}

export default modalShow
