import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'route',
    initialState: {
        item: ""
    },
    reducers: {
        memoizeRoute: (state, action) => {
            state.item = action.payload
        },
    },
})

export const { memoizeRoute } = routeSlice.actions

export const selectRouteItem = (state) => state.cuisine.item;

export default routeSlice.reducer