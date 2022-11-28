import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import numeral from 'numeral'

import MetaData from '../components/shared/MetaData'
import { getChannelDetails, getChannelUploadPlaylistVideos } from '../api'
import { ChannelDetailsSkeleton } from '../components/skeletons'
import InfiniteScrollWrapper from '../components/shared/InfiniteScrollWrapper'

const Channel = () => {
  const { channelId } = useParams()
  const { isLoading: isLoadingChannel, data: channel } = useQuery(
    ['channel-details', channelId],
    () => getChannelDetails(channelId as string),
    {
      refetchOnWindowFocus: false,
    },
  )

  const { data, hasNextPage, fetchNextPage, isRefetching } = useInfiniteQuery({
    queryKey: ['channel-videos', channelId],
    queryFn: ({ pageParam = null }) =>
      getChannelUploadPlaylistVideos({
        pageParam,
        uploadPlaylistId: channel?.data.items[0].contentDetails.relatedPlaylists.uploads,
      }),
    getNextPageParam: (lastPage) => {
      return lastPage.data.nextPageToken
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: 0,
    enabled: !isLoadingChannel,
  })

  const fetchMoreVideos = () => {
    fetchNextPage()
  }
  return (
    <div className='bg w-full h-auto max-h-full overflow-auto scrollbar-hide pb-3'>
      <MetaData title='Technical Guruji - Youtube Redesign' />
      <div className='w-full'>
        <LazyLoadImage
          src='/images/channel-banner.jpg'
          alt='channelBanner'
          placeholderSrc='/images/channel-banner.jpg'
          effect='blur'
          width={'100%'}
        />
      </div>
      {isLoadingChannel ? (
        <ChannelDetailsSkeleton />
      ) : (
        <div className='flex items-center pt-4 pb-1 px-[107px] max-w-[1284px] mx-auto'>
          <div className='flex flex-none items-center w-20 h-20 rounded-full overflow-hidden mr-6'>
            <LazyLoadImage
              src={channel?.data.items[0].snippet.thumbnails.medium.url}
              alt='channelLogo'
              placeholderSrc={channel?.data.items[0].snippet.thumbnails.medium.url}
              effect='blur'
              width={'100%'}
            />
          </div>
          <div className='flex items-center flex-1'>
            <div className='flex-1 min-w-[150px] max-h-[90px] overflow-hidden'>
              <h2 style={{ fontWeight: 400 }} className='heading-lg max-w-full overflow-hidden'>
                {channel?.data.items[0].snippet.title}
              </h2>
              <p className='font-sans font-normal text-xs md:text-sm text-secondary dark:text-secondary-dark'>
                {numeral(channel?.data.items[0].statistics.subscriberCount).format('0.a')}{' '}
                subscribers
              </p>
            </div>
            <button className='flex-none button'>Subscribe</button>
          </div>
        </div>
      )}
      <hr className='hr my-4' />
      <InfiniteScrollWrapper
        isLoading={isRefetching}
        hasMore={hasNextPage as boolean}
        loadMore={fetchMoreVideos}
        type='channelVideo'
        data={data}
        wrapperClasses=''
        infiniteClasses='grid grid-cols-3 gap-x-4 gap-y-10 px-[107px] max-w-[1284px] mx-auto'
      />
    </div>
  )
}

export default Channel
