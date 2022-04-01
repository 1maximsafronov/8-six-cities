import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadHotels } from './action';
import { DEFAULT_LOCATION } from '../const';
import { Hotels } from 'types/hotel';
import { Comments } from 'types/comment';

type InitialState = {
  currentLocation: string;
  hotels: Hotels,
  nearPlaces: Hotels,
  currentOfferReviews: Comments
  isDataLoaded: boolean;
}

const initialState:InitialState = {
  currentLocation: DEFAULT_LOCATION,
  hotels: [],
  nearPlaces: [],
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
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
