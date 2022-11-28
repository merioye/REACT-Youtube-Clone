import ReactShowMoreText from 'react-show-more-text'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'

import { WatchVideo } from '../../types/video.types'
import { getChannelDetails } from '../../api'
import { ChannelIconSkeleton } from '../skeletons'

type IProps = {
  videoDetails: WatchVideo
}
const VideoDetails = ({ videoDetails }: IProps) => {
  const { snippet, statistics } = videoDetails
  const { title, publishedAt, description, channelTitle, channelId } = snippet
  const { viewCount, likeCount } = statistics

  const { isLoading, data } = useQuery(
    ['channel-details', channelId],
    () => getChannelDetails(channelId as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  return (
    <>
      <h1 className='heading-xm overflowed-text2'>{title}</h1>
      <div className='flex items-center justify-between mt-3'>
        <p className='para-regular'>
          {numeral(viewCount).format('0.a')} views&nbsp; - {moment(publishedAt).fromNow()}
        </p>
        <div className='iconBtn-bg flex rounded-full overflow-hidden'>
          <button className='heading-sm flex items-center gap-2 py-2 px-[12px] border-r-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'>
            <AiOutlineLike className='h-6 w-6 text-primary dark:text-primary-dark' />{' '}
            {numeral(likeCount).format('0.a')}
          </button>
          <button className='flex items-center gap-2 py-2 px-[12px] border-l-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'>
            <AiOutlineDislike className='h-6 w-6 text-primary dark:text-primary-dark' />
          </button>
        </div>
      </div>
      <hr className='hr my-3' />
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          {isLoading ? (
            <div className='leading-none h-10 w-10 mr-3'>
              <ChannelIconSkeleton />
            </div>
          ) : (
            <Link to={`/channel/${channelId}`}>
              <div className='flex items-center h-10 w-10 mr-3 rounded-full overflow-hidden'>
                <LazyLoadImage
                  src={data?.data.items[0].snippet.thumbnails.medium.url}
                  alt='channelLogo'
                  placeholderSrc={data?.data.items[0].snippet.thumbnails.medium.url}
                  effect='blur'
                  width={'100%'}
                  style={{ backgroundSize: 'cover' }}
                />
              </div>
            </Link>
          )}
          <div>
            <Link to={`/channel/${channelId}`}>
              <h2 className='para-lg font-medium'>{channelTitle}</h2>
            </Link>

            <p className='para-sm'>
              {isLoading
                ? ''
                : numeral(data?.data.items[0].statistics.subscriberCount).format('0.a')}{' '}
              subscribers
            </p>
          </div>
        </div>
        <button className='button'>Subscribe</button>
      </div>
      <hr className='hr my-3' />
      <ReactShowMoreText
        className='para-regular iconBtn-bg rounded-xl p-3 '
        anchorClass='no-underline cursor-pointer block mt-5 font-semibold'
        keepNewLines={true}
      >
        {description}
      </ReactShowMoreText>
    </>
  )
}

export default VideoDetails
