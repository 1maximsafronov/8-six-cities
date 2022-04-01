import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels, loadCurrentHotel,satUserData } from './action';
import {LoginData} from 'types/user';

export const fetchHotels = createAsyncThunk('data/fetchHotels',
  async () => {
    const {data} = await api.get('/hotels');
    store.dispatch(loadHotels(data));
  },
);

export const fetchOneHotel = createAsyncThunk('data/fetchOnteHotel',
  async (id:string | undefined) => {
    const {data} = await api.get(`/hotels/${id}`);
    store.dispatch(loadCurrentHotel(data));
  },
);


export const login = createAsyncThunk('user/login',
  async (loginData:LoginData) => {
    const {data} = await api.post('/login', loginData);
    store.dispatch(satUserData(data));
  },
);
