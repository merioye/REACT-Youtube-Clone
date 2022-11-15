import MetaData from '../components/shared/MetaData'

const Watch = () => {
  return (
    <>
      <MetaData title='Photoshop for beginners' />
      <main className='bg w-full h-full px-3 md:px-8 py-3'>
        <section className='flex gap-3 overflow-auto scrollbar-hide h-auto max-h-full pt-0 md:pt-3 xm:pt-6'>
          <div className='w-[calc(100%-300px)]'>
            <video src='/images/vid.mp4' controls />
          </div>
          <div className='w-[300px]'></div>
        </section>
      </main>
    </>
  )
}

export default Watch
