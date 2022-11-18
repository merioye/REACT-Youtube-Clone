import { LazyLoadImage } from 'react-lazy-load-image-component'
// import { CommentSkeleton } from '../skeletons'
import Comment from './Comment'

const CommentsList = () => {
  return (
    <>
      <h2 className='heading-sm mt-6'>13 Comments</h2>
      <div className='flex gap-5 mt-5'>
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
          <input
            type='text'
            placeholder='Add a comment...'
            className='bg para-regular font-normal outline-none w-full border-b-1 focus:border-b-2  border-soft dark:border-soft-dark focus:border-black focus:dark:border-white mb-2 pb-1 transition-all duration-300'
          />
          <div className='w-full flex justify-end'>
            <button className='button bg-blue-600 hover:bg-blue-700 mt-1'>Comment</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-8'>
        {[1, 2, 3, 4, 5].map((comment) => (
          <Comment key={comment} />
          // <CommentSkeleton key={comment} />
        ))}
      </div>
    </>
  )
}

export default CommentsList
