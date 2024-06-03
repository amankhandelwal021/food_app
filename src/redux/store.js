// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from '../redux/slice/cartSlice'
// import cuisineReducer from '../redux/slice/cuisineSlice'
// import routeReducer from '../redux/slice/routeSlice'

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//     cuisine: cuisineReducer,
//     route: routeReducer
//   },
// })

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cartReducer from '../redux/slice/cartSlice';
import cuisineReducer from '../redux/slice/cuisineSlice';
import routeReducer from '../redux/slice/routeSlice';
import myOrderReducer from '../redux/slice/myOrderSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  cuisine: cuisineReducer,
  route: routeReducer,
  order: myOrderReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
