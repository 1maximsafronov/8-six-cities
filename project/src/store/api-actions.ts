import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels } from './action';

export const fetchHotels = createAsyncThunk('data/fetchHotels',
  async () => {
    const {data} = await api.get('/hotels');
    store.dispatch(loadHotels(data));
  },
);
