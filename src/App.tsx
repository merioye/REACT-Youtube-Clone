import { useLayoutEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import { setThemeValueToHtmlRoot } from './utils/shared/theme'

function App() {
  useLayoutEffect(() => {
    setThemeValueToHtmlRoot()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
