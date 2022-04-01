import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels, loadCurrentHotel,satUserData, requireAuthorization } from './action';
import {LoginData} from 'types/user';
import { AuthorizationStatus } from 'const';
import { dropToken, saveToken } from 'services/token';

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

export const checkAuthAction = createAsyncThunk('user/checkAuth',
  async () => {
    try {
      const {data} =  await api.get('/login');
      saveToken(data.token);
      store.dispatch(satUserData(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      dropToken();
      store.dispatch(satUserData(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }

  },
);

export const loginAction = createAsyncThunk('user/login',
  async (loginData:LoginData) => {
    const {data} = await api.post('/login', loginData);
    saveToken(data.token);
    store.dispatch(satUserData(data));
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk('user/logout',
  async () => {
    await api.delete('/logout');
    dropToken();
    store.dispatch(satUserData(null));
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
