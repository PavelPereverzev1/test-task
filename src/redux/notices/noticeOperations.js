import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorMsg } from '../../helpers/notifications';

export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',
  async (query, thunkAPI) => {
    const queryInstance = axios.create({
      // baseURL: 'https://65722d8ad61ba6fcc0147f61.mockapi.io',
      baseURL: 'http://localhost:3001',
      params: {
        _page: query.page,
        _limit: query.limit,
      },
    });

    try {
      const response = await queryInstance.get('/adverts');
      return response.data;
    } catch (e) {
      errorMsg('Something went wrong try again');
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
