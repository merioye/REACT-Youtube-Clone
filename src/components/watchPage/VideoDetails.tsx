import ReactShowMoreText from 'react-show-more-text'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { AiOutlineLike, AiFillLike, AiFillDislike, AiOutlineDislike } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, MouseEvent } from 'react'
import { toast } from 'react-hot-toast'

import { WatchVideo } from '../../types/video.types'
import { getChannelDetails, getVideoRating, rateVideo } from '../../api'
import { ChannelIconSkeleton } from '../skeletons'
import SubscribeButton from '../shared/SubscribeButton'
import { isAuthenticated } from '../../utils/shared/isAuthenticated.util'
import { addRippleEffect } from '../../utils/shared/addRippleEffect.util'
import { useAppSelector } from '../../hooks/redux-hooks'

type IProps = {
  videoDetails: WatchVideo
}
const VideoDetails = ({ videoDetails }: IProps) => {
  const { snippet, statistics } = videoDetails
  const { title, publishedAt, description, channelTitle, channelId } = snippet
  const { viewCount } = statistics

  const { auth } = useAppSelector((state) => state)
  const [likeCount, setLikeCount] = useState(Number(statistics.likeCount))
  const [rating, setRating] = useState('none')
  const { videoId } = useParams()
  const queryClient = useQueryClient()

  const { isLoading, data } = useQuery(
    ['channel-details', channelId],
    () => getChannelDetails(channelId as string),
    {
      refetchOnWindowFocus: false,
      staleTime: 1200000,
      cacheTime: 1200000,
    },
  )

  useQuery(['video-rating', videoId], () => getVideoRating(videoId as string), {
    refetchOnWindowFocus: false,
    onSuccess(data) {
      const myRating = data.data.items[0].rating
      setRating(myRating)
    },
    enabled: auth?.user ? true : false,
    staleTime: 1200000,
    cacheTime: 1200000,
  })

  const { mutate: like } = useMutation({
    mutationFn: () => rateVideo(videoId as string, 'like'),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['video-rating', videoId] })
      const previousRating = rating
      setLikeCount((prevCount) => prevCount + 1)
      setRating('like')
      return { previousRating }
    },
    onError: (_, __, context) => {
      setLikeCount((prevCount) => prevCount - 1)
      setRating(context?.previousRating as string)
      toast.error('Oops! something went wrong')
    },
  })

  const { mutate: dislike } = useMutation({
    mutationFn: () => rateVideo(videoId as string, 'dislike'),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['video-rating', videoId] })
      const previousRating = rating
      if (rating === 'like') {
        setLikeCount((prevCount) => prevCount - 1)
      }
      setRating('dislike')
      return { previousRating }
    },
    onError: (_, __, context) => {
      if (context?.previousRating === 'like') {
        setLikeCount((prevCount) => prevCount + 1)
      }
      setRating(context?.previousRating as string)
      toast.error('Oops! something went wrong')
    },
  })

  const { mutate: removeLikeRating } = useMutation({
    mutationFn: () => rateVideo(videoId as string, 'none'),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['video-rating', videoId] })
      const previousRating = rating
      setRating('none')
      setLikeCount((prevCount) => prevCount - 1)
      return { previousRating }
    },
    onError: (_, __, context) => {
      setRating(context?.previousRating as string)
      setLikeCount((prevCount) => prevCount + 1)
      toast.error('Oops! something went wrong')
    },
  })

  const { mutate: removeDislikeRating } = useMutation({
    mutationFn: () => rateVideo(videoId as string, 'none'),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['video-rating', videoId] })
      const previousRating = rating
      setRating('none')
      return { previousRating }
    },
    onError: (_, __, context) => {
      setRating(context?.previousRating as string)
      toast.error('Oops! something went wrong')
    },
  })

  const handleLike = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    const isAuth = isAuthenticated()
    if (!isAuth) {
      toast.error('You must be logged in to like this video')
      return
    }
    if (rating === 'like') {
      removeLikeRating()
    } else {
      like()
    }
  }

  const handleDislike = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    const isAuth = isAuthenticated()
    if (!isAuth) {
      toast.error('You must be logged in to like this video')
      return
    }
    if (rating === 'dislike') {
      removeDislikeRating()
    } else {
      dislike()
    }
  }

  return (
    <>
      <h1 className='heading-xm overflowed-text2'>{title}</h1>
      <div className='flex items-center justify-between mt-3'>
        <p className='para-regular'>
          {numeral(viewCount).format('0.a')} views&nbsp;
          <span className='hidden sm:inline'>- {moment(publishedAt).fromNow()}</span>
        </p>
        <div className='iconBtn-bg flex rounded-full overflow-hidden'>
          <button
            onClick={handleLike}
            className='heading-sm flex  items-center gap-2 py-2 px-[12px] border-r-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'
          >
            {rating === 'like' ? (
              <AiFillLike className='h-6 w-6 text-primary dark:text-primary-dark' />
            ) : (
              <AiOutlineLike className='h-6 w-6 text-primary dark:text-primary-dark' />
            )}
            {numeral(likeCount).format('0.a')}
          </button>
          <button
            onClick={handleDislike}
            className='flex items-center gap-2 py-2 px-[12px] border-l-1 border-soft dark:border-soft-dark hover:hover-color transition-all duration-300'
          >
            {rating === 'dislike' ? (
              <AiFillDislike className='h-6 w-6 text-primary dark:text-primary-dark' />
            ) : (
              <AiOutlineDislike className='h-6 w-6 text-primary dark:text-primary-dark' />
            )}
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
        <SubscribeButton channelId={channelId} />
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
