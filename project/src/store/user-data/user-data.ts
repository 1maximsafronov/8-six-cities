import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from 'const';
import { Hotels } from 'types/hotel';
import { AuthData } from 'types/user';
import { loadFavorites, requireAuthorization, reseteFavorites, satUserData } from '../action';

export type UserDataState = {
  userData: AuthData | null;
  authorizationStatus: AuthorizationStatus;
  favoritesHotels: Hotels;
  isFavoritesLoaded: boolean;
};

export const initialState:UserDataState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  favoritesHotels: [],
  isFavoritesLoaded: false,
};


const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(satUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoritesHotels = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(reseteFavorites, (state) => {
      state.favoritesHotels = [];
      state.isFavoritesLoaded = false;
    });
});


export {userData};
