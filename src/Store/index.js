import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import shopReducer from "../Features/Shop/shopSlice";
import { shopApi } from "./shopServices";
import { setupListeners } from "@reduxjs/toolkit/query";

// Configuración del store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

// Configuración de listeners
setupListeners(store.dispatch);

export default store;
