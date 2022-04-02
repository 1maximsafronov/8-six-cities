import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels, loadCurrentHotel,satUserData, requireAuthorization, loadNearbyHotels, loadHotelComments, redirectToRoute, loadFavorites } from './action';
import {LoginData} from 'types/user';
import { AuthorizationStatus, APIRoute, AppRoute } from 'const';
import { dropToken, saveToken } from 'services/token';
import { Hotel, Hotels } from 'types/hotel';
import { CommentNew } from 'types/comment';

export const fetchHotels = createAsyncThunk('data/fetchHotels',
  async () => {
    const {data} = await api.get<Hotels>(APIRoute.Hotels);
    store.dispatch(loadHotels(data));
  },
);

export const fetchOneHotel = createAsyncThunk('data/fetchOnteHotel',
  async (id:string | undefined) => {
    const {data} = await api.get<Hotel>(`${APIRoute.Hotels}/${id}`);
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

export const sendNewComment = createAsyncThunk('user/sendNewComment',
  async ({hotelId, newComment}:{hotelId: number | string; newComment: CommentNew;}) => {
    const {data} = await api.post(`${APIRoute.Comments}/${hotelId}`,newComment);
    store.dispatch(loadHotelComments(data));
  },
);

export const fetchFavoritesHotels = createAsyncThunk('user/etchFavoritesHotels',
  async () => {
    const {data} = await api.get<Hotels>(APIRoute.Favorite);
    store.dispatch(loadFavorites(data));
  },
);

export const addToFavorite = createAsyncThunk('user/addToFavorite',
  async ({hotelId, status}:{hotelId: number | string; status: number}) => {
    const {data} = await api.post(`${APIRoute.Favorite}/${hotelId}/${status}`);

    store.dispatch(loadCurrentHotel(data));
    store.dispatch(fetchHotels());
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
    store.dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk('user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(satUserData(null));
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    store.dispatch(redirectToRoute(AppRoute.Main));
  },
);
