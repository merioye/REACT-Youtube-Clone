export interface Channel {
  kind: string
  etag: string
  id: string
  snippet: {
    title: string
    description: string
    customUrl: string
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
  contentDetails: {
    relatedPlaylists: {
      likes: string
      favorites: string
      uploads: string
    }
  }
  statistics: {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
  }
}

export interface Subscription {
  kind: string
  etag: string
  id: string
  snippet: {
    publishedAt: Date
    channelTitle?: string
    title: string
    description: string
    resourceId: {
      kind: string
      channelId: string
    }
    channelId: string
    thumbnails: {
      default: {
        url: string
        height?: number
        width?: number
      }
      medium: {
        url: string
        height?: number
        width?: number
      }
      high: {
        url: string
        height?: number
        width?: number
      }
    }
  }
  contentDetails: {
    totalItemCount: number
    newItemCount: number
    activityType: string
  }
}

export interface AddSubscription {
  snippet: {
    resourceId: {
      kind: string
      channelId: string
    }
  }
}
