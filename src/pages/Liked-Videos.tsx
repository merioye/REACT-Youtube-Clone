import VideoCard from '../components/shared/VideoCard'
import MetaData from '../components/shared/MetaData'

const LikedVideos = () => {
  return (
    <>
      <MetaData title='Liked videos - Youtube Redesign' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <section className='grid grid-cols-4 gap-x-4 gap-y-10 overflow-auto scrollbar-hide h-auto max-h-full pt-0 md:pt-3 xm:pt-6'>
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
        </section>
      </main>
    </>
  )
}

export default LikedVideos
