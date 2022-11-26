import axios from 'axios'

import {
  ChannelIconResponse,
  HomePageVideosResponse,
  SubscriptionPageResponse,
} from '../types/apiResponse.types'
import { store } from '../redux/store'
import { VideoDetails } from '../types/video.types'

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
})

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

export const getVideosByCategory = ({ pageParam = null }) => {
  return axiosInstance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 20,
      pageToken: pageParam,
      // q: category,
      type: 'video',
    },
  })
}

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

export const getChannelDetails = (channelId: string) => {
  return axiosInstance.get('/channels', {
    params: {
      part: 'snippet,statistics,contentDetails',
      id: channelId,
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
