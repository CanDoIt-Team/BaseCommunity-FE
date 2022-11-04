import { useState } from 'react'
import styled from '../../../styles/boardStyles/BoardWrite.module.scss'
import BoardWriteBtnGroup from './BoardWriteBtnGroup'
import BoardWriteInputGroup from './BoardWriteInputGroup'
import BoardWriteTitleGroup from './BoardWriteTitleGroup'

export const BoardWrite = () => {

  const [inputValue, setInputValue] = useState({
    category: '자유',
    title: '',
    content: '',
  })

  const handleChange = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value})
    console.log(inputValue)
  }

  return (
    <div className={styled.boardWriteContainer}>
      <BoardWriteTitleGroup />
      <BoardWriteInputGroup inputValue={inputValue} handleChange={handleChange} />
      <BoardWriteBtnGroup inputValue={inputValue}/>
    </div>
  )
}

export default BoardWrite
