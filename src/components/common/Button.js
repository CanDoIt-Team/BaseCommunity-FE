import styled from '../../styles/common/Button.module.scss'

const SubmitButton = (props) => {
  return (
    <>
      <button className={styled.btn} {...props}>
        {props.title}
      </button>
    </>
  )
}

export { SubmitButton }
