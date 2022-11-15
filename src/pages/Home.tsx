import CategoriesList from '../components/Home/CategoriesList'
import VideoCard from '../components/shared/VideoCard'
import MetaData from '../components/shared/MetaData'
// import { VideoCardSkeleton } from '../components/skeletons'

const Home = () => {
  return (
    <>
      <MetaData title='Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <CategoriesList />
        <section className='grid grid-cols-4 gap-x-4 gap-y-10 overflow-auto scrollbar-hide h-auto max-h-[calc(100%-44px)] pt-0 md:pt-3 xm:pt-6'>
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
          {/* <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton />
          <VideoCardSkeleton /> */}
        </section>
      </main>
    </>
  )
}

export default Home
