import ReactShowMoreText from 'react-show-more-text'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const VideoDetails = () => {
  return (
    <>
      <h1 className='heading-xm overflowed-text2'>
        ReactJs Interview | 🎉 Selected First Round | ReactJs & JavaScript | Experienced | Small
        Company
      </h1>
      <div className='flex items-center justify-between mt-3'>
        <p className='para-regular'>254.2k views&nbsp; - 12 days ago</p>
        <div className='iconBtn-bg flex rounded-full overflow-hidden'>
          <button className='heading-sm flex items-center gap-2 py-2 px-[12px] border-r-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'>
            <AiOutlineLike className='h-6 w-6 text-primary dark:text-primary-dark' /> 2.2k
          </button>
          <button className='flex items-center gap-2 py-2 px-[12px] border-l-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'>
            <AiOutlineDislike className='h-6 w-6 text-primary dark:text-primary-dark' />
          </button>
        </div>
      </div>
      <hr className='hr my-3' />
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Link to='#'>
            <div className='flex items-center h-10 w-10 mr-3 rounded-full overflow-hidden'>
              <LazyLoadImage
                src='/images/man.svg'
                alt='channelLogo'
                placeholderSrc='/images/man.svg'
                effect='blur'
                width={'100%'}
                style={{ backgroundSize: 'cover' }}
              />
            </div>
          </Link>
          <div>
            <Link to='#'>
              <h2 className='para-lg font-medium'>React JS Interview</h2>
            </Link>
            <p className='para-sm'>2500 subscribers</p>
          </div>
        </div>
        <button className='button'>Subscribe</button>
      </div>
      <hr className='hr my-3' />
      <ReactShowMoreText
        className='para-regular iconBtn-bg rounded-xl p-3 '
        anchorClass='no-underline cursor-pointer block mt-5 font-semibold'
        // keepNewLines={true}
      >
        ReactJs Interview | 🎉 Selected First Round | ReactJs & JavaScript | Experienced #reactJs
        #interview JS Questions asked in this interview are: 1). What is hoisting in JS? 2). How it
        works? 3). Does hoisting work with all the variables, and Why? 4). Diff. b/w let and var?
        5). What is Event Loop? 6). What is the precedence in Event Loop? ( between Promise() and
        setTimeout() ) 7). What is the Diff. b/ setTimeout() & setInterval()? 8). What are the ES6
        features you have used? 9). Where do you mostly use Rest Operator? Frontend Interview
        ReactJs Interview React/Redux Coding Interview react interview questions,react
        interview,react js,react interview questions and answers,reactjs interview,reactjs interview
        questions,react js interview questions,javascript interview questions,react redux interview
        questions,javascript interview,react js interview questions and answers for
        experienced,interview,react,react js interview questions and answers,infosys interview,react
        native interview questions,tcs interview
      </ReactShowMoreText>
    </>
  )
}

export default VideoDetails
