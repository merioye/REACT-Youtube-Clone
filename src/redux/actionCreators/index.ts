import { SET_THEME, TOGGLE_SIDEBAR } from '../actionTypes'

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  }
}

export function setTheme(theme: string) {
  return {
    type: SET_THEME,
    payload: theme,
  }
}
