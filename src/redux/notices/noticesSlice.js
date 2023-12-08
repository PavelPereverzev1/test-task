import { createSlice } from '@reduxjs/toolkit';
import { fetchNotices } from './noticeOperations';

const initialState = {
  items: [],
  total: 0,
  query: {
    page: 1,
    limit: 12,
  },
  isLoading: false,
  noticesError: null,
  isRefreshing: false,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setPage(state, { payload }) {
      state.query.page = payload;
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
        state.items = payload;
        // state.total = payload.total;
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

export const { setPage } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
