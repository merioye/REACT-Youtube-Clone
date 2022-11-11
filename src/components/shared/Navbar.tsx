import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { CgMenu } from 'react-icons/cg'
import { BsSearch } from 'react-icons/bs'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { addRippleEffect } from '../../utils/shared/addRippleEffect'

const Navbar = () => {
  const handleToggleSidebar = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
  }
  return (
    <nav className='bg h-14 px-3 md:px-8 flex justify-between items-center'>
      <div className='flex gap-4 items-center'>
        <button
          onClick={handleToggleSidebar}
          className='p-2 hover:hover-color rounded-full transition-all duration-300 relative overflow-hidden'
        >
          <CgMenu className='menuIcon' />
        </button>
        <Link to='/' className='hidden sm:inline'>
          <div className='flex items-center gap-1'>
            <LazyLoadImage src='/images/youtube-logo.png' alt='youtube' height={30} width={30} />
            <h3 className='heading-lg hidden md-2:block'>Youtube</h3>
          </div>
        </Link>
      </div>
      <div className='w-3/5 sm:w-1/2 flex rounded-3xl'>
        <input
          type='text'
          placeholder='Search'
          className='bg para-lg font-normal border focus:border-1 focus:border-blue-500 px-4 rounded-l-3xl outline-none w-full'
        />
        <button className='border h-10 w-16 rounded-r-3xl bg-stone-100 dark:bg-neutral-600 hover:hover-color transition-all duration-300 flex justify-center items-center'>
          <BsSearch className='h-5 w-5 text-primary dark:text-primary-dark' />
        </button>
      </div>
      <div className='rounded-full overflow-hidden cursor-pointer'>
        <LazyLoadImage src='/images/man.svg' alt='profile' height={40} width={40} />
      </div>
    </nav>
  )
}

export default Navbar
