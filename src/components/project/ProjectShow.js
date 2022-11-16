import React, { useState } from 'react'
import Button from '../../components/Button'
import Paginaition from '../Paginaition'
import { useGetProject } from '../../hooks/useGetProject'
import ProjectList from './ProjectList'
import SearchBar from '../SearchBar'
import styled from '../../styles/mypage/Mypage.module.scss'
import { useNavigate } from 'react-router-dom'
import WriteBtn from '../WriteBtn'
import { useRecoilState } from 'recoil'
import { loginState } from '../../store/store'

export default function ProjectShow() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [login, setLogin] = useRecoilState(loginState)
  const [loginCheck, setLoginCheck] = useState(login.id === '')
  const [searchValue, setSearchValue] = useState('')
  const { data } = useGetProject(page, 21, searchValue)

  return (
    <>
      <SearchBar setSearchValue={setSearchValue} />
      <WriteBtn loginCheck={loginCheck} link={'/project/write'} />
      <ProjectList data={data} />
      <Paginaition totalPage={data?.totalPages} page={page} setPage={setPage} />
    </>
  )
}
