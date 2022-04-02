import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentHotel, loadHotelComments, loadHotels, loadNearbyHotels, requireAuthorization, satUserData } from './action';
import { AuthorizationStatus, DEFAULT_LOCATION } from '../const';
import { Hotels, Hotel } from 'types/hotel';
import { Comments } from 'types/comment';
import { AuthData } from 'types/user';

type InitialState = {
  hotels: Hotels,
  currentLocation: string;
  currentHotel: Hotel | null;
  nearbyHotels: Hotels,
  isNearbyLoaded: boolean;
  currentHotelrReviews: Comments;
  isReviewsLoaded: boolean;
  isDataLoaded: boolean;
  userData: AuthData | null;
  authorizationStatus: AuthorizationStatus
}

const initialState:InitialState = {
  currentLocation: DEFAULT_LOCATION,
  hotels: [],
  nearbyHotels: [],
  isNearbyLoaded: false,
  currentHotel: null,
  currentHotelrReviews: [],
  isReviewsLoaded: false,
  isDataLoaded: false,
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentLocation = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadCurrentHotel, (state, action) => {
      state.currentHotel = action.payload;
    })
    .addCase(satUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
    })
    .addCase(loadHotelComments, (state, action) => {
      state.currentHotelrReviews = action.payload;
    });
});

export {reducer};
