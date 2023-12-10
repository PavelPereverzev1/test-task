import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticeOperations';

const initialState = {
  items: [],
  isLoading: false,
  noticesError: null,
  isRefreshing: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    noticesReset(state) {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.isLoading = true;
        state.noticesError = null;
        state.isRefreshing = true;
      })
      .addCase(fetchNotices.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.noticesError = payload;
      })
      .addCase(fetchNotices.fulfilled, (state, { payload }) => {
        state.items.push(...payload);
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

export const { setPage, noticesReset } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
