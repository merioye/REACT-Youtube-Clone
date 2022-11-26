import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

import { Subscription } from '../../types/channel.types'

type IProps = {
  channel: Subscription
}
const ChannelCard = ({ channel }: IProps) => {
  const { contentDetails, snippet } = channel
  const { thumbnails, title, description } = snippet

  const channelId = snippet?.resourceId.channelId || snippet.channelId

  return (
    <div className='flex w-full'>
      <div className='mr-4 max-w-[360px] min-w-60'>
        <Link to={`/channel/${channelId}`}>
          <div className='flex justify-center items-center flex-none w-60 relative rounded-full overflow-hidden mx-auto'>
            <div className='flex items-center h-[136px] w-[136px] rounded-full overflow-hidden'>
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
        <button className='flex-none button'>Subscribe</button>
      </div>
    </div>
  )
}

export default ChannelCard
