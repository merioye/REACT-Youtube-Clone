import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useState, useEffect, MouseEvent } from 'react'

import { addSubscription, checkSubscriptionStatusByChannelId, removeSubscription } from '../../api'
import { isAuthenticated } from '../../utils/shared/isAuthenticated.util'
import { addRippleEffect } from '../../utils/shared/addRippleEffect.util'

type IProps = {
  channelId: string
}
const SubscribeButton = ({ channelId }: IProps) => {
  const { isLoading, data } = useQuery({
    queryKey: ['subscription-status', channelId],
    queryFn: () => checkSubscriptionStatusByChannelId(channelId),
    refetchOnWindowFocus: false,
    staleTime: 1200000,
    cacheTime: 1200000,
  })

  const [isSubscribed, setIsSubscribed] = useState(data?.data.items.length !== 0 ? true : false)
  const queryClient = useQueryClient()
  const isAuth = isAuthenticated()

  useEffect(() => {
    setIsSubscribed(data?.data.items.length !== 0 ? true : false)
  }, [data])

  const { mutate, isLoading: isLoadingAddSub } = useMutation({
    mutationFn: addSubscription,
    onError: () => {
      toast.error('Oops! something went wrong')
    },
    onSuccess: () => {
      setIsSubscribed(true)
      queryClient.invalidateQueries({ queryKey: ['subscription-status', channelId] })
      queryClient.invalidateQueries({ queryKey: ['my-subscriptions'] })
    },
  })

  const { mutate: mutate2, isLoading: isLoadingRemSub } = useMutation({
    mutationFn: removeSubscription,
    onError: () => {
      toast.error('Oops! something went wrong')
    },
    onSuccess: () => {
      setIsSubscribed(false)
      queryClient.invalidateQueries({ queryKey: ['subscription-status', channelId] })
      queryClient.invalidateQueries({ queryKey: ['my-subscriptions'] })
    },
  })

  const handleSubscribe = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    mutate({
      snippet: {
        resourceId: {
          kind: 'youtube#channel',
          channelId,
        },
      },
    })
  }

  const handleUnsubscribe = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    mutate2(data?.data.items[0].id as string)
  }
  return isAuth ? (
    isLoading ? (
      <button className='flex-none button' disabled={isLoading}>
        Loading...
      </button>
    ) : isSubscribed ? (
      <button
        className='flex-none button bg-gray-600 text-white hover:bg-gray-500'
        onClick={handleUnsubscribe}
        disabled={isLoadingRemSub}
      >
        Subscribed
      </button>
    ) : (
      <button className='flex-none button' onClick={handleSubscribe} disabled={isLoadingAddSub}>
        Subscribe
      </button>
    )
  ) : (
    <></>
  )
}

export default SubscribeButton
