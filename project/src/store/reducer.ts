import { offers } from '../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { DEFAULT_LOCATION } from '../const';
import { reviews } from '../mocks/reviews';

const initialState = {
  currentLocation: DEFAULT_LOCATION,
  offers: offers,
  nearPlaces: offers,
  currentOfferReviews: reviews,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentLocation = action.payload;
    });
});

export {reducer};
