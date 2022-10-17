import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import Board from './pages/Board'
import Job from './pages/Job'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />}>
          <Route path={'/project'} element={<Project />} />
          <Route path={'/Board'} element={<Board />} />
          <Route path={'/Job'} element={<Job />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
