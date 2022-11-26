import { REMOVE_USER, SET_THEME, SET_USER, TOGGLE_SIDEBAR } from '../actionTypes'
import { Auth } from '../../types/user.types'

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

export function setUser(data: Auth) {
  return {
    type: SET_USER,
    payload: data,
  }
}

export function removeUser() {
  return { type: REMOVE_USER }
}
