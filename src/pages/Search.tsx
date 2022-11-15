import SearchedVideoCard from '../components/others/SearchedVideoCard'
import ChannelCard from '../components/shared/ChannelCard'
import MetaData from '../components/shared/MetaData'
// import { SearchedVideoCardSkeleton } from '../components/skeletons'

const Search = () => {
  return (
    <>
      <MetaData title='Searched text - Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <section className='flex flex-col max-w-[1280px] overflow-auto scrollbar-hide h-auto max-h-full  pt-0 md:pt-3 xm:pt-6'>
          <ChannelCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          {/* <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' />
          <SearchedVideoCard />
          <hr className='hr my-4' />
          <SearchedVideoCardSkeleton />
          <hr className='hr my-4' /> */}
        </section>
      </main>
    </>
  )
}

export default Search
