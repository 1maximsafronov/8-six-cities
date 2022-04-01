import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels, loadCurrentHotel,satUserData, requireAuthorization, loadNearbyHotels, loadHotelComments } from './action';
import {LoginData} from 'types/user';
import { AuthorizationStatus, APIRoute } from 'const';
import { dropToken, saveToken } from 'services/token';

export const fetchHotels = createAsyncThunk('data/fetchHotels',
  async () => {
    const {data} = await api.get(APIRoute.Hotels);
    store.dispatch(loadHotels(data));
  },
);

export const fetchOneHotel = createAsyncThunk('data/fetchOnteHotel',
  async (id:string | undefined) => {
    const {data} = await api.get(`${APIRoute.Hotels}/${id}`);
    store.dispatch(loadCurrentHotel(data));
  },
);

export const fetchNearbyHotels = createAsyncThunk('data/fetchNearbyHotels',
  async (id: string | number | undefined) => {
    const {data} = await api.get(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
    store.dispatch(loadNearbyHotels(data));
  },
);

export const fetchHotelComments = createAsyncThunk('data/fetchHotelComments',
  async (id:string | number | undefined) => {
    const {data} =  await api.get(`${APIRoute.Comments}/${id}`);
    store.dispatch(loadHotelComments(data));
  },
);

export const checkAuthAction = createAsyncThunk('user/checkAuth',
  async () => {
    try {
      const {data} =  await api.get(APIRoute.Login);
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
    const {data} = await api.post(APIRoute.Login, loginData);
    saveToken(data.token);
    store.dispatch(satUserData(data));
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk('user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(satUserData(null));
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
