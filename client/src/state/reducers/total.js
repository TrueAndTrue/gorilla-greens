import { createSlice } from '@reduxjs/toolkit';

export const totalSlice = createSlice({
  name: 'total',
  initialState: {
    value: 0
  },
  reducers: {
    addTotal: (state, action) => {
      state.value = action.payload
    },
    resetTotal: (state, action) => {
      state.value = 0;
    }
  }
})



export const { addTotal, resetTotal } = totalSlice.actions;
export default totalSlice.reducer;