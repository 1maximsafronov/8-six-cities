import { createReducer } from '@reduxjs/toolkit';
import { changeCity,  loadHotels } from '../action';
import { DEFAULT_LOCATION } from '../../const';
import { Hotels } from 'types/hotel';

export type AppDataState = {
  hotels: Hotels,
  currentLocation: string;
  isDataLoaded: boolean;
}
const initialState:AppDataState = {
  hotels: [],
  currentLocation: DEFAULT_LOCATION,
  isDataLoaded: false,
};

const appData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentLocation = action.payload;
    })
    .addCase(loadHotels, (state, action) => {
      state.hotels = action.payload;
      state.isDataLoaded = true;
    });
});

export {appData};
