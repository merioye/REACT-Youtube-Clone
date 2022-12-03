import { Outlet } from 'react-router-dom'

import { useAppSelector } from '../../hooks/redux-hooks'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = () => {
  const { showSidebar } = useAppSelector((state) => state.sidebar)
  return (
    <div className='bg h-screen w-full'>
      <Navbar />
      <div className='h-[calc(100vh-60px)]'>
        <Sidebar />
        <div className='h-full w-full flex justify-end'>
          <div
            className={`h-full ease-in-out duration-300 ${
              showSidebar
                ? 'w-[calc(100%-72px)] md:w-[calc(100%-112px)] xm:w-[calc(100%-240px)]'
                : 'w-full'
            }`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
