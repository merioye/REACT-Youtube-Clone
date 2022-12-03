import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useNavigate } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'

import { ChannelVideo } from '../../types/video.types'
import { calculateVideoDuration } from '../../utils/shared/calculateVideoDuration.util'
import { getChannelIcon, getVideoDetails } from '../../api'
import { ChannelIconSkeleton, VideoCardSkeleton } from '../skeletons'

type IProps = {
  video: ChannelVideo
}
const ChannelVideoCard = ({ video }: IProps) => {
  const { snippet, contentDetails, id } = video
  const { channelId, channelTitle, thumbnails, title, publishedAt } = snippet

  const videoId = snippet.resourceId.videoId || id || contentDetails.videoId

  const { isLoading: isLoadingDetails, data } = useQuery({
    queryKey: ['videoDetails', contentDetails.videoId],
    queryFn: () => getVideoDetails(contentDetails.videoId),
    refetchOnWindowFocus: false,
    staleTime: 1200000,
    cacheTime: 1200000,
  })

  const { isLoading: isLoadingChannelIcon, data: channelData } = useQuery({
    queryKey: ['channelIcon', channelId],
    queryFn: () => getChannelIcon(channelId),
    refetchOnWindowFocus: false,
    staleTime: 1200000,
    cacheTime: 1200000,
  })

  const navigate = useNavigate()

  const redirectToChannel = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault()
    navigate(`/channel/${channelId}`)
  }

  return isLoadingDetails ? (
    <VideoCardSkeleton />
  ) : (
    <Link to={`/watch/${videoId}`}>
      <div>
        <div className='rounded-xl flex overflow-hidden relative mb-2'>
          <LazyLoadImage
            src={thumbnails.medium.url}
            alt='thumbnail'
            placeholderSrc={thumbnails.medium.url}
            effect='blur'
            width={'100%'}
            style={{ backgroundSize: 'cover' }}
          />
          <div className='absolute right-0 bottom-0 m-1 rounded flex items-center text-xs px-1 font-sans bg-black text-white'>
            {calculateVideoDuration(data?.data.items[0].contentDetails.duration as string)}
          </div>
        </div>
        <div className='flex gap-3 pt-3'>
          <div className='flex'>
            {isLoadingChannelIcon ? (
              <div className='leading-none w-9 h-9'>
                <ChannelIconSkeleton />
              </div>
            ) : (
              <LazyLoadImage
                src={channelData?.data.items[0].snippet.thumbnails.medium.url}
                alt='channelLogo'
                placeholderSrc={channelData?.data.items[0].snippet.thumbnails.medium.url}
                effect='blur'
                width='36px'
                height='36px'
                style={{ borderRadius: '50%' }}
                onClick={redirectToChannel}
              />
            )}
          </div>
          <div id='id'>
            <h4 className='heading-sm max-h-11 overflowed-text2 mb-1'>{title}</h4>
            <p
              className='para-sm mt-2 hover:text-black dark:hover:text-white'
              onClick={redirectToChannel}
            >
              {channelTitle}
            </p>
            <div className='flex gap-2 items-center'>
              <p className='para-sm'>
                {numeral(data?.data.items[0].statistics.viewCount).format('0.a')} views
              </p>
              <p className='para-sm'>{moment(publishedAt).fromNow()}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ChannelVideoCard
