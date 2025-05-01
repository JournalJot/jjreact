
import { Outlet } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayout