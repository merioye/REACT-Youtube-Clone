import { store } from '../../redux/store'
import { User } from '../../types/user.types'
import { setUser } from '../../redux/actionCreators'
import axios from 'axios'

const getUser = async (accessToken: string) => {
  try {
    const res = await axios.get<User>(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`,
    )

    localStorage.setItem('yt-redesign-user', JSON.stringify(res.data))
    store.dispatch(setUser({ accessToken, user: res.data }))
  } catch (e) {
    console.log(e)
  }
}

type tokenDataType = {
  accessToken: string
  expiresAt: Date
}

export const getTokenFromLocalStorage = () => {
  const user: User = JSON.parse(localStorage.getItem('yt-redesign-user') as string)
  const tokenData: string | null = localStorage.getItem('yt-redesign-tokenData')
  if (!tokenData) {
    return { accessToken: null, user: null }
  }

  const parsedData: tokenDataType = JSON.parse(tokenData)
  if (new Date(Date.now()) > new Date(parsedData.expiresAt)) {
    removeTokenFromLocalStorage()
    return { accessToken: null, user: null }
  }

  return { accessToken: parsedData.accessToken, user }
}

export const setTokenInLocalStorage = (data: { accessToken: string; expiresIn: number }) => {
  const { accessToken, expiresIn } = data
  const expiresAt = new Date(Date.now() + expiresIn)
  const tokenData = JSON.stringify({ accessToken, expiresAt })
  localStorage.setItem('yt-redesign-tokenData', tokenData)

  getUser(accessToken)
  store.dispatch(setUser({ accessToken, user: null }))
}

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('yt-redesign-tokenData')
  localStorage.removeItem('yt-redesign-user')
}
