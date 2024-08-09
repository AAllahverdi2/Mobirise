import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./ProductsApi/productsApi";
import wishListSlice from "./WishListSlice/wishListSlice";
import basketSlice from "./BasketSlice/basketSlice";
export const store = configureStore({
  reducer: {
    wishList:wishListSlice,
    basket:basketSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});


setupListeners(store.dispatch);
