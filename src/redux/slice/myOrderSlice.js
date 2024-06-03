import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        items: [],
    },
    reducers: {
        addToOrder: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    },
})

export const { addToOrder } = orderSlice.actions
export const selectOrderItems = (state) => state.order.items;


export default orderSlice.reducer