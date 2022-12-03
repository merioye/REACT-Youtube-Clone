import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, MouseEvent } from 'react'
import { toast } from 'react-hot-toast'

import { CommentSkeleton } from '../skeletons'
import Comment from './Comment'
import { addComment, getCommentsByVideoId } from '../../api'
import { CommentThread } from '../../types/comment.types'
import { isAuthenticated } from '../../utils/shared/isAuthenticated.util'
import { useAppSelector } from '../../hooks/redux-hooks'
import { VideoCommentsResponse } from '../../types/apiResponse.types'
import { getNewDummyComment } from '../../utils/others/getNewDummyComment.util'
import { addRippleEffect } from '../../utils/shared/addRippleEffect.util'

type oldCommentsResponse = {
  data: VideoCommentsResponse
  request: object
  headers: object
  config: object
  status: number
  statusText: string
}
const CommentsList = () => {
  const { videoId } = useParams()
  const { isLoading, data } = useQuery({
    queryKey: ['comments', videoId],
    queryFn: () => getCommentsByVideoId(videoId as string),
    refetchOnWindowFocus: false,
  })

  const queryClient = useQueryClient()
  const { auth } = useAppSelector((state) => state)
  const [commentText, setCommentText] = useState('')

  const { mutate } = useMutation({
    mutationFn: addComment,
    onMutate: async () => {
      await queryClient.cancelQueries(['comments', videoId])
      const previousComments = queryClient.getQueryData(['comments', videoId])

      queryClient.setQueryData(['comments', videoId], (oldQueryData) => {
        const res = oldQueryData as oldCommentsResponse

        const newComment = getNewDummyComment(
          String(Date.now()),
          auth?.user?.name as string,
          auth?.user?.picture as string,
          commentText,
          new Date(Date.now()),
        )
        return {
          ...res,
          data: {
            ...res.data,
            items: [newComment, ...res.data.items],
          },
        }
      })

      return {
        previousComments,
      }
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(['comments', videoId], context?.previousComments)
    },
  })

  const submitComment = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    const isAuth = isAuthenticated()
    if (!isAuth) {
      toast.error('You must be logged in to make a comment')
      return
    }
    mutate({
      snippet: {
        videoId: videoId as string,
        topLevelComment: {
          snippet: {
            textOriginal: commentText,
          },
        },
      },
    })
    setCommentText('')
  }

  return (
    <>
      <h2 className='heading-sm mt-6'>{isLoading ? '' : data?.data.items.length} Comments</h2>
      <div className='flex gap-5 mt-5'>
        <div className='flex items-center h-10 w-10 rounded-full overflow-hidden'>
          <LazyLoadImage
            src={auth?.user ? auth.user.picture : '/images/man.svg'}
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
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className='bg para-regular font-normal outline-none w-full border-b-1 focus:border-b-2  border-soft dark:border-soft-dark focus:border-black focus:dark:border-white mb-2 pb-1 transition-all duration-300'
          />
          <div className='w-full flex justify-end'>
            <button
              className='button bg-blue-600 hover:bg-blue-700 mt-1'
              disabled={commentText.trim().length === 0 ? true : false}
              onClick={submitComment}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-8'>
        {isLoading
          ? [1, 2, 3, 4, 5].map((comment) => <CommentSkeleton key={comment} />)
          : data?.data.items.map((item) => {
              const commentThread = item as CommentThread
              return <Comment key={commentThread.id} commentThread={commentThread} />
            })}
      </div>
    </>
  )
}

export default CommentsList
