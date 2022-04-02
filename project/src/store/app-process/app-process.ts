import { Hotels, Hotel } from 'types/hotel';
import { Comments } from 'types/comment';
import { createReducer } from '@reduxjs/toolkit';
import {  loadCurrentHotel, loadHotelComments,  loadNearbyHotels } from '../action';

export type AppProcessState = {
  currentHotel: Hotel | null;
  nearbyHotels: Hotels,
  isNearbyLoaded: boolean;
  currentHotelrReviews: Comments;
  isReviewsLoaded: boolean;
};

const initialState:AppProcessState = {
  nearbyHotels: [],
  isNearbyLoaded: false,
  currentHotel: null,
  currentHotelrReviews: [],
  isReviewsLoaded: false,
};

const appProcess = createReducer(initialState,(builder) => {
  builder
    .addCase(loadCurrentHotel, (state, action) => {
      state.currentHotel = action.payload;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
    })
    .addCase(loadHotelComments, (state, action) => {
      state.currentHotelrReviews = action.payload;
    });
});

export {appProcess};
