import React, { useState } from 'react'
import Paginaition from '../../Paginaition'
import { useGetProject } from '../../../hooks/useGetProject'
import ProjectList from './ProjectList'
import SearchBar from '../../SearchBar'
import { useNavigate } from 'react-router-dom'
import WriteBtn from '../../WriteBtn'
import { useRecoilState, useRecoilValue } from 'recoil'
import { authToken, loginState } from '../../../store/store'
import { projectConfirm, writeAPI } from '../../../apis/projectsApi'
import ProjectWriteBtn from './ProjectWriteBtn'

export default function ProjectShow() {
  const navigate = useNavigate()
  const token = useRecoilValue(authToken)
  const [page, setPage] = useState(1)
  const [login, setLogin] = useRecoilState(loginState)
  const [loginCheck, setLoginCheck] = useState(login.id === '')
  const [searchValue, setSearchValue] = useState('')
  const { data } = useGetProject(page, 21, searchValue)

  return (
    
    <>
      <SearchBar setSearchValue={setSearchValue} />
      <ProjectWriteBtn loginCheck={loginCheck} token={token} />
      <ProjectList data={data} />
      <Paginaition totalPage={data?.totalPages} page={page} setPage={setPage} />
    </>
  )
}
