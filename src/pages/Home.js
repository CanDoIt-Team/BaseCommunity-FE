import { Routes, Route } from 'react-router-dom'
import styled from '../styles/Home.module.css'
import Project from './Project'
import Board from './Board'
import Job from './Job'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <div className={styled.mainContainer}>
        <Header />
        <div style={{ height: '20px' }}></div>
        <Nav />
        <Routes>
          <Route path={'/project'} element={<Project />} />
          <Route path={'/Board'} element={<Board />} />
          <Route path={'/Job'} element={<Job />} />
        </Routes>
      </div>
    </>
  )
}
