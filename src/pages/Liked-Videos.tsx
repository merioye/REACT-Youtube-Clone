import MetaData from '../components/shared/MetaData'
import InfiniteScrollWrapper from '../components/shared/InfiniteScrollWrapper'
import { useInfiniteData } from '../hooks/useInfiniteData'
import { getMyLikedVideos } from '../api'

const LikedVideos = () => {
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteData(
    ['liked-videos'],
    getMyLikedVideos,
  )

  const fetchMoreVideos = () => {
    fetchNextPage()
  }
  return (
    <>
      <MetaData title='Liked videos - Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 sm:py-3 py-1'>
        <InfiniteScrollWrapper
          isLoading={isLoading}
          hasMore={hasNextPage as boolean}
          loadMore={fetchMoreVideos}
          type='smallVideo'
          data={data}
          wrapperClasses='overflow-auto scrollbar-hide h-[calc(100%-44px)] pt-0 md:pt-3 xm:pt-6'
          infiniteClasses='grid grid-cols-1 md:grid-cols-2 xm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10'
        />
      </main>
    </>
  )
}

export default LikedVideos
