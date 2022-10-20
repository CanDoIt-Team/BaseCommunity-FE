import { Outlet } from 'react-router-dom'
import styled from '../styles/Home.module.css'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Main from './Main'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <>
      <div className={styled.mainContainer}>
        <div style={{ height: '20px' }}></div>
        <Nav />
        <Outlet />
        <Banner/>
        <Main/>
      </div>
      <Footer />
    </>
  )
}
