import styled from '../../styles/common/Input.module.scss'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'

const Input = (props) => {
  return (
    <>
      <input className={styled.inputArea} {...props} />
    </>
  )
}

const DateInput = (props) => {
  return (
    <DatePicker className={styled.dateArea} locale={ko} withPortal {...props} />
  )
}

const TextArea = (props) => {
  return (
    <>
      <textarea className={styled.textArea} {...props} />
    </>
  )
}

export { Input, DateInput, TextArea }
