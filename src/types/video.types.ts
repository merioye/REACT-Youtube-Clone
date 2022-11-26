export interface Video {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: Date
    channelId: string
    title: string
    description: string
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
      standard: {
        url: string
        height: number
        width: number
      }
      maxRes: {
        url: string
        height: number
        width: number
      }
    }
    channelTitle: string
    tags?: string[]
    categoryId: string
    liveBroadcastContent: string
    defaultLanguage?: string
    localized: {
      title: string
      description: string
    }
    defaultAudioLanguage?: string
  }
  contentDetails: {
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    regionRestriction?: {
      allowed: string[]
      blocked: string[]
    }
    contentRating: object
    projection: string
    hasCustomThumbnail?: boolean
  }
  statistics: {
    viewCount: string
    likeCount: string
    dislikeCount?: string
    favoriteCount: string
    commentCount: string
  }
}

type VideoDetail = Omit<Video, 'snippet'>

export interface VideoDetails {
  kind: string
  etag: string
  nextPageToken?: string
  prevPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: VideoDetail[]
}
