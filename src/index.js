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
import ProjectDetail from './pages/ProjectDetail'

import './index.css'
import Mypage from './pages/Mypage'
import { MypageUserInfo } from './components/mypage/MypageUserInfo'
import BoardList from './components/board/list/BoardList'
import BoardDetail from './components/board/detail/BoardDetail'
import BoardWrite from './components/board/write/BoardWrite'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/mypage'} element={<Mypage />}>
            <Route path={'/mypage'} element={<MypageUserInfo />} />
          </Route>
          <Route path={'/project'} element={<Project />} />
          <Route path={'/project/:id'} element={<ProjectDetail />} />
          <Route path={'/project/write'} element={<Write />} />
          <Route path={'/board'} element={<Board />}>
            <Route path={'/board'} element={<BoardList />} />
            <Route path={'/board/:id'} element={<BoardDetail />} />
            <Route path={'/board/Write'} element={<BoardWrite />} />
          </Route>
          <Route path={'/Job'} element={<Job />} />
        </Route>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/findPassword'} element={<FindPassword />} />
        <Route path={'/password/new'} element={<ConfirmChangePassword />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
)
