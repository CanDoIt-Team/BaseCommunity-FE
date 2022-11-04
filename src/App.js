import { Outlet } from 'react-router-dom'
import styled from './styles/Home.module.scss'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className={styled.mainContainer}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
