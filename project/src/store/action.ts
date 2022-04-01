import { createAction } from '@reduxjs/toolkit';
import { Hotels, Hotel } from 'types/hotel';
export const changeCity = createAction('app/changeCity', (city: string) => ({
  payload: city,
}));

export const loadHotels = createAction<Hotels>('data/loadHotels');
export const loadCurrentHotel = createAction<Hotel>('data/loadCurrentHotel');
