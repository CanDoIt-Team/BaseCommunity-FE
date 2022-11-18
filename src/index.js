import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Project from './pages/Project'
import Board from './pages/Board'
import Job from './pages/Job'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FindPassword from './pages/FindPassword'
import ConfirmChangePassword from './pages/ConfirmChangePassword'

import Write from './components/project/Write'
import Update from './components/project/Update'
import ProjectDetail from './pages/ProjectDetail'

import './index.css'
import Mypage from './pages/Mypage'
import BoardList from './components/board/list/BoardList'
import BoardDetail from './components/board/detail/BoardDetail'
import BoardWrite from './components/board/write/BoardWrite'
import BoardModify from './components/board/modify/BoardModify'
import Success from './pages/Success'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/mypage'} element={<Mypage />} />
          <Route path={'/project'} element={<Project />} />
          <Route path={'/project/:id'} element={<ProjectDetail />} />
          <Route path={'/project/write'} element={<Write />} />
          <Route path={'/project/update'} element={<Update />} />
          <Route path={'/board'} element={<Board />}>
            <Route path={'/board'} element={<BoardList />} />
            <Route path={'/board/:id'} element={<BoardDetail />} />
            <Route path={'/board/write'} element={<BoardWrite />} />
            <Route path={'/board/modify/:id'} element={<BoardModify />} />
          </Route>
          <Route path={'/Job'} element={<Job />} />
        </Route>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/findPassword'} element={<FindPassword />} />
        <Route path={'/password/new'} element={<ConfirmChangePassword />} />
        <Route path={'/success'} element={<Success />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
)
