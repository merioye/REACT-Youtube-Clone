import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useNavigate } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'

import { WatchVideo } from '../../types/video.types'
import { calculateVideoDuration } from '../../utils/shared/calculateVideoDuration.util'
import { getVideoDetails } from '../../api'

type IProps = {
  video: WatchVideo
}
const WatchVideoCard = ({ video }: IProps) => {
  const { snippet, id } = video
  const { title, thumbnails, channelId, channelTitle, publishedAt } = snippet

  const { data } = useQuery({
    queryKey: ['videoDetails', id.videoId],
    queryFn: () => getVideoDetails(id.videoId),
    refetchOnWindowFocus: false,
  })

  const navigate = useNavigate()

  const redirectToChannel = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault()
    navigate(`/channel/${channelId}`)
  }
  return (
    <Link to={`/watch/${id.videoId}`}>
      <div className='flex gap-3 mt-2'>
        <div className='flex items-center rounded-md overflow-hidden w-1/2 lg:w-[180px] relative'>
          <LazyLoadImage
            src={thumbnails.medium.url}
            alt='thumbnail'
            placeholderSrc={thumbnails.medium.url}
            effect='blur'
            width={'100%'}
            style={{ objectFit: 'cover' }}
          />
          <div className='absolute right-0 bottom-0 m-1 rounded flex items-center text-xs px-1 font-sans bg-black text-white'>
            {calculateVideoDuration(data?.data.items[0].contentDetails.duration as string)}
          </div>
        </div>
        <div className='w-1/2 lg:w-[208px]'>
          <h4 className='para-regular font-medium max-h-11 overflowed-text2 mb-1'>{title}</h4>
          <p className='para-sm hover:text-black dark:hover:text-white' onClick={redirectToChannel}>
            {channelTitle}
          </p>
          <p className='para-sm'>
            {' '}
            {numeral(data?.data.items[0].statistics.viewCount).format('0.a')} views &nbsp; -{' '}
            {moment(publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default WatchVideoCard
