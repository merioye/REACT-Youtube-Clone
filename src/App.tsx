import { useLayoutEffect } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import { setThemeValueToHtmlRoot } from './utils/shared/theme'

const App = () => {
  useLayoutEffect(() => {
    setThemeValueToHtmlRoot()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App

function ProtectedRoute() {
  const user = { name: 'faheem' }

  if (!user) {
    return <Navigate to='/login' />
  }
  return <Layout />
}
