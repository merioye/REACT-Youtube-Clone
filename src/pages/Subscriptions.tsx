import MetaData from '../components/shared/MetaData'
import InfiniteScrollWrapper from '../components/shared/InfiniteScrollWrapper'
import { useInfiniteData } from '../hooks/useInfiniteData'
import { getMySubscriptions } from '../api'

const Subscriptions = () => {
  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteData(
    ['my-subscriptions'],
    getMySubscriptions,
  )

  const fetchMoreSubscriptions = () => {
    fetchNextPage()
  }
  return (
    <>
      <MetaData title='Subscriptions - Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 sm:py-3 py-1'>
        <InfiniteScrollWrapper
          isLoading={isLoading}
          hasMore={hasNextPage as boolean}
          loadMore={fetchMoreSubscriptions}
          type='channel'
          data={data}
          wrapperClasses='flex flex-col max-w-[1280px] overflow-auto scrollbar-hide h-auto max-h-full  pt-0 md:pt-3 xm:pt-6'
          infiniteClasses=''
        />
      </main>
    </>
  )
}

export default Subscriptions
