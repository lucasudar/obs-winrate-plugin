import {createSlice} from '@reduxjs/toolkit'

export interface ConfigState {
  win: number,
  lose: number,
}

const initialState: ConfigState = {
  win: 0,
  lose: 0,
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setWin: (state: ConfigState, action) => {
      state.win = action.payload
    },
    setLose: (state: ConfigState, action) => {
      state.lose = action.payload
    },
    reset: (state) => {
      state.win = initialState.win
      state.lose = initialState.lose
    }
  },
})

// Action creators are generated for each case reducer function
export const {setWin, setLose} = configSlice.actions

export default configSlice.reducer