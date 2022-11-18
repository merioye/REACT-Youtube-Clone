import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import {
  CustomSkeletonTheme,
  // VideoDetailsSkeleton,
  // WatchVideCardSkeleton,
} from '../components/skeletons'
import MetaData from '../components/shared/MetaData'
import WatchVideoCard from '../components/watchPage/WatchVideoCard'
import VideoDetails from '../components/watchPage/VideoDetails'
import CommentsList from '../components/watchPage/CommentsList'

const Watch = () => {
  const [videoFetched, setVideoFetched] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVideoFetched(true)
    }, 5000)
  }, [])
  return (
    <>
      <MetaData title='Photoshop for beginners' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <section className='flex flex-col lg:flex-row gap-7 overflow-auto scrollbar-hide h-auto max-h-full max-w-[1280px] pt-0 md:pt-3 mx-auto'>
          <div className='w-full lg:w-[calc(100%-428px)]'>
            <div className='relative overflow-hidden pt-[56.25%] mb-3'>
              {videoFetched ? (
                <iframe
                  // src='https://www.youtube.com/embed/Mqj7fIjZ40M?autoplay=1'
                  src='https://www.youtube.com/embed/Mqj7fIjZ40M?autohide=0'
                  frameBorder='0'
                  title={'Hello world'}
                  allowFullScreen
                  className='absolute bottom-0 left-0 right-0 w-full h-full'
                ></iframe>
              ) : (
                <div className='absolute top-0 bottom-0 right-0 left-0 w-full h-full'>
                  <CustomSkeletonTheme>
                    <Skeleton className='h-full' />
                  </CustomSkeletonTheme>
                </div>
              )}
            </div>
            <VideoDetails />
            {/* <VideoDetailsSkeleton /> */}
            <CommentsList />
          </div>
          <div className='w-full lg:w-[400px]'>
            <h2 className='heading-md mb-3'>Up Next</h2>
            <WatchVideoCard />
            <WatchVideoCard />
            <WatchVideoCard />
            <WatchVideoCard />
            <WatchVideoCard />
            <WatchVideoCard />
            {/* <WatchVideCardSkeleton />
            <WatchVideCardSkeleton />
            <WatchVideCardSkeleton />
            <WatchVideCardSkeleton />
            <WatchVideCardSkeleton />
            <WatchVideCardSkeleton /> */}
          </div>
        </section>
      </main>
    </>
  )
}

export default Watch
