import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("object",action.payload)
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index >= 0) {
                // Item already exists in cart, update quantity
                state.items[index].quantity += 1;
              } else {
                // New item, add to cart with quantity 1
                state.items.push({ ...action.payload, quantity: 1 });
              }
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log(`Can't find item with id ${action.payload.id}`);
            }
            state.items = newBasket;
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsWithId = (state, id) =>
    state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => (total += item.price), 0);

export default cartSlice.reducer