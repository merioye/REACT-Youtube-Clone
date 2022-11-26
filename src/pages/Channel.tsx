import { LazyLoadImage } from 'react-lazy-load-image-component'
import MetaData from '../components/shared/MetaData'
import VideoCard from '../components/shared/VideoCard'
// import { ChannelDetailsSkeleton } from '../components/skeletons'

const Channel = () => {
  return (
    <div className='bg w-full h-auto max-h-full overflow-auto scrollbar-hide pb-3'>
      <MetaData title='Technical Guruji - Youtube Redesign' />
      <div className='w-full'>
        <LazyLoadImage
          src='/images/channel-banner.jpg'
          alt='channelBanner'
          placeholderSrc='/images/channel-banner.jpg'
          effect='blur'
          width={'100%'}
        />
      </div>
      <div className='flex items-center pt-4 pb-1 px-[107px] max-w-[1284px] mx-auto'>
        <div className='flex flex-none items-center w-20 h-20 rounded-full overflow-hidden mr-6'>
          <LazyLoadImage
            src='/images/man.svg'
            alt='channelLogo'
            placeholderSrc='/images/man.svg'
            effect='blur'
            width={'100%'}
          />
        </div>
        <div className='flex items-center flex-1'>
          <div className='flex-1 min-w-[150px] max-h-[90px] overflow-hidden'>
            <h2 style={{ fontWeight: 400 }} className='heading-lg max-w-full overflow-hidden'>
              Technical Guruji
            </h2>
            <p className='font-sans font-normal text-xs md:text-sm text-secondary dark:text-secondary-dark'>
              850k subscribers
            </p>
          </div>
          <button className='flex-none button'>Subscribe</button>
        </div>
      </div>
      {/* <ChannelDetailsSkeleton /> */}
      <hr className='hr my-4' />
      <section className='grid grid-cols-3 gap-x-4 gap-y-10 px-[107px] max-w-[1284px] mx-auto'>
        {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </section>
    </div>
  )
}

export default Channel
