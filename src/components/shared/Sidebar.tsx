import { MouseEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineHome,
  AiFillLike,
  AiOutlineLike,
  AiOutlineLogout,
  AiOutlineClockCircle,
} from 'react-icons/ai'
import { MdOutlineSubscriptions, MdSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { SlFire } from 'react-icons/sl'
import { FiSun } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'
import { menuItems1, menuItems2 } from '../../data/menuItems'
import { toggleTheme } from '../../utils/shared/theme'
import { addRippleEffect } from '../../utils/shared/addRippleEffect'
import { useAppSelector } from '../../hooks/redux-hooks'

const Sidebar = () => {
  const user = { name: 'faheem' }
  const [theme, setTheme] = useState(localStorage.getItem('yt-redesign-theme') || '')
  const { showSidebar } = useAppSelector((state) => state.sidebar)

  const handleToggleThemeBtnClick = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    toggleTheme()
    setTheme(() => (theme === 'dark' ? 'light' : 'dark'))
  }

  const handleLogoutBtnClick = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
  }
  return (
    <aside
      className={`bg h-full w-[72px] md:w-28 xm:w-60 overflow-auto px-3 md:px-8 xm:px-8 py-3 ease-in-out duration-300 fixed left-0 top-[59px] ${
        showSidebar
          ? 'translate-x-0'
          : 'translate-x-[-72px] md:translate-x-[-112px] xm:translate-x-[-240px]'
      }`}
    >
      {menuItems1.map((item) => (
        <NavLink to={item.link} key={item.title}>
          {({ isActive }) => (
            <div className={`menuItem ${isActive ? 'iconBtn-bg' : ''}`}>
              {item.title === 'Home' ? (
                isActive ? (
                  <AiFillHome className='menuIcon' />
                ) : (
                  <AiOutlineHome className='menuIcon' />
                )
              ) : null}
              {item.title === 'Subscriptions' ? (
                isActive ? (
                  <MdSubscriptions className='menuIcon' />
                ) : (
                  <MdOutlineSubscriptions className='menuIcon' />
                )
              ) : null}
              {item.title === 'Liked videos' ? (
                isActive ? (
                  <AiFillLike className='menuIcon' />
                ) : (
                  <AiOutlineLike className='menuIcon' />
                )
              ) : null}
              <p
                className={`para-regular ${
                  isActive ? 'font-medium' : 'font-normal'
                } hidden xm:block`}
              >
                {item.title}
              </p>
            </div>
          )}
        </NavLink>
      ))}

      <hr className='hr my-3' />
      {menuItems2.map((item) => (
        <div key={item.title} onClick={addRippleEffect} className='menuItem'>
          {item.title === 'Trending' && <SlFire className='menuIcon' />}
          {item.title === 'Library' && <MdOutlineVideoLibrary className='menuIcon' />}
          {item.title === 'Watch later' && <AiOutlineClockCircle className='menuIcon' />}
          <p className='para-regular font-normal hidden xm:block'>{item.title}</p>
        </div>
      ))}
      <hr className='hr my-3' />
      <div onClick={handleToggleThemeBtnClick} className='menuItem'>
        {theme === 'dark' ? <FiSun className='menuIcon' /> : <HiOutlineMoon className='menuIcon' />}

        <p className='para-regular font-normal hidden xm:block'>
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </p>
      </div>
      {user && (
        <div onClick={handleLogoutBtnClick} className='menuItem'>
          <AiOutlineLogout className='menuIcon' />
          <p className='para-regular font-normal hidden xm:block'>Logout</p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
