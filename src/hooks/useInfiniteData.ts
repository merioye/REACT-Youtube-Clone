import { useInfiniteQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import {
  HomePageVideosResponse,
  SearchPageResponse,
  SubscriptionPageResponse,
} from '../types/apiResponse.types'

type QueryFnType = ({
  // eslint-disable-next-line
  pageParam,
  // eslint-disable-next-line
  keyword,
}: {
  pageParam?: null | undefined
  keyword?: string | undefined
}) => Promise<
  AxiosResponse<HomePageVideosResponse | SubscriptionPageResponse | SearchPageResponse, any>
>

export const useInfiniteData = (
  queryKey: string[],
  queryFn: QueryFnType,
  keyword?: string,
  staleTime?: string,
) => {
  const res = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam = null }) => queryFn({ pageParam, keyword }),
    getNextPageParam: (lastPage) => {
      return lastPage.data.nextPageToken
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    staleTime: staleTime ? Number(staleTime) : 60000,
  })
  return res
}
