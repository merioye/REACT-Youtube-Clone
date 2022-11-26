export interface SearchItem {
  kind: string
  etag: string
  id: {
    kind: string
    videoId?: string
    channelId?: string
  }
  snippet: {
    publishedAt: Date
    publishTime?: Date
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
    }
    channelTitle: string
    liveBroadcastContent: string
  }
}
