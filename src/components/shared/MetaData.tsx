import { Helmet } from 'react-helmet'

type IProps = {
  title: string
  description?: string
}
const MetaData = ({
  title,
  description = 'Youtube redesign created using youtube data api',
}: IProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  )
}

export default MetaData
