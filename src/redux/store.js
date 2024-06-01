import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slice/cartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer
  },
})