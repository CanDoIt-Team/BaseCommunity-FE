import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project'
import Board from './pages/Board'
import Job from './pages/Job'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChangePassword from './pages/ChangePassword'
import ConfirmChangePassword from './pages/ConfirmChangePassword'


function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />}>
          <Route path={'/project'} element={<Project />} />
          <Route path={'/Board'} element={<Board />} />
          <Route path={'/Job'} element={<Job />} />
        </Route>
        <Route path={'/login'} element={<Login />}/>
        <Route path={'/signup'} element={<Signup />}/>
        <Route path={'/changePassword'} element={<ChangePassword />}/>
        <Route path={'/confirmChangePassword'} element={<ConfirmChangePassword />}/>
      </Routes>
    </>
  )
}

export default App
