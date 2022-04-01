import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadHotels } from './action';
import { DEFAULT_LOCATION } from '../const';
import { Hotels } from 'types/hotel';
import { Comments } from 'types/comment';

type InitialState = {
  currentLocation: string;
  offers: Hotels,
  nearPlaces: Hotels,
  currentOfferReviews: Comments
}

const initialState:InitialState = {
  currentLocation: DEFAULT_LOCATION,
  offers: [],
  nearPlaces: [],
  currentOfferReviews: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentLocation = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
