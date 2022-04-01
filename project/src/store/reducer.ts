import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentHotel, loadHotels, satUserData } from './action';
import { DEFAULT_LOCATION } from '../const';
import { Hotels, Hotel } from 'types/hotel';
import { Comments } from 'types/comment';
import { AuthData } from 'types/user';

type InitialState = {
  currentLocation: string;
  hotels: Hotels,
  currentHotel: Hotel | null;
  nearPlaces: Hotels,
  currentOfferReviews: Comments;
  isDataLoaded: boolean;
  userData: AuthData | null;
}

const initialState:InitialState = {
  currentLocation: DEFAULT_LOCATION,
  hotels: [],
  nearPlaces: [],
  currentHotel: null,
  currentOfferReviews: [],
  isDataLoaded: false,
  userData: null,
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
    });
});

export {reducer};
