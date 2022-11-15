import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const SearchedVideoCard = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-1 basis-[1e-9px] mr-4 max-w-[360px] min-w-60'>
        <Link to='#'>
          <div className='flex items-center w-full h-auto rounded-xl overflow-hidden'>
            <LazyLoadImage
              src='/images/thumbnail.jpg'
              alt='thumbnail'
              placeholderSrc='/images/thumbnail.jpg'
              effect='blur'
              width={'100%'}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>
      </div>
      <div className='w-[calc(100%-376px)] pr-20'>
        <h3 className='heading-md overflowed-text2'>
          React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in
          Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React
          Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi
          React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in
          Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React
          Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi
          React Tutorial in Hindi React Tutorial in Hindi React Tutorial in Hindi React Tutorial in
          Hindi React Tutorial in Hindi React Tutorial in Hindi
        </h3>
        <p className='para-sm'>1.7M views &nbsp;- 1 year ago</p>
        <div className='flex items-center py-3'>
          <div className='flex mr-2 w-6 h-6 rounded-full overflow-hidden'>
            <LazyLoadImage
              src='/images/man.svg'
              alt='channelLogo'
              placeholderSrc='/images/man.svg'
              effect='blur'
              width={'100%'}
            />
          </div>
          <p className='para-sm overflowed-text1'>Technical Guruji</p>
        </div>
        <p className='para-sm overflowed-text1'>
          React is one of the most popular front-end JavaScript libraries for building user
          interfaces. After completing this course, you will be . nterfaces. After completing this
          course, you will be. nterfaces. After completing this course, you will be
        </p>
      </div>
    </div>
  )
}

export default SearchedVideoCard
