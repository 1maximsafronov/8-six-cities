import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentHotel, loadHotels } from './action';
import { DEFAULT_LOCATION } from '../const';
import { Hotels, Hotel } from 'types/hotel';
import { Comments } from 'types/comment';

type InitialState = {
  currentLocation: string;
  hotels: Hotels,
  currentHotel: Hotel | null;
  nearPlaces: Hotels,
  currentOfferReviews: Comments;
  isDataLoaded: boolean;
}

const initialState:InitialState = {
  currentLocation: DEFAULT_LOCATION,
  hotels: [],
  nearPlaces: [],
  currentHotel: null,
  currentOfferReviews: [],
  isDataLoaded: false,
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
    });
});

export {reducer};
