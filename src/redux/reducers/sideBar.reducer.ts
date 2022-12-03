import { TOGGLE_SIDEBAR } from '../actionTypes'

const initialState = {
  showSidebar: window.innerWidth <= 600 ? false : true,
}
type actionType = {
  type: string
}
const sideBarReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { showSidebar: !state.showSidebar }
    default:
      return state
  }
}
export default sideBarReducer
