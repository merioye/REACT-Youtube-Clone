import { useLayoutEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Home from './pages/Home'
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
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
