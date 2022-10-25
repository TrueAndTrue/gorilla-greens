import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    value: []
  },
  reducers: {
    addProduct: (state, action) => {
      let isNew = true;
      state.value.forEach((product) => {
        console.log(product)
        if (product[0][0] === action.payload[0]) {
          product[0][1] += action.payload[1];
          product[1]++
          isNew = false;
        }
      })
      if (isNew) {
        state.value.push([action.payload, 1])
      }
    }
  }
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;