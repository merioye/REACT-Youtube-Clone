import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

const ChannelCard = () => {
  return (
    <div className='flex w-full'>
      <div className='flex-1 basis-[1e-9px] mr-4 max-w-[360px] min-w-60'>
        <Link to='#'>
          <div className='flex justify-center items-center flex-none w-60 relative rounded-full overflow-hidden mx-auto'>
            <div className='flex items-center h-[136px] w-[136px] rounded-full overflow-hidden'>
              <LazyLoadImage
                src='/images/man.svg'
                alt='channelLogo'
                placeholderSrc='/images/man.svg'
                effect='blur'
                width={'100%'}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <div>
          <h1 className='heading-md overflowed-text2 mb-2'>VideoWaliSarkar</h1>
          <p className='para-sm overflowed-text2 mb-1'>2.16M subscribers &nbsp;- 1916 videos</p>
          <p className='para-sm overflowed-text2'>
            Just Another Tech Savy Making Tech Videos and Tutorials ! Business Queries :
            business@example.com.
          </p>
        </div>
        <button className='flex-none button'>Subscribe</button>
      </div>
    </div>
  )
}

export default ChannelCard
