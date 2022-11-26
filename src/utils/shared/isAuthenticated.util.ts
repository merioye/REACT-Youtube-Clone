import { getTokenFromLocalStorage } from '../others/token.util'

export const isAuthenticated = () => {
  const { accessToken } = getTokenFromLocalStorage()
  return accessToken ? true : false
}
