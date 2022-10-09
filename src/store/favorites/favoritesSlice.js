import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteExArray: localStorage.getItem("favorites") || [],
  isLoading: false,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addNewFavorite: (state, { payload }) => {
      state.favoriteExArray.push(payload);

      state.isLoading = false;
    },

    setFavorites: (state, { payload }) => {
      state.favoriteExArray = payload;
    },
    startSaving: (state) => {
      state.isLoading = true;
      state.messageSaved = "";
    },

    deleteFavoriteEx: (state, action) => {
      state.favoriteExArray = state.favoriteExArray.filter(
        (favoriteEx) => favoriteEx.id !== action.payload.id
      );
    },
  },
});

export const { addNewFavorite, setFavorites, startSaving, deleteFavoriteById } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
