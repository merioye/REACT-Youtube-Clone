import { SET_THEME } from '../actionTypes'

const initialState = {
  mode: localStorage.getItem('yt-redesign-theme') || 'light',
}
type actionType = {
  type: string
  payload: string
}
const themeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_THEME:
      return { mode: action.payload }
    default:
      return state
  }
}
export default themeReducer
