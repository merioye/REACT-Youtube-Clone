import { useState } from 'react'

import CategoriesList from '../components/Home/CategoriesList'
import MetaData from '../components/shared/MetaData'
import InfiniteScrollWrapper from '../components/shared/InfiniteScrollWrapper'
import { getPopularVideos } from '../api'
import { useInfiniteData } from '../hooks/useInfiniteData'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const { isLoading, data, hasNextPage, fetchNextPage } = useInfiniteData(
    ['home-videos'],
    getPopularVideos,
  )

  const fetchMoreVideos = () => {
    fetchNextPage()
  }
  return (
    <>
      <MetaData title='Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <CategoriesList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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

export default Home
