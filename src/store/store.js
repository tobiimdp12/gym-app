import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import favoritesSlice from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    favorites: favoritesSlice,
  },
});
