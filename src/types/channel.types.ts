// export interface Channel {
//     kind: string
//     etag: string
//     id: string
//     snippet: {
//       title: string,
//       description: string,
//       customUrl: string,
//       publishedAt: datetime,
//       thumbnails: {
//         (key): {
//           url: string,
//           width: unsigned integer,
//           height: unsigned integer
//         }
//       },
//       defaultLanguage: string,
//       localized: {
//         title: string,
//         description: string
//       },
//       country: string
//     },
//     contentDetails: {
//       relatedPlaylists: {
//         likes: string,
//         favorites: string,
//         uploads: string
//       }
//     },
//     statistics: {
//       viewCount: unsigned long,
//       subscriberCount: unsigned long,  // this value is rounded to three significant figures
//       hiddenSubscriberCount: boolean,
//       videoCount: unsigned long
//     },
//     topicDetails: {
//       topicIds: [
//         string
//       ],
//       topicCategories: [
//         string
//       ]
//     },
//     status: {
//       privacyStatus: string,
//       isLinked: boolean,
//       longUploadsStatus: string,
//       madeForKids: boolean,
//       selfDeclaredMadeForKids: boolean
//     },
//     brandingSettings: {
//       channel: {
//         title: string,
//         description: string,
//         keywords: string,
//         trackingAnalyticsAccountId: string,
//         moderateComments: boolean,
//         unsubscribedTrailer: string,
//         defaultLanguage: string,
//         country: string
//       },
//       watch: {
//         textColor: string,
//         backgroundColor: string,
//         featuredPlaylistId: string
//       }
//     },
//     auditDetails: {
//       overallGoodStanding: boolean,
//       communityGuidelinesGoodStanding: boolean,
//       copyrightStrikesGoodStanding: boolean,
//       contentIdClaimsGoodStanding: boolean
//     },
//     contentOwnerDetails: {
//       contentOwner: string,
//       timeLinked: datetime
//     },
//     localizations: {
//       (key): {
//         title: string,
//         description: string
//       }
//     }
// }

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
