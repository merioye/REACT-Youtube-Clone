import { getTokenFromLocalStorage } from '../../utils/others/token.util'
import { SET_USER, REMOVE_USER } from '../actionTypes'
import { Auth } from '../../types/user.types'

const initialState: Auth = getTokenFromLocalStorage()

type actionType = {
  type: string
  payload?: Auth
}
const authReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_USER:
      return action.payload
    case REMOVE_USER:
      return { accessToken: null, user: null }
    default:
      return state
  }
}

export default authReducer
