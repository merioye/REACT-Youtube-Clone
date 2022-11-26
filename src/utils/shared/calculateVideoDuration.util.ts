import moment from 'moment'

export const calculateVideoDuration = (duration: string) => {
  const seconds = moment.duration(duration).asSeconds()
  const videoDuration = moment.utc(seconds * 1000).format('mm:ss')
  return videoDuration
}
