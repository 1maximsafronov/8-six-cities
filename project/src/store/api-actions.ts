import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from 'store';
import { loadHotels, loadCurrentHotel,satUserData, requireAuthorization, loadNearbyHotels, loadHotelComments, redirectToRoute, loadFavorites } from './action';
import {LoginData} from 'types/user';
import { AuthorizationStatus, APIRoute, AppRoute } from 'const';
import { dropToken, saveToken } from 'services/token';
import { Hotel, Hotels } from 'types/hotel';
import { CommentNew } from 'types/comment';
import { errorHandle } from 'services/error-handle';

export const fetchHotels = createAsyncThunk('data/fetchHotels',
  async () => {
    try {
      const {data} = await api.get<Hotels>(APIRoute.Hotels);
      store.dispatch(loadHotels(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(loadHotels([]));
    }
  },
);

export const fetchOneHotel = createAsyncThunk('data/fetchOnteHotel',
  async (id:string | number | undefined) => {
    try {
      const {data} = await api.get<Hotel>(`${APIRoute.Hotels}/${id}`);
      store.dispatch(loadCurrentHotel(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotels = createAsyncThunk('data/fetchNearbyHotels',
  async (id: string | number | undefined) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
      store.dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchHotelComments = createAsyncThunk('data/fetchHotelComments',
  async (id:string | number | undefined) => {
    try {
      const {data} =  await api.get(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadHotelComments(data));
    } catch (error) {
      errorHandle(error);
    }

  },
);

export const sendNewComment = createAsyncThunk('user/sendNewComment',
  async ({hotelId, newComment}:{hotelId: number | string; newComment: CommentNew;}) => {
    try {
      const {data} = await api.post(`${APIRoute.Comments}/${hotelId}`,newComment);
      store.dispatch(loadHotelComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoritesHotels = createAsyncThunk('user/etchFavoritesHotels',
  async () => {
    try {
      const {data} = await api.get<Hotels>(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addToFavorite = createAsyncThunk('user/addToFavorite',
  async ({hotelId, status}:{hotelId: number | string; status: number}) => {
    try {
      await api.post(`${APIRoute.Favorite}/${hotelId}/${status}`);
    } catch (error) {
      errorHandle(error);
    }
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
      errorHandle(error);
      dropToken();
      store.dispatch(satUserData(null));
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }

  },
);

export const loginAction = createAsyncThunk('user/login',
  async (loginData:LoginData) => {
    try {
      const {data} = await api.post(APIRoute.Login, loginData);
      saveToken(data.token);
      store.dispatch(satUserData(data));
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
