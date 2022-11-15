import { LazyLoadImage } from 'react-lazy-load-image-component'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useAppSelector } from '../../hooks/redux-hooks'

const CustomSkeletonTheme = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme)

  return (
    <SkeletonTheme
      baseColor={mode === 'dark' ? '#525252' : '#E7E5E4'}
      highlightColor={mode === 'dark' ? '#737373' : '#0000000d'}
    >
      {children}
    </SkeletonTheme>
  )
}

export const VideoCardSkeleton = () => {
  return (
    <div>
      <CustomSkeletonTheme>
        <div className='leading-none relative rounded-xl overflow-hidden mb-2'>
          <div className='absolute top-0 left-0 w-full h-full'>
            <Skeleton className='h-full' />
          </div>
          <LazyLoadImage
            src='/images/placeholder.jpg'
            placeholderSrc='/images/placeholder.jpg'
            effect='blur'
            width={'100%'}
            style={{ visibility: 'hidden', position: 'relative', zIndex: 0 }}
          />
        </div>
        <div className='flex gap-3 pt-3'>
          <div className='leading-none w-9'>
            <Skeleton className='h-9' circle />
          </div>
          <div className='w-[calc(100%-48px)]'>
            <h4 className='leading-none w-full mb-2'>
              <Skeleton className='h-5' />
            </h4>
            <p className='leading-none w-1/2'>
              <Skeleton className='h-5' />
            </p>
          </div>
        </div>
      </CustomSkeletonTheme>
    </div>
  )
}

export const CategorySkeleton = () => {
  const width = Math.floor(Math.random() * (230 - 100 + 1)) + 100
  return (
    <CustomSkeletonTheme>
      <div style={{ width: width + 'px' }} className='leading-none h-8 rounded-lg overflow-hidden'>
        <Skeleton className='h-full' />
      </div>
    </CustomSkeletonTheme>
  )
}

export const ChannelCardSkeleton = () => {
  return (
    <CustomSkeletonTheme>
      <div className='flex items-center w-full'>
        <div className='flex-1 basis-[1e-9px] mr-4 max-w-[360px] min-w-60'>
          <div className='flex justify-center items-center flex-none w-60 relative rounded-full overflow-hidden mx-auto'>
            <div className='leading-none h-[136px] w-[136px] rounded-full overflow-hidden'>
              <Skeleton className='h-full' circle />
            </div>
          </div>
        </div>
        <div className='max-w-[calc(100%-376px)] min-w-[calc(100%-256px)]'>
          <div>
            <div className='leading-none w-1/4 mb-4'>
              <Skeleton className='h-6' />
            </div>
            <div className='leading-none w-1/2 mb-1'>
              <Skeleton className='h-3' />
            </div>
            <div className='leading-none w-3/4 mb-2'>
              <Skeleton className='h-3' />
            </div>
          </div>
        </div>
      </div>
    </CustomSkeletonTheme>
  )
}

export const SearchedVideoCardSkeleton = () => {
  return (
    <CustomSkeletonTheme>
      <div className='flex w-full'>
        <div className='flex-1 basis-[1e-9px] mr-4 max-w-[360px] min-w-60'>
          <div className='leading-none w-full h-auto rounded-xl overflow-hidden relative'>
            <div className='absolute top-0 left-0 w-full h-full'>
              <Skeleton className='h-full' />
            </div>
            <LazyLoadImage
              src='/images/placeholder.jpg'
              placeholderSrc='/images/placeholder.jpg'
              effect='blur'
              width={'100%'}
              style={{ visibility: 'hidden', position: 'relative', zIndex: 0 }}
            />
          </div>
        </div>
        <div className='leading-none w-[calc(100%-376px)] pr-20'>
          <Skeleton className='h-7 mb-3' />
          <div className='leading-none w-[130px] h-3 mb-4'>
            <Skeleton className='h-full' />
          </div>
          <div className='leading-none w-[130px] h-5 mb-4'>
            <Skeleton className='h-full' />
          </div>
          <Skeleton className='h-3' />
        </div>
      </div>
    </CustomSkeletonTheme>
  )
}

export const ChannelDetailsSkeleton = () => {
  return (
    <CustomSkeletonTheme>
      <div className='flex items-center pt-4 pb-1 px-[107px] max-w-[1284px] mx-auto'>
        <div className='leading-none w-20 h-20 rounded-full overflow-hidden mr-6'>
          <Skeleton className='h-full' circle />
        </div>
        <div className='flex flex-col'>
          <div className='leading-none h-7 w-[150px] mb-3'>
            <Skeleton className='h-full' />
          </div>
          <div className='leading-none h-4 w-[80px]'>
            <Skeleton className='h-full' />
          </div>
        </div>
      </div>
    </CustomSkeletonTheme>
  )
}
