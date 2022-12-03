import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import parse from 'html-react-parser'

import { CommentThread } from '../../types/comment.types'

type IProps = {
  commentThread: CommentThread
}
const Comment = ({ commentThread }: IProps) => {
  const { authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay } =
    commentThread.snippet.topLevelComment.snippet

  return (
    <div className='flex gap-5'>
      <div className='flex items-center h-10 w-10 rounded-full overflow-hidden'>
        <LazyLoadImage
          src={authorProfileImageUrl}
          alt='avatar'
          placeholderSrc={authorProfileImageUrl}
          effect='blur'
          width={'100%'}
          style={{ backgroundSize: 'cover' }}
        />
      </div>
      <div className='flex flex-col w-[calc(100%-60px)]'>
        <div className='flex items-center mb-1'>
          <p className='para-regular font-medium mr-1'>{authorDisplayName}</p>
          <p className='para-sm'>{moment(publishedAt).fromNow()}</p>
        </div>
        <p className='para-regular'>{parse(textDisplay)}</p>
      </div>
    </div>
  )
}

export default Comment
