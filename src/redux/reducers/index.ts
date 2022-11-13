import { combineReducers } from 'redux'
import sideBarReducer from './sideBar.reducer'

export const rootReducer = combineReducers({
  sidebar: sideBarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
