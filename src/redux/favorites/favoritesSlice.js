import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorite(state, action) {
      state.items.push(action.payload);
    },
    deleteFromFavorites(state, action) {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { setFavorite, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
