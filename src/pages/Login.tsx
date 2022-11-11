import { MouseEvent } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useGoogleLogin } from '@react-oauth/google'
import { addRippleEffect } from '../utils/shared/addRippleEffect'

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (errorResponse) => console.log(errorResponse),
  })
  const handleLogin = (e: MouseEvent<HTMLElement>) => {
    addRippleEffect(e)
    login()
  }
  return (
    <div className='bg min-h-screen w-full flex justify-center items-center'>
      <div className='border bg p-16 rounded-md flex flex-col items-center gap-4'>
        <LazyLoadImage src='/images/youtube-logo.png' alt='youtube' height={120} width={120} />
        <h1 className='heading-lg'>Youtube Redesign</h1>
        <button
          onClick={(e) => handleLogin(e)}
          className='button bg-gray-100 text-primary hover:bg-gray-200 flex gap-2 items-center'
        >
          <img src='/images/google-logo.png' alt='google' className='h-5 w-5' />
          Sign in with Google 🚀
        </button>
      </div>
    </div>
  )
}

export default Login
