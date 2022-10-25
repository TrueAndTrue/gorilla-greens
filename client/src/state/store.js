import { configureStore } from '@reduxjs/toolkit'
import productSlice from './reducers/product';
import totalSlice from './reducers/total';

export default configureStore({
  reducer: {
    product: productSlice,
    total: totalSlice
  }
})