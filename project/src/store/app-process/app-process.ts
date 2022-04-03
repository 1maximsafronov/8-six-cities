import { Hotels, Hotel } from 'types/hotel';
import { Comments } from 'types/comment';
import { createReducer } from '@reduxjs/toolkit';
import {  loadCurrentHotel, loadHotelComments,  loadNearbyHotels, resetCurrentHotel, setCommentSending } from '../action';

export type AppProcessState = {
  currentHotel: Hotel | null;
  nearbyHotels: Hotels,
  isNearbyLoaded: boolean;
  currentHotelrReviews: Comments;
  isReviewsLoaded: boolean;
  isCommentSanding: boolean;
};

const initialState:AppProcessState = {
  nearbyHotels: [],
  isNearbyLoaded: false,
  currentHotel: null,
  currentHotelrReviews: [],
  isReviewsLoaded: false,
  isCommentSanding: false,
};

const appProcess = createReducer(initialState,(builder) => {
  builder
    .addCase(loadCurrentHotel, (state, action) => {
      state.currentHotel = action.payload;
    })
    .addCase(loadNearbyHotels, (state, action) => {
      state.nearbyHotels = action.payload;
      state.isNearbyLoaded = true;
    })
    .addCase(loadHotelComments, (state, action) => {
      state.currentHotelrReviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(resetCurrentHotel, (state) => {
      state.nearbyHotels= [];
      state.isNearbyLoaded= false;
      state.currentHotel= null;
      state.currentHotelrReviews= [];
      state.isReviewsLoaded= false;
    })
    .addCase(setCommentSending, (state, action) => {
      state.isCommentSanding = action.payload;
    });
});

export {appProcess};
