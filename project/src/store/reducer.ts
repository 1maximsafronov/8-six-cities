import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadHotels } from './action';
import { DEFAULT_LOCATION } from '../const';
import { reviews } from '../mocks/reviews';

const initialState = {
  currentLocation: DEFAULT_LOCATION,
  offers: [],
  nearPlaces: [],
  currentOfferReviews: reviews,
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
