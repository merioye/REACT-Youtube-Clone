import Skeleton from 'react-loading-skeleton'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import {
  CustomSkeletonTheme,
  VideoDetailsSkeleton,
  WatchVideoCardSkeleton,
} from '../components/skeletons'
import MetaData from '../components/shared/MetaData'
import WatchVideoCard from '../components/watchPage/WatchVideoCard'
import VideoDetails from '../components/watchPage/VideoDetails'
import CommentsList from '../components/watchPage/CommentsList'
import { getVideoById, getRelatedVideos } from '../api'
import { WatchVideo } from '../types/video.types'

const Watch = () => {
  const { videoId } = useParams()
  const { isLoading: isLoadingVideo, data } = useQuery({
    queryKey: ['video', videoId],
    queryFn: () => getVideoById(videoId as string),
    refetchOnWindowFocus: false,
  })

  const { isLoading: isLoadingRelatedVideos, data: relatedVideos } = useQuery({
    queryKey: ['related-videos'],
    queryFn: () => getRelatedVideos(videoId as string),
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <MetaData title='Photoshop for beginners' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <section className='flex flex-col lg:flex-row gap-7 overflow-auto scrollbar-hide h-auto max-h-full max-w-[1280px] pt-0 md:pt-3 mx-auto'>
          <div className='w-full lg:w-[calc(100%-428px)]'>
            <div className='relative overflow-hidden pt-[56.25%] mb-3'>
              {!isLoadingVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&autoHide=0`}
                  frameBorder='0'
                  title={data?.data.items[0].snippet.title}
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
            {isLoadingVideo ? (
              <VideoDetailsSkeleton />
            ) : (
              <VideoDetails videoDetails={data?.data.items[0] as WatchVideo} />
            )}
            <CommentsList />
          </div>
          <div className='w-full lg:w-[400px]'>
            <h2 className='heading-md mb-3'>Up Next</h2>
            {isLoadingRelatedVideos
              ? [...Array(20)].map((i) => <WatchVideoCardSkeleton key={i} />)
              : relatedVideos?.data.items.map((item) => {
                  const video = item as WatchVideo
                  return <WatchVideoCard key={video.id.videoId} video={video} />
                })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Watch
