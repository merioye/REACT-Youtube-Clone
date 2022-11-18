import { LazyLoadImage } from 'react-lazy-load-image-component'

const Comment = () => {
  return (
    <div className='flex gap-5'>
      <div className='flex items-center h-10 w-10 rounded-full overflow-hidden'>
        <LazyLoadImage
          src='/images/man.svg'
          alt='avatar'
          placeholderSrc='/images/man.svg'
          effect='blur'
          width={'100%'}
          style={{ backgroundSize: 'cover' }}
        />
      </div>
      <div className='flex flex-col w-[calc(100%-60px)]'>
        <div className='flex items-center mb-1'>
          <p className='para-regular font-medium mr-1'>Faheem Hassan</p>
          <p className='para-sm'>1 year ago</p>
        </div>
        <p className='para-regular'>
          This is an excellent tutorial series. I have been having a tough time getting webpack to
          work on an existing react typescript project. This has been more helpful than all the
          other resources I have tried. I will definitely check out more of your work.
        </p>
      </div>
    </div>
  )
}

export default Comment
