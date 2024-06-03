import { createSlice } from '@reduxjs/toolkit'

export const cuisineSlice = createSlice({
    name: 'cuisine',
    initialState: {
        item: ""
    },
    reducers: {
        memoizeCuisine: (state, action) => {
            state.item = action.payload
        },
    },
})

export const { memoizeCuisine } = cuisineSlice.actions

export const selectCuisineItem = (state) => state.cuisine.item;

export default cuisineSlice.reducer