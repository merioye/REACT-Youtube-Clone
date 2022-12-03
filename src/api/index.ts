import axios from 'axios'

import {
  ChannelDetailsResponse,
  ChannelIconResponse,
  ChannelVideosResponse,
  HomePageVideosResponse,
  SubscriptionPageResponse,
  VideoCommentsResponse,
  VideoRatingResponse,
  WatchVideoResponse,
} from '../types/apiResponse.types'
import { store } from '../redux/store'
import { VideoDetails } from '../types/video.types'
import { NewComment } from '../types/comment.types'
import { AddSubscription } from '../types/channel.types'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
})

// Queries

export const getPopularVideos = ({ pageParam = null }) => {
  return axiosInstance.get<HomePageVideosResponse>('/videos', {
    params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      regionCode: 'PK',
      maxResults: 20,
      pageToken: pageParam,
    },
  })
}

// export const getVideosByCategory = ({ pageParam = null, keyword = '' }) => {
//   return axiosInstance.get('/search', {
//     params: {
//       part: 'snippet',
//       maxResults: 20,
//       pageToken: pageParam,
//       q: keyword,
//       type: 'video',
//     },
//   })
// }

export const getMyLikedVideos = ({ pageParam = null }) => {
  return axiosInstance.get<HomePageVideosResponse>('/videos', {
    params: {
      part: 'snippet,contentDetails,statistics',
      maxResults: 20,
      pageToken: pageParam,
      myRating: 'like',
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const getRelatedVideos = (videoId: string) => {
  return axiosInstance.get<WatchVideoResponse>('/search', {
    params: {
      part: 'snippet',
      relatedToVideoId: videoId,
      maxResults: 15,
      type: 'video',
    },
  })
}

export const getSearchResults = ({ pageParam = null, keyword = '' }) => {
  return axiosInstance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 20,
      pageToken: pageParam,
      q: keyword,
      type: 'video,channel',
    },
  })
}

export const getChannelIcon = (channelId: string) => {
  return axiosInstance.get<ChannelIconResponse>('/channels', {
    params: {
      part: 'snippet',
      id: channelId,
    },
  })
}

export const getVideoDetails = (videoId: string) => {
  return axiosInstance.get<VideoDetails>('/videos', {
    params: {
      part: 'contentDetails,statistics',
      id: videoId,
    },
  })
}

export const getVideoById = (videoId: string) => {
  return axiosInstance.get<WatchVideoResponse>('/videos', {
    params: {
      part: 'snippet,statistics',
      id: videoId,
    },
  })
}

export const getChannelDetails = (channelId: string) => {
  return axiosInstance.get<ChannelDetailsResponse>('/channels', {
    params: {
      part: 'snippet,statistics,contentDetails',
      id: channelId,
    },
  })
}

export const getChannelUploadPlaylistVideos = ({
  pageParam = null,
  uploadPlaylistId = '',
}: {
  pageParam: any
  uploadPlaylistId: string | undefined
}) => {
  return axiosInstance.get<ChannelVideosResponse>('/playlistItems', {
    params: {
      part: 'snippet,contentDetails',
      playlistId: uploadPlaylistId,
      maxResults: 20,
      pageToken: pageParam,
    },
  })
}

export const getMySubscriptions = ({ pageParam = null }) => {
  return axiosInstance.get<SubscriptionPageResponse>('/subscriptions', {
    params: {
      part: 'snippet,contentDetails',
      mine: true,
      maxResults: 20,
      pageToken: pageParam,
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const checkSubscriptionStatusByChannelId = (channelId: string) => {
  return axiosInstance.get<SubscriptionPageResponse>('/subscriptions', {
    params: {
      part: 'snippet',
      forChannelId: channelId,
      mine: true,
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const getCommentsByVideoId = (videoId: string) => {
  return axiosInstance.get<VideoCommentsResponse>('/commentThreads', {
    params: {
      part: 'snippet',
      videoId,
    },
  })
}

// Mutations

export const addComment = (comment: NewComment) => {
  return axiosInstance.post('/commentThreads', comment, {
    params: {
      part: 'snippet',
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const addSubscription = (subscription: AddSubscription) => {
  return axiosInstance.post('/subscriptions', subscription, {
    params: {
      part: 'snippet',
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const removeSubscription = (channelId: string) => {
  return axiosInstance.delete('/subscriptions', {
    params: {
      id: channelId,
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}

export const getVideoRating = (videoId: string) => {
  return axiosInstance.get<VideoRatingResponse>('/videos/getRating', {
    params: {
      id: videoId,
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}
export const rateVideo = (videoId: string, rating: string) => {
  return axiosInstance.post('/videos/rate', null, {
    params: {
      id: videoId,
      rating,
    },
    headers: {
      Authorization: `Bearer ${store.getState().auth?.accessToken}`,
    },
  })
}
