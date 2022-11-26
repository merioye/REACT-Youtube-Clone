import { Video } from './video.types'
import { Subscription } from './channel.types'
import { SearchItem } from './search.types'

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
