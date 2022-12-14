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

  const param = useParams();

  const [inputValue, setInputValue] = useState({
    category: '자유',
    title: '',
    content: '',
  })

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (data) {
      setInputValue({
        category: data.category,
        title: data.title,
        content: data.content,
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className={styled.boardWriteContainer}>
      <BoardModifyTitleGroup />
      <BoardModifyInputGroup
        inputValue={inputValue}
        handleChange={handleChange}
      />
      <BoardModifyBtnGroup boardId={data?.boardId} inputValue={inputValue} param={param} />
    </div>
  )
}

export default BoardModify
