import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetBoardDetail } from '../../../hooks/useGetBoard'
import styled from '../../../styles/boardStyles/BoardWrite.module.scss'
import BoardModifyBtnGroup from './BoardModifyBtnGroup'
import BoardModifyInputGroup from './BoardModifyInputGroup'
import BoardModifyTitleGroup from './BoardModifyTitleGroup'

export const BoardModify = () => {
  const { id } = useParams()
  const { loading, data } = useGetBoardDetail(id)

  console.log(data)

  const [inputValue, setInputValue] = useState({
    category: '자유',
    title: '',
    content: '',
  })

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    console.log(inputValue)
  }

  useEffect(() => {
    if (data) {
      setInputValue({
        category: data.category,
        title: data.title,
        content: data.content,
      })
    }

    console.log(inputValue)
  }, [data])

  return (
    <div className={styled.boardWriteContainer}>
      <BoardModifyTitleGroup />
      <BoardModifyInputGroup
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <BoardModifyBtnGroup boardId={data?.boardId} inputValue={inputValue} />
    </div>
  )
}

export default BoardModify
