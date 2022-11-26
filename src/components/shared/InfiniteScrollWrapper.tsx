import { InfiniteData } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import InfiniteScroll from 'react-infinite-scroller'
import { Fragment } from 'react'

import {
  HomePageVideosResponse,
  SearchPageResponse,
  SubscriptionPageResponse,
} from '../../types/apiResponse.types'
import { Video } from '../../types/video.types'
import { Subscription } from '../../types/channel.types'
import { SearchItem } from '../../types/search.types'
import {
  VideoCardSkeleton,
  SearchedVideoCardSkeleton,
  ChannelCardSkeleton,
} from '../skeletons/index'
import VideoCard from '../shared/VideoCard'
import ChannelCard from '../shared/ChannelCard'
import SearchedVideoCard from '../searchPage/SearchedVideoCard'
import SearchedChannelCard from '../searchPage/SearchedChannelCard'

type DataType =
  | InfiniteData<
      AxiosResponse<HomePageVideosResponse | SubscriptionPageResponse | SearchPageResponse, any>
    >
  | undefined

type IProps = {
  isLoading: boolean
  hasMore: boolean
  loadMore: () => void
  type: 'smallVideo' | 'largeVideo' | 'channel'
  data: DataType
  wrapperClasses: string
  infiniteClasses: string
}
const InfiniteScrollWrapper = ({
  isLoading,
  wrapperClasses,
  infiniteClasses,
  hasMore,
  loadMore,
  type,
  data,
}: IProps) => {
  return isLoading ? (
    <div className={`${infiniteClasses} ${wrapperClasses}`}>
      {[...Array(20)].map((_, i) =>
        type === 'channel' ? (
          <Fragment key={i}>
            <ChannelCardSkeleton />
            <hr className='hr my-4' />
          </Fragment>
        ) : type === 'smallVideo' ? (
          <VideoCardSkeleton key={i} />
        ) : (
          <Fragment key={i}>
            <SearchedVideoCardSkeleton />
            <hr className='hr my-4' />
          </Fragment>
        ),
      )}
    </div>
  ) : (
    <div className={wrapperClasses}>
      <InfiniteScroll
        hasMore={hasMore}
        loadMore={loadMore}
        className={infiniteClasses}
        useWindow={false}
        loader={
          <>
            {[...Array(4)].map((_, i) =>
              type === 'channel' ? (
                <Fragment key={i}>
                  <ChannelCardSkeleton />
                  <hr className='hr my-4' />
                </Fragment>
              ) : type === 'smallVideo' ? (
                <VideoCardSkeleton key={i} />
              ) : (
                <Fragment key={i}>
                  <SearchedVideoCardSkeleton />
                  <hr className='hr my-4' />
                </Fragment>
              ),
            )}
          </>
        }
      >
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {type === 'channel'
              ? group.data.items.map((item) => {
                  const channel = item as Subscription
                  return (
                    <Fragment key={channel.id}>
                      <ChannelCard key={channel.id} channel={channel} />
                      <hr className='hr my-4' />
                    </Fragment>
                  )
                })
              : type === 'smallVideo'
              ? group.data.items.map((item) => {
                  const video = item as Video
                  return <VideoCard key={video.id} video={video} />
                })
              : group.data.items.map((searchResult) => {
                  const item = searchResult as SearchItem
                  const isChannel = item.id.kind === 'youtube#channel'
                  return (
                    <Fragment key={item.id?.videoId || item.id?.channelId}>
                      {isChannel ? (
                        <SearchedChannelCard channel={item} />
                      ) : (
                        <SearchedVideoCard video={item} />
                      )}
                      <hr className='hr my-4' />
                    </Fragment>
                  )
                })}
          </Fragment>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollWrapper
