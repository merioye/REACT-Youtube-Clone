import { combineReducers } from 'redux'
import sideBarReducer from './sideBar.reducer'
import themeReducer from './theme.reducer'

export const rootReducer = combineReducers({
  sidebar: sideBarReducer,
  theme: themeReducer,
})

export type RootState = ReturnType<typeof rootReducer>
