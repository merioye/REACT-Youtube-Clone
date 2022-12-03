import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import { Subscription } from '../../types/channel.types'
import SubscribeButton from './SubscribeButton'

type IProps = {
  channel: Subscription
}
const ChannelCard = ({ channel }: IProps) => {
  const { contentDetails, snippet } = channel
  const { thumbnails, title, description } = snippet

  const channelId = snippet?.resourceId.channelId || snippet.channelId

  return (
    <div className='flex w-full'>
      <div className='mr-4 max-w-30 min-w-24 md-2:max-w-40 md-2:min-w-36 xm:max-w-[360px] xm:min-w-60'>
        <Link to={`/channel/${channelId}`}>
          <div className='flex justify-center items-center flex-none md-2:w-36 xm:w-60 relative rounded-full overflow-hidden mx-auto'>
            <div className='flex items-center h-[80px] w-[80px] md-2:h-[136px] md-2:w-[136px] rounded-full overflow-hidden'>
              <LazyLoadImage
                src={thumbnails.medium.url}
                alt='channelLogo'
                placeholderSrc={thumbnails.medium.url}
                effect='blur'
                width={'100%'}
              />
            </div>
          </div>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <Link to={`/channel/${channelId}`}>
          <div>
            <h1 className='heading-md overflowed-text2 mb-2'>{title}</h1>

            <p className='para-sm overflowed-text2 mb-1'>
              {numeral(contentDetails.totalItemCount).format('0.a')} videos
            </p>
            <p className='para-sm overflowed-text2'>{description}</p>
          </div>
        </Link>
        <div className='hidden md-2:block'>
          <SubscribeButton channelId={channelId} />
        </div>
      </div>
    </div>
  )
}

export default ChannelCard
