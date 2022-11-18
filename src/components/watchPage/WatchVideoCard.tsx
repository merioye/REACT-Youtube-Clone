import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const WatchVideoCard = () => {
  return (
    <Link to='#'>
      <div className='flex gap-3 mt-2'>
        <div className='flex items-center rounded-md overflow-hidden w-1/2 lg:w-[180px] relative'>
          <LazyLoadImage
            src='/images/thumbnail.jpg'
            alt='thumbnail'
            placeholderSrc='/images/thumbnail.jpg'
            effect='blur'
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute right-0 bottom-0 m-1 rounded flex items-center text-xs px-1 font-sans bg-black text-white'>
            3:26
          </div>
        </div>
        <div className='w-1/2 lg:w-[208px]'>
          <h4 className='para-regular font-medium max-h-11 overflowed-text2 mb-1'>
            Top React js interview questions for freshers in Hindi
          </h4>
          <p className='para-sm'>Technical Guruji</p>
          <p className='para-sm'>345k views&nbsp; - 1 year ago</p>
        </div>
      </div>
    </Link>
  )
}

export default WatchVideoCard
