import {combineReducers, configureStore} from '@reduxjs/toolkit'
import configReducer from './slices/configSlice'

const RootReducer = combineReducers({
  config: configReducer,
})

export function setupStore() {
  return configureStore({
    reducer: RootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]