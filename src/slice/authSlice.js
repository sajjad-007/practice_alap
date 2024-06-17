import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: localStorage.getItem('userDataInfo') ? JSON.parse(localStorage.getItem('userDataInfo')) : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 
    userUpdate: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userUpdate } = authSlice.actions

export default authSlice.reducer