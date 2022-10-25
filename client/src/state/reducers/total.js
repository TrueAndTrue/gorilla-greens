import { createSlice } from '@reduxjs/toolkit';

export const totalSlice = createSlice({
  name: 'total',
  initialState: {
    value: 0
  },
  reducers: {
    addTotal: (state, action) => {
      state.value = action.payload
    }
  }
})



export const { addTotal } = totalSlice.actions;
export default totalSlice.reducer;