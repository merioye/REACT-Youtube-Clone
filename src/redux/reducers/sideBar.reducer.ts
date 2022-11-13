import { TOGGLE_SIDEBAR } from '../actionTypes'

const initialState = {
  showSidebar: true,
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
