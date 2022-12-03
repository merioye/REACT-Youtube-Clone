import { ChannelVideo, Video, WatchVideo } from './video.types'
import { Channel, Subscription } from './channel.types'
import { SearchItem } from './search.types'
import { CommentThread } from './comment.types'

export interface HomePageVideosResponse {
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Video[]
}

interface ChannelIconResponseItem {
  kind: string
  etag: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl?: string
    publishedAt: Date
    thumbnails: {
      default: {
        url: string
        height: number
        width: number
      }
      medium: {
        url: string
        height: number
        width: number
      }
      high: {
        url: string
        height: number
        width: number
      }
    }
    defaultLanguage?: string
    localized: {
      title: string
      description: string
    }
    country: string
  }
}
export interface ChannelIconResponse {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: ChannelIconResponseItem[]
}

export interface SubscriptionPageResponse {
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Subscription[]
}

export interface SearchPageResponse {
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: SearchItem[]
}

export interface ChannelDetailsResponse {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Channel[]
}

export interface ChannelVideosResponse {
  kind: string
  etag: string
  nextPageToken: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: ChannelVideo[]
}

export interface WatchVideoResponse {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  regionCode?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: WatchVideo[]
}

export interface VideoCommentsResponse {
  kind: string
  etag: string
  nextPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: CommentThread[]
}

export interface VideoRatingResponse {
  kind: string
  etag: string
  items: [
    {
      videoId: string
      rating: string
    },
  ]
}
