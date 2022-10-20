import { Outlet } from 'react-router-dom'
import styled from './styles/Home.module.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className={styled.mainContainer}>
        <div style={{ height: '20px' }}></div>
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
