const evene = 'eveen'
export default evene

// get video details(video card)
// const {
//     data: { items },
//  } = await request('/videos', {
//     params: {
//        part: 'contentDetails,statistics',
//        id: _videoId,
//     },
//  })

// get channel icona(video card)
//  const {
//     data: { items },
//  } = await request('/channels', {
//     params: {
//        part: 'snippet',
//        id: channelId,
//     },
//  })

// get channel details
// const { data } = await request('/channels', {
//     params: {
//        part: 'snippet,statistics,contentDetails',
//        id,
//     },
//  })

// get my subscription status of particular channel
// const { data } = await request('/subscriptions', {
//     params: {
//        part: 'snippet',
//        forChannelId: id,
//        mine: true,
//     },
//     headers: {
//        Authorization: `Bearer ${getState().auth.accessToken}`,
//     },
//  })

// get comments of video by id
// const { data } = await request('/commentThreads', {
//     params: {
//        part: 'snippet',
//        videoId: id,
//     },
//  })

// add new comment
// await request.post('/commentThreads', obj, {
//     params: {
//        part: 'snippet',
//     },
//     headers: {
//        Authorization: `Bearer ${getState().auth.accessToken}`,
//     },
//  })

// get popular videos(All category)
// const { data } = await request('/videos', {
//     params: {
//        part: 'snippet,contentDetails,statistics',
//        chart: 'mostPopular',
//        regionCode: 'IN',
//        maxResults: 20,
//        pageToken: getState().homeVideos.nextPageToken,
//     },
//  })

// get videos by category
// const { data } = await request('/search', {
//     params: {
//        part: 'snippet',

//        maxResults: 20,
//        pageToken: getState().homeVideos.nextPageToken,
//        q: keyword,
//        type: 'video',
//     },
//  })

// get video by id(watch page)
// const { data } = await request('/videos', {
//     params: {
//        part: 'snippet,statistics',
//        id: id,
//     },
//  })

// get related videos(watch page)
// const { data } = await request('/search', {
//     params: {
//        part: 'snippet',
//        relatedToVideoId: id,
//        maxResults: 15,
//        type: 'video',
//     },
//  })

// get searched videos(search page)
// const { data } = await request('/search', {
//     params: {
//        part: 'snippet',

//        maxResults: 20,
//        q: keyword,
//        type: 'video,channel',
//     },
//  })

// get all channel I'm subscribed to
// const { data } = await request('/subscriptions', {
//     params: {
//        part: 'snippet,contentDetails',

//        mine: true,
//     },
//     headers: {
//        Authorization: `Bearer ${getState().auth.accessToken}`,
//     },
//  })

// get videos by of particular channel
// 1. get upload playlist id
// const {
//     data: { items },
//  } = await request('/channels', {
//     params: {
//        part: 'contentDetails',
//        id: id,
//     },
//  })
//  const uploadPlaylistId = items[0].contentDetails.relatedPlaylists.uploads
// 2. get the videos using the id
//  const { data } = await request('/playlistItems', {
//     params: {
//        part: 'snippet,contentDetails',
//        playlistId: uploadPlaylistId,
//        maxResults: 30,
//     },
//  })

//
