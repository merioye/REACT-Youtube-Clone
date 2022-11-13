import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const VideoCard = () => {
  return (
    <Link to='#'>
      <div>
        <div className='rounded-xl flex overflow-hidden relative mb-2'>
          <LazyLoadImage
            src='/images/thumbnail.jpg'
            alt='thumbnail'
            placeholderSrc='/images/thumbnail.jpg'
            effect='blur'
            width={'100%'}
            style={{ backgroundSize: 'cover' }}
          />
          <div className='absolute right-0 bottom-0 m-1 rounded flex items-center text-xs px-1 font-sans bg-black text-white'>
            3:26
          </div>
        </div>
        <div className='flex gap-3 pt-3'>
          <div className='flex'>
            <LazyLoadImage
              src='/images/man.svg'
              alt='channelLogo'
              placeholderSrc='/images/man.svg'
              effect='blur'
              width='36px'
              height='36px'
              style={{ borderRadius: '50%' }}
            />
          </div>
          <div id='id'>
            <h4 className='heading-sm max-h-11 overflowed-text2 mb-1'>
              Digital Payments For The Next 110 Million Pakistanis
            </h4>
            <p className='para-sm mt-2'>Technical Guruji</p>
            <div className='flex gap-2 items-center'>
              <p className='para-sm'>43k views</p>
              <p className='para-sm'>2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
