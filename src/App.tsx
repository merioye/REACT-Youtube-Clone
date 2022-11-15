import { useLayoutEffect } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Channel from './pages/Channel'
import Home from './pages/Home'
import LikedVideos from './pages/Liked-Videos'
import Search from './pages/Search'
import Subscriptions from './pages/Subscriptions'
import Watch from './pages/Watch'
import { setThemeValueToHtmlRoot } from './utils/shared/theme'

const App = () => {
  useLayoutEffect(() => {
    setThemeValueToHtmlRoot()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/search',
          element: <Search />,
        },
        {
          path: '/channel/:channelId',
          element: <Channel />,
        },
        {
          path: '/watch/:videoId',
          element: <Watch />,
        },
      ],
    },
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/liked-videos',
          element: <LikedVideos />,
        },
        {
          path: '/subscriptions',
          element: <Subscriptions />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App

const ProtectedRoute = () => {
  const user = { name: 'faheem' }

  if (!user) return <Navigate to='/' />

  return <Layout />
}
