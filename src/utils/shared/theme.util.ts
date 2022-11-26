import { store } from '../../redux/store'
import { setTheme } from '../../redux/actionCreators'

export function setThemeValueToHtmlRoot() {
  const root = window.document.documentElement
  let themeValue = localStorage.getItem('yt-redesign-theme')
  if (!themeValue) {
    localStorage.setItem('yt-redesign-theme', 'light')
    themeValue = 'light'
  }
  root.setAttribute('class', themeValue)
  store.dispatch(setTheme(themeValue))
}

export function toggleTheme() {
  const themeValue = localStorage.getItem('yt-redesign-theme')
  if (!themeValue || themeValue === 'light') {
    localStorage.setItem('yt-redesign-theme', 'dark')
  } else {
    localStorage.setItem('yt-redesign-theme', 'light')
  }
  setThemeValueToHtmlRoot()
}
