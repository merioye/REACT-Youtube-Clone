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
import { toggleTheme } from '../../utils/shared/theme'
import { addRippleEffect } from '../../utils/shared/addRippleEffect'

const menuItems1 = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Subscriptions',
    link: '/subscriptions',
  },
  {
    title: 'Liked videos',
    link: '/liked-videos',
  },
]
const menuItems2 = [
  {
    title: 'Trending',
  },
  {
    title: 'Library',
  },
  {
    title: 'Watch later',
  },
]

const Sidebar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('yt-redesign-theme'))

  const handleToggleThemeBtnClick = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    toggleTheme()
    setTheme(() => (theme === 'dark' ? 'light' : 'dark'))
  }

  const handleLogoutBtnClick = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
  }
  return (
    <aside className='bg h-full w-[72px] sm:w-60 overflow-auto px-3 md:px-8 py-3'>
      {menuItems1.map((item) => (
        <NavLink to={item.link} key={item.title}>
          {({ isActive }) => (
            <div
              className={`flex items-center gap-5 w-full h-10 px-3 ${
                isActive ? 'bg-stone-100 dark:bg-neutral-600' : ''
              } hover:hover-color rounded-[10px] transition-all duration-300 mb-1`}
            >
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
              <p className={`para-regular ${isActive ? 'font-medium' : 'font-normal'}`}>
                {item.title}
              </p>
            </div>
          )}
        </NavLink>
      ))}

      <hr className='border-soft dark:border-soft-dark my-3' />
      {menuItems2.map((item) => (
        <div
          key={item.title}
          onClick={addRippleEffect}
          className='flex items-center gap-5 w-full h-10 px-3 hover:hover-color rounded-[10px] transition-all duration-300 mb-1 cursor-pointer relative overflow-hidden'
        >
          {item.title === 'Trending' && <SlFire className='menuIcon' />}
          {item.title === 'Library' && <MdOutlineVideoLibrary className='menuIcon' />}
          {item.title === 'Watch later' && <AiOutlineClockCircle className='menuIcon' />}
          <p className='para-regular font-normal'>{item.title}</p>
        </div>
      ))}
      <hr className='border-soft dark:border-soft-dark my-3' />
      <div
        onClick={handleToggleThemeBtnClick}
        className='flex items-center gap-5 w-full h-10 px-3 hover:hover-color rounded-[10px] transition-all duration-300 mb-1 cursor-pointer relative overflow-hidden'
      >
        {theme === 'dark' ? <FiSun className='menuIcon' /> : <HiOutlineMoon className='menuIcon' />}

        <p className='para-regular font-normal'>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</p>
      </div>
      <div
        onClick={handleLogoutBtnClick}
        className='flex items-center gap-5 w-full h-10 px-3 hover:hover-color rounded-[10px] transition-all duration-300 mb-1 cursor-pointer relative overflow-hidden'
      >
        <AiOutlineLogout className='menuIcon' />
        <p className='para-regular font-normal'>Logout</p>
      </div>
    </aside>
  )
}

export default Sidebar
