export const getNewDummyComment = (
  id: string,
  authorDisplayName: string,
  authorProfileImageUrl: string,
  textDisplay: string,
  publishedAt: Date,
) => {
  const dummyNewComment = {
    kind: '',
    etag: '',
    id,
    snippet: {
      canReply: true,
      isPublic: true,
      topLevelComment: {
        kind: '',
        etag: '',
        id: '',
        snippet: {
          authorDisplayName,
          authorProfileImageUrl,
          authorChannelUrl: '',
          authorChannelId: {
            value: '',
          },
          channelId: '',
          videoId: '',
          textDisplay,
          textOriginal: '',
          parentId: '',
          canRate: true,
          viewerRating: '',
          likeCount: 0,
          moderationStatus: '',
          publishedAt,
          updatedAt: publishedAt,
        },
      },
      totalReplyCount: 0,
      videoId: '',
    },
  }
  return dummyNewComment
}
