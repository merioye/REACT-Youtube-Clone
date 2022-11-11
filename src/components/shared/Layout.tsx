import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <div className='flex h-[calc(100vh-56px)] bg-red-300'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
