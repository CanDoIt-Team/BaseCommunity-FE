import React from 'react'
import ReactDOM from 'react-dom/client'
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

import './index.css'
import Mypage from './pages/Mypage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/mypage'} element={<Mypage />} />
          <Route path={'/project'} element={<Project />} />
          <Route path={'/Board'} element={<Board />} />
          <Route path={'/Job'} element={<Job />} />
        </Route>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/findPassword'} element={<FindPassword />} />
        <Route
          path={'/confirmChangePassword'}
          element={<ConfirmChangePassword />}
        />
      </Routes>
    </>
  </BrowserRouter>,
)
