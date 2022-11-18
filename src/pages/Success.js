import modalShow from '../components/Modal'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()

  useEffect(() => {
    modalShow(
      {
        title: '회원가입이 완료되었습니다.',
      },
      () => navigate('/login'),
    )
  }, [])

  return <div></div>
}
