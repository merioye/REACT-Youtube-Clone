import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import './index.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-loading-skeleton/dist/skeleton.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={String(process.env.REACT_APP_GOOGLE_CLIENT_ID)}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
