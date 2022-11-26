import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

import InfiniteScrollWrapper from '../components/shared/InfiniteScrollWrapper'
import MetaData from '../components/shared/MetaData'
import { useInfiniteData } from '../hooks/useInfiniteData'
import { getSearchResults } from '../api'

const Search = () => {
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('q') || ''

  const { isLoading, data, hasNextPage, fetchNextPage, refetch, isRefetching } = useInfiniteData(
    ['search-results'],
    getSearchResults,
    keyword,
    '0',
  )

  // useEffect(() => {
  //   refetch()
  // }, [keyword, refetch])

  const fetchMoreResults = () => {
    fetchNextPage()
  }
  return (
    <>
      <MetaData title='Searched text - Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <InfiniteScrollWrapper
          isLoading={isRefetching}
          hasMore={hasNextPage as boolean}
          loadMore={fetchMoreResults}
          type='largeVideo'
          data={data}
          wrapperClasses='flex flex-col max-w-[1280px] overflow-auto scrollbar-hide h-auto max-h-full  pt-0 md:pt-3 xm:pt-6'
          infiniteClasses=''
        />
      </main>
    </>
  )
}

export default Search
