import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id
            );
            if (index >= 0) {
                state.items[index].quantity += 1;
              } else {
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
        emptyCart: (state, action) => {
          state.items = []
        }
    },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items;
export const selectUniqueCartItems = (state) => {
    const itemsMap = new Map();
  
    state.cart.items.forEach(item => {
      if (itemsMap.has(item.id)) {
        itemsMap.get(item.id).quantity += 1;
      } else {
        itemsMap.set(item.id, { ...item, quantity: 1 });
      }
    });
  
    const uniqueItems = Array.from(itemsMap.values());
    return uniqueItems;
  };
  

export const selectCartItemsWithId = (state, id) =>
    state.cart.items.filter((item) => item.id === id);

export const selectCartTotal = (state) => {
    return state.cart.items.reduce((total, item) => {
        const price = parseFloat(item?.price?.replace('$', ''));
        return total + price;
    }, 0);
};

export default cartSlice.reducer