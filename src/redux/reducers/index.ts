import { combineReducers } from 'redux'
import sideBarReducer from './sideBar.reducer'
import themeReducer from './theme.reducer'
import authReducer from './auth.reducer'

export const rootReducer = combineReducers({
  sidebar: sideBarReducer,
  theme: themeReducer,
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
